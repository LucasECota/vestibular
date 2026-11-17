import type { Exercise } from '../exercises'
import { exd } from '../lessons/helpers'

/** Questões extras das tarefas de 6 a 15/01 (simulados e revisões). */
export const EXTRAS_WEEK8: Record<string, Exercise[]> = {
  'ingles-pratica-2': [
    exd('ingles-pratica-2', 6, 'ingles', 'dificil', 'Em "If I had studied, I would have passed the exam", a frase sugere que:', ['a pessoa estudou e passou', 'a pessoa estudou e não passou', 'a pessoa vai estudar e passar', 'a pessoa não estudou e não passou'], 3, 'Resposta D. O terceiro condicional (if + past perfect, would have + particípio) fala de uma situação irreal no passado: ela não estudou, por isso não passou.'),
    exd('ingles-pratica-2', 7, 'ingles', 'dificil', 'Complete: "The book, ____ was written in 1900, is still popular."', ['who', 'which', 'whose', 'what'], 1, 'Resposta B (which). O pronome relativo which retoma uma coisa (the book), e a oração entre vírgulas apenas acrescenta uma informação.'),
  ],

  'fisica-pratica-2': [
    exd('fisica-pratica-2', 6, 'fisica', 'media', 'Um corpo de volume 0,001 m³ está totalmente submerso na água (ρ = 1 000 kg/m³, g = 10 m/s²). O empuxo que age sobre ele é:', ['1 N', '100 N', '10 N', '0,1 N'], 2, 'Resposta C (10 N). E = ρ · g · V = 1 000 · 10 · 0,001 = 10 N.'),
    exd('fisica-pratica-2', 7, 'fisica', 'dificil', 'Um carro de 1 000 kg a 20 m/s freia até parar em 40 m, com força constante. A força média de frenagem é:', ['2 500 N', '5 000 N', '10 000 N', '20 000 N'], 1, 'Resposta B (5 000 N). A variação da energia cinética é 1 000 · 400/2 = 200 000 J. Esse trabalho é feito pela força de frenagem: F · 40 = 200 000, então F = 5 000 N.'),
    exd('fisica-pratica-2', 8, 'fisica', 'dificil', 'Pela 3ª lei de Kepler (T² proporcional a R³), um planeta cuja órbita tem raio 4 vezes maior que a da Terra tem período de:', ['4 anos', '8 anos', '16 anos', '64 anos'], 1, 'Resposta B (8 anos). T² = R³ (em anos e UA). Com R = 4: T² = 64, então T = 8 anos.'),
  ],

  'matematica-pratica-3': [
    exd('matematica-pratica-3', 6, 'matematica', 'media', 'O produto das raízes da equação x² − 7x + 10 = 0 é:', ['7', '10', '−10', '5'], 1, 'Resposta B (10). Pelas relações de Girard, o produto das raízes é c/a = 10. (As raízes são 2 e 5.)'),
    exd('matematica-pratica-3', 7, 'matematica', 'media', 'O sexto termo da PG (2, 6, 18, ...) é:', ['162', '486', '1 458', '54'], 1, 'Resposta B (486). A razão é 3, e a₆ = 2 · 3⁵ = 2 · 243 = 486.'),
    exd('matematica-pratica-3', 8, 'matematica', 'dificil', 'A circunferência de centro (1, 2) e tangente ao eixo x tem equação:', ['(x − 1)² + (y − 2)² = 1', '(x − 1)² + (y − 2)² = 4', '(x − 1)² + (y − 2)² = 2', '(x + 1)² + (y + 2)² = 4'], 1, 'Resposta B. Como o centro está a 2 unidades do eixo x, o raio é 2 e r² = 4: (x − 1)² + (y − 2)² = 4.'),
    exd('matematica-pratica-3', 9, 'matematica', 'dificil', 'O número de anagramas da palavra ARARA é:', ['120', '60', '20', '10'], 3, 'Resposta D (10). São 5 letras, com A repetida 3 vezes e R repetida 2 vezes: 5!/(3! · 2!) = 120/12 = 10.'),
  ],

  'portugues-pratica-2': [
    exd('portugues-pratica-2', 6, 'portugues', 'dificil', 'Em qual frase há erro de concordância com a partícula apassivadora "se"?', ['Vendem-se casas.', 'Vende-se casas.', 'Alugam-se salas.', 'Consertam-se bicicletas.'], 1, 'Resposta B. Com a partícula apassivadora, o verbo concorda com o sujeito paciente: "casas" é plural, então "Vendem-se casas". Se o verbo for transitivo indireto (Precisa-se de casas), ele fica no singular.'),
  ],

  'fisica-pratica-3': [
    exd('fisica-pratica-3', 6, 'fisica', 'media', 'Uma lâmpada de 60 W fica acesa por 5 horas. A energia consumida é:', ['0,3 kWh', '3 kWh', '12 kWh', '0,12 kWh'], 0, 'Resposta A (0,3 kWh). 60 W = 0,06 kW, e 0,06 · 5 = 0,3 kWh.'),
    exd('fisica-pratica-3', 7, 'fisica', 'media', 'Quanto calor é necessário para aquecer 200 g de uma substância (c = 0,5 cal/g·°C) em 40 °C?', ['1 000 cal', '2 000 cal', '8 000 cal', '4 000 cal'], 3, 'Resposta D (4 000 cal). Q = m · c · ΔT = 200 · 0,5 · 40 = 4 000 cal.'),
    exd('fisica-pratica-3', 8, 'fisica', 'dificil', 'Uma lente convergente tem distância focal de 25 cm. Sua vergência (grau) é:', ['0,25 di', '25 di', '4 di', '2,5 di'], 2, 'Resposta C (4 di). A vergência é V = 1/f, com f em metros: 1/0,25 = 4 dioptrias.'),
    exd('fisica-pratica-3', 9, 'fisica', 'dificil', 'Uma bateria de 12 V alimenta dois resistores em série, de 2 Ω e 4 Ω. A tensão sobre o resistor de 4 Ω é:', ['4 V', '12 V', '6 V', '8 V'], 3, 'Resposta D (8 V). A resistência total é 6 Ω, então i = 12/6 = 2 A. A tensão no de 4 Ω é U = R · i = 4 · 2 = 8 V.'),
  ],

  'biologia-pratica-2': [
    exd('biologia-pratica-2', 6, 'biologia', 'dificil', 'No cruzamento AaBb × AaBb (genes com segregação independente), a probabilidade de nascer um descendente aabb é:', ['1/4', '1/8', '1/16', '1/2'], 2, 'Resposta C (1/16). A probabilidade de aa é 1/4 e a de bb é 1/4. Como os genes se segregam independentemente, 1/4 · 1/4 = 1/16.'),
  ],

  'quimica-pratica-2': [
    exd('quimica-pratica-2', 6, 'quimica', 'dificil', 'Na reação CaO + H₂O → Ca(OH)₂, quantos gramas de Ca(OH)₂ se formam a partir de 5,6 g de CaO? (Ca = 40; O = 16; H = 1)', ['5,6 g', '7,4 g', '3,7 g', '14,8 g'], 1, 'Resposta B (7,4 g). A massa molar do CaO é 56 g/mol, então 5,6 g são 0,1 mol. A proporção é 1 : 1, e a massa molar do Ca(OH)₂ é 74 g/mol: 0,1 · 74 = 7,4 g.'),
    exd('quimica-pratica-2', 7, 'quimica', 'dificil', 'Uma solução 0,1 mol/L de um ácido fraco está ionizada em apenas 1%. O pH dessa solução é:', ['1', '2', '3', '4'], 2, 'Resposta C (3). [H⁺] = 1% de 0,1 mol/L = 10⁻³ mol/L, então pH = 3. (Um ácido forte na mesma concentração teria pH 1.)'),
  ],

  'geografia-pratica-1': [
    exd('geografia-pratica-1', 6, 'geografia', 'dificil', 'Quando são 20h em São Paulo (UTC−3), em Tóquio (UTC+9) são:', ['8h do dia seguinte', '8h do mesmo dia', '14h do mesmo dia', '2h do dia seguinte'], 0, 'Resposta A. A diferença é de 12 horas (de −3 a +9), e Tóquio está à frente. 20h + 12h = 32h, ou seja, 8h do dia seguinte.'),
  ],

  'matematica-pratica-4': [
    exd('matematica-pratica-4', 6, 'matematica', 'media', 'A solução da inequação 2x − 5 > 7 é:', ['x > 1', 'x > 6', 'x < 6', 'x > 12'], 1, 'Resposta B (x > 6). 2x > 12, então x > 6.'),
    exd('matematica-pratica-4', 7, 'matematica', 'media', 'A área do triângulo de vértices (0, 0), (4, 0) e (0, 3) é:', ['12', '7', '5', '6'], 3, 'Resposta D (6). É um triângulo retângulo de catetos 4 e 3: A = 4 · 3/2 = 6.'),
    exd('matematica-pratica-4', 8, 'matematica', 'dificil', 'A solução da equação log₂ x + log₂ (x − 2) = 3 é:', ['x = 4', 'x = −2', 'x = 2', 'x = 8'], 0, 'Resposta A (x = 4). log₂ [x(x − 2)] = 3 → x² − 2x = 8 → x² − 2x − 8 = 0 → x = 4 ou x = −2. Como x e x − 2 precisam ser positivos, só vale x = 4.'),
    exd('matematica-pratica-4', 9, 'matematica', 'dificil', 'No intervalo [0, π/2], a equação sen x + cos x = √2 tem solução:', ['x = π/6', 'x = π/3', 'x = π/2', 'x = π/4'], 3, 'Resposta D (π/4). Em x = π/4, sen x = cos x = √2/2, e a soma é √2. É o valor máximo de sen x + cos x.'),
  ],

  'historia-pratica-1': [
    exd('historia-pratica-1', 6, 'historia', 'dificil', 'A Inconfidência Mineira (1789) foi motivada principalmente:', ['pela abolição da escravidão', 'pela chegada da família real', 'pelo peso dos tributos e pela ameaça da derrama, junto com a influência de ideias iluministas', 'pela Guerra do Paraguai'], 2, 'Resposta C. A queda da produção de ouro, o quinto e a derrama, somados às ideias iluministas e à independência dos EUA, levaram à conspiração. O movimento foi descoberto, e Tiradentes foi executado.'),
  ],

  'ingles-revisao': [
    exd('ingles-revisao', 6, 'ingles', 'media', 'Complete: "She ____ been studying since morning."', ['have', 'has', 'is', 'was'], 1, 'Resposta B (has). O present perfect continuous usa have/has been + verbo -ing. Com she, usa-se has.'),
    exd('ingles-revisao', 7, 'ingles', 'media', 'Complete: "I\'m looking forward to ____ you."', ['see', 'saw', 'seeing', 'seen'], 2, 'Resposta C (seeing). Depois de "look forward to", usa-se o gerúndio (verbo + -ing), pois "to" é preposição.'),
    exd('ingles-revisao', 8, 'ingles', 'media', 'Complete: "He is the man ____ car was stolen."', ['who', 'whom', 'which', 'whose'], 3, 'Resposta D (whose). O pronome relativo whose indica posse: o carro do homem.'),
    exd('ingles-revisao', 9, 'ingles', 'media', 'O oposto de "always" é:', ['never', 'often', 'usually', 'sometimes'], 0, 'Resposta A (never). Na escala de frequência: always, usually, often, sometimes, rarely, never.'),
    exd('ingles-revisao', 10, 'ingles', 'media', 'Complete: "I have lived here ____ 2015."', ['for', 'since', 'ago', 'during'], 1, 'Resposta B (since). Since indica o ponto de partida (2015), e for indica duração (for ten years).'),
    exd('ingles-revisao', 11, 'ingles', 'dificil', 'Complete: "Neither Tom nor his friends ____ coming to the party."', ['is', 'was', 'are', 'be'], 2, 'Resposta C (are). Com neither... nor, o verbo concorda com o sujeito mais próximo: "his friends" (plural).'),
    exd('ingles-revisao', 12, 'ingles', 'dificil', 'Complete: "I wish I ____ more time to study."', ['have', 'will have', 'has', 'had'], 3, 'Resposta D (had). Depois de "wish", para um desejo sobre o presente, usa-se o passado: I wish I had.'),
  ],

  'quimica-revisao': [
    exd('quimica-revisao', 6, 'quimica', 'media', 'A fórmula do ácido sulfúrico é:', ['H₂S', 'H₂SO₃', 'H₂SO₄', 'HNO₃'], 2, 'Resposta C (H₂SO₄). H₂S é o ácido sulfídrico, H₂SO₃ é o sulfuroso, e HNO₃ é o nítrico.'),
    exd('quimica-revisao', 7, 'quimica', 'media', 'Em uma solução de pH 3, a concentração de H⁺ é:', ['10⁻¹¹ mol/L', '10⁻³ mol/L', '3 mol/L', '10³ mol/L'], 1, 'Resposta B (10⁻³ mol/L). pH = −log [H⁺], então [H⁺] = 10⁻ᵖᴴ = 10⁻³.'),
    exd('quimica-revisao', 8, 'quimica', 'media', 'Na equação Al + O₂ → Al₂O₃, depois de balanceada com os menores números inteiros, a soma dos coeficientes é:', ['6', '7', '8', '9'], 3, 'Resposta D (9). 4 Al + 3 O₂ → 2 Al₂O₃. A soma é 4 + 3 + 2 = 9.'),
    exd('quimica-revisao', 9, 'quimica', 'media', 'Uma solução tem 0,2 mol de NaCl em 500 mL. A concentração em mol/L é:', ['0,4', '0,1', '0,2', '1,0'], 0, 'Resposta A (0,4 mol/L). 500 mL = 0,5 L, então M = 0,2/0,5 = 0,4 mol/L.'),
    exd('quimica-revisao', 10, 'quimica', 'media', 'Em uma pilha, a oxidação ocorre no:', ['cátodo', 'ânodo', 'fio', 'sal'], 1, 'Resposta B (ânodo). Oxidação no ânodo e redução no cátodo (mnemônico: "an-ox", "red-cat").'),
    exd('quimica-revisao', 11, 'quimica', 'dificil', 'Em 3,01 · 10²³ moléculas de água (constante de Avogadro = 6,02 · 10²³; H₂O = 18 g/mol), a massa é:', ['18 g', '36 g', '9 g', '4,5 g'], 2, 'Resposta C (9 g). 3,01 · 10²³ é metade de 6,02 · 10²³, ou seja, 0,5 mol. A massa é 0,5 · 18 = 9 g.'),
    exd('quimica-revisao', 12, 'quimica', 'dificil', 'No equilíbrio 2 NO₂ ⇌ N₂O₄ (ΔH < 0, no sentido direto), um aumento de temperatura:', ['favorece a formação de N₂O₄', 'não altera o equilíbrio', 'favorece a formação de NO₂ (sentido inverso, endotérmico)', 'aumenta o ΔH'], 2, 'Resposta C. O aquecimento favorece a reação endotérmica. Como o sentido direto é exotérmico, o equilíbrio se desloca para a esquerda, formando mais NO₂.'),
  ],

  'matematica-revisao': [
    exd('matematica-revisao', 6, 'matematica', 'media', 'A soma das raízes de x² − 5x + 6 = 0 é:', ['6', '5', '−5', '1'], 1, 'Resposta B (5). Pelas relações de Girard, a soma é −b/a = 5. (As raízes são 2 e 3.)'),
    exd('matematica-revisao', 7, 'matematica', 'media', 'O vigésimo termo da PA (2, 5, 8, ...) é:', ['57', '60', '59', '62'], 2, 'Resposta C (59). a₂₀ = a₁ + 19r = 2 + 19 · 3 = 59.'),
    exd('matematica-revisao', 8, 'matematica', 'media', 'A solução de 2ˣ = 64 é:', ['5', '7', '8', '6'], 3, 'Resposta D (6). 64 = 2⁶, então x = 6.'),
    exd('matematica-revisao', 9, 'matematica', 'media', 'O volume de um cubo de aresta 4 cm é:', ['64 cm³', '16 cm³', '48 cm³', '96 cm³'], 0, 'Resposta A (64 cm³). V = 4³ = 64 cm³. A área total seria 6 · 16 = 96 cm².'),
    exd('matematica-revisao', 10, 'matematica', 'media', 'A média aritmética de 10, 12, 8, 14 e 6 é:', ['9', '12', '11', '10'], 3, 'Resposta D (10). (10 + 12 + 8 + 14 + 6)/5 = 50/5 = 10.'),
    exd('matematica-revisao', 11, 'matematica', 'dificil', 'Uma função afim f(x) = ax + b satisfaz f(1) = 5 e f(3) = 11. O valor de f(0) é:', ['2', '3', '1', '5'], 0, 'Resposta A (2). a = (11 − 5)/(3 − 1) = 3. Com f(1) = 5: 3 + b = 5, então b = 2 e f(0) = 2.'),
    exd('matematica-revisao', 12, 'matematica', 'dificil', 'O número de diagonais de um hexágono é:', ['6', '12', '9', '15'], 2, 'Resposta C (9). d = n(n − 3)/2 = 6 · 3/2 = 9.'),
  ],

  'portugues-revisao': [
    exd('portugues-revisao', 6, 'portugues', 'media', 'O autor de "Memórias Póstumas de Brás Cubas", obra inaugural do Realismo brasileiro, é:', ['José de Alencar', 'Machado de Assis', 'Aluísio Azevedo', 'Graciliano Ramos'], 1, 'Resposta B (Machado de Assis). Publicada em 1881, a obra tem um narrador defunto e irônico.'),
    exd('portugues-revisao', 7, 'portugues', 'media', 'Qual frase está de acordo com a norma-padrão?', ['Haviam muitos alunos na sala.', 'Fazem dois anos que ele saiu.', 'Houveram problemas na reunião.', 'Havia muitos alunos na sala.'], 3, 'Resposta D. "Haver" no sentido de existir é impessoal e fica no singular, e "fazer" indicando tempo também.'),
    exd('portugues-revisao', 8, 'portugues', 'media', 'Complete com a ou à: "Entreguei o convite ___ minha vizinha."', ['a', 'à', 'há', 'as'], 1, 'Resposta B (à). Entregar pede a preposição a, e "minha vizinha" admite artigo: a + a = à.'),
    exd('portugues-revisao', 9, 'portugues', 'media', 'Em "A reunião será na terça, às 14h, na sala 3", predomina a função da linguagem:', ['emotiva', 'poética', 'conativa', 'referencial'], 3, 'Resposta D (referencial). O texto informa dados objetivos, sem emoção nem apelo.'),
    exd('portugues-revisao', 10, 'portugues', 'media', 'Em "Chegaram os convidados", o sujeito é:', ['os convidados (posposto ao verbo)', 'inexistente', 'indeterminado', 'chegaram'], 0, 'Resposta A. O sujeito vem depois do verbo (sujeito posposto) e concorda com ele: quem chegou? Os convidados.'),
    exd('portugues-revisao', 11, 'portugues', 'dificil', 'Qual frase está correta quanto ao uso da crase?', ['Fui à Roma.', 'Cheguei à pé.', 'Fui a Roma.', 'Estou disposto à ajudar.'], 2, 'Resposta C. Nomes de cidades normalmente não admitem artigo: "Fui a Roma". Não há crase antes de palavras masculinas ("a pé") nem antes de verbos ("a ajudar").'),
    exd('portugues-revisao', 12, 'portugues', 'dificil', 'Em "Embora estivesse cansado, continuou a trabalhar", a oração iniciada por "embora" é:', ['subordinada adverbial concessiva', 'subordinada adverbial causal', 'coordenada adversativa', 'subordinada adverbial condicional'], 0, 'Resposta A. "Embora" exprime concessão: uma ideia que seria um obstáculo, mas não impediu a ação principal.'),
  ],

  'fisica-revisao': [
    exd('fisica-revisao', 6, 'fisica', 'media', 'Um carro a 72 km/h, em movimento uniforme, percorre em 5 s a distância de:', ['72 m', '360 m', '100 m', '20 m'], 2, 'Resposta C (100 m). 72 km/h = 20 m/s, e Δs = 20 · 5 = 100 m.'),
    exd('fisica-revisao', 7, 'fisica', 'media', 'A energia cinética de um corpo de 4 kg com velocidade de 3 m/s é:', ['6 J', '12 J', '36 J', '18 J'], 3, 'Resposta D (18 J). Ec = m · v²/2 = 4 · 9/2 = 18 J.'),
    exd('fisica-revisao', 8, 'fisica', 'media', 'Para aquecer 100 g de água (c = 1 cal/g·°C) de 10 °C a 30 °C, é preciso:', ['2 000 cal', '1 000 cal', '3 000 cal', '200 cal'], 0, 'Resposta A (2 000 cal). Q = m · c · ΔT = 100 · 1 · 20 = 2 000 cal.'),
    exd('fisica-revisao', 9, 'fisica', 'media', 'Dois resistores de 5 Ω ligados em série a uma fonte de 10 V são percorridos por uma corrente de:', ['2 A', '1 A', '4 A', '0,5 A'], 1, 'Resposta B (1 A). A resistência total é 10 Ω, então i = U/R = 10/10 = 1 A.'),
    exd('fisica-revisao', 10, 'fisica', 'media', 'O som se propaga com maior velocidade:', ['no vácuo', 'nos gases', 'nos sólidos', 'não há diferença'], 2, 'Resposta C (nos sólidos). Quanto mais rígido e denso o meio, mais rápido o som viaja. No vácuo, ele não se propaga.'),
    exd('fisica-revisao', 11, 'fisica', 'dificil', 'Um objeto é lançado horizontalmente de uma altura de 20 m (g = 10 m/s²). O tempo de queda é:', ['4 s', '1 s', '10 s', '2 s'], 3, 'Resposta D (2 s). Na vertical, a queda é livre: 20 = 5t², então t² = 4 e t = 2 s. A velocidade horizontal não interfere no tempo.'),
    exd('fisica-revisao', 12, 'fisica', 'dificil', 'Um gás se expande a pressão constante de 100 Pa, passando de 2 m³ para 5 m³. O trabalho realizado é:', ['300 J', '200 J', '500 J', '700 J'], 0, 'Resposta A (300 J). Em uma transformação isobárica, W = P · ΔV = 100 · (5 − 2) = 300 J.'),
  ],

  'biologia-revisao': [
    exd('biologia-revisao', 6, 'biologia', 'media', 'A meiose produz células:', ['diploides, idênticas à original', 'haploides, que originam os gametas', 'sem material genético', 'só nas plantas'], 1, 'Resposta B. A meiose reduz à metade o número de cromossomos e forma gametas (nos animais) ou esporos (nas plantas).'),
    exd('biologia-revisao', 7, 'biologia', 'media', 'O tecido que transporta a seiva elaborada (rica em açúcares) nas plantas é o:', ['xilema', 'parênquima', 'floema', 'meristema'], 2, 'Resposta C (floema). O xilema leva a seiva bruta (água e sais) das raízes às folhas.'),
    exd('biologia-revisao', 8, 'biologia', 'media', 'No sangue humano, os leucócitos (glóbulos brancos) têm a função de:', ['transportar oxigênio', 'coagular o sangue', 'produzir hormônios', 'defender o corpo contra infecções'], 3, 'Resposta D. Eles combatem agentes infecciosos. As hemácias transportam O₂, e as plaquetas atuam na coagulação.'),
    exd('biologia-revisao', 9, 'biologia', 'media', 'A teoria da seleção natural foi proposta por:', ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Lamarck, como ideia principal'], 0, 'Resposta A. Darwin (e Wallace) propuseram que os indivíduos mais adaptados tendem a deixar mais descendentes. Lamarck propôs a lei do uso e desuso.'),
    exd('biologia-revisao', 10, 'biologia', 'media', 'O açúcar presente na molécula de DNA é a:', ['ribose', 'glicose', 'desoxirribose', 'frutose'], 2, 'Resposta C (desoxirribose). O DNA tem desoxirribose, e o RNA tem ribose.'),
    exd('biologia-revisao', 11, 'biologia', 'dificil', 'No cruzamento AaBb × AaBb (segregação independente), a probabilidade de nascer um descendente aaBb é:', ['1/16', '1/4', '3/16', '1/8'], 3, 'Resposta D (1/8). A probabilidade de aa é 1/4, e a de Bb é 1/2. Multiplicando: 1/4 · 1/2 = 1/8.'),
    exd('biologia-revisao', 12, 'biologia', 'dificil', 'Uma pessoa com sangue tipo O (sem aglutinogênios A e B nas hemácias) pode receber sangue de:', ['apenas tipo O', 'qualquer tipo', 'tipos A e B', 'apenas AB'], 0, 'Resposta A. Quem é do tipo O tem anticorpos anti-A e anti-B no plasma, então só pode receber sangue tipo O. Já o tipo O pode doar a todos (doador universal, no sistema ABO).'),
  ],
}
