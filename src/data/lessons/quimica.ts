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
