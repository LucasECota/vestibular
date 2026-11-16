import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'quimica' as const

export const QUIMICA_1: Lesson = {
  slug: 'quimica-1',
  title: 'Matéria, misturas e modelos atômicos',
  blocks: [
    { type: 'p', text: 'Esta é a base da Química: o que é matéria, como ela se apresenta, como separar misturas e como a ideia de átomo evoluiu. Questões de modelos atômicos e separação de misturas são clássicas.' },
    { type: 'h', text: '1. Estados físicos e mudanças de estado' },
    { type: 'table', head: ['Estado', 'Forma', 'Volume', 'Partículas'], rows: [
      ['Sólido', 'Definida', 'Definido', 'Muito próximas e organizadas'],
      ['Líquido', 'Do recipiente', 'Definido', 'Próximas, com mobilidade'],
      ['Gasoso', 'Do recipiente', 'Ocupa todo o espaço', 'Muito afastadas e agitadas'],
    ] },
    { type: 'p', text: '**Fusão** (sólido → líquido), **solidificação** (líquido → sólido), **vaporização** (líquido → gás), **condensação** (gás → líquido) e **sublimação** (sólido ⇄ gás). Receber calor favorece fusão e vaporização.' },
    { type: 'h', text: '2. Substâncias e misturas' },
    { type: 'list', items: ['**Substância pura:** composição fixa e propriedades constantes (água, sal de cozinha, ouro).', '**Mistura homogênea (solução):** uma única fase, não dá para distinguir os componentes (água com sal).', '**Mistura heterogênea:** duas ou mais fases visíveis (água e óleo; água e areia).'] },
    { type: 'callout', kind: 'dica', text: 'Conte as fases: 1 fase = homogênea; 2 ou mais = heterogênea. Água + gelo é heterogênea, mesmo sendo só H₂O (são duas fases).' },
    { type: 'h', text: '3. Métodos de separação' },
    { type: 'table', head: ['Mistura', 'Método', 'Princípio'], rows: [
      ['Sólido + líquido (areia e água)', 'Filtração', 'Um filtro retém o sólido'],
      ['Líquido imiscível (óleo e água)', 'Decantação (funil de separação)', 'Diferença de densidade'],
      ['Sal dissolvido na água', 'Evaporação ou destilação simples', 'Diferença de ponto de ebulição'],
      ['Líquidos miscíveis (álcool e água)', 'Destilação fracionada', 'Pontos de ebulição diferentes'],
      ['Ferro e areia', 'Separação magnética', 'O ímã atrai o ferro'],
      ['Sólidos de tamanhos diferentes', 'Peneiração', 'Tamanho das partículas'],
    ] },
    { type: 'h', text: '4. Modelos atômicos' },
    { type: 'table', head: ['Cientista (ano)', 'Modelo', 'Ideia principal'], rows: [
      ['Dalton (1808)', 'Bola de bilhar', 'Átomo maciço, indivisível e indestrutível'],
      ['Thomson (1904)', 'Pudim de passas', 'Esfera positiva com elétrons incrustados (descobriu o elétron)'],
      ['Rutherford (1911)', 'Modelo nuclear', 'Núcleo pequeno, denso e positivo; elétrons ao redor; átomo quase vazio'],
      ['Bohr (1913)', 'Modelo em camadas', 'Elétrons em níveis de energia (órbitas) definidos'],
    ] },
    { type: 'h', text: '5. Número atômico e número de massa' },
    { type: 'math', tex: String.raw`A = Z + n \qquad\Rightarrow\qquad n = A - Z` },
    { type: 'list', items: ['**Z (número atômico):** quantidade de prótons. Identifica o elemento.', '**A (número de massa):** prótons + nêutrons.', 'Átomo neutro: nº de elétrons = nº de prótons.', '**Isótopos:** mesmo Z, A diferente (ex.: ¹²C e ¹⁴C).'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Cloro-35: $Z = 17$ e $A = 35$. Nêutrons: $35 - 17 = 18$. Elétrons (átomo neutro): 17.` },
  ],
  exercises: [
    ex('quimica-1', 1, S, 'Qual das opções é uma mistura homogênea?', ['água e óleo', 'água e areia', 'água e sal totalmente dissolvido', 'água e gelo'], 2, 'Resposta C. Sal totalmente dissolvido na água forma uma única fase (solução). Água e óleo e água e areia têm duas fases. Água e gelo também têm duas fases (líquida e sólida), mesmo sendo a mesma substância.'),
    ex('quimica-1', 2, S, 'Para separar uma mistura de areia e água, o método mais adequado é:', ['destilação fracionada', 'filtração', 'separação magnética', 'sublimação'], 1, 'Resposta B (filtração). A areia é um sólido que não passa pelo filtro e a água passa. A destilação é usada para líquidos com pontos de ebulição diferentes.'),
    ex('quimica-1', 3, S, 'Óleo e água formam uma mistura heterogênea. Podem ser separados por:', ['decantação em funil de separação', 'filtração simples', 'peneiração', 'catação'], 0, 'Resposta A. Os dois líquidos não se misturam e têm densidades diferentes. No funil de separação, o mais denso (água) fica embaixo e o menos denso (óleo) em cima, e se abre a torneira para escoar um deles.'),
    ex('quimica-1', 4, S, 'O modelo atômico de Rutherford propõe que o átomo:', ['é uma esfera maciça e indivisível', 'tem elétrons incrustados em uma massa positiva', 'tem um núcleo pequeno, denso e positivo, com elétrons ao redor', 'tem elétrons em órbitas com energia quantizada em camadas'], 2, 'Resposta C. Com o experimento de partículas alfa em uma lâmina de ouro, Rutherford concluiu que o átomo é quase todo vazio, com um núcleo pequeno e positivo. A é Dalton, B é Thomson e D é Bohr.'),
    ex('quimica-1', 5, S, 'Um átomo tem número atômico 17 e número de massa 35. O número de nêutrons é:', ['17', '18', '35', '52'], 1, 'Resposta B (18). O número de nêutrons é n = A − Z = 35 − 17 = 18. O número atômico (17) é a quantidade de prótons.'),
  ],
}

/** Esquema da tabela periódica: 18 grupos × 7 períodos, com as famílias coloridas. */
const buildPeriodic = (): string => {
  const cell = 15
  const x0 = 20
  const y0 = 34
  const color = (g: number): string =>
    g === 1 ? '#fecaca' : g === 2 ? '#fed7aa' : g <= 12 ? '#e5e7eb' : g <= 16 ? '#dbeafe' : g === 17 ? '#bbf7d0' : '#fde68a'
  const firstRow = (g: number): number => (g === 1 || g === 18 ? 1 : g <= 2 || g >= 13 ? 2 : 4)
  let rects = ''
  for (let g = 1; g <= 18; g++) {
    for (let p = firstRow(g); p <= 7; p++) {
      rects += `<rect x="${x0 + (g - 1) * cell}" y="${y0 + (p - 1) * cell}" width="${cell}" height="${cell}" fill="${color(g)}" stroke="#0a0a0f" stroke-width="0.7"/>`
    }
  }
  const legend = [
    ['#fecaca', 'Grupo 1: metais alcalinos'],
    ['#fed7aa', 'Grupo 2: alcalino-terrosos'],
    ['#e5e7eb', 'Grupos 3 a 12: metais de transição'],
    ['#dbeafe', 'Grupos 13 a 16 (inclui calcogênios)'],
    ['#bbf7d0', 'Grupo 17: halogênios'],
    ['#fde68a', 'Grupo 18: gases nobres'],
  ]
    .map(([c, t], i) => `<rect x="20" y="${152 + i * 14}" width="10" height="10" fill="${c}" stroke="#0a0a0f" stroke-width="0.7"/><text x="36" y="${161 + i * 14}" fill="#0a0a0f">${t}</text>`)
    .join('')
  return `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10"><rect width="300" height="240" fill="#fff"/><text x="20" y="18" font-weight="bold" fill="#0a0a0f">Tabela periódica (esquema): 18 grupos e 7 períodos</text>${rects}${legend}</svg>`
}

const SVG_PERIODICA = buildPeriodic()

export const QUIMICA_2: Lesson = {
  slug: 'quimica-2',
  title: 'Tabela periódica e ligações químicas',
  blocks: [
    { type: 'p', text: 'A tabela periódica organiza os elementos de modo que o lugar de cada um já diz muito sobre suas propriedades. E as ligações químicas explicam como os átomos se unem para formar substâncias. As duas ideias andam juntas.' },
    { type: 'h', text: '1. Como a tabela é organizada' },
    { type: 'figure', svg: SVG_PERIODICA, alt: 'Esquema da tabela periódica destacando os grupos 1, 2, os metais de transição, os grupos 13 a 18', caption: 'Os elementos estão em ordem crescente de número atômico (Z).' },
    { type: 'list', items: ['**Períodos (linhas):** são 7. O número do período é o número de camadas eletrônicas.', '**Grupos ou famílias (colunas):** são 18. Elementos do mesmo grupo têm propriedades parecidas e o mesmo número de elétrons de valência.'] },
    { type: 'table', head: ['Família', 'Grupo', 'Exemplos', 'Característica'], rows: [
      ['Metais alcalinos', '1', 'Li, Na, K', 'Muito reativos, 1 elétron de valência'],
      ['Alcalino-terrosos', '2', 'Be, Mg, Ca', '2 elétrons de valência'],
      ['Calcogênios', '16', 'O, S', '6 elétrons de valência'],
      ['Halogênios', '17', 'F, Cl, Br, I', '7 elétrons de valência, muito reativos'],
      ['Gases nobres', '18', 'He, Ne, Ar', 'Camada de valência completa; quase não reagem'],
    ] },
    { type: 'h', text: '2. Propriedades periódicas' },
    { type: 'table', head: ['Propriedade', 'No período (→)', 'No grupo (↓)'], rows: [
      ['Raio atômico', 'diminui', 'aumenta'],
      ['Energia de ionização', 'aumenta', 'diminui'],
      ['Eletronegatividade', 'aumenta', 'diminui'],
    ] },
    { type: 'callout', kind: 'dica', text: 'O flúor (F) é o elemento mais eletronegativo; o césio e o frâncio são os de menor eletronegatividade. Ao ir para o canto superior direito (exceto gases nobres), a eletronegatividade aumenta.' },
    { type: 'h', text: '3. Ligações químicas e regra do octeto' },
    { type: 'p', text: 'Os átomos tendem a ficar com **8 elétrons na camada de valência** (como os gases nobres): é a **regra do octeto** (hidrogênio fica com 2). Para isso, ganham, perdem ou compartilham elétrons.' },
    { type: 'table', head: ['Ligação', 'Entre quem', 'O que ocorre', 'Exemplo'], rows: [
      ['Iônica', 'Metal + ametal', 'Transferência de elétrons; formam-se íons (cátion e ânion)', 'NaCl'],
      ['Covalente', 'Ametal + ametal (e H)', 'Compartilhamento de pares de elétrons', 'H₂O, CO₂, CH₄'],
      ['Metálica', 'Metal + metal', 'Cátions mergulhados em um "mar" de elétrons livres', 'Fe, Cu, Al'],
    ] },
    { type: 'table', head: ['Propriedade', 'Composto iônico', 'Composto molecular'], rows: [
      ['Pontos de fusão e ebulição', 'Altos', 'Baixos (em geral)'],
      ['Condução de eletricidade', 'Só fundido ou em solução', 'Em geral não conduz'],
    ] },
    { type: 'callout', kind: 'exemplo', text: 'Na (1 elétron de valência) perde 1 elétron e vira Na⁺. Cl (7 elétrons) ganha 1 e vira Cl⁻. A atração entre Na⁺ e Cl⁻ é a ligação iônica do sal de cozinha.' },
  ],
  exercises: [
    ex('quimica-2', 1, S, 'Qual das opções traz dois elementos da família dos halogênios?', ['Na e K', 'Cl e Br', 'He e Ne', 'Ca e Mg'], 1, 'Resposta B (Cl e Br). Os halogênios são do grupo 17: F, Cl, Br, I. Na e K são alcalinos (grupo 1), He e Ne são gases nobres (grupo 18) e Ca e Mg são alcalino-terrosos (grupo 2).'),
    ex('quimica-2', 2, S, 'Qual das substâncias abaixo é formada por ligação iônica?', ['NaCl', 'CO₂', 'H₂O', 'O₂'], 0, 'Resposta A (NaCl). A ligação iônica ocorre entre metal (Na) e ametal (Cl), com transferência de elétrons. CO₂, H₂O e O₂ são formados só por ametais e têm ligações covalentes.'),
    ex('quimica-2', 3, S, 'Entre os elementos F, Cl, Br e I, o mais eletronegativo é:', ['F', 'Cl', 'Br', 'I'], 0, 'Resposta A (F). Dentro de um grupo, a eletronegatividade diminui de cima para baixo. O flúor está no topo do grupo dos halogênios e é o elemento mais eletronegativo da tabela.'),
    ex('quimica-2', 4, S, 'Um átomo com 7 elétrons na camada de valência tende a:', ['perder 1 elétron', 'ganhar 1 elétron', 'ganhar 7 elétrons', 'perder 7 elétrons'], 1, 'Resposta B. Para completar o octeto (8 elétrons) basta ganhar 1 elétron, formando um ânion com carga −1. É o que fazem os halogênios, como o cloro em Cl⁻.'),
    ex('quimica-2', 5, S, 'Os gases nobres (grupo 18) são pouco reativos porque:', ['têm muitos elétrons livres', 'são metais muito eletronegativos', 'têm a camada de valência completa', 'têm apenas 1 elétron de valência'], 2, 'Resposta C. Os gases nobres já têm a camada de valência completa (8 elétrons, ou 2 no hélio), uma configuração muito estável, e por isso quase não precisam fazer ligações.'),
  ],
}

export const QUIMICA_3: Lesson = {
  slug: 'quimica-3',
  title: 'Funções inorgânicas e reações químicas',
  blocks: [
    { type: 'p', text: 'Os compostos inorgânicos se agrupam em quatro funções: ácidos, bases, sais e óxidos. Já as reações químicas mostram como substâncias se transformam em outras. Esses temas são a base do cotidiano da Química (e da Engenharia Ambiental: chuva ácida, tratamento de água, solos).' },
    { type: 'h', text: '1. As quatro funções' },
    { type: 'table', head: ['Função', 'Definição (Arrhenius)', 'Exemplos', 'Uso'], rows: [
      ['Ácido', 'Em água, libera H⁺ como único cátion', 'HCl, H₂SO₄, HNO₃', 'Suco gástrico, baterias, fertilizantes'],
      ['Base (hidróxido)', 'Em água, libera OH⁻ como único ânion', 'NaOH, Ca(OH)₂, NH₄OH', 'Sabão, cal, antiácidos'],
      ['Sal', 'Produto da reação de um ácido com uma base (além da água)', 'NaCl, CaCO₃', 'Sal de cozinha, giz, fertilizantes'],
      ['Óxido', 'Composto binário em que o oxigênio é o elemento mais eletronegativo', 'CO₂, CaO, Fe₂O₃', 'Gases do efeito estufa, cal virgem, ferrugem'],
    ] },
    { type: 'callout', kind: 'dica', title: 'Como identificar pela fórmula', text: 'Começa com H → provavelmente ácido (HCl). Termina em OH → base (NaOH). Metal + ametal sem H nem OH → sal (NaCl). Dois elementos, um deles O → óxido (CO₂).' },
    { type: 'h', text: '2. Óxidos importantes' },
    { type: 'list', items: ['**Óxidos ácidos** (de ametais, como CO₂, SO₂, SO₃, NO₂): reagem com água formando ácidos e causam a **chuva ácida**.', '**Óxidos básicos** (de metais, como CaO e Na₂O): reagem com água formando bases.'] },
    { type: 'h', text: '3. Reações químicas' },
    { type: 'table', head: ['Tipo', 'Esquema', 'Exemplo'], rows: [
      ['Síntese (adição)', 'A + B → AB', '2 H₂ + O₂ → 2 H₂O'],
      ['Decomposição (análise)', 'AB → A + B', '2 H₂O₂ → 2 H₂O + O₂'],
      ['Simples troca', 'A + BC → AC + B', 'Zn + 2 HCl → ZnCl₂ + H₂'],
      ['Dupla troca', 'AB + CD → AD + CB', 'AgNO₃ + NaCl → AgCl + NaNO₃'],
    ] },
    { type: 'p', text: '**Neutralização** é a reação entre um ácido e uma base, que forma sal e água:' },
    { type: 'math', tex: String.raw`HCl + NaOH \longrightarrow NaCl + H_2O` },
    { type: 'h', text: '4. Balanceamento' },
    { type: 'p', text: 'A **lei de Lavoisier** diz que a massa se conserva: o número de átomos de cada elemento deve ser igual nos dois lados. Ajustamos só os **coeficientes** (nunca os índices).' },
    { type: 'callout', kind: 'exemplo', text: String.raw`$H_2 + O_2 \to H_2O$ tem 2 O à esquerda e 1 à direita. Coloque 2 na água: $H_2 + O_2 \to 2\,H_2O$. Agora há 4 H à direita, então 2 na frente do H₂: $2\,H_2 + O_2 \to 2\,H_2O$ (4 H e 2 O dos dois lados).` },
    { type: 'callout', kind: 'atencao', text: 'No balanceamento, mude os coeficientes (números grandes na frente). Nunca altere os índices (números pequenos), porque isso muda a substância.' },
  ],
  exercises: [
    ex('quimica-3', 1, S, 'O composto HCl, em solução aquosa, é classificado como:', ['ácido', 'base', 'sal', 'óxido'], 0, 'Resposta A (ácido). O HCl libera íons H⁺ em água e começa com H, o que indica um ácido (ácido clorídrico). Bases terminam em OH e sais não têm H⁺ nem OH⁻ como únicos íons.'),
    ex('quimica-3', 2, S, 'A reação HCl + NaOH → NaCl + H₂O é classificada como:', ['neutralização', 'decomposição', 'síntese', 'simples troca'], 0, 'Resposta A (neutralização). Um ácido (HCl) reage com uma base (NaOH) e forma um sal (NaCl) e água. É também uma reação de dupla troca.'),
    ex('quimica-3', 3, S, 'Os coeficientes que balanceiam a equação __ H₂ + __ O₂ → __ H₂O, na ordem, são:', ['1, 1, 1', '2, 1, 2', '1, 2, 2', '2, 2, 2'], 1, 'Resposta B (2, 1, 2). Com 2 H₂ + 1 O₂ → 2 H₂O há 4 átomos de H e 2 de O dos dois lados. A equação respeita a conservação da massa (lei de Lavoisier).'),
    ex('quimica-3', 4, S, 'Qual das substâncias abaixo é um óxido?', ['NaCl', 'CO₂', 'HNO₃', 'KOH'], 1, 'Resposta B (CO₂). Óxido é um composto de dois elementos em que um deles é o oxigênio. NaCl é um sal, HNO₃ é um ácido e KOH é uma base.'),
    ex('quimica-3', 5, S, 'A reação 2 H₂O₂ → 2 H₂O + O₂, em que uma substância dá origem a duas ou mais, é classificada como:', ['síntese', 'decomposição', 'dupla troca', 'neutralização'], 1, 'Resposta B (decomposição). Uma única substância (água oxigenada) se quebra em duas (água e gás oxigênio). Na síntese acontece o contrário: substâncias se juntam para formar uma.'),
  ],
}

const SVG_MOL = `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="170" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">O mol como "ponte" entre as grandezas</text>
<rect x="10" y="55" width="80" height="50" rx="8" fill="#ede4ff" stroke="#6d28d9" stroke-width="2"/><text x="50" y="76" text-anchor="middle" fill="#0a0a0f" font-weight="bold">massa (g)</text><text x="50" y="92" text-anchor="middle" fill="#0a0a0f" font-size="10">m</text>
<rect x="130" y="55" width="80" height="50" rx="8" fill="#fef3c7" stroke="#a16207" stroke-width="2"/><text x="170" y="76" text-anchor="middle" fill="#0a0a0f" font-weight="bold">quantidade</text><text x="170" y="92" text-anchor="middle" fill="#0a0a0f" font-size="10">n (mol)</text>
<rect x="250" y="25" width="80" height="45" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="290" y="44" text-anchor="middle" fill="#0a0a0f" font-weight="bold">partículas</text><text x="290" y="60" text-anchor="middle" fill="#0a0a0f" font-size="10">n × 6,02·10²³</text>
<rect x="250" y="95" width="80" height="45" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="290" y="114" text-anchor="middle" fill="#0a0a0f" font-weight="bold">volume (gás)</text><text x="290" y="130" text-anchor="middle" fill="#0a0a0f" font-size="10">n × 22,4 L (CNTP)</text>
<line x1="92" y1="80" x2="128" y2="80" stroke="#0a0a0f" stroke-width="2"/><line x1="212" y1="70" x2="248" y2="50" stroke="#0a0a0f" stroke-width="2"/><line x1="212" y1="90" x2="248" y2="115" stroke="#0a0a0f" stroke-width="2"/>
<text x="110" y="72" text-anchor="middle" fill="#0a0a0f" font-size="10">÷ M</text>
<text x="170" y="152" text-anchor="middle" fill="#0a0a0f">M = massa molar (g/mol). Ex.: H₂O = 18 g/mol.</text></svg>`

export const QUIMICA_4: Lesson = {
  slug: 'quimica-4',
  title: 'Mol, estequiometria e soluções',
  blocks: [
    { type: 'p', text: 'Átomos e moléculas são pequenos demais para contar um a um, então a Química usa o **mol**. Com ele calculamos quanto de reagente é preciso e quanto de produto se forma (estequiometria) e como medir a concentração de uma solução. Na UEMG 2023 já caiu um cálculo de concentração.' },
    { type: 'h', text: '1. Mol e massa molar' },
    { type: 'list', items: ['**1 mol** = 6,02 · 10²³ partículas (constante de Avogadro).', '**Massa molar (M):** massa de 1 mol, em g/mol. Soma das massas atômicas.', 'Massas atômicas úteis: H = 1; C = 12; N = 14; O = 16; Na = 23; S = 32; Cl = 35,5; Ca = 40.'] },
    { type: 'figure', svg: SVG_MOL, alt: 'Esquema com o mol no centro ligando massa, número de partículas e volume de gás', caption: 'Passe sempre pelo mol: massa ÷ M → mol → partículas ou volume.' },
    { type: 'math', tex: String.raw`n = \dfrac{m}{M}` },
    { type: 'callout', kind: 'exemplo', text: String.raw`CO₂: $M = 12 + 2\cdot 16 = 44$ g/mol. H₂O: $M = 2\cdot 1 + 16 = 18$ g/mol. Então 36 g de água são $n = \dfrac{36}{18} = 2$ mol.` },
    { type: 'p', text: '**Volume molar:** nas CNTP (0 °C e 1 atm), 1 mol de qualquer gás ocupa **22,4 L**.' },
    { type: 'h', text: '2. Estequiometria (cálculo de reações)' },
    { type: 'list', ordered: true, items: ['Escreva e **balanceie** a equação.', 'Os **coeficientes** dão a proporção em **mols**.', 'Converta o dado do problema para mols (m ÷ M).', 'Use a proporção (regra de três) e converta de volta (mol × M).'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`$2\,H_2 + O_2 \to 2\,H_2O$. Que massa de água se forma a partir de 4 g de H₂?` + '\n' + String.raw`$n(H_2) = \dfrac{4}{2} = 2$ mol. Como a proporção é 2 : 2, formam-se 2 mol de H₂O.` + '\n' + String.raw`$m = 2\cdot 18 = 36$ g de água.` },
    { type: 'h', text: '3. Concentração de soluções' },
    { type: 'table', head: ['Grandeza', 'Fórmula', 'Unidade', 'Exemplo'], rows: [
      ['Concentração comum', String.raw`$C = \dfrac{m_{\text{soluto}}}{V_{\text{solução}}}$`, 'g/L', '20 g de NaOH em 0,5 L → 40 g/L'],
      ['Molaridade', String.raw`$M = \dfrac{n_{\text{soluto}}}{V_{\text{solução}}}$`, 'mol/L', '1 mol de NaCl em 2 L → 0,5 mol/L'],
      ['Título', String.raw`$\tau = \dfrac{m_{\text{soluto}}}{m_{\text{solução}}}$`, 'sem unidade', 'Percentual = τ × 100'],
      ['ppm', 'partes por milhão', 'mg/L ou mg/kg', 'Usado para poluentes em água'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'O volume da concentração é o da **solução** (soluto + solvente) e deve estar em **litros**. 500 mL = 0,5 L.' },
    { type: 'p', text: String.raw`**Diluição:** ao adicionar solvente, a quantidade de soluto não muda: $M_1\cdot V_1 = M_2\cdot V_2$.` },
  ],
  exercises: [
    ex('quimica-4', 1, S, 'A massa molar do dióxido de carbono (CO₂) é (C = 12 e O = 16):', ['28 g/mol', '32 g/mol', '44 g/mol', '56 g/mol'], 2, 'Resposta C (44 g/mol). M(CO₂) = 12 + 2 · 16 = 12 + 32 = 44 g/mol.'),
    ex('quimica-4', 2, S, 'Quantos mols existem em 36 g de água (H₂O, M = 18 g/mol)?', ['1 mol', '2 mol', '3 mol', '18 mol'], 1, 'Resposta B (2 mol). n = m/M = 36/18 = 2 mol.'),
    ex('quimica-4', 3, S, 'Na reação 2 H₂ + O₂ → 2 H₂O, a massa de água formada a partir de 4 g de H₂ (M = 2 g/mol; água: 18 g/mol) é:', ['18 g', '36 g', '72 g', '4 g'], 1, 'Resposta B (36 g). 4 g de H₂ correspondem a 4/2 = 2 mol. Pela proporção 2 : 2, formam-se 2 mol de água, ou seja, 2 · 18 = 36 g.'),
    ex('quimica-4', 4, S, 'Uma solução foi preparada dissolvendo 20 g de NaOH em água até completar 500 mL. A concentração comum dessa solução é:', ['4 g/L', '10 g/L', '40 g/L', '100 g/L'], 2, 'Resposta C (40 g/L). Converta o volume: 500 mL = 0,5 L. C = m/V = 20/0,5 = 40 g/L. Se você usasse 500 no lugar de 0,5, erraria por um fator de 1 000.'),
    ex('quimica-4', 5, S, 'Dissolvendo 58,5 g de NaCl (M = 58,5 g/mol) em água suficiente para 2 L de solução, a molaridade é:', ['0,5 mol/L', '1 mol/L', '2 mol/L', '29,25 mol/L'], 0, 'Resposta A (0,5 mol/L). n = 58,5/58,5 = 1 mol. M = n/V = 1/2 = 0,5 mol/L.'),
  ],
}

const SVG_ENTALPIA = `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
<rect width="340" height="200" fill="#fff"/>
<text x="85" y="14" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Exotérmica (ΔH &lt; 0)</text>
<text x="255" y="14" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Endotérmica (ΔH &gt; 0)</text>
<g stroke="#0a0a0f" stroke-width="1.5"><line x1="15" y1="150" x2="165" y2="150"/><line x1="15" y1="150" x2="15" y2="25"/><line x1="185" y1="150" x2="335" y2="150"/><line x1="185" y1="150" x2="185" y2="25"/></g>
<path d="M18 60 L45 60 C70 60 70 38 90 38 C110 38 110 108 135 108 L162 108" fill="none" stroke="#b91c1c" stroke-width="3"/>
<path d="M188 108 L215 108 C240 108 240 38 260 38 C280 38 280 60 305 60 L332 60" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="20" y="54" fill="#0a0a0f">Reagentes</text><text x="112" y="124" fill="#0a0a0f">Produtos</text>
<text x="190" y="124" fill="#0a0a0f">Reagentes</text><text x="285" y="50" fill="#0a0a0f">Produtos</text>
<text x="85" y="170" text-anchor="middle" fill="#b91c1c" font-weight="bold">libera calor (esquenta)</text><text x="255" y="170" text-anchor="middle" fill="#1d4ed8" font-weight="bold">absorve calor (esfria)</text>
<text x="85" y="186" text-anchor="middle" fill="#0a0a0f">combustão, neutralização</text><text x="255" y="186" text-anchor="middle" fill="#0a0a0f">fusão, evaporação</text>
<text x="8" y="22" fill="#0a0a0f" font-size="9">Energia</text></svg>`

export const QUIMICA_5: Lesson = {
  slug: 'quimica-5',
  title: 'Termoquímica e cinética química',
  blocks: [
    { type: 'p', text: 'Toda reação troca energia com o ambiente (**termoquímica**) e acontece em uma certa rapidez (**cinética**). Isso explica por que combustíveis queimam, por que guardamos alimentos na geladeira e como funciona o catalisador do carro, que reduz poluentes. A UEMG listou a produção de energia por combustíveis no conteúdo oficial.' },
    { type: 'h', text: '1. Reações exotérmicas e endotérmicas' },
    { type: 'figure', svg: SVG_ENTALPIA, alt: 'Dois gráficos de energia: exotérmica com produtos abaixo dos reagentes e endotérmica com produtos acima', caption: 'ΔH = H(produtos) − H(reagentes).' },
    { type: 'table', head: ['', 'Exotérmica', 'Endotérmica'], rows: [
      ['Calor', 'Libera para o ambiente', 'Absorve do ambiente'],
      ['ΔH', 'Negativo (ΔH < 0)', 'Positivo (ΔH > 0)'],
      ['Exemplos', 'Combustão, respiração, neutralização, condensação, solidificação', 'Fusão do gelo, evaporação, fotossíntese, decomposição do calcário'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Pense no ambiente: se a reação libera calor, o ambiente esquenta (exotérmica). Se absorve calor, o ambiente esfria (endotérmica), como a compressa fria instantânea.' },
    { type: 'h', text: '2. Lei de Hess e combustíveis' },
    { type: 'p', text: 'A **lei de Hess** diz que a variação de entalpia de uma reação depende só dos estados inicial e final, e não do caminho. Portanto, o ΔH total é a **soma** dos ΔH das etapas.' },
    { type: 'callout', kind: 'exemplo', text: String.raw`Etapa 1: $\Delta H_1 = -100$ kJ. Etapa 2: $\Delta H_2 = -50$ kJ. Reação global: $\Delta H = -100 + (-50) = -150$ kJ.` },
    { type: 'p', text: 'A **combustão** de combustíveis (carvão, etanol, gasolina, gás natural) é exotérmica: libera energia, mas também CO₂ (efeito estufa). Por isso a escolha de combustíveis é um tema ambiental.' },
    { type: 'h', text: '3. Cinética química: a rapidez das reações' },
    { type: 'p', text: String.raw`**Velocidade média** = variação da quantidade (ou concentração) de um reagente ou produto por unidade de tempo, por exemplo mol/(L·s). Para reagir, as moléculas precisam **colidir** com orientação certa e energia suficiente (**energia de ativação**, $E_a$).` },
    { type: 'table', head: ['Fator', 'Efeito na velocidade', 'Exemplo'], rows: [
      ['Temperatura ↑', 'Aumenta (mais colisões e mais energéticas)', 'Alimentos estragam mais rápido no calor'],
      ['Concentração ↑', 'Aumenta (mais colisões)', 'Ácido concentrado reage mais rápido'],
      ['Superfície de contato ↑', 'Aumenta (mais área exposta)', 'Pó de carvão queima mais rápido que um bloco'],
      ['Catalisador', 'Aumenta, **diminuindo a energia de ativação**', 'Catalisador automotivo; enzimas'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'O catalisador **não é consumido** e **não altera o ΔH** nem o rendimento: só faz a reação chegar mais rápido ao mesmo resultado.' },
  ],
  exercises: [
    ex('quimica-5', 1, S, 'Uma reação com ΔH < 0 é classificada como:', ['endotérmica', 'exotérmica', 'de decomposição', 'lenta'], 1, 'Resposta B (exotérmica). ΔH negativo significa que os produtos têm menos energia que os reagentes: a diferença foi liberada como calor. É o caso da combustão.'),
    ex('quimica-5', 2, S, 'Qual das alternativas NÃO aumenta a velocidade de uma reação química?', ['aumentar a temperatura', 'aumentar a superfície de contato dos reagentes', 'diminuir a temperatura', 'usar um catalisador'], 2, 'Resposta C. Diminuir a temperatura reduz o número e a energia das colisões, deixando a reação mais lenta. É por isso que usamos a geladeira para conservar alimentos.'),
    ex('quimica-5', 3, S, 'Uma reação ocorre em duas etapas, com ΔH₁ = −100 kJ e ΔH₂ = −50 kJ. Pela lei de Hess, o ΔH da reação global é:', ['−50 kJ', '−100 kJ', '−150 kJ', '+150 kJ'], 2, 'Resposta C (−150 kJ). Pela lei de Hess, o ΔH global é a soma dos ΔH das etapas: −100 + (−50) = −150 kJ. É exotérmica.'),
    ex('quimica-5', 4, S, 'Um catalisador acelera uma reação porque:', ['aumenta a quantidade de produtos formados', 'diminui a energia de ativação', 'é consumido durante a reação', 'torna a reação endotérmica'], 1, 'Resposta B. O catalisador oferece um caminho com menor energia de ativação, e a reação ocorre mais rápido. Ele não é consumido e não muda o ΔH nem a quantidade final de produto.'),
    ex('quimica-5', 5, S, 'Entre os processos abaixo, o único endotérmico (que absorve calor) é:', ['a queima da gasolina', 'a fusão (derretimento) do gelo', 'a formação de orvalho (condensação)', 'a combustão do etanol'], 1, 'Resposta B. Para fundir o gelo é preciso receber calor do ambiente (endotérmico). Combustão e condensação liberam calor (exotérmicos).'),
  ],
}

/** Escala de pH (0 a 14) com exemplos do dia a dia. */
const SVG_PH = (() => {
  const colors = ['#dc2626', '#ea580c', '#f97316', '#f59e0b', '#eab308', '#a3e635', '#4ade80', '#22c55e', '#2dd4bf', '#38bdf8', '#3b82f6', '#6366f1', '#8b5cf6', '#7c3aed', '#6d28d9']
  const bars = colors.map((c, i) => `<rect x="${20 + i * 20}" y="40" width="20" height="30" fill="${c}"/><text x="${30 + i * 20}" y="88" text-anchor="middle" fill="#0a0a0f" font-size="10">${i}</text>`).join('')
  return `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="340" height="190" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Escala de pH (a 25 °C)</text>${bars}
<text x="20" y="32" fill="#b91c1c" font-weight="bold">ÁCIDO</text><text x="170" y="32" text-anchor="middle" fill="#15803d" font-weight="bold">NEUTRO (7)</text><text x="320" y="32" text-anchor="end" fill="#6d28d9" font-weight="bold">BÁSICO</text>
<text x="20" y="116" fill="#0a0a0f">• Suco gástrico: pH ≈ 2    • Limão: ≈ 2    • Chuva "normal": ≈ 5,6</text>
<text x="20" y="134" fill="#0a0a0f">• Água pura e sangue: ≈ 7 e 7,4    • Água do mar: ≈ 8</text>
<text x="20" y="152" fill="#0a0a0f">• Água sanitária e amônia: ≈ 11 a 13    • Soda cáustica: ≈ 14</text>
<text x="20" y="176" fill="#0a0a0f" font-weight="bold">pH = −log [H⁺]    pH + pOH = 14</text></svg>`
})()

export const QUIMICA_6: Lesson = {
  slug: 'quimica-6',
  title: 'Equilíbrio, ácidos e bases, pH e eletroquímica',
  blocks: [
    { type: 'p', text: 'Esta aula reúne três ideias: reações que podem ir e voltar (**equilíbrio**), a medida da acidez (**pH**) e as reações que produzem ou consomem eletricidade (**eletroquímica**). Elas explicam a chuva ácida, o tratamento de água e as pilhas e baterias. Na UEMG 2024 caiu uma questão de oxirredução (ferrugem) e, em 2023, um sistema ácido-base (água sanitária).' },
    { type: 'h', text: '1. Equilíbrio químico' },
    { type: 'p', text: 'Em uma reação **reversível** (⇌), reagentes viram produtos e produtos viram reagentes. No **equilíbrio**, as duas velocidades se igualam: as concentrações ficam constantes (equilíbrio **dinâmico**: a reação não parou, só está balanceada).' },
    { type: 'math', tex: String.raw`aA + bB \rightleftharpoons cC + dD \qquad K_c = \dfrac{[C]^c\,[D]^d}{[A]^a\,[B]^b}` },
    { type: 'p', text: '**Princípio de Le Chatelier:** se um equilíbrio é perturbado, ele se desloca para **diminuir** a perturbação.' },
    { type: 'table', head: ['Perturbação', 'Deslocamento'], rows: [
      ['Aumentar a concentração de um reagente', 'Para o lado dos **produtos**'],
      ['Aumentar a concentração de um produto', 'Para o lado dos **reagentes**'],
      ['Aumentar a pressão', 'Para o lado com **menor volume** (menos mols de gás)'],
      ['Aumentar a temperatura', 'Para o sentido **endotérmico**'],
      ['Adicionar catalisador', '**Não desloca**; só faz o equilíbrio ser atingido mais rápido'],
    ] },
    { type: 'h', text: '2. Ácidos, bases e pH' },
    { type: 'list', items: ['**Arrhenius:** ácido libera H⁺; base libera OH⁻. **Brønsted-Lowry:** ácido doa H⁺; base recebe H⁺.', '**Forças:** ácidos fortes (HCl, H₂SO₄, HNO₃) se ionizam quase totalmente; ácidos fracos (ácido acético, H₂CO₃) pouco.'] },
    { type: 'figure', svg: SVG_PH, alt: 'Escala de pH de 0 a 14 colorida, do ácido ao básico, com exemplos', caption: 'Cada unidade de pH muda a concentração de H⁺ em 10 vezes.' },
    { type: 'math', tex: String.raw`\text{pH} = -\log\,[H^+] \qquad \text{pOH} = -\log\,[OH^-] \qquad \text{pH} + \text{pOH} = 14` },
    { type: 'callout', kind: 'exemplo', text: String.raw`$[H^+] = 10^{-3}$ mol/L $\Rightarrow$ pH $= 3$ (ácida). $[H^+] = 10^{-9}$ mol/L $\Rightarrow$ pH $= 9$ (básica).` },
    { type: 'callout', kind: 'atencao', text: 'Chuva "normal" já é levemente ácida (pH ≈ 5,6, por causa do CO₂ dissolvido). A **chuva ácida** tem pH menor que 5,6, por óxidos de enxofre e nitrogênio.' },
    { type: 'p', text: '**Solução tampão** resiste a variações de pH (o sangue tem pH ≈ 7,4 graças a tampões). Indicadores (fenolftaleína, papel de tornassol) mudam de cor conforme o pH.' },
    { type: 'h', text: '3. Oxirredução e pilhas' },
    { type: 'list', items: ['**Oxidação:** perda de elétrons (o Nox **aumenta**). **Redução:** ganho de elétrons (o Nox **diminui**).', 'O **agente oxidante** é quem **sofre redução** (causa a oxidação do outro); o **agente redutor** é quem **sofre oxidação**.', '**Nox:** substância simples = 0; O = −2 (quase sempre); H = +1; metais alcalinos = +1; a soma dos Nox no composto neutro = 0.'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Em $KMnO_4$: $K = +1$, $O = -2$ (4 átomos = −8), então $+1 + x - 8 = 0 \Rightarrow x = +7$. O Mn tem Nox +7.` },
    { type: 'table', head: ['', 'Pilha (reação espontânea)', 'Eletrólise (reação forçada)'], rows: [
      ['Energia', 'Química → elétrica', 'Elétrica → química'],
      ['Ânodo', 'Oxidação (polo negativo)', 'Oxidação (polo positivo)'],
      ['Cátodo', 'Redução (polo positivo)', 'Redução (polo negativo)'],
      ['Exemplo', 'Pilha de Daniell (Zn e Cu); baterias', 'Produção de alumínio, cloro e soda; galvanoplastia'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Em qualquer célula eletroquímica, o **ânodo** é onde ocorre a **oxidação** e o **cátodo** é onde ocorre a **redução**. (Vogais com vogais: Ânodo-Oxidação; Consoantes: Cátodo-Redução.)' },
  ],
  exercises: [
    ex('quimica-6', 1, S, 'Uma solução tem concentração de íons H⁺ igual a 10⁻³ mol/L. Seu pH é:', ['3', '7', '11', '−3'], 0, 'Resposta A (3). pH = −log [H⁺] = −log 10⁻³ = 3. É uma solução ácida (pH menor que 7).'),
    ex('quimica-6', 2, S, 'Uma solução com pH igual a 9, a 25 °C, é:', ['ácida', 'neutra', 'básica (alcalina)', 'um ácido forte'], 2, 'Resposta C (básica). A 25 °C, pH menor que 7 é ácido, igual a 7 é neutro e maior que 7 é básico. Quanto maior o pH, mais básica.'),
    ex('quimica-6', 3, S, 'Em um equilíbrio químico, se aumentarmos a concentração de um dos reagentes, o equilíbrio:', ['se desloca para o lado dos produtos', 'se desloca para o lado dos reagentes', 'não sofre alteração', 'deixa de existir'], 0, 'Resposta A. Pelo princípio de Le Chatelier, o sistema reage para diminuir a perturbação: consome o reagente em excesso, formando mais produtos.'),
    ex('quimica-6', 4, S, 'Em uma pilha, a oxidação ocorre no:', ['cátodo', 'ânodo', 'eletrólito', 'fio de ligação'], 1, 'Resposta B (ânodo). É nele que o metal perde elétrons (oxida). Os elétrons seguem pelo fio até o cátodo, onde ocorre a redução. Associe: Ânodo-Oxidação.'),
    ex('quimica-6', 5, S, 'O número de oxidação (Nox) do manganês no permanganato de potássio, KMnO₄, é:', ['+1', '+4', '+5', '+7'], 3, 'Resposta D (+7). K = +1 e cada O = −2 (4 átomos somam −8). Como o composto é neutro: +1 + x − 8 = 0, então x = +7.'),
  ],
}

export const QUIMICA_7: Lesson = {
  slug: 'quimica-7',
  title: 'Química orgânica e química ambiental',
  blocks: [
    { type: 'p', text: '**Química orgânica** estuda os compostos do **carbono**: combustíveis, plásticos, medicamentos, alimentos e os próprios seres vivos. A UEMG já pediu funções orgânicas de vanilina e cafeína e isomeria de gorduras. Ao final, vamos ligar tudo à **química ambiental**.' },
    { type: 'h', text: '1. O carbono e as cadeias carbônicas' },
    { type: 'list', items: ['O carbono é **tetravalente** (faz 4 ligações) e forma cadeias longas.', '**Cadeia aberta** (acíclica) × **fechada** (cíclica); **saturada** (só ligações simples entre carbonos) × **insaturada** (com duplas ou triplas); **homogênea** (só carbonos) × **heterogênea** (com heteroátomo, como O ou N, entre carbonos).'] },
    { type: 'h', text: '2. Principais funções orgânicas' },
    { type: 'table', head: ['Função', 'Grupo funcional', 'Exemplo'], rows: [
      ['Hidrocarboneto', 'Só C e H', 'Metano (CH₄), propano, octano (gasolina)'],
      ['Álcool', '—OH ligado a carbono saturado', 'Etanol (CH₃CH₂OH)'],
      ['Fenol', '—OH ligado ao anel aromático', 'Fenol; vanilina (também aldeído e éter)'],
      ['Aldeído', '—CHO (carbonila na ponta)', 'Formol; vanilina'],
      ['Cetona', '—CO— (carbonila no meio)', 'Acetona'],
      ['Ácido carboxílico', '—COOH', 'Ácido acético (vinagre); ácidos graxos'],
      ['Éster', '—COO— entre carbonos', 'Aromas de frutas; óleos e gorduras'],
      ['Éter', '—O— entre carbonos', 'Éter etílico'],
      ['Amina e amida', 'N ligado a C (amina); N ligado a C=O (amida)', 'Cafeína (tem grupos amida); ureia'],
    ] },
    { type: 'h', text: '3. Nomenclatura básica' },
    { type: 'table', head: ['Nº de carbonos', 'Prefixo', 'Tipo de ligação', 'Infixo'], rows: [
      ['1', 'met', 'Só simples', '-an-'],
      ['2', 'et', 'Uma dupla', '-en-'],
      ['3', 'prop', 'Uma tripla', '-in-'],
      ['4', 'but', '', ''],
      ['5', 'pent', '', ''],
      ['6', 'hex', '', ''],
    ] },
    { type: 'callout', kind: 'exemplo', text: 'Propano = prop (3 C) + an (só ligações simples) + o (hidrocarboneto): C₃H₈, o gás de cozinha. Eteno = et + en + o: C₂H₄.' },
    { type: 'h', text: '4. Isomeria e reações' },
    { type: 'list', items: ['**Isômeros:** mesma fórmula molecular, estruturas diferentes. Os **constitucionais** (de cadeia, posição ou função) e os **espaciais**: **geométrica** (cis-trans, como as gorduras trans da UEMG 2024) e **óptica** (carbono quiral).', '**Combustão completa** de hidrocarbonetos: produz **CO₂ e H₂O** e libera energia. Se faltar oxigênio (incompleta), forma CO (monóxido) e fuligem.', '**Esterificação:** ácido + álcool → éster + água. **Saponificação:** gordura + base forte → sabão + glicerina.', '**Polímeros:** moléculas gigantes feitas da repetição de unidades (monômeros). Polietileno, PVC, PET e o náilon são exemplos.'] },
    { type: 'h', text: '5. Química ambiental' },
    { type: 'table', head: ['Tema', 'Explicação'], rows: [
      ['Efeito estufa', 'CO₂ e CH₄ retêm calor na atmosfera; o excesso, pela queima de combustíveis fósseis e queimadas, causa o aquecimento global'],
      ['Chuva ácida', 'Óxidos de enxofre e de nitrogênio dissolvidos na água formam ácidos (pH menor que 5,6)'],
      ['Camada de ozônio', 'Os CFCs destroem o ozônio, que filtra a radiação ultravioleta'],
      ['Biocombustíveis', 'Etanol e biodiesel, de fontes renováveis, reduzem emissões líquidas de CO₂'],
      ['Plásticos', 'Demoram séculos para se decompor; viram microplásticos. Reduzir, reutilizar e reciclar'],
      ['Tratamento de água e esgoto', 'Decantação, filtração e cloração tornam a água potável; o esgoto bem tratado evita eutrofização'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Em Química Verde, o objetivo é reduzir resíduos e substâncias tóxicas, usar fontes renováveis e produzir com mais eficiência energética.' },
  ],
  exercises: [
    ex('quimica-7', 1, S, 'O etanol (CH₃CH₂OH) é um composto orgânico pertencente à função:', ['aldeído', 'cetona', 'álcool', 'éter'], 2, 'Resposta C (álcool). Tem o grupo —OH ligado a um carbono saturado. Se o —OH estivesse ligado a um anel aromático, seria fenol.'),
    ex('quimica-7', 2, S, 'O nome "propano" indica um hidrocarboneto com:', ['2 carbonos e uma ligação dupla', '3 carbonos e apenas ligações simples', '4 carbonos e uma tripla', '1 carbono'], 1, 'Resposta B. O prefixo "prop" indica 3 carbonos e o infixo "an" indica que só há ligações simples entre os carbonos. É o C₃H₈, componente do gás de cozinha.'),
    ex('quimica-7', 3, S, 'Dois compostos de mesma fórmula, com os grupos do mesmo lado ou de lados opostos de uma dupla ligação (cis e trans), apresentam isomeria:', ['de cadeia', 'de função', 'geométrica', 'de posição'], 2, 'Resposta C (geométrica ou cis-trans). Ocorre quando há uma dupla ligação (ou ciclo) que impede a rotação. É o caso das gorduras cis e trans da prova da UEMG 2024.'),
    ex('quimica-7', 4, S, 'A combustão completa de um hidrocarboneto produz:', ['CO e H₂', 'CO₂ e H₂O', 'C e H₂O', 'CH₄ e O₂'], 1, 'Resposta B. Com oxigênio suficiente, todo o carbono vira CO₂ e todo o hidrogênio vira H₂O, liberando energia. Na combustão incompleta formam-se CO e fuligem (C).'),
    ex('quimica-7', 5, S, 'O polietileno e o PET, usados em sacolas e garrafas, são exemplos de:', ['sais inorgânicos', 'polímeros', 'ácidos fortes', 'óxidos'], 1, 'Resposta B (polímeros). São macromoléculas formadas pela repetição de unidades menores (monômeros). A degradação lenta desses plásticos é um grande problema ambiental.'),
  ],
}
