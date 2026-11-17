"""Importa as provas da UEMG (PDFs em pdfs/) para JSON + imagens.

Uso (precisa de PyMuPDF):  python scripts/import_questions.py
Saída: src/data/questions/<ano>.json e public/questions/<ano>/*.png
"""
import collections
import json
import os
import re
import sys

import fitz  # PyMuPDF

sys.path.insert(0, os.path.dirname(__file__))
import uemg_parser as p

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXAMS = {
    2022: ("2022/caderno-da-prova-de-conhecimentos-gerais.pdf", "2022/gabarito-pos-recursos.pdf"),
    2023: ("2023/prova-de-conhecimentos-gerais.pdf", "2023/gabarito-definitivo-da-prova-de-conhecimentos-gerais.pdf"),
    2024: ("2024/prova-de-conhecimentos-gerais.pdf", "2024/gabarito-definitivo.pdf"),
}
BLOCK_FLAGS = fitz.TEXTFLAGS_BLOCKS | fitz.TEXT_PRESERVE_IMAGES
FIGURE_WORDS = re.compile(r"\b(figura|imagem|gr[aá]fico|tabela|tirinha|charge|mapa|quadro|esquema|ilustra)", re.I)


TWO_COLUMNS = {2022}


def _normalize_2022(text):
    """Número da questão em linha própria -> "N. enunciado"; "(A)" -> "A)"."""
    lines = text.rstrip().split("\n")
    if lines and re.fullmatch(r"\s*\d{1,2}\s*", lines[0]):
        rest = lines[1].strip() if len(lines) > 1 else ""
        lines = [f"{lines[0].strip()}. {rest}"] + lines[2:]
    return [re.sub(r"^\s*\(([A-Da-d])\)\s*", lambda m: m.group(1).upper() + ") ", ln) for ln in lines]


def next_block(blocks, b):
    i = blocks.index(b)
    return blocks[i + 1] if i + 1 < len(blocks) else None


def page_stream(doc, year, out_dir):
    """Linhas de texto e marcadores [[IMG:caminho]] na ordem de leitura."""
    sizes = collections.Counter()
    for page in doc:
        for b in page.get_text("blocks", flags=BLOCK_FLAGS):
            if b[6] == 1:
                sizes[(round(b[2] - b[0]), round(b[3] - b[1]))] += 1
    repeated = {s for s, n in sizes.items() if n >= 4}  # logos e cabeçalhos
    lines, count = [], 0
    for page in doc:
        blocks = page.get_text("blocks", sort=True, flags=BLOCK_FLAGS)
        two_col = year in TWO_COLUMNS
        if two_col:  # leitura: coluna da esquerda inteira, depois a da direita
            blocks = [b for b in blocks if 54 < b[1] < 790 and (b[6] == 1 or b[4].strip())]
            blocks.sort(key=lambda b: (b[0] >= 300, b[1], b[0]))
        for b in blocks:
            x0, y0, x1, y1 = b[:4]
            if b[6] == 1:
                size = (round(x1 - x0), round(y1 - y0))
                if size in repeated or (x1 - x0) < 25 or (y1 - y0) < 12:
                    continue
                count += 1
                name = f"{year}/p{page.number + 1:02d}-{count:03d}.jpg"
                path = os.path.join(out_dir, name)
                os.makedirs(os.path.dirname(path), exist_ok=True)
                page.get_pixmap(clip=fitz.Rect(x0, y0, x1, y1), dpi=130).save(path, jpg_quality=78)
                lines.append(f"[[IMG:questions/{name}]]")
                continue
            text = b[4]
            if not two_col and (y0 < 90 or y0 > page.rect.height - 90) and re.fullmatch(r"\s*\d{1,2}\s*", text):
                continue  # número da página
            lines.extend(_normalize_2022(text) if two_col else text.split("\n"))
            if two_col:
                # bloco contínuo (mesma coluna, sem folga): não separa, para não cortar a alternativa
                nxt = next_block(blocks, b)
                if nxt is not None and nxt[6] == 0 and not re.match(r"\s*(\d{1,2}\s*\n|\(?[A-D]\))", nxt[4]) and (
                    re.match(r"\s*[a-zà-ú(“\"]", nxt[4])  # continuação (inclusive na outra coluna/página)
                    or ((nxt[0] >= 300) == (x0 >= 300) and 0 <= nxt[1] - y1 <= 3)
                ):
                    continue
            lines.append("")
    return lines


def question_positions(doc):
    """Posição (página, y) em que cada questão começa, na ordem sequencial 1..48."""
    pos, expect, started = {}, 1, False
    for page in doc:
        items = []
        for b in page.get_text("dict")["blocks"]:
            if b["type"] != 0:
                continue
            for ln in b["lines"]:
                text = "".join(sp["text"] for sp in ln["spans"])
                items.append((ln["bbox"][1], text))
        for y, text in sorted(items):
            if not started:  # ignora as instruções numeradas da 1ª página
                started = bool(re.match(r"^L[IÍ]NGUA PORTUGUESA", text.strip()))
                continue
            m = p.QSTART.match(text)
            if m and int(m.group(1)) == expect and y > 20:
                pos[expect] = (page.number, y)
                expect += 1
    return pos


def save_snapshots(doc, year, pos, img_out):
    """Gera JPEGs de cada questão (fiel à prova: tabelas, equações e figuras vetoriais)."""
    order = sorted(pos)
    result, texts = {}, {}
    for k, n in enumerate(order):
        (p0, y0) = pos[n]
        end = pos[order[k + 1]] if k + 1 < len(order) else (len(doc) - 1, doc[-1].rect.height)
        clips = []
        for pg in range(p0, end[0] + 1):
            rect = doc[pg].rect
            top = y0 - 4 if pg == p0 else 50
            bottom = end[1] - 2 if pg == end[0] else rect.height - 40
            if bottom - top > 12:
                clips.append((pg, fitz.Rect(30, top, rect.width - 30, bottom)))
        names = []
        texts[n] = re.sub(r"\s+", " ", " ".join(doc[pg].get_text("text", clip=rect) for pg, rect in clips))
        for i, (pg, rect) in enumerate(clips):
            name = f"{year}/q{n:02d}-{i + 1}.jpg"
            path = os.path.join(img_out, name)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            doc[pg].get_pixmap(clip=rect, dpi=100).save(path, jpg_quality=68)
            names.append(f"questions/{name}")
        result[n] = names
    return result, texts


def adjust_2022(questions):
    """Textos compartilhados e figuras das alternativas, que a extração por colunas não liga sozinha."""
    by = {q["number"]: q for q in questions}
    shared = {2: 1, 3: 1, 4: 1, 8: 7, 9: 7, 10: 7, 11: 7, 12: 7}  # "Textos I e II" e o artigo sobre "Don't Look Up"
    for n, src in shared.items():
        by[n]["context"] = [dict(c) for c in by[src].get("context", [])]
    by[15]["images"] = []
    by[15]["context"] = [{
        "text": "Figura do aparelho de Morin e, abaixo, os gráficos das alternativas A, B, C e D (nessa ordem).",
        "images": ["questions/2022/p11-007.jpg"] + [f"questions/2022/p12-{n:03d}.jpg" for n in (8, 9, 10, 11)],
    }]
    by[15]["options"] = ["Gráfico A", "Gráfico B", "Gráfico C", "Gráfico D"]
    by[16].pop("context", None)


def build_year(year, prova, gabarito, pdf_root, src_out, img_out):
    doc = fitz.open(os.path.join(pdf_root, prova))
    stream = page_stream(doc, year, img_out)
    snaps, snap_text = ({}, {}) if year in TWO_COLUMNS else save_snapshots(doc, year, question_positions(doc), img_out)
    gab = fitz.open(os.path.join(pdf_root, gabarito))
    gab_lines = "\n".join(pg.get_text() for pg in gab).split("\n")
    answers = p.parse_answers_blocks(gab_lines) if year in TWO_COLUMNS else p.parse_answers(p.english_table(gab_lines))
    questions, first = [], 1
    for subject, lines in p.split_sections(stream):
        for q in p.parse_section(subject, lines, first):
            letter = answers.get(q["number"])
            q["id"] = f"uemg-{year}-q{q['number']:02d}"
            q["year"] = year
            q["snapshots"] = snaps.get(q["number"], [])
            q["answer"] = "ABCD".index(letter) if letter in list("ABCD") else None
            q["annulled"] = letter in ("X", "*")
            alltext = q["statement"] + " ".join(c["text"] for c in q.get("context", []))
            has_img = bool(q["images"]) or any(c["images"] for c in q.get("context", []))
            q["needsFigure"] = bool(FIGURE_WORDS.search(alltext)) and not has_img
            questions.append(q)
        first += 6
    questions.sort(key=lambda q: q["number"])
    if year in TWO_COLUMNS:
        adjust_2022(questions)
    norm = lambda t: re.sub(r"\W+", "", t).lower()
    for q in questions:  # o recorte tem de conter o começo do enunciado (garante o alinhamento)
        head = norm(q["statement"])[:25]
        if snap_text and head and head not in norm(snap_text.get(q["number"], "")):
            print(f"  ATENÇÃO {year} q{q['number']}: recorte não confere com o enunciado")
    os.makedirs(src_out, exist_ok=True)
    with open(os.path.join(src_out, f"{year}.json"), "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=1)
    return questions


if __name__ == "__main__":
    only = {int(a) for a in sys.argv[1:]}
    for year, (prova, gab) in EXAMS.items():
        if only and year not in only:
            continue
        qs = build_year(year, prova, gab, os.path.join(ROOT, "pdfs"),
                        os.path.join(ROOT, "src/data/questions"), os.path.join(ROOT, "public/questions"))
        miss = [q["number"] for q in qs if q["answer"] is None and not q["annulled"]]
        print(year, len(qs), "questões | sem gabarito:", miss,
              "| precisam de figura:", [q["number"] for q in qs if q["needsFigure"]])
