import type { Exercise } from '../exercises'
import type { Lesson } from '../../domain/lesson'
import type { SubjectId } from '../../domain/types'
import { ex } from './helpers'

/**
 * Semana 8 (6 a 12/01): simulados. Cada tarefa traz as questões oficiais de provas anteriores
 * da disciplina e, aqui, um roteiro de estratégia com 5 questões extras no estilo da UEMG.
 */
export const simulado = (
  slug: string,
  title: string,
  intro: string,
  dicas: string[],
  pegadinha: string,
  exercises: Exercise[],
): Lesson => ({
  slug,
  title,
  heading: 'Simulado',
  blocks: [
    { type: 'p', text: intro },
    {
      type: 'callout',
      kind: 'dica',
      title: 'Como usar esta hora',
      text: '1) Faça primeiro as questões de provas anteriores. 2) Depois resolva as 5 questões extras, no estilo da UEMG. 3) Marque tudo e só então conclua a tarefa: o gabarito e as explicações aparecem depois. 4) Cronometre: a meta é cerca de 4 minutos por questão.',
    },
    { type: 'h', text: 'Estratégias para esta matéria' },
    { type: 'list', items: dicas },
    { type: 'callout', kind: 'atencao', title: 'Pegadinhas mais comuns', text: pegadinha },
    { type: 'p', text: 'Ao terminar, anote as dúvidas na aba Dúvidas. As questões que você errar entram na revisão de erros dos próximos dias.' },
  ],
  exercises,
})

const M = 'matematica' as const
const F = 'fisica' as const
const Q = 'quimica' as const
const B = 'biologia' as const
const P = 'portugues' as const
const I = 'ingles' as const
const G = 'geografia' as const
const H = 'historia' as const
type Sub = SubjectId

export const INGLES_PRATICA_2: Lesson = simulado(
  'ingles-pratica-2',
  'Simulado de Inglês',
  'Na prova são 6 questões de Inglês, todas de leitura: tirinha, notícia, texto curto e gramática básica. Nenhuma exige traduzir palavra por palavra.',
  ['Leia a pergunta antes do texto e procure cognatos para achar o assunto.', 'Use o contexto para palavras desconhecidas: o resto da frase quase sempre ajuda.', 'Em pronomes (it, they, this), volte uma frase e ache o substantivo que ele retoma.', 'Em conectivos, pense na relação: oposição (but, however), causa (because), consequência (so).'],
  'Falsos cognatos (actually, attend, parents, library, pretend); "any" em frases negativas e perguntas; "its" × "it\'s"; e o auxiliar "does" com verbo sem -s.',
  [
    ex('ingles-pratica-2', 1, I as Sub, 'Text: "Climate change is affecting many countries. However, some cities are building green parks to reduce heat." A palavra "However" indica:', ['causa', 'oposição (contraste)', 'adição', 'tempo'], 1, 'Resposta B (oposição). "However" significa "no entanto": contrapõe o problema (a mudança climática afeta os países) à ação (cidades criam parques verdes). Causa seria because; adição, also ou and.'),
    ex('ingles-pratica-2', 2, I as Sub, 'Complete: "She doesn\'t have ____ time to study today."', ['some', 'an', 'any', 'a'], 2, 'Resposta C (any). Em frases negativas usa-se any (e some em afirmativas). "Time" é incontável, então não leva a nem an.'),
    ex('ingles-pratica-2', 3, I as Sub, 'Na frase "The students attended the lecture about recycling", o verbo "attended" significa:', ['atenderam', 'assistiram à (compareceram a)', 'esperaram', 'apresentaram'], 1, 'Resposta B. "Attend" é um falso cognato: significa assistir ou comparecer, e não "atender" (que em inglês é "answer" ou "serve").'),
    ex('ingles-pratica-2', 4, I as Sub, 'Complete: "Yesterday I ____ to the library and ____ a book about biology."', ['go / borrow', 'going / borrowed', 'goes / borrow', 'went / borrowed'], 3, 'Resposta D (went / borrowed). "Yesterday" pede passado simples: go → went (irregular) e borrow → borrowed (regular).'),
    ex('ingles-pratica-2', 5, I as Sub, 'Text: "My grandparents live in Minas Gerais. They love the mountains there." O pronome "They" se refere a:', ['my grandparents', 'Minas Gerais', 'the mountains', 'I'], 0, 'Resposta A. "They" é o plural de pessoa e retoma o sujeito da frase anterior, "my grandparents" (meus avós).'),
  ],
)

export const FISICA_PRATICA_2: Lesson = simulado(
  'fisica-pratica-2',
  'Simulado de Física: mecânica, energia e ondas',
  'Este simulado mistura movimento, leis de Newton, energia, hidrostática e ondas: os assuntos mais frequentes de Física nas provas da UEMG.',
  ['Anote os dados com unidades e converta tudo para o SI antes de usar a fórmula (km/h → m/s, g → kg, cm → m).', 'Escolha a fórmula pela pergunta: sem tempo, use Torricelli; com energia, tente conservação.', 'Desenhe as forças em questões de dinâmica e aplique F = m·a no sentido do movimento.', 'Confira a ordem de grandeza da resposta: um carro a 600 m/s ou uma pessoa de 7 N é sinal de erro.'],
  'Confundir massa (kg) com peso (N); esquecer que a velocidade entra ao quadrado na energia cinética; trocar "tempo de ida e volta" por tempo de ida (eco); usar g = 10 m/s² só quando o enunciado permite.',
  [
    ex('fisica-pratica-2', 1, F as Sub, 'Um carro percorre 150 km em 2 horas e 30 minutos. Sua velocidade média é:', ['50 km/h', '60 km/h', '75 km/h', '80 km/h'], 1, 'Resposta B (60 km/h). 2 h 30 min = 2,5 h. v = Δs/Δt = 150/2,5 = 60 km/h.'),
    ex('fisica-pratica-2', 2, F as Sub, 'Uma força resultante de 40 N atua sobre um corpo de massa 8 kg. A aceleração do corpo é:', ['5 m/s²', '3 m/s²', '4 m/s²', '8 m/s²'], 0, 'Resposta A (5 m/s²). Pela 2ª lei de Newton, a = F/m = 40/8 = 5 m/s².'),
    ex('fisica-pratica-2', 3, F as Sub, 'A energia cinética de um corpo de 2 kg com velocidade de 6 m/s é:', ['12 J', '36 J', '24 J', '72 J'], 1, 'Resposta B (36 J). Ec = m·v²/2 = 2 · 36 / 2 = 36 J.'),
    ex('fisica-pratica-2', 4, F as Sub, 'Uma onda tem frequência de 50 Hz e comprimento de onda de 4 m. Sua velocidade é:', ['46 m/s', '100 m/s', '400 m/s', '200 m/s'], 3, 'Resposta D (200 m/s). v = λ · f = 4 · 50 = 200 m/s.'),
    ex('fisica-pratica-2', 5, F as Sub, 'A pressão hidrostática, a 5 m de profundidade, em um tanque de óleo (d = 800 kg/m³), com g = 10 m/s², é:', ['4 000 Pa', '400 000 Pa', '40 000 Pa', '8 000 Pa'], 2, 'Resposta C (40 000 Pa). Pelo teorema de Stevin, p = d · g · h = 800 · 10 · 5 = 40 000 Pa.'),
  ],
)

export const FISICA_PRATICA_3: Lesson = simulado(
  'fisica-pratica-3',
  'Simulado de Física: eletricidade, calor, óptica e gravitação',
  'Segundo simulado de Física: circuitos, potência elétrica, calorimetria, espelhos e gravitação universal.',
  ['Em circuitos, ache primeiro a resistência equivalente e depois use U = R · i.', 'Em calorimetria, converta massa para gramas se o calor específico vier em cal/g·°C.', 'Em óptica, a imagem no espelho plano fica à mesma distância do espelho que o objeto.', 'Em gravitação, trabalhe com razões: se a distância triplica, a força fica dividida por 3².'],
  'Esquecer que potência elétrica é P = U · i; usar a variação de temperatura errada (ΔT é final menos inicial); e confundir "distância ao espelho" com "distância entre objeto e imagem".',
  [
    ex('fisica-pratica-3', 1, F as Sub, 'Um resistor de 20 Ω é atravessado por uma corrente de 0,5 A. A tensão sobre ele é:', ['10 V', '20 V', '40 V', '0,025 V'], 0, 'Resposta A (10 V). Pela Lei de Ohm, U = R · i = 20 · 0,5 = 10 V.'),
    ex('fisica-pratica-3', 2, F as Sub, 'Um chuveiro de 4 400 W é ligado em 220 V. A corrente elétrica que o atravessa é:', ['10 A', '15 A', '20 A', '25 A'], 2, 'Resposta C (20 A). Como P = U · i, i = P/U = 4 400/220 = 20 A.'),
    ex('fisica-pratica-3', 3, F as Sub, 'Quantas calorias são necessárias para aquecer 500 g de uma substância de calor específico 0,2 cal/g·°C em 40 °C?', ['2 000 cal', '4 000 cal', '8 000 cal', '100 cal'], 1, 'Resposta B (4 000 cal). Q = m · c · ΔT = 500 · 0,2 · 40 = 4 000 cal.'),
    ex('fisica-pratica-3', 4, F as Sub, 'Uma pessoa está a 3 m de um espelho plano. A distância entre ela e a sua imagem é:', ['3 m', '4,5 m', '9 m', '6 m'], 3, 'Resposta D (6 m). A imagem se forma a 3 m atrás do espelho, e entre a pessoa e a imagem a distância é 3 + 3 = 6 m.'),
    ex('fisica-pratica-3', 5, F as Sub, 'Se a distância entre dois corpos for triplicada, a força gravitacional entre eles:', ['fica dividida por 9', 'fica dividida por 3', 'fica dividida por 6', 'fica multiplicada por 3'], 0, 'Resposta A. A força é inversamente proporcional ao quadrado da distância: 3² = 9, então a força fica 9 vezes menor.'),
  ],
)

export const QUIMICA_PRATICA_2: Lesson = simulado(
  'quimica-pratica-2',
  'Simulado de Química',
  'Revisão ativa dos temas que mais caem: mol e estequiometria, pH, estrutura atômica, ligações e reações.',
  ['Em cálculos, escreva a conversão em sequência: massa → mol → proporção da equação → massa ou volume.', 'Em ligações, pense: metal + ametal = iônica; ametal + ametal = covalente.', 'Em pH, lembre que cada unidade é 10 vezes e pH = −log[H⁺].', 'Em orgânica, localize primeiro o grupo funcional (OH, CHO, COOH...).'],
  'Usar mL em vez de L na concentração; esquecer de balancear antes da estequiometria; confundir número de massa (A) com número atômico (Z); e trocar oxidação (perde elétrons) com redução (ganha).',
  [
    ex('quimica-pratica-2', 1, Q as Sub, 'A massa de 2 mol de CO₂ (C = 12 e O = 16) é:', ['44 g', '66 g', '88 g', '132 g'], 2, 'Resposta C (88 g). M(CO₂) = 12 + 32 = 44 g/mol. Para 2 mol: 2 · 44 = 88 g.'),
    ex('quimica-pratica-2', 2, Q as Sub, 'Em uma solução de pH igual a 4, a concentração de íons H⁺ é:', ['10⁻¹⁰ mol/L', '10⁻⁴ mol/L', '10⁴ mol/L', '4 mol/L'], 1, 'Resposta B (10⁻⁴ mol/L). Como pH = −log [H⁺], [H⁺] = 10^(−pH) = 10⁻⁴ mol/L. É uma solução ácida.'),
    ex('quimica-pratica-2', 3, Q as Sub, 'Um átomo de ferro tem número atômico 26 e número de massa 56. O número de nêutrons é:', ['26', '56', '82', '30'], 3, 'Resposta D (30). n = A − Z = 56 − 26 = 30. O número atômico (26) é a quantidade de prótons.'),
    ex('quimica-pratica-2', 4, Q as Sub, 'O brometo de potássio (KBr), formado por um metal e um ametal, apresenta ligação:', ['iônica', 'covalente', 'metálica', 'de hidrogênio'], 0, 'Resposta A (iônica). O potássio (metal) transfere um elétron ao bromo (ametal), formando K⁺ e Br⁻ atraídos eletricamente.'),
    ex('quimica-pratica-2', 5, Q as Sub, 'Na reação HCl + NaOH → sal + água, o sal formado é:', ['HCl', 'NaCl', 'H₂', 'NaClO'], 1, 'Resposta B (NaCl). É a neutralização de um ácido por uma base: o cátion da base (Na⁺) e o ânion do ácido (Cl⁻) formam o sal cloreto de sódio.'),
  ],
)

export const BIOLOGIA_PRATICA_2: Lesson = simulado(
  'biologia-pratica-2',
  'Simulado de Biologia',
  'Citologia, genética, ecologia, fisiologia e evolução: os cinco blocos que mais aparecem na prova.',
  ['Em genética, escreva os genótipos e monte o quadro de Punnett antes de responder.', 'Em ecologia, identifique o nível trófico (produtor, consumidor primário...) e o tipo de relação.', 'Em questões de "assinale a incorreta", marque o enunciado e procure a afirmação que contradiz o conceito.', 'Em figuras de divisão celular, conte os cromossomos e veja se há pareamento de homólogos.'],
  'Trocar funções de organelas (lisossomo digere, mitocôndria respira); confundir mitose com meiose; chamar de mutualismo uma relação em que só um ganha; e atribuir à seleção natural a "vontade" do organismo.',
  [
    ex('biologia-pratica-2', 1, B as Sub, 'A organela responsável pela fotossíntese é o:', ['ribossomo', 'lisossomo', 'cloroplasto', 'complexo de Golgi'], 2, 'Resposta C (cloroplasto). É nele que, com a clorofila e a luz, o CO₂ e a água viram glicose e oxigênio. Só existe em plantas e algas.'),
    ex('biologia-pratica-2', 2, B as Sub, 'No cruzamento Aa × aa, a probabilidade de nascer um descendente aa é:', ['1/2', '1/4', '3/4', '0'], 0, 'Resposta A (1/2). Os gametas de Aa são A e a; os de aa são só a. Os filhos são Aa ou aa, cada um com 1/2.'),
    ex('biologia-pratica-2', 3, B as Sub, 'A relação entre o carrapato e o boi, em que o carrapato se alimenta do sangue do boi, é:', ['mutualismo', 'parasitismo', 'predação', 'comensalismo'], 1, 'Resposta B (parasitismo). Um organismo (parasita) se beneficia e prejudica o hospedeiro, sem matá-lo rapidamente. Na predação, o predador mata a presa.'),
    ex('biologia-pratica-2', 4, B as Sub, 'O órgão que produz a insulina é o:', ['estômago', 'fígado', 'rim', 'pâncreas'], 3, 'Resposta D (pâncreas). A insulina reduz a glicose do sangue. Quando falta ou não age direito, ocorre o diabetes.'),
    ex('biologia-pratica-2', 5, B as Sub, 'Em uma população de insetos tratada com inseticida, sobrevivem e se reproduzem os que já eram resistentes. Esse fenômeno é explicado por:', ['deriva genética', 'uso e desuso', 'seleção natural', 'mutação dirigida pelo ambiente'], 2, 'Resposta C (seleção natural). O inseticida não "cria" a resistência: ele seleciona os indivíduos que já a tinham, que deixam mais descendentes.'),
  ],
)

export const PORTUGUES_PRATICA_2: Lesson = simulado(
  'portugues-pratica-2',
  'Simulado de Português',
  'Interpretação, gramática e literatura: na prova são 6 questões, em geral com texto, tirinha ou trecho literário.',
  ['Leia o texto uma vez, depois a pergunta, e volte ao trecho citado.', 'Em "assinale a incorreta", procure a alternativa que exagera, inventa ou inverte o texto.', 'Em concordância, ache o sujeito; "haver" (existir) e "fazer" (tempo) ficam no singular.', 'Em literatura, ligue a escola à ideia central: Barroco = conflito, Romantismo = emoção, Realismo = crítica, Modernismo = ruptura.'],
  'Pôr crase antes de palavra masculina, de verbo ou de pronome pessoal; trocar "mas/mais" e "há/a"; e responder pela opinião própria em vez de pelo que o texto diz.',
  [
    ex('portugues-pratica-2', 1, P as Sub, 'Assinale a alternativa com a concordância CORRETA.', ['Haviam muitas inscrições abertas.', 'Houve muitas inscrições abertas.', 'Fazem três meses que estudo.', 'Existe muitos candidatos.'], 1, 'Resposta B. "Haver" no sentido de existir é impessoal e fica no singular (houve, não houveram). "Fazem" e "existe muitos" estão erradas.'),
    ex('portugues-pratica-2', 2, P as Sub, 'Assinale a frase em que o uso da crase está CORRETO.', ['Vou à Salvador no fim do ano.', 'Começou à chover forte.', 'Ele andou à pé até a escola.', 'Entreguei o trabalho à professora.'], 3, 'Resposta D. "Entregar" pede a preposição a, e "professora" aceita o artigo a: a + a = à. Em A (cidade sem artigo), B (verbo) e C (palavra masculina) não há crase.'),
    ex('portugues-pratica-2', 3, P as Sub, 'Texto: "A cidade ampliou as ciclovias, mas poucos moradores deixaram o carro em casa." A ideia do texto é que:', ['todos passaram a usar bicicleta', 'a medida teve pouco efeito sobre o uso do carro', 'as ciclovias foram proibidas', 'o carro foi banido da cidade'], 1, 'Resposta B. O "mas" marca contraste: apesar de ampliar as ciclovias, poucos moradores deixaram o carro. Nada fala de proibição.'),
    ex('portugues-pratica-2', 4, P as Sub, 'Lirismo amoroso, subjetividade, idealização da mulher e "mal do século" são características do:', ['Barroco', 'Realismo', 'Romantismo', 'Parnasianismo'], 2, 'Resposta C (Romantismo, em especial a 2ª geração, ultrarromântica). O Realismo é objetivo e crítico; o Parnasianismo valoriza a forma.'),
    ex('portugues-pratica-2', 5, P as Sub, 'Em "Alô? Você está me ouvindo?", predomina a função da linguagem:', ['fática', 'referencial', 'conativa', 'poética'], 0, 'Resposta A (fática). A frase testa o canal de comunicação, verifica se o contato está funcionando.'),
  ],
)

export const MATEMATICA_PRATICA_3: Lesson = simulado(
  'matematica-pratica-3',
  'Simulado de Matemática 1',
  'Na prova são 6 questões de Matemática, e elas misturam álgebra, funções, sequências, geometria e probabilidade.',
  ['Comece pelas que você domina e volte às difíceis depois: todas valem 2 pontos.', 'Teste as alternativas quando a conta for longa: muitas vezes é mais rápido do que resolver.', 'Faça um desenho em geometria e anote os dados na figura.', 'Confira se respondeu o que foi perguntado (perímetro ou área, x ou 2x).'],
  'Somar percentuais em vez de multiplicar fatores; esquecer o sinal do vértice; confundir n com o valor do termo na PA; e usar o perímetro no lugar da área (ou vice-versa).',
  [
    ex('matematica-pratica-3', 1, M as Sub, 'Um salário de R$ 2.000,00 recebe aumento de 10% e, em seguida, desconto de 10%. O valor final é:', ['R$ 1.800,00', 'R$ 1.980,00', 'R$ 2.000,00', 'R$ 2.020,00'], 1, 'Resposta B (R$ 1.980,00). Fatores multiplicados: 2 000 · 1,1 · 0,9 = 1 980. O desconto incide sobre um valor maior, então não volta ao original.'),
    ex('matematica-pratica-3', 2, M as Sub, 'O lucro L(x) = −x² + 10x − 16, com x em milhares de unidades, tem valor máximo igual a:', ['4', '5', '9', '25'], 2, 'Resposta C (9). O máximo está no vértice: xv = −10/(2 · (−1)) = 5. L(5) = −25 + 50 − 16 = 9.'),
    ex('matematica-pratica-3', 3, M as Sub, 'Em uma PA, o primeiro termo é 5 e a razão é 3. A soma dos 10 primeiros termos é:', ['185', '155', '170', '200'], 0, 'Resposta A (185). a₁₀ = 5 + 9 · 3 = 32. S₁₀ = (5 + 32) · 10 / 2 = 185.'),
    ex('matematica-pratica-3', 4, M as Sub, 'Um terreno retangular tem perímetro de 60 m e comprimento igual ao dobro da largura. Sua área é:', ['100 m²', '150 m²', '300 m²', '200 m²'], 3, 'Resposta D (200 m²). Com largura x e comprimento 2x: 2(x + 2x) = 60, então 6x = 60 e x = 10. Os lados são 10 m e 20 m, e a área é 10 · 20 = 200 m².'),
    ex('matematica-pratica-3', 5, M as Sub, 'Uma urna tem 3 bolas vermelhas e 2 azuis. Retirando duas bolas, sem reposição, a probabilidade de ambas serem vermelhas é:', ['1/5', '3/10', '2/5', '9/25'], 1, 'Resposta B (3/10). P(1ª vermelha) = 3/5 e, sem reposição, P(2ª vermelha) = 2/4. Multiplicando: 3/5 · 2/4 = 6/20 = 3/10.'),
  ],
)

export const MATEMATICA_PRATICA_4: Lesson = simulado(
  'matematica-pratica-4',
  'Simulado de Matemática 2',
  'Segundo simulado de Matemática: sistemas, geometria espacial, trigonometria, geometria analítica e logaritmos.',
  ['Em sistemas, elimine uma incógnita somando ou substituindo.', 'Lembre as fórmulas de volume: prisma e cilindro = área da base × altura; cone e pirâmide = 1/3 disso.', 'Decore os valores notáveis: sen 30° = 1/2, sen 45° = √2/2, sen 60° = √3/2.', 'Logaritmo é um expoente: log₃ 81 = 4 porque 3⁴ = 81.'],
  'Esquecer o 1/3 do cone; trocar seno por cosseno; esquecer de elevar ao quadrado na distância entre pontos; e confundir a base com o logaritmando.',
  [
    ex('matematica-pratica-4', 1, M as Sub, 'Se x + 2y = 11 e 3x − y = 5, o valor de x · y é:', ['7', '10', '12', '14'], 2, 'Resposta C (12). De x = 11 − 2y: 3(11 − 2y) − y = 5 → 33 − 7y = 5 → y = 4 e x = 3. Então x · y = 12.'),
    ex('matematica-pratica-4', 2, M as Sub, 'O volume de um cilindro de raio da base 3 cm e altura 10 cm é:', ['90π cm³', '30π cm³', '60π cm³', '270π cm³'], 0, 'Resposta A (90π cm³). V = π r² h = π · 9 · 10 = 90π cm³.'),
    ex('matematica-pratica-4', 3, M as Sub, 'O valor de sen 30° + cos 60° é:', ['0', '1', '1/2', '2'], 1, 'Resposta B (1). sen 30° = 1/2 e cos 60° = 1/2. A soma é 1.'),
    ex('matematica-pratica-4', 4, M as Sub, 'A distância entre os pontos (0, 0) e (6, 8) é:', ['8', '12', '14', '10'], 3, 'Resposta D (10). d = √(6² + 8²) = √(36 + 64) = √100 = 10 (terna 6-8-10).'),
    ex('matematica-pratica-4', 5, M as Sub, 'O valor de log₃ 81 é:', ['3', '9', '4', '27'], 2, 'Resposta C (4). log₃ 81 é o expoente de 3 que dá 81: 3⁴ = 81.'),
  ],
)

export const GEOGRAFIA_PRATICA_1: Lesson = simulado(
  'geografia-pratica-1',
  'Simulado de Geografia',
  'Cartografia, fusos, biomas, energia e blocos econômicos: os temas mais frequentes de Geografia na UEMG.',
  ['Em fusos, converta para UTC: horário local − fuso = UTC; depois some o fuso do destino.', 'Em escala, multiplique a medida do mapa pelo denominador e converta de cm para km.', 'Em biomas, ligue clima + vegetação + região (Caatinga = semiárido; Pantanal = alagável).', 'Em atualidades, relacione o fato ao conceito: globalização, bloco econômico, matriz energética.'],
  'Esquecer que a leste as horas ficam adiantadas; esquecer a conversão cm → km; e chamar o Pampa de semiárido.',
  [
    ex('geografia-pratica-1', 1, G as Sub, 'Quando são 15h em Brasília (UTC−3), em Lisboa (UTC 0) são:', ['12h', '15h', '18h', '21h'], 2, 'Resposta C (18h). Lisboa está 3 fusos a leste, então o horário é adiantado em 3 horas: 15h + 3h = 18h.'),
    ex('geografia-pratica-1', 2, G as Sub, 'Em um mapa com escala 1 : 500 000, 3 cm representam, na realidade:', ['15 km', '1,5 km', '150 km', '5 km'], 0, 'Resposta A (15 km). 3 cm × 500 000 = 1 500 000 cm = 15 km (100 000 cm = 1 km).'),
    ex('geografia-pratica-1', 3, G as Sub, 'O bioma brasileiro caracterizado por uma grande planície alagável é o:', ['Cerrado', 'Pantanal', 'Pampa', 'Caatinga'], 1, 'Resposta B (Pantanal). É a maior planície alagável do mundo, com cheias periódicas e grande biodiversidade.'),
    ex('geografia-pratica-1', 4, G as Sub, 'Entre as fontes de energia abaixo, a renovável é a:', ['petróleo', 'carvão mineral', 'gás natural', 'solar'], 3, 'Resposta D (solar). Petróleo, carvão e gás natural são combustíveis fósseis, não renováveis.'),
    ex('geografia-pratica-1', 5, G as Sub, 'Um dos países que fazem parte do Mercosul, junto com Brasil, Argentina e Paraguai, é:', ['o Chile', 'o Peru', 'o Uruguai', 'a Colômbia'], 2, 'Resposta C (Uruguai). O Mercosul foi formado por Brasil, Argentina, Paraguai e Uruguai.'),
  ],
)

export const HISTORIA_PRATICA_1: Lesson = simulado(
  'historia-pratica-1',
  'Simulado de História',
  'Datas e conceitos-chave: Revolução Francesa, Brasil colônia e Império, Era Vargas, Guerra Fria e ditadura.',
  ['Monte uma linha do tempo mental: 1789 (França), 1822 (Independência), 1888 (Abolição), 1889 (República), 1930 (Vargas), 1964 (golpe), 1985 (fim da ditadura).', 'Em textos, ache o período pelas pistas (rei absoluto, escravidão, voto de cabresto, AI-5).', 'Relacione causa e consequência: por que aconteceu e o que mudou.', 'Em "assinale a incorreta", cuidado com datas trocadas e personagens fora de época.'],
  'Confundir independência (1822) com república (1889); trocar Lei Áurea (1888) com Lei do Ventre Livre (1871); e esquecer que a ditadura militar acabou em 1985, e não em 1988.',
  [
    ex('historia-pratica-1', 1, H as Sub, 'A Revolução Francesa teve início em:', ['1776', '1789', '1822', '1914'], 1, 'Resposta B (1789). A queda da Bastilha, em 14 de julho, é o símbolo do início. 1776 é a independência dos EUA e 1822, a do Brasil.'),
    ex('historia-pratica-1', 2, H as Sub, 'O ciclo do ouro em Minas Gerais ocorreu, principalmente, no século:', ['XVI', 'XVII', 'XVIII', 'XIX'], 2, 'Resposta C (XVIII). A mineração atraiu milhares de pessoas e levou a capital da colônia de Salvador para o Rio de Janeiro, em 1763.'),
    ex('historia-pratica-1', 3, H as Sub, 'A Consolidação das Leis do Trabalho (CLT) foi criada, na Era Vargas, em:', ['1943', '1930', '1937', '1964'], 0, 'Resposta A (1943). Ela reuniu os direitos trabalhistas durante o Estado Novo, ao lado do salário mínimo (1940).'),
    ex('historia-pratica-1', 4, H as Sub, 'A queda do Muro de Berlim, símbolo do fim da Guerra Fria, ocorreu em:', ['1961', '1975', '1991', '1989'], 3, 'Resposta D (1989). O muro foi construído em 1961. A URSS foi dissolvida em 1991.'),
    ex('historia-pratica-1', 5, H as Sub, 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em:', ['1871', '1888', '1850', '1889'], 1, 'Resposta B (1888), pela Princesa Isabel. 1871 é a Lei do Ventre Livre, 1850 é a proibição do tráfico e 1889 é a Proclamação da República.'),
  ],
)

export const LESSONS_WEEK8: Lesson[] = [
  INGLES_PRATICA_2,
  FISICA_PRATICA_2,
  MATEMATICA_PRATICA_3,
  PORTUGUES_PRATICA_2,
  FISICA_PRATICA_3,
  BIOLOGIA_PRATICA_2,
  QUIMICA_PRATICA_2,
  GEOGRAFIA_PRATICA_1,
  MATEMATICA_PRATICA_4,
  HISTORIA_PRATICA_1,
]
