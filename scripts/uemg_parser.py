"""Funções puras (sem PyMuPDF) para transformar o texto das provas da UEMG em questões."""
import re

SECTIONS = [
    (r"^L[IÍ]NGUA PORTUGUESA", "portugues"),
    (r"^L[IÍ]NGUA ESTRANGEIRA\s*-\s*ING", "ingles"),
    (r"^L[IÍ]NGUA ESTRANGEIRA\s*-\s*ESP", None),  # espanhol: ignorado
    (r"^F[IÍ]SICA\.?\s*$", "fisica"),
    (r"^QU[IÍ]MICA\.?\s*$", "quimica"),
    (r"^BIOLOGIA\.?\s*$", "biologia"),
    (r"^GEOGRAFIA\.?\s*$", "geografia"),
    (r"^HIST[OÓ]RIA\.?\s*$", "historia"),
    (r"^MATEM[AÁ]TICA\.?\s*$", "matematica"),
    (r"^REDA[CÇ][AÃ]O\.?\s*$", "__fim__"),
]
IMG = re.compile(r"^\[\[IMG:(.+)\]\]$")
OPT = re.compile(r"^\s*([a-dA-D])\)\s*(.*)$")
QSTART = re.compile(r"^\s*(\d{1,2})\.(?!\d)\s*(.*)$")
REF = re.compile(r"quest(?:ão|ões)\s+((?:\d{1,2}(?:\s*(?:,|e|a)\s*)?)+)", re.I)


def split_sections(lines):
    """Devolve [(subject, [linhas])] na ordem da prova, sem o espanhol."""
    out, cur = [], None
    for ln in lines:
        s = ln.strip()
        hit = next(((pat, subj) for pat, subj in SECTIONS if re.match(pat, s)), None)
        if hit and len(s) < 60:
            if hit[1] == "__fim__":
                break
            cur = [hit[1], []]
            out.append(cur)
            continue
        if cur is not None:
            cur[1].append(ln)
    return [(s, l) for s, l in out if s]


def _clean(parts):
    text = " ".join(p.strip() for p in parts if p.strip() and not IMG.match(p.strip()))
    return re.sub(r"\s+", " ", text).strip()


def _images(parts):
    return [m.group(1) for p in parts if (m := IMG.match(p.strip()))]


def parse_section(subject, lines, first_number):
    """Extrai as questões de uma seção. Números devem ser sequenciais a partir de first_number."""
    starts, expect = [], first_number
    for i, ln in enumerate(lines):
        m = QSTART.match(ln)
        if m and int(m.group(1)) == expect:
            starts.append((i, expect))
            expect += 1
    questions, preambles = [], {}
    pending = lines[: starts[0][0]] if starts else []
    for k, (i, num) in enumerate(starts):
        end = starts[k + 1][0] if k + 1 < len(starts) else len(lines)
        seg = [QSTART.sub(r"\2", lines[i], count=1)] + lines[i + 1 : end]
        opt_idx = {}
        for j, ln in enumerate(seg):
            m = OPT.match(ln)
            if m and m.group(1).lower() not in opt_idx and (len(opt_idx) == "abcd".index(m.group(1).lower())):
                opt_idx[m.group(1).lower()] = j
        stmt_end = opt_idx.get("a", len(seg))
        options, trailing = [], []
        keys = sorted(opt_idx.items(), key=lambda kv: kv[1])
        for n, (key, j) in enumerate(keys):
            nxt = keys[n + 1][1] if n + 1 < len(keys) else len(seg)
            block = seg[j:nxt]
            if n + 1 == len(keys):  # última alternativa: corta no 1º bloco em branco
                cut = next((x for x, b in enumerate(block[1:], 1) if not b.strip()), len(block))
                trailing = block[cut:]
                block = block[:cut]
            first = OPT.match(block[0]).group(2)
            options.append(_clean([first] + block[1:]))
        q = {
            "number": num,
            "subject": subject,
            "statement": _clean(seg[:stmt_end]),
            "options": options,
            "images": _images(seg[:stmt_end]),
            "_pending": pending,
        }
        questions.append(q)
        pending = trailing
    # contexto compartilhado ("Leia o texto para responder às questões 01 e 02")
    by_num = {q["number"]: q for q in questions}
    for idx, q in enumerate(questions):
        pre = q.pop("_pending")
        text = _clean(pre)
        imgs = _images(pre)
        if not text and not imgs:
            continue
        targets = [q["number"]]
        m = REF.search(text)
        if m:
            nums = [int(n) for n in re.findall(r"\d{1,2}", m.group(1))]
            if len(nums) == 2 and re.search(r"\sa\s", m.group(1)):
                nums = list(range(nums[0], nums[1] + 1))
            targets = [n for n in nums if n in by_num] or targets
        for n in targets:
            by_num[n].setdefault("context", []).append({"text": text, "images": imgs})
    return questions


def parse_answers(lines):
    """Pares (número -> letra) da tabela de gabarito. Aceita 'X'/'*' como anulada."""
    out = {}
    clean = [l.strip() for l in lines if l.strip()]
    for i, l in enumerate(clean[:-1]):
        if re.fullmatch(r"\d{1,2}", l) and re.fullmatch(r"[A-Da-d]|[Xx*]|anulada", clean[i + 1], re.I):
            letter = clean[i + 1].upper()
            out.setdefault(int(l), "X" if letter in ("*", "ANULADA") else letter)
    return out


def english_table(lines):
    """No gabarito há uma tabela para Espanhol e outra para Inglês; devolve as linhas da de Inglês."""
    for i, l in enumerate(lines):
        if re.search(r"GERAIS.*ING|ING.*GERAIS|CONHECIMENTOS GERAIS\s*/\s*ING", l.upper()):
            return lines[i:]
    return lines
