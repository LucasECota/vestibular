import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(__file__))
import uemg_parser as p

SAMPLE = """FÍSICA.

13. O que é MRU?
a) Movimento retilíneo uniforme.
b) Movimento circular.
c) Queda livre.
d) Lançamento
oblíquo.

Observe a tirinha para responder à questão 15.
[[IMG:q15.png]]

14.Quanto é 2 + 2?
a) 3
b) 4
c) 5
d) 6

15. Qual a energia?
a) x
b) y
c) z
d) w
MATEMÁTICA.
43. Calcule.
a) 1
b) 2
c) 3
d) 4
REDAÇÃO.
texto
"""


class ParserTests(unittest.TestCase):
    def setUp(self):
        self.sections = p.split_sections(SAMPLE.split("\n"))

    def test_sections_stop_at_redacao(self):
        self.assertEqual([s for s, _ in self.sections], ["fisica", "matematica"])

    def test_questions_options_and_wrapped_last_option(self):
        qs = p.parse_section("fisica", self.sections[0][1], 13)
        self.assertEqual([q["number"] for q in qs], [13, 14, 15])
        self.assertEqual(qs[0]["options"][3], "Lançamento oblíquo.")
        self.assertEqual(qs[1]["options"], ["3", "4", "5", "6"])

    def test_context_assigned_by_reference_with_image(self):
        qs = p.parse_section("fisica", self.sections[0][1], 13)
        ctx = qs[2]["context"][0]
        self.assertIn("tirinha", ctx["text"])
        self.assertEqual(ctx["images"], ["q15.png"])
        self.assertNotIn("context", qs[1])

    def test_answers_and_english_table(self):
        lines = ["PROVA GERAIS - ESPANHOL", "1", "B", "2", "C",
                 "PROVA GERAIS - INGLÊS", "1", "A", "2", "D", "3", "Anulada"]
        self.assertEqual(p.parse_answers(p.english_table(lines)), {1: "A", 2: "D", 3: "X"})
        self.assertEqual(p.parse_answers(lines)[1], "B")


if __name__ == "__main__":
    unittest.main()
