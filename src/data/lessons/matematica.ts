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
    ex('matematica-6', 4, S, 'Uma cultura de bactérias dobra a cada hora: P(t) = 100 · 2ᵗ, com t em horas. Em quantas horas a população chega a 1 600 bactérias?', ['3 horas', '4 horas', '8 horas', '16 horas'], 1, 'Resposta B (4 horas). Queremos 100 · 2ᵗ = 1 600, logo 2ᵗ = 16 = 2⁴. Igualando os expoentes, t = 4 horas.'),
    ex('matematica-6', 5, S, 'A solução da equação 3^(x+1) = 27 é:', ['x = 1', 'x = 2', 'x = 3', 'x = 9'], 1, 'Resposta B (x = 2). Como 27 = 3³, temos 3^(x+1) = 3³, então x + 1 = 3 e x = 2. Cuidado: x = 3 seria a resposta de 3ˣ = 27, sem o "+1".'),
  ],
}
