import type { Block } from '../../../domain/lesson'
import { h, list } from './b'

/** Complementos das revisões de 13 a 15/01: pontos que as questões pedem e o resumo não trazia. */
export const ADD_WEEK11: Record<string, Block[]> = {
  'ingles-revisao': [
    h('Mais alguns pontos'),
    list([
      '**Present perfect:** *have/has* + particípio, ligando o passado ao presente. A forma contínua é *has been studying* (vem estudando). **since** = desde (ponto de partida: since 2015, since morning); **for** = durante (duração: for two years).',
      '**Preposição + verbo:** depois de preposição, o verbo vai para o gerúndio: *I\'m looking forward to **seeing** you.*',
      '**Pronomes possessivos:** *mine, yours, his, hers, ours, theirs* substituem o substantivo ("This book is **mine**"). Antes de substantivo usa-se *my, your, his, her, our, their*.',
      '**Pronomes relativos:** *who* (pessoas), *which* (coisas), *whose* (posse: "the man **whose** car was stolen"), *whom* (objeto, mais formal).',
      '**Frequência:** always > usually > often > sometimes > rarely > never. O oposto de *always* é *never*.',
      '**Neither... nor:** o verbo concorda com o sujeito mais próximo ("Neither Tom nor his friends **are** coming").',
      '**I wish + passado:** para desejos sobre o presente ("I wish I **had** more time").',
    ]),
  ],

  'quimica-revisao': [
    h('Mais alguns pontos'),
    list([
      '**Ácidos comuns:** HCl (clorídrico), H₂S (sulfídrico), H₂SO₃ (sulfuroso), **H₂SO₄ (sulfúrico)**, HNO₃ (nítrico), H₃PO₄ (fosfórico), H₂CO₃ (carbônico), CH₃COOH (acético).',
      '**Balanceamento:** acerte primeiro os metais, depois o oxigênio, usando o mmc. Em Al + O₂ → Al₂O₃: o oxigênio é 2 de um lado e 3 do outro (mmc = 6), então 3 O₂ e 2 Al₂O₃, e depois 4 Al: **4 Al + 3 O₂ → 2 Al₂O₃**, soma 9.',
      '**Moléculas e massa:** $n=\\dfrac{N}{6{,}02\\cdot 10^{23}}$ e $m=n\\cdot M$. Metade da constante de Avogadro é 0,5 mol; para a água (18 g/mol), 9 g.',
      '**Pilha:** **ânodo** = oxidação (perde elétrons); **cátodo** = redução (ganha elétrons).',
      '**Le Chatelier e temperatura:** aquecer favorece o sentido **endotérmico**; resfriar favorece o **exotérmico**. Em $2NO_2 \\rightleftharpoons N_2O_4$ (direto exotérmico), aquecer desloca para a esquerda, formando mais NO₂.',
    ]),
  ],

  'matematica-revisao': [
    h('Mais alguns pontos'),
    list([
      '**Função afim por dois pontos:** $a=\\dfrac{\\Delta y}{\\Delta x}$; depois ache $b$ com um dos pontos. O valor de $f(0)$ é o próprio $b$. Se $f(1)=5$ e $f(3)=11$: $a=3$, $b=2$, $f(0)=2$.',
      '**Diagonais de um polígono de $n$ lados:** $d=\\dfrac{n(n-3)}{2}$. Hexágono: $\\dfrac{6\\cdot 3}{2}=9$.',
      '**Dois dados:** 36 resultados possíveis; para soma 7, são 6 favoráveis, ou seja, $\\dfrac{1}{6}$.',
    ]),
  ],

  'portugues-revisao': [
    h('Mais alguns pontos'),
    list([
      '**Sujeito posposto:** o sujeito pode vir depois do verbo. Pergunte "quem?": em "Chegaram os convidados", quem chegou? **Os convidados**.',
      '**Crase com nomes de lugar:** cidades e países **sem artigo** não têm crase ("Fui **a** Roma"); com artigo, têm ("Fui **à** Bahia"). Também não há crase antes de palavra masculina ("a pé") nem antes de verbo ("a ajudar").',
      '**Concessão:** "embora", "ainda que" e "mesmo que" introduzem oração subordinada **adverbial concessiva** (um obstáculo que não impediu o fato principal).',
    ]),
  ],

  'fisica-revisao': [
    h('Mais alguns pontos'),
    list([
      '**Eletricidade:** $U = R\\cdot i$ e $P = U\\cdot i$. Em **série**, $R_{eq}$ é a soma e a corrente é a mesma ($10\\ \\Omega + 10\\ \\Omega$ a 10 V: $i=\\dfrac{10}{20}$). Em **paralelo**, $n$ resistores iguais de $R$ equivalem a $\\dfrac{R}{n}$ (dois de 10 Ω dão 5 Ω).',
      '**Trabalho de um gás a pressão constante:** $W = p\\cdot\\Delta V$. Primeira lei: $\\Delta U = Q - W$.',
      '**Lançamento horizontal:** o tempo de queda depende só da altura ($h=\\dfrac{g\\,t^2}{2}$) e não da velocidade horizontal. Com $h=20$ m e $g=10$: $t=2$ s.',
      '**Conversão:** km/h ÷ 3,6 = m/s (72 km/h = 20 m/s).',
    ]),
  ],

  'biologia-revisao': [
    h('Mais alguns pontos'),
    list([
      '**Transporte nas plantas:** o **xilema** leva a seiva bruta (água e sais) das raízes às folhas; o **floema** leva a seiva elaborada (açúcares) das folhas para o resto da planta.',
      '**Sangue:** hemácias transportam O₂; **leucócitos** fazem a defesa contra infecções; plaquetas atuam na coagulação.',
      '**Ácidos nucleicos:** o açúcar do DNA é a **desoxirribose**, e o do RNA é a ribose. No RNA, a timina é substituída pela uracila.',
      '**Dois genes:** multiplique as probabilidades de cada um. Em AaBb × AaBb, a chance de aaBb é $\\dfrac14 \\cdot \\dfrac12 = \\dfrac18$.',
      '**Transfusão (sistema ABO):** quem é do tipo **O** tem anticorpos anti-A e anti-B, então só pode receber sangue **O** (mas doa para todos). O tipo **AB** não tem anticorpos e recebe de todos.',
      '**Evolução:** a teoria da seleção natural foi proposta por Charles Darwin (e Wallace). Lamarck propôs o uso e desuso.',
    ]),
  ],
}
