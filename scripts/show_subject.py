"""Imprime as questões de uma disciplina (com gabarito) para revisão/explicações. Uso: python scripts/show_subject.py fisica"""
import json, sys
L = "ABCD"
subject = sys.argv[1]
for y in (2023, 2024):
    for q in json.load(open(f"src/data/questions/{y}.json")):
        if q["subject"] != subject or q["annulled"]:
            continue
        print(f"### {q['id']} gabarito={L[q['answer']]}")
        for c in q.get("context", []):
            print("CTX:", c["text"][:700], c["images"])
        print(q["statement"])
        for i, o in enumerate(q["options"]):
            print(f" {L[i]}) {o}")
        if q["images"]:
            print("IMG:", q["images"])
