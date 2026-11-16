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
