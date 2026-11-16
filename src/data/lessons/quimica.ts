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
