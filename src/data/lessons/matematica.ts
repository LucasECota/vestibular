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

export const MATEMATICA_3: Lesson = {
  slug: 'matematica-3',
  title: 'Equações e sistemas do 1º e 2º graus',
  blocks: [
    { type: 'p', text: 'Equação é uma igualdade com uma ou mais incógnitas (letras que representam números desconhecidos). Resolver é descobrir os valores que tornam a igualdade verdadeira. Boa parte dos problemas de prova vira uma equação.' },
    { type: 'h', text: '1. Equação do 1º grau' },
    { type: 'p', text: String.raw`Forma geral: $ax + b = 0$, com $a \neq 0$. O objetivo é **isolar o x**: o que está somando passa subtraindo, o que está multiplicando passa dividindo (sempre fazendo a mesma operação nos dois lados).` },
    { type: 'callout', kind: 'exemplo', text: String.raw`$3x - 7 = 2x + 5$` + '\n' + String.raw`Junte os $x$ de um lado: $3x - 2x = 5 + 7$` + '\n' + String.raw`Logo $x = 12$.` + '\n' + 'Teste: 3·12 − 7 = 29 e 2·12 + 5 = 29. ✓' },
    { type: 'h', text: '2. Sistemas de duas equações' },
    { type: 'p', text: 'Quando há duas incógnitas e duas equações, use um dos métodos:' },
    { type: 'table', head: ['Método', 'Como fazer', 'Quando usar'], rows: [
      ['Adição', 'Some as equações para eliminar uma incógnita', 'Quando os coeficientes são iguais ou opostos'],
      ['Substituição', 'Isole uma incógnita numa equação e substitua na outra', 'Quando uma incógnita tem coeficiente 1'],
    ] },
    { type: 'callout', kind: 'exemplo', title: 'Método da adição', text: String.raw`$\begin{cases} x + y = 10 \\ x - y = 4 \end{cases}$` + '\n' + 'Somando: 2x = 14, então x = 7.' + '\n' + 'Em x + y = 10: y = 3. Resposta: (7, 3).' },
    { type: 'h', text: '3. Equação do 2º grau' },
    { type: 'p', text: String.raw`Forma geral: $ax^2 + bx + c = 0$, com $a\neq 0$. Use a **fórmula de Bhaskara**:` },
    { type: 'math', tex: String.raw`\Delta = b^2 - 4ac \qquad x = \dfrac{-b \pm \sqrt{\Delta}}{2a}` },
    { type: 'table', head: ['Discriminante', 'Número de raízes reais'], rows: [
      [String.raw`$\Delta > 0$`, 'Duas raízes reais e diferentes'],
      [String.raw`$\Delta = 0$`, 'Uma raiz real (raízes iguais)'],
      [String.raw`$\Delta < 0$`, 'Nenhuma raiz real'],
    ] },
    { type: 'p', text: String.raw`**Soma e produto** (atalho quando $a = 1$): a soma das raízes é $-\dfrac{b}{a}$ e o produto é $\dfrac{c}{a}$. Em $x^2 - 5x + 6 = 0$: soma $= 5$ e produto $= 6$, então as raízes são 2 e 3.` },
    { type: 'callout', kind: 'exemplo', title: 'Problema de área', text: String.raw`Um retângulo tem lados $x$ e $x+3$ e área 40. Então $x(x+3) = 40 \Rightarrow x^2 + 3x - 40 = 0$.` + '\n' + String.raw`$\Delta = 9 + 160 = 169$, logo $x = \dfrac{-3 + 13}{2} = 5$ (a raiz negativa não serve para um comprimento).` + '\n' + 'Lados 5 e 8, perímetro 26.' },
    { type: 'callout', kind: 'dica', text: 'Em problemas, siga sempre: 1) dê nome às incógnitas; 2) monte as equações; 3) resolva; 4) responda o que foi perguntado (às vezes não é o x!).' },
  ],
  exercises: [
    ex('matematica-3', 1, S, 'A solução da equação 3x − 7 = 2x + 5 é:', ['x = 2', 'x = 5', 'x = 12', 'x = −12'], 2, 'Resposta C (x = 12). Passe os termos com x para a esquerda e os números para a direita: 3x − 2x = 5 + 7, logo x = 12. Conferindo: 3 · 12 − 7 = 29 e 2 · 12 + 5 = 29.'),
    ex('matematica-3', 2, S, 'Se x + y = 10 e x − y = 4, o valor de x · y é:', ['21', '10', '24', '40'], 0, 'Resposta A (21). Somando as duas equações: 2x = 14, então x = 7. Em x + y = 10 obtemos y = 3. Logo x · y = 7 · 3 = 21.'),
    ex('matematica-3', 3, S, 'A soma das raízes da equação x² − 5x + 6 = 0 é:', ['5', '6', '−5', '1'], 0, 'Resposta A (5). Pela fórmula da soma das raízes, S = −b/a = −(−5)/1 = 5. Conferindo: as raízes são 2 e 3, e 2 + 3 = 5 (e o produto 2 · 3 = 6 = c/a).'),
    ex('matematica-3', 4, S, 'Os lados de um retângulo medem x e x + 3 (em cm) e sua área é 40 cm². O perímetro desse retângulo é:', ['16 cm', '26 cm', '32 cm', '40 cm'], 1, 'Resposta B (26 cm). x(x + 3) = 40 → x² + 3x − 40 = 0. Delta = 9 + 160 = 169, e x = (−3 + 13)/2 = 5 (a raiz negativa não serve). Os lados são 5 cm e 8 cm; perímetro = 2(5 + 8) = 26 cm.'),
    ex('matematica-3', 5, S, 'Em um estacionamento há carros e motos, num total de 30 veículos e 90 rodas. Quantos carros há?', ['10', '15', '20', '25'], 1, 'Resposta B (15). Seja c o número de carros e m o de motos: c + m = 30 e 4c + 2m = 90. Multiplicando a primeira por 2: 2c + 2m = 60. Subtraindo da segunda: 2c = 30, logo c = 15 (e m = 15). Conferindo: 15 · 4 + 15 · 2 = 90 rodas.'),
  ],
}

export const MATEMATICA_4: Lesson = {
  slug: 'matematica-4',
  title: 'Produtos notáveis e fatoração',
  blocks: [
    { type: 'p', text: String.raw`Produtos notáveis são multiplicações que aparecem tanto que vale decorar o resultado. Fatorar é o caminho de volta: transformar uma soma em um produto. Os dois ajudam a simplificar expressões grandes, como na questão de 2023 da UEMG com $x^3 - y^3$ e na de 2024 com $a^3 + b^3$.` },
    { type: 'h', text: '1. Produtos notáveis' },
    { type: 'table', head: ['Nome', 'Fórmula', 'Exemplo'], rows: [
      ['Quadrado da soma', String.raw`$(a+b)^2 = a^2 + 2ab + b^2$`, String.raw`$(x+5)^2 = x^2 + 10x + 25$`],
      ['Quadrado da diferença', String.raw`$(a-b)^2 = a^2 - 2ab + b^2$`, String.raw`$(x-3)^2 = x^2 - 6x + 9$`],
      ['Produto da soma pela diferença', String.raw`$(a+b)(a-b) = a^2 - b^2$`, String.raw`$(x+7)(x-7) = x^2 - 49$`],
      ['Cubo da soma', String.raw`$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$`, String.raw`$(x+1)^3 = x^3+3x^2+3x+1$`],
    ] },
    { type: 'callout', kind: 'atencao', text: String.raw`Erro mais comum: $(a+b)^2 \neq a^2 + b^2$. Falta o termo do meio, $2ab$.` },
    { type: 'h', text: '2. Fatoração' },
    { type: 'table', head: ['Caso', 'Como reconhecer', 'Resultado'], rows: [
      ['Fator comum', 'Todos os termos têm algo em comum', String.raw`$6x^2 + 9x = 3x(2x+3)$`],
      ['Agrupamento', 'Quatro termos que formam dois grupos', String.raw`$ax + ay + bx + by = (a+b)(x+y)$`],
      ['Diferença de quadrados', 'Dois quadrados subtraídos', String.raw`$x^2 - 49 = (x+7)(x-7)$`],
      ['Trinômio quadrado perfeito', 'Dois quadrados e o dobro do produto', String.raw`$4x^2 - 12x + 9 = (2x-3)^2$`],
      ['Diferença de cubos', String.raw`$a^3 - b^3$`, String.raw`$(a-b)(a^2+ab+b^2)$`],
      ['Soma de cubos', String.raw`$a^3 + b^3$`, String.raw`$(a+b)(a^2-ab+b^2)$`],
    ] },
    { type: 'h', text: '3. Para que serve na prova' },
    { type: 'callout', kind: 'exemplo', title: 'Cálculo rápido', text: String.raw`$101^2 - 99^2$ parece trabalhoso, mas é diferença de quadrados:` + '\n' + String.raw`$(101 - 99)(101 + 99) = 2 \cdot 200 = 400$` },
    { type: 'callout', kind: 'exemplo', title: 'Usando soma e produto', text: String.raw`Se $a + b = 10$ e $ab = 21$, quanto vale $a^2 + b^2$?` + '\n' + String.raw`$(a+b)^2 = a^2 + 2ab + b^2 \Rightarrow 100 = a^2 + b^2 + 42 \Rightarrow a^2 + b^2 = 58$` },
    { type: 'callout', kind: 'dica', text: 'Quando ver uma expressão cheia de potências, pense primeiro em fator comum e em produto notável antes de abrir tudo na força bruta.' },
  ],
  exercises: [
    ex('matematica-4', 1, S, 'O desenvolvimento de (x + 5)² é:', ['x² + 25', 'x² + 10x + 25', 'x² + 5x + 25', 'x² + 10x + 10'], 1, 'Resposta B. Quadrado da soma: (a + b)² = a² + 2ab + b². Com a = x e b = 5: x² + 2 · x · 5 + 25 = x² + 10x + 25. A alternativa A esquece o termo do meio.'),
    ex('matematica-4', 2, S, 'O valor de 101² − 99² é:', ['200', '400', '4', '2 000'], 1, 'Resposta B (400). É uma diferença de quadrados: a² − b² = (a − b)(a + b) = (101 − 99)(101 + 99) = 2 · 200 = 400.'),
    ex('matematica-4', 3, S, 'A forma fatorada de x² − 49 é:', ['(x − 7)²', '(x + 7)²', '(x + 7)(x − 7)', 'x(x − 49)'], 2, 'Resposta C. Diferença de quadrados: x² − 7² = (x + 7)(x − 7). Não é quadrado perfeito, pois falta o termo do meio (±14x).'),
    ex('matematica-4', 4, S, 'Se a + b = 10 e a · b = 21, o valor de a² + b² é:', ['58', '79', '100', '121'], 0, 'Resposta A (58). Elevando ao quadrado a soma: (a + b)² = a² + 2ab + b². Logo 100 = a² + b² + 2 · 21, então a² + b² = 100 − 42 = 58.'),
    ex('matematica-4', 5, S, 'A expressão 4x² − 12x + 9 é igual a:', ['(2x − 3)²', '(2x + 3)²', '(4x − 3)²', '2(x − 3)²'], 0, 'Resposta A. É um trinômio quadrado perfeito: (2x)² = 4x², 3² = 9 e o dobro do produto 2 · 2x · 3 = 12x, com sinal negativo. Portanto 4x² − 12x + 9 = (2x − 3)².'),
  ],
}

/** Gera um caminho SVG "M x y L ..." para o gráfico de uma função. */
const plotPath = (fn: (x: number) => number, from: number, to: number, ox: number, oy: number, sx: number, sy: number): string => {
  const pts: string[] = []
  for (let x = from; x <= to + 1e-9; x += (to - from) / 60) {
    pts.push(`${(ox + x * sx).toFixed(1)} ${(oy - fn(x) * sy).toFixed(1)}`)
  }
  return `M${pts.join(' L')}`
}

const axes = (w: number, h: number, ox: number, oy: number): string =>
  `<line x1="10" y1="${oy}" x2="${w - 10}" y2="${oy}" stroke="#0a0a0f" stroke-width="1.5"/><line x1="${ox}" y1="${h - 10}" x2="${ox}" y2="34" stroke="#0a0a0f" stroke-width="1.5"/>`

const SVG_AFIM = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="320" height="200" fill="#fff"/>${axes(320, 200, 130, 130)}
<path d="${plotPath((x) => 2 * x - 2, -3.2, 5.2, 130, 130, 28, 14)}" fill="none" stroke="#6d28d9" stroke-width="3"/>
<circle cx="158" cy="130" r="4" fill="#15803d"/><text x="162" y="146" fill="#15803d">raiz (x = 1)</text>
<circle cx="130" cy="158" r="4" fill="#c2410c"/><text x="136" y="170" fill="#c2410c">corta o eixo y em b = −2</text>
<text x="12" y="22" fill="#0a0a0f" font-weight="bold">f(x) = 2x − 2: reta crescente (a &gt; 0)</text></svg>`

const SVG_PARABOLA = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="320" height="200" fill="#fff"/>${axes(320, 200, 100, 120)}
<path d="${plotPath((x) => x * x - 4 * x + 3, -0.4, 4.4, 100, 120, 48, 14)}" fill="none" stroke="#6d28d9" stroke-width="3"/>
<circle cx="148" cy="120" r="4" fill="#15803d"/><circle cx="244" cy="120" r="4" fill="#15803d"/>
<text x="136" y="108" fill="#15803d">1</text><text x="246" y="108" fill="#15803d">3</text>
<circle cx="196" cy="134" r="4" fill="#c2410c"/><text x="204" y="152" fill="#c2410c">vértice (2, −1)</text>
<text x="12" y="22" fill="#0a0a0f" font-weight="bold">f(x) = x² − 4x + 3: parábola com concavidade para cima</text></svg>`

export const MATEMATICA_5: Lesson = {
  slug: 'matematica-5',
  title: 'Funções: afim e quadrática',
  blocks: [
    { type: 'p', text: String.raw`Uma **função** relaciona cada valor de $x$ (domínio) a um único valor $y = f(x)$. É a linguagem usada para descrever custo, velocidade, crescimento e muito mais. Duas funções caem sempre: a **afim** (reta) e a **quadrática** (parábola).` },
    { type: 'h', text: '1. Função afim: f(x) = ax + b' },
    { type: 'table', head: ['Elemento', 'O que é', 'Como usar'], rows: [
      ['a (coeficiente angular)', 'Inclinação da reta', String.raw`$a>0$: crescente; $a<0$: decrescente`],
      ['b (coeficiente linear)', 'Onde a reta corta o eixo y', String.raw`$f(0) = b$`],
      ['Raiz (zero da função)', 'Valor de x em que f(x) = 0', String.raw`$x = -\dfrac{b}{a}$`],
    ] },
    { type: 'figure', svg: SVG_AFIM, alt: 'Gráfico de uma reta crescente que corta o eixo x em 1 e o eixo y em −2', caption: 'Para f(x) = 2x − 2: raiz em x = 1 e b = −2.' },
    { type: 'callout', kind: 'exemplo', text: String.raw`$f(x) = 2x + 3$. Então $f(4) = 2\cdot 4 + 3 = 11$. Para $f(x) = 3x - 12$, a raiz é $x = -\dfrac{-12}{3} = 4$.` },
    { type: 'h', text: '2. Função quadrática: f(x) = ax² + bx + c' },
    { type: 'p', text: String.raw`O gráfico é uma **parábola**. Se $a>0$, a concavidade é para cima (tem ponto de **mínimo**); se $a<0$, é para baixo (tem **máximo**). O ponto de corte com o eixo y é $c$.` },
    { type: 'list', items: [String.raw`**Raízes:** resolva $ax^2+bx+c=0$ (Bhaskara). São onde a parábola corta o eixo x.`, String.raw`**Vértice:** $x_v = -\dfrac{b}{2a}$ e $y_v = -\dfrac{\Delta}{4a}$ (ou calcule $f(x_v)$). É o ponto de máximo ou mínimo.`] },
    { type: 'figure', svg: SVG_PARABOLA, alt: 'Parábola com concavidade para cima, raízes 1 e 3 e vértice em (2, −1)', caption: 'As raízes 1 e 3 ficam simétricas em relação ao vértice (x = 2).' },
    { type: 'callout', kind: 'exemplo', title: 'Valor máximo', text: String.raw`Uma bola tem altura $h(t) = -t^2 + 4t$ (em metros). Como $a<0$, há máximo:` + '\n' + String.raw`$t_v = -\dfrac{4}{2\cdot(-1)} = 2$ e $h(2) = -4 + 8 = 4$.` + '\nAltura máxima: 4 m, depois de 2 s.' },
    { type: 'callout', kind: 'dica', text: 'O vértice fica sempre no meio das raízes: xv = (x₁ + x₂)/2. Se você já achou as raízes 1 e 3, o xv é 2.' },
  ],
  exercises: [
    ex('matematica-5', 1, S, 'Se f(x) = 2x + 3, então f(4) é igual a:', ['8', '9', '11', '14'], 2, 'Resposta C (11). Substitua x por 4: f(4) = 2 · 4 + 3 = 8 + 3 = 11.'),
    ex('matematica-5', 2, S, 'A raiz (zero) da função f(x) = 3x − 12 é:', ['−4', '3', '4', '12'], 2, 'Resposta C (4). A raiz é o valor de x que faz f(x) = 0: 3x − 12 = 0 → 3x = 12 → x = 4.'),
    ex('matematica-5', 3, S, 'O vértice da parábola de f(x) = x² − 6x + 5 é o ponto:', ['(3, −4)', '(−3, −4)', '(3, 4)', '(6, 5)'], 0, 'Resposta A. xv = −b/2a = 6/2 = 3. Então yv = f(3) = 9 − 18 + 5 = −4. O vértice é (3, −4). Como a > 0, é um ponto de mínimo.'),
    ex('matematica-5', 4, S, 'A altura, em metros, de uma bola é h(t) = −t² + 4t, com t em segundos. A altura máxima atingida é:', ['2 m', '4 m', '8 m', '0 m'], 1, 'Resposta B (4 m). Como a = −1 < 0, a parábola tem máximo no vértice: tv = −4/(2 · (−1)) = 2 s. Então h(2) = −4 + 8 = 4 m.'),
    ex('matematica-5', 5, S, 'Os pontos em que o gráfico de f(x) = x² − 4x + 3 corta o eixo x têm abscissas:', ['1 e 3', '−1 e −3', '2 e 3', '0 e 4'], 0, 'Resposta A (1 e 3). Resolva x² − 4x + 3 = 0: Δ = 16 − 12 = 4, e x = (4 ± 2)/2, ou seja, x = 3 e x = 1. Conferindo: soma = 4 (= −b/a) e produto = 3 (= c/a).'),
  ],
}

const SVG_EXP = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="320" height="200" fill="#fff"/>${axes(320, 200, 110, 150)}
<path d="${plotPath((x) => 2 ** x, -2.2, 3.2, 110, 150, 36, 12)}" fill="none" stroke="#6d28d9" stroke-width="3"/>
<path d="${plotPath((x) => 0.5 ** x, -3.2, 2.2, 110, 150, 36, 12)}" fill="none" stroke="#c2410c" stroke-width="3"/>
<circle cx="110" cy="138" r="4" fill="#0a0a0f"/><text x="116" y="168" fill="#0a0a0f">(0, 1)</text>
<text x="215" y="40" fill="#6d28d9" font-weight="bold">2ˣ (cresce)</text><text x="12" y="40" fill="#c2410c" font-weight="bold">(1/2)ˣ (decresce)</text>
<text x="12" y="192" fill="#0a0a0f">Todas passam por (0, 1) e ficam acima do eixo x.</text></svg>`

export const MATEMATICA_6: Lesson = {
  slug: 'matematica-6',
  title: 'Funções exponencial e logarítmica',
  blocks: [
    { type: 'p', text: 'A função exponencial descreve crescimentos e decaimentos muito rápidos (bactérias, juros, radioatividade). O logaritmo é a operação inversa: serve para "descobrir o expoente". A UEMG já cobrou crescimento exponencial de vírus (2023).' },
    { type: 'h', text: '1. Função exponencial' },
    { type: 'p', text: String.raw`$f(x) = a^x$, com $a>0$ e $a\neq 1$. Se $a>1$, a função é **crescente**; se $0<a<1$, é **decrescente**. O gráfico sempre passa por $(0,1)$ e nunca toca o eixo x.` },
    { type: 'figure', svg: SVG_EXP, alt: 'Dois gráficos exponenciais, um crescente e outro decrescente, ambos passando pelo ponto (0, 1)', caption: 'Quanto maior a base (a > 1), mais rápido o crescimento.' },
    { type: 'p', text: '**Equação exponencial:** iguale as bases e depois os expoentes.' },
    { type: 'callout', kind: 'exemplo', text: String.raw`$3^{x+1} = 27 \Rightarrow 3^{x+1} = 3^3 \Rightarrow x + 1 = 3 \Rightarrow x = 2$` },
    { type: 'h', text: '2. Logaritmo' },
    { type: 'math', tex: String.raw`\log_a b = x \iff a^x = b \qquad (a>0,\ a\neq 1,\ b>0)` },
    { type: 'p', text: String.raw`Leia "log de $b$ na base $a$ é o expoente a que se eleva $a$ para obter $b$". Exemplos: $\log_2 64 = 6$ (pois $2^6 = 64$) e $\log_{10} 1000 = 3$. Sem base escrita, $\log$ é base 10.` },
    { type: 'table', head: ['Propriedade', 'Regra'], rows: [
      ['Produto', String.raw`$\log(a\cdot b) = \log a + \log b$`],
      ['Quociente', String.raw`$\log\left(\dfrac{a}{b}\right) = \log a - \log b$`],
      ['Potência', String.raw`$\log a^n = n\cdot\log a$`],
      ['Valores especiais', String.raw`$\log_a a = 1$ e $\log_a 1 = 0$`],
    ] },
    { type: 'callout', kind: 'exemplo', text: String.raw`$\log 2 + \log 5 = \log(2\cdot 5) = \log 10 = 1$` },
    { type: 'h', text: '3. Crescimento exponencial' },
    { type: 'p', text: String.raw`Quando uma quantidade dobra a cada período, usamos $P(t) = P_0 \cdot 2^t$. Para saber em quanto tempo ela chega a um valor, iguale as potências ou use logaritmo.` },
    { type: 'callout', kind: 'dica', text: 'Em equações exponenciais, tente sempre escrever os dois lados como potência da mesma base (por exemplo, 32 = 2⁵, 27 = 3³, 81 = 3⁴).' },
  ],
  exercises: [
    ex('matematica-6', 1, S, 'A solução da equação 2ˣ = 32 é:', ['x = 4', 'x = 5', 'x = 6', 'x = 16'], 1, 'Resposta B (x = 5). Escreva 32 como potência de 2: 32 = 2⁵. Então 2ˣ = 2⁵ e, igualando os expoentes, x = 5.'),
    ex('matematica-6', 2, S, 'O valor de log₂ 64 é:', ['4', '5', '6', '32'], 2, 'Resposta C (6). log₂ 64 é o expoente que se aplica a 2 para obter 64. Como 2⁶ = 64, o resultado é 6.'),
    ex('matematica-6', 3, S, 'O valor de log 2 + log 5 (logaritmos decimais) é:', ['0', '1', '7', '10'], 1, 'Resposta B (1). Pela propriedade do produto, log 2 + log 5 = log (2 · 5) = log 10 = 1, já que 10¹ = 10.'),
    ex('matematica-6', 4, S, 'Uma cultura de bactérias dobra a cada hora: P(t) = 100 · 2^t, com t em horas. Em quantas horas a população chega a 1 600 bactérias?', ['3 horas', '4 horas', '8 horas', '16 horas'], 1, 'Resposta B (4 horas). Queremos 100 · 2^t = 1 600, logo 2^t = 16 = 2⁴. Igualando os expoentes, t = 4 horas.'),
    ex('matematica-6', 5, S, 'A solução da equação 3^(x+1) = 27 é:', ['x = 1', 'x = 2', 'x = 3', 'x = 9'], 1, 'Resposta B (x = 2). Como 27 = 3³, temos 3^(x+1) = 3³, então x + 1 = 3 e x = 2. Cuidado: x = 3 seria a resposta de 3ˣ = 27, sem o "+1".'),
  ],
}

export const MATEMATICA_7: Lesson = {
  slug: 'matematica-7',
  title: 'Polinômios e equações polinomiais',
  blocks: [
    { type: 'p', text: String.raw`Polinômio é uma expressão do tipo $P(x) = a_n x^n + \dots + a_1 x + a_0$. O **grau** é o maior expoente de $x$ com coeficiente diferente de zero. As funções afim e quadrática que você já viu são polinômios de grau 1 e 2. A UEMG 2024 trouxe um polinômio do 3º grau com três raízes dadas.` },
    { type: 'h', text: '1. Valor numérico e raiz' },
    { type: 'p', text: String.raw`**Valor numérico** é o resultado de $P(a)$: troque $x$ por $a$. Se $P(a) = 0$, dizemos que $a$ é **raiz** do polinômio.` },
    { type: 'callout', kind: 'exemplo', text: String.raw`$P(x) = x^3 - 2x + 1$. Então $P(2) = 8 - 4 + 1 = 5$ e $P(1) = 1 - 2 + 1 = 0$, ou seja, 1 é raiz.` },
    { type: 'h', text: '2. Operações' },
    { type: 'list', items: ['**Soma e subtração:** some ou subtraia os termos de mesmo grau.', '**Multiplicação:** distribua; o grau do produto é a **soma** dos graus.', '**Divisão:** o resto tem grau menor que o do divisor. Pode ser feita pelo método da chave ou, para divisor $x-a$, pelo **dispositivo de Briot-Ruffini**.'] },
    { type: 'h', text: '3. Teorema do resto e de D\'Alembert' },
    { type: 'table', head: ['Teorema', 'Enunciado', 'Uso'], rows: [
      ['Do resto', String.raw`O resto da divisão de $P(x)$ por $(x-a)$ é $P(a)$`, 'Descobrir o resto sem fazer a divisão'],
      ['De D\'Alembert', String.raw`$P(x)$ é divisível por $(x-a)$ se e somente se $P(a)=0$`, 'Testar se um número é raiz'],
    ] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Resto da divisão de $P(x) = x^2 + 3x + 5$ por $x - 1$: basta calcular $P(1) = 1 + 3 + 5 = 9$.` },
    { type: 'h', text: '4. Forma fatorada e relações de Girard' },
    { type: 'p', text: String.raw`Se $P(x)$ tem grau 3 e raízes $r_1, r_2, r_3$, então $P(x) = a\,(x-r_1)(x-r_2)(x-r_3)$, em que $a$ é o coeficiente de $x^3$.` },
    { type: 'callout', kind: 'exemplo', title: 'Estilo UEMG 2024', text: String.raw`$P(x)$ tem grau 3 e raízes 5, 10 e 15, com $P(7) = 144$. Então $P(x) = a(x-5)(x-10)(x-15)$.` + '\n' + String.raw`$P(7) = a\cdot 2\cdot(-3)\cdot(-8) = 48a = 144 \Rightarrow a = 3$` },
    { type: 'p', text: String.raw`**Relações de Girard** (grau 3, $ax^3 + bx^2 + cx + d = 0$): soma das raízes $= -\dfrac{b}{a}$; soma dos produtos dois a dois $= \dfrac{c}{a}$; produto das raízes $= -\dfrac{d}{a}$.` },
    { type: 'callout', kind: 'dica', text: 'Para achar raízes inteiras de um polinômio com coeficientes inteiros, teste os divisores do termo independente (a₀). Depois use Briot-Ruffini para baixar o grau.' },
  ],
  exercises: [
    ex('matematica-7', 1, S, 'Se P(x) = x³ − 2x + 1, o valor de P(2) é:', ['3', '5', '7', '9'], 1, 'Resposta B (5). Substitua x = 2: P(2) = 2³ − 2 · 2 + 1 = 8 − 4 + 1 = 5.'),
    ex('matematica-7', 2, S, 'O resto da divisão de P(x) = x² + 3x + 5 por x − 1 é:', ['5', '7', '9', '11'], 2, 'Resposta C (9). Pelo teorema do resto, o resto da divisão por (x − 1) é P(1) = 1 + 3 + 5 = 9.'),
    ex('matematica-7', 3, S, 'O número 2 é raiz do polinômio P(x) = x³ − 3x² + kx − 2. O valor de k é:', ['1', '2', '3', '4'], 2, 'Resposta C (3). Se 2 é raiz, P(2) = 0: 8 − 12 + 2k − 2 = 0, então 2k − 6 = 0 e k = 3.'),
    ex('matematica-7', 4, S, 'Um polinômio P(x) de grau 3 tem raízes 1, 2 e 3 e P(0) = −12. O valor de P(4) é:', ['6', '12', '24', '36'], 1, 'Resposta B (12). P(x) = a(x − 1)(x − 2)(x − 3). P(0) = a · (−1)(−2)(−3) = −6a = −12, então a = 2. Logo P(4) = 2 · 3 · 2 · 1 = 12.'),
    ex('matematica-7', 5, S, 'A soma das raízes da equação x³ − 6x² + 11x − 6 = 0 é:', ['−6', '6', '11', '−11'], 1, 'Resposta B (6). Pelas relações de Girard, a soma das raízes é −b/a = −(−6)/1 = 6. Conferindo: as raízes são 1, 2 e 3, e 1 + 2 + 3 = 6.'),
  ],
}

export const MATEMATICA_8: Lesson = {
  slug: 'matematica-8',
  title: 'Progressões aritméticas e geométricas',
  blocks: [
    { type: 'p', text: 'Uma **sequência** é uma lista de números em ordem. Quando há uma regra fixa para passar de um termo ao próximo, temos uma **progressão**. A UEMG 2024 trouxe uma questão de soma de termos de uma linha de números em sequência, que se resolve com PA.' },
    { type: 'h', text: '1. Progressão aritmética (PA)' },
    { type: 'p', text: String.raw`Cada termo é o anterior **somado** a uma constante $r$ (razão). Exemplo: $(3, 7, 11, 15, \dots)$ tem $r = 4$.` },
    { type: 'math', tex: String.raw`a_n = a_1 + (n-1)\,r \qquad S_n = \dfrac{(a_1 + a_n)\,n}{2}` },
    { type: 'callout', kind: 'exemplo', text: String.raw`PA $(3, 7, 11, \dots)$: $a_{10} = 3 + 9\cdot 4 = 39$.` + '\n' + String.raw`Soma dos 20 primeiros ímpares $(1, 3, 5, \dots, 39)$: $S_{20} = \dfrac{(1+39)\cdot 20}{2} = 400$.` },
    { type: 'callout', kind: 'dica', text: 'Truque da soma (Gauss): em uma PA, a soma de termos equidistantes das pontas é sempre a mesma. Por isso a soma é a média do primeiro e do último termo vezes o número de termos.' },
    { type: 'h', text: '2. Progressão geométrica (PG)' },
    { type: 'p', text: String.raw`Cada termo é o anterior **multiplicado** por uma constante $q$ (razão). Exemplo: $(2, 6, 18, 54, \dots)$ tem $q = 3$.` },
    { type: 'math', tex: String.raw`a_n = a_1 \cdot q^{\,n-1} \qquad S_n = \dfrac{a_1\,(q^n - 1)}{q - 1}\ \ (q \neq 1)` },
    { type: 'p', text: String.raw`Se $-1 < q < 1$, a PG infinita converge e sua soma é $S = \dfrac{a_1}{1-q}$.` },
    { type: 'callout', kind: 'exemplo', text: String.raw`PG $(2, 6, 18, \dots)$: $a_5 = 2\cdot 3^4 = 162$.` + '\n' + String.raw`PG $(1, 2, 4, 8, 16)$: $S_5 = \dfrac{1\cdot(2^5 - 1)}{2 - 1} = 31$.` + '\n' + String.raw`PG infinita $(1, \tfrac{1}{2}, \tfrac{1}{4}, \dots)$: $S = \dfrac{1}{1 - \frac{1}{2}} = 2$.` },
    { type: 'table', head: ['', 'PA', 'PG'], rows: [
      ['Como varia', 'Soma uma razão r', 'Multiplica por uma razão q'],
      ['Crescimento', 'Linear (reta)', 'Exponencial'],
      ['Termo geral', String.raw`$a_1 + (n-1)r$`, String.raw`$a_1\cdot q^{n-1}$`],
      ['Aplicações', 'Parcelas fixas, filas, pilhas de objetos', 'Juros compostos, populações, desvalorização'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Leia com atenção a pergunta: n é o número do termo; "a₁₀" é o décimo termo, e não o valor 10. E em PG, q^(n−1): o expoente é n − 1.' },
  ],
  exercises: [
    ex('matematica-8', 1, S, 'O décimo termo da PA (3, 7, 11, ...) é:', ['36', '39', '43', '47'], 1, 'Resposta B (39). A razão é 4. a₁₀ = a₁ + 9r = 3 + 9 · 4 = 3 + 36 = 39.'),
    ex('matematica-8', 2, S, 'A soma dos 20 primeiros números ímpares positivos (1, 3, 5, ...) é:', ['200', '380', '400', '420'], 2, 'Resposta C (400). É uma PA com a₁ = 1 e r = 2, então a₂₀ = 1 + 19 · 2 = 39. A soma é S = (1 + 39) · 20 / 2 = 400.'),
    ex('matematica-8', 3, S, 'O quinto termo da PG (2, 6, 18, ...) é:', ['54', '162', '486', '108'], 1, 'Resposta B (162). A razão é q = 3. a₅ = a₁ · q⁴ = 2 · 81 = 162. Conferindo na sequência: 2, 6, 18, 54, 162.'),
    ex('matematica-8', 4, S, 'A soma dos 5 primeiros termos da PG (1, 2, 4, 8, ...) é:', ['15', '31', '32', '63'], 1, 'Resposta B (31). Somando: 1 + 2 + 4 + 8 + 16 = 31. Pela fórmula: S₅ = 1 · (2⁵ − 1)/(2 − 1) = 31.'),
    ex('matematica-8', 5, S, 'A soma de todos os termos da PG infinita (1, 1/2, 1/4, 1/8, ...) é:', ['1', '3/2', '2', 'infinita'], 2, 'Resposta C (2). A razão é q = 1/2, e como |q| < 1 a soma converge: S = a₁/(1 − q) = 1/(1 − 1/2) = 2.'),
  ],
}

const SVG_PITAGORAS = `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
<rect width="340" height="190" fill="#fff"/>
<polygon points="40,150 200,150 40,30" fill="#ede4ff" stroke="#6d28d9" stroke-width="3"/>
<polyline points="40,134 56,134 56,150" fill="none" stroke="#0a0a0f" stroke-width="1.5"/>
<text x="112" y="172" text-anchor="middle" fill="#0a0a0f" font-weight="bold">cateto = 4</text>
<text x="8" y="95" fill="#0a0a0f" font-weight="bold">cateto</text><text x="8" y="109" fill="#0a0a0f" font-weight="bold">= 3</text>
<text x="132" y="78" fill="#6d28d9" font-weight="bold">hipotenusa = 5</text>
<text x="215" y="50" fill="#0a0a0f" font-weight="bold">Teorema de Pitágoras</text>
<text x="215" y="72" fill="#0a0a0f">a² = b² + c²</text><text x="215" y="92" fill="#0a0a0f">5² = 3² + 4²</text><text x="215" y="112" fill="#0a0a0f">25 = 9 + 16 ✓</text></svg>`

export const MATEMATICA_9: Lesson = {
  slug: 'matematica-9',
  title: 'Geometria plana: áreas e perímetros',
  blocks: [
    { type: 'p', text: '**Perímetro** é a medida do contorno de uma figura (soma dos lados). **Área** é a medida da superfície. Geometria plana aparece muito em provas, muitas vezes combinada com equações (como o retângulo de lados desconhecidos da UEMG 2024) e com coordenadas (a área do quadrilátero de 2024).' },
    { type: 'h', text: '1. Áreas das principais figuras' },
    { type: 'table', head: ['Figura', 'Área', 'Perímetro'], rows: [
      ['Quadrado (lado l)', String.raw`$A = l^2$`, String.raw`$4l$`],
      ['Retângulo (b × h)', String.raw`$A = b\cdot h$`, String.raw`$2(b + h)$`],
      ['Paralelogramo', String.raw`$A = b\cdot h$ (h é a altura)`, 'soma dos lados'],
      ['Triângulo', String.raw`$A = \dfrac{b\cdot h}{2}$`, 'soma dos lados'],
      ['Losango (diagonais D e d)', String.raw`$A = \dfrac{D\cdot d}{2}$`, String.raw`$4l$`],
      ['Trapézio (bases B e b)', String.raw`$A = \dfrac{(B + b)\cdot h}{2}$`, 'soma dos lados'],
      ['Círculo (raio r)', String.raw`$A = \pi r^2$`, String.raw`$C = 2\pi r$`],
    ] },
    { type: 'callout', kind: 'atencao', text: 'A altura é sempre **perpendicular** à base. Não use o lado inclinado do paralelogramo ou do trapézio como altura.' },
    { type: 'h', text: '2. Teorema de Pitágoras' },
    { type: 'figure', svg: SVG_PITAGORAS, alt: 'Triângulo retângulo com catetos 3 e 4 e hipotenusa 5', caption: 'Em todo triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.' },
    { type: 'p', text: String.raw`Ternas pitagóricas comuns: $(3,4,5)$, $(5,12,13)$, $(6,8,10)$ e $(8,15,17)$. Reconhecê-las poupa contas.` },
    { type: 'h', text: '3. Ângulos' },
    { type: 'list', items: ['Soma dos ângulos internos de um **triângulo**: **180°**.', String.raw`Soma dos ângulos internos de um polígono de $n$ lados: $S = (n-2)\cdot 180^\circ$. Hexágono: $(6-2)\cdot 180 = 720^\circ$.`, 'Ângulos complementares somam 90°; suplementares somam 180°.', 'Ângulos opostos pelo vértice são iguais.'] },
    { type: 'h', text: '4. Semelhança e Tales' },
    { type: 'p', text: String.raw`Figuras **semelhantes** têm a mesma forma e lados proporcionais. Se a razão de semelhança é $k$, as **áreas** ficam multiplicadas por $k^2$. O **teorema de Tales** diz que retas paralelas cortadas por transversais determinam segmentos proporcionais: $\dfrac{a}{b} = \dfrac{c}{d}$.` },
    { type: 'callout', kind: 'exemplo', title: 'Sombras', text: 'Um poste de 3 m projeta sombra de 2 m. No mesmo momento, uma árvore projeta sombra de 10 m. A altura da árvore (triângulos semelhantes) é: 3/2 = x/10, então x = 15 m.' },
    { type: 'callout', kind: 'dica', text: 'Quando a figura é complicada, divida em figuras simples (retângulos, triângulos) e some ou subtraia as áreas.' },
  ],
  exercises: [
    ex('matematica-9', 1, S, 'Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. A hipotenusa mede:', ['9 cm', '10 cm', '12 cm', '14 cm'], 1, 'Resposta B (10 cm). Pitágoras: a² = 6² + 8² = 36 + 64 = 100, logo a = 10. É a terna 6-8-10, múltipla da 3-4-5.'),
    ex('matematica-9', 2, S, 'A área de um trapézio de bases 10 cm e 6 cm e altura 4 cm é:', ['24 cm²', '32 cm²', '40 cm²', '64 cm²'], 1, 'Resposta B (32 cm²). A = (B + b) · h / 2 = (10 + 6) · 4 / 2 = 16 · 4 / 2 = 32 cm².'),
    ex('matematica-9', 3, S, 'A área de um círculo de raio 5 cm é:', ['10π cm²', '25π cm²', '50π cm²', '100π cm²'], 1, 'Resposta B (25π cm²). A = π · r² = π · 5² = 25π cm². Atenção: 10π cm seria o comprimento da circunferência (2πr).'),
    ex('matematica-9', 4, S, 'Um retângulo tem área 48 cm² e um dos lados mede 6 cm. O perímetro desse retângulo é:', ['14 cm', '28 cm', '48 cm', '56 cm'], 1, 'Resposta B (28 cm). O outro lado mede 48 ÷ 6 = 8 cm. O perímetro é 2 · (6 + 8) = 28 cm.'),
    ex('matematica-9', 5, S, 'A soma dos ângulos internos de um hexágono é:', ['360°', '540°', '720°', '1 080°'], 2, 'Resposta C (720°). S = (n − 2) · 180° = (6 − 2) · 180° = 4 · 180° = 720°. Para o pentágono seria 540° e, para o quadrilátero, 360°.'),
  ],
}

export const MATEMATICA_10: Lesson = {
  slug: 'matematica-10',
  title: 'Geometria espacial: volumes e áreas',
  blocks: [
    { type: 'p', text: 'Geometria espacial estuda os sólidos (figuras em 3 dimensões). Cálculo de volume é usado em tanques, reservatórios, embalagens e caixas-d\'água. Na UEMG 2023 caiu o cilindro equilátero com volume dado.' },
    { type: 'h', text: '1. Prismas e cilindro' },
    { type: 'table', head: ['Sólido', 'Volume', 'Área total'], rows: [
      ['Cubo (aresta a)', String.raw`$V = a^3$`, String.raw`$A = 6a^2$`],
      ['Paralelepípedo (a, b, c)', String.raw`$V = a\cdot b\cdot c$`, String.raw`$A = 2(ab + ac + bc)$`],
      ['Prisma qualquer', String.raw`$V = A_{\text{base}}\cdot h$`, String.raw`$A = 2A_{\text{base}} + A_{\text{lateral}}$`],
      ['Cilindro (r, h)', String.raw`$V = \pi r^2 h$`, String.raw`$A = 2\pi r^2 + 2\pi r h = 2\pi r (r+h)$`],
    ] },
    { type: 'callout', kind: 'dica', text: 'Regra geral: volume de prisma e cilindro = área da base × altura.' },
    { type: 'h', text: '2. Pirâmide, cone e esfera' },
    { type: 'table', head: ['Sólido', 'Volume', 'Área'], rows: [
      ['Pirâmide', String.raw`$V = \dfrac{A_{\text{base}}\cdot h}{3}$`, 'base + faces laterais'],
      ['Cone (r, h, geratriz g)', String.raw`$V = \dfrac{\pi r^2 h}{3}$`, String.raw`$A = \pi r^2 + \pi r g$, com $g^2 = r^2 + h^2$`],
      ['Esfera (raio r)', String.raw`$V = \dfrac{4}{3}\pi r^3$`, String.raw`$A = 4\pi r^2$`],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Pirâmide e cone têm volume igual a **um terço** do volume do prisma ou cilindro de mesma base e mesma altura.' },
    { type: 'h', text: '3. Diagonais e relação de Euler' },
    { type: 'list', items: [String.raw`Diagonal do cubo: $d = a\sqrt{3}$. Do paralelepípedo: $d = \sqrt{a^2 + b^2 + c^2}$.`, String.raw`**Relação de Euler** (poliedros convexos): $V - A + F = 2$ (vértices − arestas + faces). Cubo: $8 - 12 + 6 = 2$.`] },
    { type: 'h', text: '4. Unidades de volume' },
    { type: 'p', text: '1 m³ = 1 000 L. 1 dm³ = 1 L. 1 cm³ = 1 mL. Ao trocar de unidade de comprimento, o volume muda com o **cubo** da razão (1 m = 10 dm, então 1 m³ = 1 000 dm³).' },
    { type: 'callout', kind: 'exemplo', title: 'Caixa-d\'água', text: String.raw`Um reservatório tem 2 m de comprimento, 3 m de largura e 1,5 m de altura. $V = 2\cdot 3\cdot 1{,}5 = 9\ \text{m}^3 = 9\,000\ \text{L}$.` },
    { type: 'callout', kind: 'exemplo', title: 'Estilo UEMG 2023', text: String.raw`Cilindro equilátero ($h = 2r$) com volume $686\pi$: $V = \pi r^2\cdot 2r = 2\pi r^3 = 686\pi \Rightarrow r = 7$ e $h = 14$.` + '\n' + String.raw`$A_{\text{total}} = 2\pi r(r + h) = 2\pi\cdot 7\cdot 21 = 294\pi\ \text{cm}^2$` },
  ],
  exercises: [
    ex('matematica-10', 1, S, 'O volume de um cubo de aresta 3 cm é:', ['9 cm³', '18 cm³', '27 cm³', '54 cm³'], 2, 'Resposta C (27 cm³). V = a³ = 3³ = 27 cm³. 54 cm² seria a área total (6a²).'),
    ex('matematica-10', 2, S, 'O volume de um cilindro de raio 2 cm e altura 5 cm é:', ['10π cm³', '20π cm³', '40π cm³', '100π cm³'], 1, 'Resposta B (20π cm³). V = π · r² · h = π · 2² · 5 = 20π cm³.'),
    ex('matematica-10', 3, S, 'O volume de um cone de raio da base 3 cm e altura 4 cm é:', ['12π cm³', '24π cm³', '36π cm³', '48π cm³'], 0, 'Resposta A (12π cm³). V = π r² h / 3 = π · 9 · 4 / 3 = 12π cm³. Sem dividir por 3 seria o cilindro (36π).'),
    ex('matematica-10', 4, S, 'O volume de uma esfera de raio 3 cm é:', ['12π cm³', '27π cm³', '36π cm³', '108π cm³'], 2, 'Resposta C (36π cm³). V = (4/3) π r³ = (4/3) · π · 27 = 36π cm³.'),
    ex('matematica-10', 5, S, 'Um reservatório em forma de paralelepípedo mede 2 m × 3 m × 1,5 m. Quantos litros de água ele comporta quando está cheio?', ['6 000 L', '7 500 L', '9 000 L', '12 000 L'], 2, 'Resposta C (9 000 L). V = 2 · 3 · 1,5 = 9 m³. Como 1 m³ = 1 000 L, o reservatório comporta 9 000 L.'),
  ],
}

/** Plano cartesiano com os pontos A(1,1) e B(5,4), o segmento AB e o ponto médio M. */
const SVG_ANALITICA = (() => {
  const ox = 40
  const oy = 160
  const u = 28
  const X = (x: number) => ox + x * u
  const Y = (y: number) => oy - y * u
  let grid = ''
  for (let i = 1; i <= 8; i++) grid += `<line x1="${X(i)}" y1="${oy}" x2="${X(i)}" y2="${Y(5.5)}" stroke="#e5e7eb"/>`
  for (let j = 1; j <= 5; j++) grid += `<line x1="${ox}" y1="${Y(j)}" x2="${X(8.4)}" y2="${Y(j)}" stroke="#e5e7eb"/>`
  return `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="340" height="190" fill="#fff"/>${grid}
<line x1="${ox}" y1="${oy}" x2="${X(8.6)}" y2="${oy}" stroke="#0a0a0f" stroke-width="1.5"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${Y(5.8)}" stroke="#0a0a0f" stroke-width="1.5"/>
<line x1="${X(1)}" y1="${Y(1)}" x2="${X(5)}" y2="${Y(4)}" stroke="#6d28d9" stroke-width="3"/>
<line x1="${X(1)}" y1="${Y(1)}" x2="${X(5)}" y2="${Y(1)}" stroke="#a16207" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="${X(5)}" y1="${Y(1)}" x2="${X(5)}" y2="${Y(4)}" stroke="#a16207" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="${X(1)}" cy="${Y(1)}" r="5" fill="#6d28d9"/><circle cx="${X(5)}" cy="${Y(4)}" r="5" fill="#6d28d9"/><circle cx="${X(3)}" cy="${Y(2.5)}" r="5" fill="#c2410c"/>
<text x="${X(1) + 8}" y="${Y(1) - 8}" fill="#0a0a0f" font-weight="bold">A(1,1)</text><text x="${X(5) + 8}" y="${Y(4) + 4}" fill="#0a0a0f" font-weight="bold">B(5,4)</text><text x="${X(3) + 10}" y="${Y(2.5) + 18}" fill="#c2410c" font-weight="bold">M(3; 2,5)</text>
<text x="${X(3)}" y="${Y(1) + 14}" text-anchor="middle" fill="#a16207">Δx = 4</text><text x="${X(5) + 8}" y="${Y(2.5)}" fill="#a16207">Δy = 3</text>
<text x="215" y="30" fill="#0a0a0f" font-weight="bold">d(A, B) = √(4² + 3²) = 5</text></svg>`
})()

export const MATEMATICA_11: Lesson = {
  slug: 'matematica-11',
  title: 'Geometria analítica: ponto, reta e circunferência',
  blocks: [
    { type: 'p', text: 'Geometria analítica usa **coordenadas** (x, y) para estudar figuras com equações. Ela já apareceu na UEMG duas vezes: a área de um quadrilátero por coordenadas (2024) e a circunferência com centro na interseção de duas retas (2023).' },
    { type: 'h', text: '1. Distância e ponto médio' },
    { type: 'figure', svg: SVG_ANALITICA, alt: 'Plano cartesiano com os pontos A e B, o segmento entre eles e o ponto médio', caption: 'A distância é a hipotenusa de um triângulo retângulo de catetos Δx e Δy.' },
    { type: 'math', tex: String.raw`d_{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} \qquad M = \left(\dfrac{x_A + x_B}{2},\ \dfrac{y_A + y_B}{2}\right)` },
    { type: 'h', text: '2. Reta' },
    { type: 'table', head: ['Conceito', 'Fórmula', 'Observação'], rows: [
      ['Coeficiente angular', String.raw`$m = \dfrac{y_B - y_A}{x_B - x_A}$`, String.raw`Inclinação; $m = \tan\theta$`],
      ['Equação reduzida', String.raw`$y = m\,x + n$`, String.raw`$n$ é onde a reta corta o eixo y`],
      ['Equação da reta por um ponto', String.raw`$y - y_0 = m\,(x - x_0)$`, 'Use quando souber m e um ponto'],
      ['Equação geral', String.raw`$ax + by + c = 0$`, 'Forma que aparece nas provas'],
    ] },
    { type: 'table', head: ['Posição entre duas retas', 'Condição'], rows: [
      ['Paralelas', String.raw`$m_1 = m_2$`],
      ['Perpendiculares', String.raw`$m_1\cdot m_2 = -1$`],
      ['Concorrentes', 'Têm um ponto em comum: resolva o sistema das duas equações'],
    ] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Reta por $(1,3)$ e $(3,7)$: $m = \dfrac{7-3}{3-1} = 2$. Equação: $y - 3 = 2(x - 1)$, isto é, $y = 2x + 1$.` },
    { type: 'h', text: '3. Circunferência' },
    { type: 'math', tex: String.raw`(x - a)^2 + (y - b)^2 = r^2` },
    { type: 'p', text: String.raw`Centro $C(a, b)$ e raio $r$. Atenção aos sinais: o centro $(2, -1)$ aparece como $(x-2)^2 + (y+1)^2$. O lado direito é $r^2$, não $r$.` },
    { type: 'callout', kind: 'exemplo', title: 'Estilo UEMG 2023', text: String.raw`Duas retas se cortam no centro de uma circunferência de raio 8. Se o ponto de encontro é $(-4, -1)$, a equação é $(x+4)^2 + (y+1)^2 = 64$.` },
    { type: 'h', text: '4. Área do triângulo por coordenadas' },
    { type: 'math', tex: String.raw`A = \dfrac{1}{2}\,|D|, \qquad D = \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}` },
    { type: 'callout', kind: 'dica', text: 'Para um quadrilátero, divida em dois triângulos ou use o "laço" (fórmula de Gauss) como na questão de 2024: some os produtos x·y\' − x\'·y em volta da figura e divida o módulo por 2.' },
  ],
  exercises: [
    ex('matematica-11', 1, S, 'A distância entre os pontos A(1, 2) e B(4, 6) é:', ['3', '4', '5', '7'], 2, 'Resposta C (5). d = √[(4 − 1)² + (6 − 2)²] = √(9 + 16) = √25 = 5. É o triângulo 3-4-5.'),
    ex('matematica-11', 2, S, 'O ponto médio do segmento de extremos A(2, 4) e B(8, 10) é:', ['(5, 7)', '(10, 14)', '(6, 6)', '(3, 3)'], 0, 'Resposta A (5, 7). A média das abscissas é (2 + 8)/2 = 5 e a média das ordenadas é (4 + 10)/2 = 7.'),
    ex('matematica-11', 3, S, 'O coeficiente angular da reta que passa pelos pontos (1, 3) e (3, 7) é:', ['1', '2', '4', '1/2'], 1, 'Resposta B (2). m = Δy/Δx = (7 − 3)/(3 − 1) = 4/2 = 2.'),
    ex('matematica-11', 4, S, 'A equação da circunferência de centro (2, −1) e raio 3 é:', ['(x + 2)² + (y − 1)² = 9', '(x − 2)² + (y + 1)² = 9', '(x − 2)² + (y + 1)² = 3', '(x + 2)² + (y − 1)² = 3'], 1, 'Resposta B. A forma é (x − a)² + (y − b)² = r², com a = 2 e b = −1: (x − 2)² + (y − (−1))² = (x − 2)² + (y + 1)². O lado direito é r² = 9.'),
    ex('matematica-11', 5, S, 'Qual das retas abaixo é perpendicular à reta y = 2x + 1?', ['y = 2x − 3', 'y = −2x + 1', 'y = −x/2 + 4', 'y = x/2'], 2, 'Resposta C. A reta dada tem m = 2. Retas perpendiculares têm m₁ · m₂ = −1, então m₂ = −1/2. Essa é a reta y = −x/2 + 4.'),
  ],
}

/** Circunferência trigonométrica com os ângulos notáveis do 1º quadrante. */
const SVG_TRIG = (() => {
  const cx = 110
  const cy = 105
  const r = 82
  const pts = [
    { a: 0, t: '0°' },
    { a: 30, t: '30°' },
    { a: 45, t: '45°' },
    { a: 60, t: '60°' },
    { a: 90, t: '90°' },
  ]
  const px = (a: number) => cx + r * Math.cos((a * Math.PI) / 180)
  const py = (a: number) => cy - r * Math.sin((a * Math.PI) / 180)
  const dots = pts
    .map((p) => `<line x1="${cx}" y1="${cy}" x2="${px(p.a).toFixed(1)}" y2="${py(p.a).toFixed(1)}" stroke="#c4b5fd" stroke-width="1.5"/><circle cx="${px(p.a).toFixed(1)}" cy="${py(p.a).toFixed(1)}" r="4" fill="#6d28d9"/><text x="${(px(p.a) + (p.a === 90 ? -8 : 8)).toFixed(1)}" y="${(py(p.a) + (p.a === 90 ? -8 : 4)).toFixed(1)}" fill="#0a0a0f" font-weight="bold" text-anchor="${p.a === 90 ? 'end' : 'start'}">${p.t}</text>`)
    .join('')
  return `<svg viewBox="0 0 340 215" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="340" height="215" fill="#fff"/>
<line x1="${cx - r - 8}" y1="${cy}" x2="${cx + r + 10}" y2="${cy}" stroke="#0a0a0f" stroke-width="1.5"/><line x1="${cx}" y1="${cy + r + 8}" x2="${cx}" y2="${cy - r - 12}" stroke="#0a0a0f" stroke-width="1.5"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#0a0a0f" stroke-width="2"/>${dots}
<text x="225" y="40" fill="#0a0a0f" font-weight="bold">Ângulos notáveis</text>
<text x="225" y="62" fill="#0a0a0f">30°: sen ½ · cos √3/2</text><text x="225" y="80" fill="#0a0a0f">45°: sen √2/2 · cos √2/2</text><text x="225" y="98" fill="#0a0a0f">60°: sen √3/2 · cos ½</text>
<text x="225" y="124" fill="#6d28d9" font-weight="bold">sen² + cos² = 1</text><text x="225" y="142" fill="#0a0a0f">180° = π rad</text><text x="225" y="160" fill="#0a0a0f">90° = π/2 rad</text></svg>`
})()

export const MATEMATICA_12: Lesson = {
  slug: 'matematica-12',
  title: 'Trigonometria',
  blocks: [
    { type: 'p', text: 'Trigonometria relaciona **ângulos** e **lados** de triângulos. É usada para calcular alturas e distâncias que não dá para medir direto (como a altura de uma árvore ou de uma barragem). Na UEMG 2023, uma equação trigonométrica (sen x = cos x) apareceu na prova.' },
    { type: 'h', text: '1. Razões no triângulo retângulo' },
    { type: 'math', tex: String.raw`\text{sen}\,\theta = \dfrac{\text{cateto oposto}}{\text{hipotenusa}} \quad \cos\theta = \dfrac{\text{cateto adjacente}}{\text{hipotenusa}} \quad \text{tg}\,\theta = \dfrac{\text{cateto oposto}}{\text{cateto adjacente}}` },
    { type: 'callout', kind: 'dica', text: 'Macete: SOH-CAH-TOA. **S**eno = **O**posto/**H**ipotenusa; **C**osseno = **A**djacente/**H**ipotenusa; **T**angente = **O**posto/**A**djacente.' },
    { type: 'h', text: '2. Ângulos notáveis' },
    { type: 'table', head: ['Ângulo', 'sen', 'cos', 'tg'], rows: [
      ['30°', '1/2', '√3/2', '√3/3'],
      ['45°', '√2/2', '√2/2', '1'],
      ['60°', '√3/2', '1/2', '√3'],
    ] },
    { type: 'figure', svg: SVG_TRIG, alt: 'Circunferência trigonométrica com os pontos de 0, 30, 45, 60 e 90 graus', caption: 'Na circunferência de raio 1, o cosseno é a coordenada x e o seno é a coordenada y do ponto.' },
    { type: 'h', text: '3. Relação fundamental e radianos' },
    { type: 'list', items: [String.raw`$\text{sen}^2\theta + \cos^2\theta = 1$ (vale para qualquer ângulo). Se $\text{sen}\,\theta = \tfrac{3}{5}$ e $\theta$ é agudo, então $\cos\theta = \tfrac{4}{5}$.`, String.raw`**Radianos:** $180^\circ = \pi$ rad. Então $90^\circ = \pi/2$, $60^\circ = \pi/3$, $45^\circ = \pi/4$, $30^\circ = \pi/6$ e $360^\circ = 2\pi$.`] },
    { type: 'h', text: '4. Funções seno e cosseno' },
    { type: 'table', head: ['', 'f(x) = sen x', 'f(x) = cos x'], rows: [
      ['Período', '2π', '2π'],
      ['Imagem', '[−1, 1]', '[−1, 1]'],
      ['f(0)', '0', '1'],
    ] },
    { type: 'callout', kind: 'exemplo', title: 'Equação (estilo UEMG 2023)', text: String.raw`$\text{sen}\,x - \cos x = 0 \Rightarrow \text{sen}\,x = \cos x \Rightarrow \text{tg}\,x = 1$. No intervalo $0 < x < 2\pi$: $x = \dfrac{\pi}{4}$ ou $x = \dfrac{5\pi}{4}$.` },
    { type: 'h', text: '5. Lei dos senos e dos cossenos (triângulos quaisquer)' },
    { type: 'math', tex: String.raw`\dfrac{a}{\text{sen}\,A} = \dfrac{b}{\text{sen}\,B} = \dfrac{c}{\text{sen}\,C} \qquad a^2 = b^2 + c^2 - 2bc\cos A` },
    { type: 'callout', kind: 'exemplo', title: 'Altura de uma árvore', text: String.raw`A sombra mede 10 m e o Sol forma $45^\circ$ com o chão. $\text{tg}\,45^\circ = \dfrac{h}{10} \Rightarrow 1 = \dfrac{h}{10} \Rightarrow h = 10$ m.` },
  ],
  exercises: [
    ex('matematica-12', 1, S, 'Em um triângulo retângulo, a hipotenusa mede 10 cm e o ângulo agudo θ vale 30°. O cateto oposto a θ mede:', ['5 cm', '5√3 cm', '10 cm', '20 cm'], 0, 'Resposta A (5 cm). sen 30° = cateto oposto/hipotenusa, então cateto oposto = 10 · sen 30° = 10 · 1/2 = 5 cm.'),
    ex('matematica-12', 2, S, 'O valor de tg 45° é:', ['0', '1/2', '1', '√3'], 2, 'Resposta C (1). Em 45°, seno e cosseno são iguais (√2/2), então tg 45° = sen/cos = 1.'),
    ex('matematica-12', 3, S, 'Se sen x = 3/5 e x é um ângulo agudo, então cos x vale:', ['3/4', '4/5', '5/4', '2/5'], 1, 'Resposta B (4/5). Pela relação fundamental, sen²x + cos²x = 1: 9/25 + cos²x = 1, então cos²x = 16/25 e cos x = 4/5 (positivo, pois x é agudo). É o triângulo 3-4-5.'),
    ex('matematica-12', 4, S, 'O ângulo de 90° corresponde, em radianos, a:', ['π/4', 'π/2', 'π', '2π'], 1, 'Resposta B (π/2). Como 180° = π rad, metade disso, 90°, é π/2 rad.'),
    ex('matematica-12', 5, S, 'Uma árvore projeta uma sombra de 10 m quando os raios solares formam 45° com o solo. A altura da árvore é:', ['5 m', '10 m', '20 m', '10√2 m'], 1, 'Resposta B (10 m). A tangente relaciona o cateto oposto (altura) ao adjacente (sombra): tg 45° = h/10. Como tg 45° = 1, h = 10 m.'),
  ],
}

export const MATEMATICA_13: Lesson = {
  slug: 'matematica-13',
  title: 'Matrizes e determinantes',
  blocks: [
    { type: 'p', text: String.raw`Uma **matriz** é uma tabela de números organizados em linhas e colunas. Uma matriz $m\times n$ tem $m$ linhas e $n$ colunas; o elemento $a_{ij}$ está na linha $i$ e na coluna $j$. A UEMG 2023 pediu os valores de $x$ para os quais o determinante de uma matriz 2×2 com seno e cosseno é zero.` },
    { type: 'h', text: '1. Tipos especiais' },
    { type: 'table', head: ['Tipo', 'Definição'], rows: [
      ['Quadrada', 'Mesmo número de linhas e colunas (ordem n)'],
      ['Identidade (I)', 'Quadrada, com 1 na diagonal principal e 0 nas demais'],
      ['Nula', 'Todos os elementos são 0'],
      [String.raw`Transposta ($A^T$)`, String.raw`Troca linhas por colunas. Se $A$ é 2×3, $A^T$ é 3×2`],
      ['Simétrica', String.raw`$A = A^T$`],
    ] },
    { type: 'h', text: '2. Operações' },
    { type: 'list', items: ['**Soma:** some os elementos de mesma posição (matrizes de mesma ordem).', '**Multiplicação por um número:** multiplique cada elemento.', String.raw`**Produto $A\cdot B$:** só existe se o nº de **colunas de A** for igual ao nº de **linhas de B**. O elemento $c_{ij}$ é a soma dos produtos da **linha $i$** de A pelos elementos da **coluna $j$** de B.`, 'O produto **não é comutativo**: em geral, A·B ≠ B·A.'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.` + '\n' + String.raw`$c_{11} = 1\cdot 0 + 2\cdot 1 = 2$, $c_{12} = 1\cdot 1 + 2\cdot 0 = 1$, $c_{21} = 3\cdot 0 + 4\cdot 1 = 4$, $c_{22} = 3\cdot 1 + 4\cdot 0 = 3$. Então $AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$.` },
    { type: 'h', text: '3. Determinante' },
    { type: 'p', text: 'O determinante existe só para matrizes **quadradas**.' },
    { type: 'math', tex: String.raw`\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = a\,d - b\,c` },
    { type: 'p', text: String.raw`**3×3 (regra de Sarrus):** repita as duas primeiras colunas ao lado; some os produtos das três diagonais descendentes e subtraia os produtos das três diagonais ascendentes. Em matrizes **triangulares** ou **diagonais**, o determinante é o produto da diagonal principal.` },
    { type: 'table', head: ['Propriedade', 'Efeito'], rows: [
      ['Duas linhas (ou colunas) iguais ou proporcionais', String.raw`$\det = 0$`],
      ['Trocar duas linhas de lugar', 'Troca o sinal do determinante'],
      ['Multiplicar uma linha por k', 'O determinante fica multiplicado por k'],
      ['Produto de matrizes', String.raw`$\det(AB) = \det A\cdot\det B$`],
      ['Linha ou coluna de zeros', String.raw`$\det = 0$`],
    ] },
    { type: 'h', text: '4. Matriz inversa' },
    { type: 'p', text: String.raw`$A^{-1}$ é a matriz tal que $A\cdot A^{-1} = I$. Ela só existe se $\det A \neq 0$. Para 2×2, $A^{-1} = \dfrac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.` },
    { type: 'callout', kind: 'exemplo', title: 'Estilo UEMG 2023', text: String.raw`$A = \begin{pmatrix} \text{sen}\,x & 1 \\ \cos x & 1 \end{pmatrix}$, $\det A = \text{sen}\,x - \cos x = 0 \Rightarrow \text{tg}\,x = 1$, então $x = \dfrac{\pi}{4}$ ou $\dfrac{5\pi}{4}$ em $(0, 2\pi)$.` },
    { type: 'callout', kind: 'dica', text: 'Um sistema linear tem solução única quando o determinante da matriz dos coeficientes é diferente de zero. Se o determinante é zero, o sistema é indeterminado ou impossível.' },
  ],
  exercises: [
    ex('matematica-13', 1, S, 'O determinante da matriz de linhas (2, 3) e (1, 4) é:', ['5', '11', '8', '3'], 0, 'Resposta A (5). Para uma matriz 2×2, det = a·d − b·c = 2 · 4 − 3 · 1 = 8 − 3 = 5.'),
    ex('matematica-13', 2, S, 'Sejam A com linhas (1, 2) e (3, 4), e B com linhas (0, 1) e (1, 0). O elemento da 1ª linha e 1ª coluna de A · B é:', ['0', '1', '2', '4'], 2, 'Resposta C (2). Multiplique a 1ª linha de A pela 1ª coluna de B: 1 · 0 + 2 · 1 = 2.'),
    ex('matematica-13', 3, S, 'Para que a matriz de linhas (2, 4) e (1, k) tenha determinante nulo, o valor de k deve ser:', ['1', '2', '4', '8'], 1, 'Resposta B (2). det = 2 · k − 4 · 1 = 2k − 4 = 0, então k = 2. (As linhas ficam proporcionais: (2, 4) = 2 · (1, 2).)'),
    ex('matematica-13', 4, S, 'A matriz A de linhas (1, 2, 3) e (4, 5, 6) é de ordem 2×3. Sua transposta tem ordem:', ['2×3', '3×2', '3×3', '2×2'], 1, 'Resposta B (3×2). A transposta troca linhas por colunas: as 3 colunas de A viram 3 linhas e as 2 linhas viram 2 colunas.'),
    ex('matematica-13', 5, S, 'O determinante da matriz diagonal de diagonal principal 1, 2 e 3 (os demais elementos são 0) é:', ['0', '5', '6', '9'], 2, 'Resposta C (6). Em uma matriz diagonal (ou triangular), o determinante é o produto dos elementos da diagonal principal: 1 · 2 · 3 = 6.'),
  ],
}

const SVG_ARVORE = `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="340" height="190" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Árvore de possibilidades: duas moedas</text>
<g stroke="#0a0a0f" stroke-width="2" fill="none"><line x1="30" y1="95" x2="110" y2="55"/><line x1="30" y1="95" x2="110" y2="135"/><line x1="125" y1="55" x2="215" y2="35"/><line x1="125" y1="55" x2="215" y2="75"/><line x1="125" y1="135" x2="215" y2="115"/><line x1="125" y1="135" x2="215" y2="155"/></g>
<circle cx="30" cy="95" r="6" fill="#6d28d9"/>
<g font-weight="bold" fill="#0a0a0f" text-anchor="middle"><text x="117" y="59">C</text><text x="117" y="139">K</text></g>
<g fill="#0a0a0f"><text x="222" y="39">C → CC</text><text x="222" y="79">K → CK</text><text x="222" y="119">C → KC</text><text x="222" y="159">K → KK</text></g>
<text x="170" y="184" text-anchor="middle" fill="#6d28d9" font-weight="bold">2 · 2 = 4 resultados, cada um com probabilidade 1/4</text></svg>`

export const MATEMATICA_14: Lesson = {
  slug: 'matematica-14',
  title: 'Análise combinatória, probabilidade e estatística',
  blocks: [
    { type: 'p', text: '**Análise combinatória** conta as possibilidades sem listar todas. **Probabilidade** mede a chance de um evento. **Estatística** organiza e resume dados. Os três se combinam em muitos problemas, e a estatística aparece em gráficos e notícias, como as de meio ambiente.' },
    { type: 'h', text: '1. Princípio fundamental da contagem' },
    { type: 'p', text: 'Se uma decisão tem **m** maneiras e outra tem **n**, as duas juntas têm **m × n** maneiras. Exemplo: 3 camisas e 2 calças dão 6 combinações.' },
    { type: 'figure', svg: SVG_ARVORE, alt: 'Árvore com duas jogadas de moeda e quatro resultados possíveis', caption: 'Cada nível da árvore multiplica as possibilidades.' },
    { type: 'h', text: '2. Fatorial, permutação, arranjo e combinação' },
    { type: 'table', head: ['Situação', 'Fórmula', 'Exemplo'], rows: [
      ['Fatorial', String.raw`$n! = n(n-1)\cdots 2\cdot 1$`, String.raw`$4! = 24$; $0! = 1$`],
      ['Permutação (ordenar todos)', String.raw`$P_n = n!$`, 'Anagramas de AMOR: 4! = 24'],
      ['Arranjo (a ordem importa)', String.raw`$A_{n,p} = \dfrac{n!}{(n-p)!}$`, 'Pódio de 3 entre 10 atletas: 10·9·8'],
      ['Combinação (a ordem não importa)', String.raw`$C_{n,p} = \dfrac{n!}{p!\,(n-p)!}$`, 'Comissão de 2 em 5 pessoas: C(5,2) = 10'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Pergunte: trocar a ordem dos escolhidos muda o resultado? Se SIM (presidente e vice, senhas, pódio), é **arranjo**. Se NÃO (comissão, grupo), é **combinação**.' },
    { type: 'p', text: String.raw`**Permutação com repetição:** anagramas de uma palavra com letras repetidas: $\dfrac{n!}{a!\,b!\cdots}$. Em BANANA: $\dfrac{6!}{3!\,2!} = 60$.` },
    { type: 'h', text: '3. Probabilidade' },
    { type: 'math', tex: String.raw`P(A) = \dfrac{\text{casos favoráveis}}{\text{casos possíveis}} \qquad 0 \le P(A) \le 1` },
    { type: 'list', items: [String.raw`**Evento contrário:** $P(\bar{A}) = 1 - P(A)$.`, String.raw`**"E" (independentes):** $P(A \text{ e } B) = P(A)\cdot P(B)$.`, String.raw`**"Ou":** $P(A \text{ ou } B) = P(A) + P(B) - P(A\cap B)$ (se não podem ocorrer juntos, a interseção é zero).`] },
    { type: 'callout', kind: 'exemplo', text: 'Dado honesto: a probabilidade de sair um número par é 3/6 = 1/2. A de sair 6 duas vezes seguidas é 1/6 · 1/6 = 1/36. Em genética, como na aula de Mendel, a probabilidade de dois filhos aa é 1/4 · 1/4.' },
    { type: 'h', text: '4. Estatística' },
    { type: 'table', head: ['Medida', 'O que é', 'Exemplo (4, 6, 8, 10, 12)'], rows: [
      ['Média', 'Soma ÷ quantidade', '(4+6+8+10+12)/5 = 8'],
      ['Mediana', 'Valor central dos dados em ordem', '8'],
      ['Moda', 'Valor que mais aparece', 'Não há (todos aparecem 1 vez)'],
      ['Amplitude', 'Maior − menor', '12 − 4 = 8'],
      ['Desvio padrão', 'O quanto os dados se afastam da média (dispersão)', 'Quanto maior, mais espalhados'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'A média é muito sensível a valores extremos; a **mediana** é mais estável. Com um número par de dados, a mediana é a média dos dois valores centrais.' },
  ],
  exercises: [
    ex('matematica-14', 1, S, 'Com os algarismos 1, 2, 3 e 4, quantos números de dois algarismos distintos podem ser formados?', ['8', '12', '16', '24'], 1, 'Resposta B (12). Há 4 escolhas para o algarismo das dezenas e, como não podem se repetir, 3 para o das unidades: 4 · 3 = 12.'),
    ex('matematica-14', 2, S, 'O número de anagramas da palavra AMOR (letras todas diferentes) é:', ['12', '16', '24', '48'], 2, 'Resposta C (24). É uma permutação de 4 elementos: 4! = 4 · 3 · 2 · 1 = 24.'),
    ex('matematica-14', 3, S, 'De quantas maneiras se pode formar uma comissão de 2 pessoas escolhidas entre 5?', ['5', '10', '20', '25'], 1, 'Resposta B (10). A ordem não importa, então é combinação: C(5,2) = 5!/(2! · 3!) = (5 · 4)/2 = 10. Se a ordem importasse, seria 20.'),
    ex('matematica-14', 4, S, 'Ao lançar um dado honesto de 6 faces, a probabilidade de obter um número par é:', ['1/6', '1/3', '1/2', '2/3'], 2, 'Resposta C (1/2). Os casos favoráveis são 2, 4 e 6 (3 casos) em 6 possíveis: 3/6 = 1/2.'),
    ex('matematica-14', 5, S, 'A média aritmética dos números 4, 6, 8, 10 e 12 é:', ['6', '7', '8', '10'], 2, 'Resposta C (8). Soma: 4 + 6 + 8 + 10 + 12 = 40. Dividindo por 5 termos: 40/5 = 8.'),
  ],
}
