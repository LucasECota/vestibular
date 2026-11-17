import type { Block, Lesson } from '../../domain/lesson'
import type { Exercise } from '../exercises'
import type { SubjectId } from '../../domain/types'
import { ex } from './helpers'

/**
 * Semana 9 (13 a 15/01): revisão final. Cada tarefa traz um resumão da matéria
 * (o que mais cai, fórmulas e armadilhas) e 5 questões rápidas.
 */
const resumao = (slug: string, title: string, blocks: Block[], exercises: Exercise[]): Lesson => ({
  slug,
  title,
  heading: 'Resumão',
  blocks: [
    { type: 'p', text: 'Esta é uma revisão rápida: leia sem pressa, marque o que ainda estiver confuso (e anote em Dúvidas) e faça as 5 questões no final. Não estude conteúdo novo agora, foque no que você já viu.' },
    ...blocks,
  ],
  exercises,
})

const M = 'matematica' as SubjectId
const F = 'fisica' as SubjectId
const Q = 'quimica' as SubjectId
const B = 'biologia' as SubjectId
const P = 'portugues' as SubjectId
const I = 'ingles' as SubjectId

export const INGLES_REVISAO: Lesson = resumao(
  'ingles-revisao',
  'Revisão final: Inglês',
  [
    { type: 'h', text: 'O que mais cai' },
    { type: 'list', items: ['Interpretação de textos curtos (notícia, tirinha, poema): ideia principal e informação específica.', 'Pronomes e a quem se referem (it, they, this, its × it\'s).', 'Conectivos (but, however, because, so) e seus valores.', 'Tempos verbais (presente, passado, futuro) e auxiliares (do, does, did).', 'Falsos cognatos e any/some.'] },
    { type: 'h', text: 'Quadro rápido' },
    { type: 'table', head: ['Tema', 'Lembrar'], rows: [
      ['Presente simples', 'he/she/it + s; does + verbo sem s'],
      ['Passado simples', 'verbo + ed (regulares); went, had, saw, made, took (irregulares); did + verbo base'],
      ['Futuro', 'will + verbo; am/is/are going to + verbo'],
      ['Conectivos', 'but/however = oposição; because = causa; so/therefore = consequência'],
      ['Any × some', 'any em negativas e perguntas; some em afirmativas'],
      ['Falsos cognatos', 'actually = na verdade; attend = assistir; library = biblioteca; parents = pais; pretend = fingir; push = empurrar'],
    ] },
    { type: 'callout', kind: 'dica', title: 'Na hora da prova', text: 'Leia a pergunta antes do texto, procure cognatos e elimine as alternativas que não aparecem no texto. Não responda por opinião própria.' },
  ],
  [
    ex('ingles-revisao', 1, I, 'Complete: "Many people ____ to work by bus every day."', ['goes', 'go', 'going', 'went'], 1, 'Resposta B (go). "Many people" é plural e "every day" indica hábito (presente simples): go, sem -s.'),
    ex('ingles-revisao', 2, I, 'O falso cognato "library" significa:', ['livraria', 'livro', 'biblioteca', 'leitura'], 2, 'Resposta C (biblioteca). Livraria é "bookstore".'),
    ex('ingles-revisao', 3, I, 'Complete: "She studied hard, ____ she passed the exam."', ['so', 'but', 'or', 'although'], 0, 'Resposta A (so). Há consequência: estudou muito, então passou. "But" e "although" marcariam oposição.'),
    ex('ingles-revisao', 4, I, 'Complete: "This book is ____."', ['my', 'me', 'I', 'mine'], 3, 'Resposta D (mine). Sem substantivo depois, usa-se o pronome possessivo (mine = meu). "My" vem antes de um substantivo.'),
    ex('ingles-revisao', 5, I, 'Complete: "Are there ____ questions?"', ['some', 'any', 'a', 'an'], 1, 'Resposta B (any). Em perguntas usa-se any. "Questions" é plural, então não leva a nem an.'),
  ],
)

export const QUIMICA_REVISAO: Lesson = resumao(
  'quimica-revisao',
  'Revisão final: Química',
  [
    { type: 'h', text: 'O que mais cai' },
    { type: 'list', items: ['Estrutura atômica, tabela periódica e ligações químicas.', 'Mol, massa molar e estequiometria.', 'Soluções: concentração, pH, ácidos e bases.', 'Funções orgânicas e isomeria.', 'Oxirredução, termoquímica e química ambiental.'] },
    { type: 'h', text: 'Fórmulas e conceitos' },
    { type: 'table', head: ['Tema', 'Lembrar'], rows: [
      ['Átomo', 'A = Z + n; elétrons = prótons (neutro); isótopos: mesmo Z'],
      ['Tabela', 'grupo 1 = alcalinos; 2 = alcalino-terrosos; 17 = halogênios; 18 = gases nobres. Eletronegatividade aumenta para a direita e para cima'],
      ['Ligações', 'metal + ametal = iônica; ametal + ametal = covalente; metal + metal = metálica'],
      ['Mol', 'n = m/M; 1 mol = 6,02·10²³ partículas; 1 mol de gás nas CNTP = 22,4 L'],
      ['Concentração', 'C = m/V (g/L); M = n/V (mol/L); volume em litros'],
      ['pH', 'pH = −log[H⁺]; pH + pOH = 14; menor que 7 = ácido; maior que 7 = básico'],
      ['Termoquímica', 'ΔH < 0: exotérmica (libera calor); ΔH > 0: endotérmica (absorve)'],
      ['Oxirredução', 'oxidação = perde elétrons (Nox aumenta); redução = ganha; ânodo = oxidação, cátodo = redução'],
      ['Orgânica', 'álcool −OH; aldeído −CHO; cetona −CO−; ácido −COOH; éster −COO−; éter −O−; amina e amida (N)'],
    ] },
    { type: 'callout', kind: 'atencao', title: 'Erros clássicos', text: 'Usar mL em vez de L; não balancear antes da estequiometria; confundir A com Z; trocar agente oxidante (que sofre redução) com redutor; e dizer que catalisador altera o ΔH (ele só reduz a energia de ativação).' },
  ],
  [
    ex('quimica-revisao', 1, Q, 'Os elementos Li, Na e K, do grupo 1, formam a família dos:', ['alcalino-terrosos', 'halogênios', 'metais alcalinos', 'gases nobres'], 2, 'Resposta C (metais alcalinos). São muito reativos e têm 1 elétron na camada de valência.'),
    ex('quimica-revisao', 2, Q, 'Uma solução com pH igual a 11 tem pOH igual a:', ['3', '7', '11', '14'], 0, 'Resposta A (3). pH + pOH = 14, então pOH = 14 − 11 = 3. A solução é básica.'),
    ex('quimica-revisao', 3, Q, 'Uma reação exotérmica (ΔH < 0):', ['absorve calor do ambiente', 'libera calor para o ambiente', 'não troca calor', 'é sempre lenta'], 1, 'Resposta B. ΔH negativo indica que os produtos têm menos energia que os reagentes, e a diferença é liberada como calor (como na combustão).'),
    ex('quimica-revisao', 4, Q, 'Nas CNTP, o volume ocupado por 2 mol de um gás ideal é:', ['22,4 L', '11,2 L', '67,2 L', '44,8 L'], 3, 'Resposta D (44,8 L). Cada mol de gás ocupa 22,4 L nas CNTP: 2 · 22,4 = 44,8 L.'),
    ex('quimica-revisao', 5, Q, 'O ácido acético (CH₃COOH), presente no vinagre, pertence à função orgânica:', ['álcool', 'éster', 'ácido carboxílico', 'cetona'], 2, 'Resposta C (ácido carboxílico). O grupo característico é o —COOH.'),
  ],
)

export const MATEMATICA_REVISAO: Lesson = resumao(
  'matematica-revisao',
  'Revisão final: Matemática',
  [
    { type: 'h', text: 'O que mais cai' },
    { type: 'list', items: ['Porcentagem, razão e regra de três.', 'Equações e funções (afim, quadrática, exponencial).', 'Sequências (PA e PG), polinômios e matrizes.', 'Geometria plana, espacial e analítica.', 'Trigonometria, probabilidade e estatística.'] },
    { type: 'h', text: 'Folha de fórmulas' },
    { type: 'table', head: ['Tema', 'Fórmula'], rows: [
      ['Porcentagem', 'aumento de i% = × (1 + i/100); desconto = × (1 − i/100); sucessivos se multiplicam'],
      ['Produtos notáveis', '(a ± b)² = a² ± 2ab + b²; (a + b)(a − b) = a² − b²'],
      ['2º grau', 'Δ = b² − 4ac; x = (−b ± √Δ)/2a; soma = −b/a; produto = c/a; vértice xv = −b/2a'],
      ['PA', 'aₙ = a₁ + (n − 1)r; Sₙ = (a₁ + aₙ)n/2'],
      ['PG', 'aₙ = a₁qⁿ⁻¹; Sₙ = a₁(qⁿ − 1)/(q − 1)'],
      ['Áreas', 'retângulo b·h; triângulo b·h/2; trapézio (B+b)h/2; círculo πr²'],
      ['Volumes', 'prisma e cilindro A·h; cone e pirâmide A·h/3; esfera 4πr³/3'],
      ['Trigonometria', 'sen² + cos² = 1; sen 30° = 1/2; sen 45° = √2/2; sen 60° = √3/2; 180° = π'],
      ['Analítica', 'd = √(Δx² + Δy²); m = Δy/Δx; (x − a)² + (y − b)² = r²'],
      ['Combinatória e probabilidade', 'n!; C(n,p) = n!/(p!(n − p)!); P = favoráveis/possíveis; "e" multiplica, "ou" soma'],
    ] },
    { type: 'callout', kind: 'dica', title: 'Na hora da prova', text: 'Resolva primeiro as questões que você domina. Em contas longas, teste as alternativas. Confira o que foi pedido (área ou perímetro, x ou 2x).' },
  ],
  [
    ex('matematica-revisao', 1, M, 'A forma fatorada de x² − 25 é:', ['(x − 5)²', '(x + 5)²', '(x + 5)(x − 5)', 'x(x − 25)'], 2, 'Resposta C. Diferença de quadrados: a² − b² = (a + b)(a − b), com a = x e b = 5.'),
    ex('matematica-revisao', 2, M, 'O produto das raízes da equação x² − 7x + 12 = 0 é:', ['7', '12', '−7', '−12'], 1, 'Resposta B (12). O produto das raízes é c/a = 12/1 = 12. (As raízes são 3 e 4: 3 · 4 = 12.)'),
    ex('matematica-revisao', 3, M, 'O sexto termo da PG (3, 6, 12, ...) é:', ['96', '48', '72', '192'], 0, 'Resposta A (96). A razão é 2. a₆ = a₁ · q⁵ = 3 · 32 = 96.'),
    ex('matematica-revisao', 4, M, 'A área de um círculo de raio 4 cm é:', ['8π cm²', '32π cm²', '64π cm²', '16π cm²'], 3, 'Resposta D (16π cm²). A = π r² = π · 16.'),
    ex('matematica-revisao', 5, M, 'Ao lançar dois dados honestos, a probabilidade de a soma ser 7 é:', ['1/12', '1/4', '1/6', '1/3'], 2, 'Resposta C (1/6). As somas 7 são (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1): 6 casos em 36, ou seja, 6/36 = 1/6.'),
  ],
)

export const PORTUGUES_REVISAO: Lesson = resumao(
  'portugues-revisao',
  'Revisão final: Português e Redação',
  [
    { type: 'h', text: 'O que mais cai' },
    { type: 'list', items: ['Interpretação de texto, tirinhas e gêneros textuais.', 'Concordância (verbo haver e fazer), regência e crase.', 'Classes de palavras, conjunções, pontuação, coesão e coerência.', 'Funções da linguagem e variação linguística.', 'Literatura: do Barroco ao Modernismo.'] },
    { type: 'h', text: 'Quadro rápido' },
    { type: 'table', head: ['Tema', 'Lembrar'], rows: [
      ['Haver e fazer', 'Impessoais, ficam no singular: Havia muitos alunos; Faz dois anos'],
      ['Crase', 'a + a: antes de palavra feminina com artigo, horas e locuções femininas; não usa antes de masculino, verbo ou pronome pessoal'],
      ['Vírgula', 'Nunca entre sujeito e verbo; usa em aposto, vocativo, enumeração e adjunto deslocado'],
      ['Funções', 'referencial (informa); emotiva (sentimento); conativa (convence); fática (testa o contato); metalinguística (explica a língua); poética (forma)'],
      ['Escolas', 'Barroco = conflito fé/razão; Arcadismo = bucolismo; Romantismo = emoção; Realismo = crítica; Parnasianismo = forma; Simbolismo = musicalidade; Modernismo = ruptura'],
    ] },
    { type: 'h', text: 'Redação (60 pontos)' },
    { type: 'list', ordered: true, items: ['De **15 a 30 linhas**, com letra legível e caneta azul ou preta transparente. Menos de 15 ou mais de 30 linhas, ilegível, com identificação ou corretivo: nota zero.', 'Introdução com **tese** (3 a 5 linhas), dois parágrafos de **argumentos** com exemplo ou dado e conclusão com **proposta de intervenção** (quem, o quê, como, para quê).', 'Critérios (15 pontos cada): adequação à proposta, macroestrutura, microestrutura e expressão.', 'Fuja do tema ou do gênero e a nota é zero: releia a proposta e os textos motivadores antes de começar. Faça um rascunho curto.'] },
    { type: 'callout', kind: 'dica', title: 'Tema provável', text: 'Em 2024 o tema foi mudanças climáticas e seus impactos ambientais, sociais e econômicos. Temas ligados a meio ambiente, água, energia, cidades e tecnologia são bons para treinar repertório.' },
  ],
  [
    ex('portugues-revisao', 1, P, 'Segundo o edital da UEMG de 2026, a redação recebe nota zero se:', ['tiver 20 linhas', 'tiver menos de 15 linhas', 'for escrita com caneta preta', 'tiver título'], 1, 'Resposta B. A redação deve ter de 15 a 30 linhas. Caneta preta ou azul (transparente) é o correto, e o título é aceito (inclusive é avaliado na macroestrutura).'),
    ex('portugues-revisao', 2, P, 'Em "Que orgulho eu sinto de você!", predomina a função da linguagem:', ['conativa', 'referencial', 'emotiva', 'fática'], 2, 'Resposta C (emotiva). A frase expressa o sentimento do emissor, com exclamação e 1ª pessoa.'),
    ex('portugues-revisao', 3, P, 'Complete corretamente: "Os alunos e o professor ____ na sala."', ['estavam', 'estava', 'estive', 'esteve'], 0, 'Resposta A (estavam). O sujeito composto ("os alunos e o professor") exige o verbo no plural.'),
    ex('portugues-revisao', 4, P, 'A escola literária do "arte pela arte", que valoriza o rigor da forma e da métrica, é o:', ['Simbolismo', 'Romantismo', 'Barroco', 'Parnasianismo'], 3, 'Resposta D (Parnasianismo). Olavo Bilac é seu poeta mais conhecido. O Simbolismo valoriza a sugestão e a musicalidade.'),
    ex('portugues-revisao', 5, P, 'A conjunção que expressa oposição entre ideias é:', ['portanto', 'porém', 'porque', 'pois'], 1, 'Resposta B (porém). É adversativa, como mas, contudo e todavia. "Portanto" conclui, e "porque" e "pois" explicam.'),
  ],
)

export const FISICA_REVISAO: Lesson = resumao(
  'fisica-revisao',
  'Revisão final: Física',
  [
    { type: 'h', text: 'O que mais cai' },
    { type: 'list', items: ['Cinemática (MRU, MRUV, lançamentos) e leis de Newton.', 'Energia, trabalho, potência e quantidade de movimento.', 'Termologia, ondas, som e óptica.', 'Gravitação, hidrostática e eletricidade (circuitos).', 'Física moderna: efeito fotoelétrico e radioatividade.'] },
    { type: 'h', text: 'Folha de fórmulas' },
    { type: 'table', head: ['Tema', 'Fórmula'], rows: [
      ['MRU / MRUV', 's = s₀ + vt; v = v₀ + at; s = s₀ + v₀t + at²/2; v² = v₀² + 2aΔs'],
      ['Newton', 'F = m·a; P = m·g; fat = μ·N'],
      ['Energia', 'Ec = mv²/2; Ep = mgh; W = F·d; P = W/Δt; conservação: Ec + Ep = constante'],
      ['Hidrostática', 'd = m/V; p = F/A; p = d·g·h; E = d·V·g'],
      ['Gravitação e Kepler', 'F = GMm/d²; periélio = mais rápido; T²/R³ constante'],
      ['Termologia', 'TC/5 = (TF − 32)/9 = (TK − 273)/5; Q = m·c·ΔT; ΔL = L₀·α·ΔT'],
      ['Ondas', 'v = λ·f; eco: d = v·t/2; refração: a luz diminui a velocidade ao entrar na água'],
      ['Eletricidade', 'U = R·i; P = U·i; série: R = R₁ + R₂; paralelo: 1/R = 1/R₁ + 1/R₂; E = P·Δt (kWh)'],
      ['Fotoelétrico', 'E = h·f; Ec = h·f − W'],
    ] },
    { type: 'callout', kind: 'atencao', title: 'Erros clássicos', text: 'Esquecer de converter unidades; confundir massa (kg) com peso (N); usar tempo de ida e volta como se fosse de ida (eco); e esquecer que a energia cinética depende do quadrado da velocidade.' },
  ],
  [
    ex('fisica-revisao', 1, F, 'Um carro parte do repouso com aceleração de 3 m/s². Sua velocidade após 4 s é:', ['7 m/s', '9 m/s', '12 m/s', '16 m/s'], 2, 'Resposta C (12 m/s). v = v₀ + a·t = 0 + 3 · 4 = 12 m/s.'),
    ex('fisica-revisao', 2, F, 'O peso de uma pessoa de 70 kg, com g = 10 m/s², é:', ['700 N', '70 N', '7 000 N', '7 N'], 0, 'Resposta A (700 N). P = m · g = 70 · 10 = 700 N.'),
    ex('fisica-revisao', 3, F, 'Uma força de 50 N é aplicada perpendicularmente a uma área de 0,25 m². A pressão é:', ['12,5 Pa', '200 Pa', '50 Pa', '400 Pa'], 1, 'Resposta B (200 Pa). p = F/A = 50/0,25 = 200 Pa.'),
    ex('fisica-revisao', 4, F, 'Dois resistores de 10 Ω ligados em paralelo equivalem a um resistor de:', ['20 Ω', '10 Ω', '2 Ω', '5 Ω'], 3, 'Resposta D (5 Ω). Em paralelo com valores iguais, a resistência equivalente é a metade: 10/2 = 5 Ω (pela fórmula, 10 · 10 / 20 = 5).'),
    ex('fisica-revisao', 5, F, 'Uma onda sonora tem frequência de 680 Hz e velocidade de 340 m/s. Seu comprimento de onda é:', ['2 m', '20 000 m', '0,5 m', '231 200 m'], 2, 'Resposta C (0,5 m). λ = v/f = 340/680 = 0,5 m.'),
  ],
)

export const BIOLOGIA_REVISAO: Lesson = resumao(
  'biologia-revisao',
  'Revisão final: Biologia e véspera da prova',
  [
    { type: 'h', text: 'O que mais cai' },
    { type: 'list', items: ['Citologia (organelas, membrana), metabolismo e divisão celular.', 'Genética (Mendel, heredogramas, probabilidade).', 'Ecologia (cadeias, relações, ciclos e impactos ambientais).', 'Fisiologia humana, saúde e doenças.', 'Evolução, biotecnologia e diversidade dos seres vivos.'] },
    { type: 'h', text: 'Quadro rápido' },
    { type: 'table', head: ['Tema', 'Lembrar'], rows: [
      ['Organelas', 'mitocôndria = respiração; cloroplasto = fotossíntese; ribossomo = proteínas; lisossomo = digestão; Golgi = empacota; núcleo = DNA'],
      ['Divisão', 'mitose: 2 células iguais; meiose: 4 células haploides diferentes; PMAT'],
      ['Genética', 'Aa × Aa = 3:1 (fenótipo) e 1:2:1 (genótipo); pais normais com filho afetado = recessivo; "e" multiplica, "ou" soma'],
      ['Ecologia', 'só 10% da energia passa ao nível seguinte; mutualismo = ambos ganham; parasitismo = um prejudica o outro; eutrofização = excesso de nutrientes'],
      ['Fisiologia', 'absorção no intestino delgado; trocas gasosas nos alvéolos; insulina (pâncreas) baixa a glicose; néfron filtra o sangue'],
      ['Evolução', 'Lamarck = uso e desuso (superado); Darwin = seleção natural; homólogos = mesma origem; análogos = mesma função'],
      ['Plantas e animais', 'briófitas < pteridófitas < gimnospermas < angiospermas; artrópodes = exoesqueleto de quitina; anfíbios = metamorfose'],
    ] },
    { type: 'h', text: 'Véspera e dia da prova' },
    { type: 'p', text: 'A data da prova ainda não foi confirmada: confira no edital novo em vestibular.uemg.br. Os cuidados abaixo seguem o edital anterior (2026), por isso releia as regras do edital novo.' },
    { type: 'list', items: ['**Na véspera:** reveja só o resumo e o caderno de erros. Separe o documento oficial com foto, o cartão da prova e **duas canetas esferográficas azul ou preta, transparentes**. Durma bem.', '**No dia:** coma algo leve e leve lanche e água. Confira o local e o horário do cartão da prova e saia cedo: os portões fecham 30 minutos antes e quem chega depois não entra.', '**Proibidos:** celular, relógio, calculadora, boné, óculos de sol, fones. Cabelos longos presos.', '**Durante a prova:** são até 4 horas, com 48 questões e a redação. Só é possível sair depois de 2 horas. Marque o cartão com cuidado: marcação dupla ou rasurada conta como erro.', '**Sugestão de tempo:** cerca de 2h30 nas questões, 1h na redação e o restante para revisar e passar a limpo.'] },
    { type: 'callout', kind: 'dica', title: 'Boa sorte!', text: 'Você estudou toda semana, fez simulados e revisou seus erros. Confie no preparo e respire fundo antes de começar. 🚀' },
  ],
  [
    ex('biologia-revisao', 1, B, 'A respiração celular aeróbia ocorre principalmente nas:', ['ribossomos', 'mitocôndrias', 'lisossomos', 'cloroplastos'], 1, 'Resposta B (mitocôndrias). Nelas ocorrem o ciclo de Krebs e a cadeia respiratória, com a maior parte da produção de ATP.'),
    ex('biologia-revisao', 2, B, 'A fotossíntese produz:', ['glicose e oxigênio', 'CO₂ e água', 'ATP e CO₂', 'etanol e CO₂'], 0, 'Resposta A. Com luz e clorofila, CO₂ e água viram glicose e gás oxigênio. É o processo inverso da respiração.'),
    ex('biologia-revisao', 3, B, 'Do cruzamento Aa × Aa, a proporção fenotípica esperada (dominante : recessivo) é:', ['1 : 1', '1 : 2 : 1', '3 : 1', '9 : 3 : 3 : 1'], 2, 'Resposta C (3 : 1). Os genótipos AA, Aa, Aa e aa dão 3 indivíduos com o fenótipo dominante e 1 com o recessivo. A proporção 1 : 2 : 1 é a genotípica.'),
    ex('biologia-revisao', 4, B, 'Os herbívoros ocupam, na cadeia alimentar, o nível dos:', ['produtores', 'consumidores secundários', 'decompositores', 'consumidores primários'], 3, 'Resposta D (consumidores primários). Eles se alimentam diretamente dos produtores (plantas).'),
    ex('biologia-revisao', 5, B, 'O órgão do sistema excretor que filtra o sangue e forma a urina é o:', ['pulmão', 'rim', 'fígado', 'intestino'], 1, 'Resposta B (rim). A unidade funcional do rim é o néfron, que filtra o sangue e regula a água e os sais do corpo.'),
  ],
)

export const LESSONS_WEEK9: Lesson[] = [
  INGLES_REVISAO,
  QUIMICA_REVISAO,
  MATEMATICA_REVISAO,
  PORTUGUES_REVISAO,
  FISICA_REVISAO,
  BIOLOGIA_REVISAO,
]
