import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'matematica' as const

export const MATEMATICA_1: Lesson = {
  slug: 'matematica-1',
  title: 'Operações, potências e porcentagem',
  blocks: [
    { type: 'p', text: String.raw`Quase toda questão de Matemática do vestibular depende de três bases: **ordem das operações**, **potências** e **porcentagem**. Se essas bases estiverem firmes, o resto fica muito mais fácil.` },
    { type: 'h', text: '1. Ordem das operações' },
    { type: 'list', ordered: true, items: ['Parênteses, colchetes e chaves (de dentro para fora).', 'Potências e raízes.', 'Multiplicações e divisões (da esquerda para a direita).', 'Somas e subtrações (da esquerda para a direita).'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`$5 + 3 \cdot 2^2 - 8 \div 4$` + '\n' + String.raw`Potência: $2^2 = 4$ → $5 + 3\cdot 4 - 8\div 4$` + '\n' + String.raw`Multiplicação e divisão: $5 + 12 - 2$` + '\n' + String.raw`Soma e subtração: **15**` },
    { type: 'h', text: '2. Frações' },
    { type: 'list', items: [String.raw`**Soma e subtração:** iguale os denominadores (mmc). $\frac{1}{2}+\frac{1}{3}=\frac{3}{6}+\frac{2}{6}=\frac{5}{6}$`, String.raw`**Multiplicação:** numerador com numerador e denominador com denominador. $\frac{2}{3}\cdot\frac{3}{4}=\frac{6}{12}=\frac{1}{2}$`, String.raw`**Divisão:** conserve a primeira e multiplique pelo inverso da segunda. $\frac{2}{3}\div\frac{4}{5}=\frac{2}{3}\cdot\frac{5}{4}=\frac{5}{6}$`] },
    { type: 'h', text: '3. Potências' },
    { type: 'table', head: ['Propriedade', 'Regra', 'Exemplo'], rows: [
      ['Mesma base, multiplicação', String.raw`$a^m \cdot a^n = a^{m+n}$`, String.raw`$2^3\cdot 2^2 = 2^5 = 32$`],
      ['Mesma base, divisão', String.raw`$a^m \div a^n = a^{m-n}$`, String.raw`$3^5 \div 3^2 = 3^3 = 27$`],
      ['Potência de potência', String.raw`$(a^m)^n = a^{m\cdot n}$`, String.raw`$(2^3)^2 = 2^6 = 64$`],
      ['Expoente zero', String.raw`$a^0 = 1$ (com $a\neq 0$)`, String.raw`$7^0 = 1$`],
      ['Expoente negativo', String.raw`$a^{-n} = \dfrac{1}{a^n}$`, String.raw`$2^{-3} = \dfrac{1}{8}$`],
    ] },
    { type: 'callout', kind: 'atencao', text: String.raw`$-3^2 = -9$, mas $(-3)^2 = 9$. Sem parênteses, o sinal de menos não entra na potência.` },
    { type: 'h', text: '4. Porcentagem' },
    { type: 'p', text: String.raw`Porcentagem é uma fração com denominador 100: $x\% = \dfrac{x}{100}$. Para calcular $x\%$ de um valor, multiplique: $x\%\ \text{de}\ N = \dfrac{x}{100}\cdot N$.` },
    { type: 'p', text: '**Fator de multiplicação** (o jeito mais rápido nas provas):' },
    { type: 'table', head: ['Situação', 'Fator', 'Exemplo'], rows: [
      ['Aumento de 20%', String.raw`$1 + 0{,}20 = 1{,}2$`, 'R$ 100 → R$ 120'],
      ['Desconto de 15%', String.raw`$1 - 0{,}15 = 0{,}85$`, 'R$ 100 → R$ 85'],
      ['Aumento de 5%', String.raw`$1{,}05$`, 'R$ 200 → R$ 210'],
    ] },
    { type: 'callout', kind: 'exemplo', title: 'Aumentos e descontos sucessivos', text: String.raw`Um produto de R$ 200 sobe 20% e depois cai 20%.` + '\n' + String.raw`$200 \cdot 1{,}2 \cdot 0{,}8 = 192$` + '\n' + 'Não volta para 200: os 20% do desconto incidem sobre um valor maior. Percentuais sucessivos **se multiplicam**, não se somam.' },
    { type: 'callout', kind: 'resumo', text: 'Parênteses → potências → × e ÷ → + e −. Em porcentagem, use fatores: aumento = 1 + taxa; desconto = 1 − taxa.' },
  ],
  exercises: [
    ex('matematica-1', 1, S, 'O valor de 5 + 3 · 2² − 8 ÷ 4 é:', ['11', '13', '15', '17'], 2, 'Resposta C (15). Primeiro a potência: 2² = 4. Depois multiplicação e divisão: 3 · 4 = 12 e 8 ÷ 4 = 2. Por fim, soma e subtração: 5 + 12 − 2 = 15.'),
    ex('matematica-1', 2, S, 'O valor de (2⁵ · 2⁻²) ÷ 2² é:', ['1', '2', '4', '8'], 1, 'Resposta B (2). Com a mesma base, multiplicar soma os expoentes e dividir subtrai: 5 + (−2) − 2 = 1. Então o resultado é 2¹ = 2.'),
    ex('matematica-1', 3, S, 'Um produto custa R$ 250,00 e recebe 12% de desconto. O novo preço é:', ['R$ 210,00', 'R$ 215,00', 'R$ 220,00', 'R$ 238,00'], 2, 'Resposta C (R$ 220,00). Desconto de 12% equivale ao fator 1 − 0,12 = 0,88. Então 250 · 0,88 = 220. Outro caminho: 12% de 250 = 30, e 250 − 30 = 220.'),
    ex('matematica-1', 4, S, 'O preço de uma mercadoria aumentou 20% e, depois, diminuiu 20%. Em relação ao preço original, o preço final ficou:', ['igual', '4% menor', '4% maior', '20% menor'], 1, 'Resposta B (4% menor). Os fatores se multiplicam: 1,2 · 0,8 = 0,96. Como 0,96 = 1 − 0,04, o preço final é 4% menor que o original.'),
    ex('matematica-1', 5, S, 'O valor de (1/2 + 1/3) ÷ (5/12) é:', ['1', '2', '5/6', '5/12'], 1, 'Resposta B (2). 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Dividir por 5/12 é multiplicar pelo inverso: 5/6 · 12/5 = 60/30 = 2.'),
  ],
}

export const MATEMATICA_2: Lesson = {
  slug: 'matematica-2',
  title: 'Razão, proporção e regra de três',
  blocks: [
    { type: 'p', text: 'Razão, proporção e regra de três servem para comparar quantidades. Aparecem em receitas, escalas de mapa, velocidade, misturas e contas do dia a dia, e por isso caem muito.' },
    { type: 'h', text: '1. Razão' },
    { type: 'p', text: String.raw`Razão é a divisão entre duas grandezas: a razão de $a$ para $b$ é $\dfrac{a}{b}$. Exemplo: em uma sala com 18 meninas e 12 meninos, a razão de meninos para meninas é $\dfrac{12}{18}=\dfrac{2}{3}$. A razão de meninos para o total (30 alunos) é $\dfrac{12}{30}=\dfrac{2}{5}$.` },
    { type: 'callout', kind: 'atencao', text: 'A ordem importa: "razão de A para B" é A ÷ B. Leia com cuidado quem vem primeiro (e se o total entra na conta).' },
    { type: 'h', text: '2. Proporção' },
    { type: 'p', text: String.raw`Proporção é a igualdade entre duas razões: $\dfrac{a}{b}=\dfrac{c}{d}$. A propriedade fundamental diz que o **produto dos meios é igual ao produto dos extremos**: $a\cdot d = b\cdot c$ (multiplicação em cruz).` },
    { type: 'h', text: '3. Regra de três simples' },
    { type: 'p', text: 'Primeiro descubra se as grandezas são **diretamente** ou **inversamente** proporcionais:' },
    { type: 'table', head: ['Tipo', 'Como reconhecer', 'Exemplo'], rows: [
      ['Diretamente proporcionais', 'Se uma aumenta, a outra aumenta na mesma proporção.', 'Quantidade de arroz × preço'],
      ['Inversamente proporcionais', 'Se uma aumenta, a outra diminui na mesma proporção.', 'Velocidade × tempo; nº de operários × dias'],
    ] },
    { type: 'callout', kind: 'exemplo', title: 'Regra de três direta', text: 'Se 5 kg de arroz custam R$ 35, quanto custam 8 kg?' + '\n' + String.raw`$\dfrac{5}{8}=\dfrac{35}{x}\ \Rightarrow\ 5x = 280\ \Rightarrow\ x = 56$` + '\nResposta: R$ 56,00.' },
    { type: 'callout', kind: 'exemplo', title: 'Regra de três inversa', text: 'Um carro a 60 km/h faz o trajeto em 4 h. A 80 km/h, quanto tempo leva?' + '\n' + 'Mais velocidade → menos tempo (inversa). Multiplique direto:' + '\n' + String.raw`$60 \cdot 4 = 80 \cdot x\ \Rightarrow\ x = 3\ \text{h}$` },
    { type: 'h', text: '4. Escala de mapas' },
    { type: 'p', text: String.raw`Em uma escala 1 : 500 000, 1 cm no mapa equivale a 500 000 cm na realidade (= 5 km). Para converter: distância real = distância no mapa × denominador da escala. Depois converta as unidades ($100\,000\ \text{cm} = 1\ \text{km}$).` },
    { type: 'callout', kind: 'dica', text: 'Monte uma tabela com as grandezas, marque uma seta de cada lado e compare os sentidos: setas iguais = direta; setas opostas = inversa.' },
  ],
  exercises: [
    ex('matematica-2', 1, S, 'Se 5 kg de arroz custam R$ 35,00, quanto custam 8 kg?', ['R$ 52,00', 'R$ 54,00', 'R$ 56,00', 'R$ 60,00'], 2, 'Resposta C (R$ 56,00). Grandezas diretamente proporcionais: 5/8 = 35/x. Multiplicando em cruz: 5x = 280, logo x = 56. Outro caminho: 1 kg custa 35/5 = R$ 7,00, e 8 kg custam 8 · 7 = R$ 56,00.'),
    ex('matematica-2', 2, S, 'Um carro a 60 km/h faz um trajeto em 4 horas. Mantendo a mesma rota a 80 km/h, o tempo gasto será de:', ['2 h', '3 h', '3 h 30 min', '5 h'], 1, 'Resposta B (3 h). Velocidade e tempo são inversamente proporcionais: 60 · 4 = 80 · x, logo x = 240/80 = 3 h. A distância é a mesma (240 km): a 80 km/h, 240 ÷ 80 = 3 h.'),
    ex('matematica-2', 3, S, 'Em um mapa de escala 1 : 500 000, dois pontos estão a 4 cm um do outro. A distância real entre eles é de:', ['2 km', '20 km', '200 km', '2 000 km'], 1, 'Resposta B (20 km). 4 cm × 500 000 = 2 000 000 cm. Como 100 000 cm = 1 km, 2 000 000 cm = 20 km.'),
    ex('matematica-2', 4, S, 'Quatro operários, trabalhando no mesmo ritmo, terminam uma obra em 15 dias. Com 10 operários no mesmo ritmo, a obra terminaria em:', ['4 dias', '6 dias', '9 dias', '37,5 dias'], 1, 'Resposta B (6 dias). Mais operários, menos dias: grandezas inversamente proporcionais. 4 · 15 = 10 · x, logo x = 60/10 = 6 dias.'),
    ex('matematica-2', 5, S, 'Em uma turma há 18 meninas e 12 meninos. A razão entre o número de meninos e o total de alunos é:', ['2/3', '3/5', '2/5', '3/2'], 2, 'Resposta C (2/5). O total é 18 + 12 = 30 alunos. A razão de meninos para o total é 12/30, que simplificada por 6 dá 2/5. Cuidado: 2/3 seria a razão de meninos para meninas.'),
  ],
}
