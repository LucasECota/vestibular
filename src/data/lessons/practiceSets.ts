import type { Lesson } from '../../domain/lesson'
import { simulado } from './week8'

/**
 * Tarefas de prática das semanas 1 a 7 (questões de provas anteriores + extras novas).
 * As questões em si ficam em `data/extras`; aqui está só o roteiro de cada tarefa.
 */
export const MATEMATICA_PRATICA_1: Lesson = simulado(
  'matematica-pratica-1',
  'Prática de Matemática 1',
  'Primeira prática de Matemática: as questões oficiais abaixo misturam vários assuntos, e as extras reforçam o que você já viu até agora (operações, potências, porcentagem, razão, proporção e regra de três).',
  ['Resolva primeiro as fáceis para aquecer; as questões vêm das mais fáceis para as mais difíceis.', 'Em porcentagem, trabalhe com fatores: aumento de 25% é × 1,25; desconto de 20% é × 0,8.', 'Em regra de três, identifique se as grandezas são direta ou inversamente proporcionais.', 'Em questões difíceis, quebre o problema em passos e confira a resposta voltando ao enunciado.'],
  'Somar percentuais em vez de multiplicar; calcular o desconto sobre o valor final em vez de sobre o original; trocar razão com fração do total; e esquecer de simplificar potências antes de multiplicar.',
  [],
)

export const FISICA_PRATICA_1: Lesson = simulado(
  'fisica-pratica-1',
  'Prática de Física 1',
  'Primeira prática de Física: as questões oficiais abaixo cobrem vários temas, e as extras reforçam o que você já estudou (cinemática e leis de Newton).',
  ['Converta tudo para o SI (km/h → m/s, g → kg) antes de aplicar as fórmulas.', 'Em dinâmica, desenhe as forças e some as que têm o mesmo sentido, subtraindo as contrárias.', 'Em lançamentos, separe os movimentos: horizontal (MRU) e vertical (MRUV).', 'As questões vêm das mais fáceis para as mais difíceis: use as fáceis para aquecer.'],
  'Confundir massa com peso; esquecer o atrito na resultante; usar a distância errada em Torricelli; e esquecer que no ponto mais alto de um lançamento vertical a velocidade é zero.',
  [],
)

export const QUIMICA_PRATICA_1: Lesson = simulado(
  'quimica-pratica-1',
  'Prática de Química 1',
  'Primeira prática de Química: as questões oficiais abaixo misturam vários temas, e as extras reforçam o que você viu até agora (matéria, átomo, tabela, ligações e funções inorgânicas).',
  ['Comece pelas fáceis para aquecer, depois faça as oficiais e deixe as difíceis por último.', 'Em cálculos, escreva a reação balanceada e use a proporção em mols.', 'Para pH, lembre: menor que 7 é ácido, 7 é neutro e maior que 7 é básico.', 'Para o tipo de ligação, observe quem se liga: metal + ametal é iônica; ametal + ametal é covalente.'],
  'Esquecer de balancear a equação; misturar massa (g) com quantidade (mol); e achar que diluir um ácido forte o torna básico (o pH só se aproxima de 7).',
  [],
)

export const BIOLOGIA_PRATICA_1: Lesson = simulado(
  'biologia-pratica-1',
  'Prática de Biologia 1',
  'Primeira prática de Biologia: as questões oficiais abaixo cobrem vários temas, e as extras reforçam citologia, genética, ecologia e evolução.',
  ['Leia o enunciado inteiro: as provas da UEMG trazem um texto introdutório com dicas.', 'Em genética, monte o quadro de cruzamento antes de calcular probabilidades.', 'Em ecologia, lembre-se de que a energia diminui a cada nível trófico (cerca de 10% passa adiante).', 'Faça primeiro as fáceis e deixe as difíceis para o final.'],
  'Confundir homólogo com análogo; esquecer que probabilidades de eventos independentes se multiplicam; e trocar DNA por RNA (timina × uracila).',
  [],
)

export const PORTUGUES_PRATICA_1: Lesson = simulado(
  'portugues-pratica-1',
  'Prática de Português e Literatura 1',
  'Primeira prática de Português e Literatura: as questões oficiais abaixo cobrem interpretação, gramática e escolas literárias, e as extras reforçam o que você viu até agora.',
  ['Em interpretação, volte ao texto: a resposta sempre está nele (ou pode ser deduzida dele).', 'Em questões de "alternativa incorreta", marque a que está errada, não a certa.', 'Associe cada escola literária a autor, época e tema (ex.: Castro Alves, condoreirismo e abolição).', 'Faça as fáceis primeiro e deixe as difíceis para o final.'],
  'Marcar a alternativa certa quando o enunciado pede a incorreta; confundir sujeito com o termo mais próximo do verbo; e trocar escolas literárias parecidas (Romantismo, Realismo, Parnasianismo).',
  [],
)

export const INGLES_PRATICA_1: Lesson = simulado(
  'ingles-pratica-1',
  'Prática de Inglês 1',
  'Primeira prática de Inglês: as questões oficiais trazem poemas, diálogos, notícias e tirinhas, e as extras reforçam gramática e vocabulário.',
  ['Leia o texto antes das alternativas e procure palavras parecidas com o português (mas cuidado com os falsos cognatos).', 'Em diálogos, repare em quem fala e no tom da conversa.', 'Para conectivos (but, because, despite), pense na relação entre as duas ideias.', 'Faça as fáceis primeiro e deixe as difíceis para o final.'],
  'Cair em falsos cognatos (library, actually, pretend); ignorar o tempo verbal; e responder pelo que "parece" em vez de pelo que o texto diz.',
  [],
)

export const MATEMATICA_PRATICA_2: Lesson = simulado(
  'matematica-pratica-2',
  'Prática de Matemática 2',
  'Segunda prática de Matemática: as três questões oficiais cobrem geometria analítica, funções e matrizes, e as extras reforçam cálculos básicos, probabilidade, matrizes e contagem.',
  ['Nas questões de geometria analítica, faça um esboço do plano cartesiano.', 'Em determinantes, escreva os produtos das diagonais com cuidado com os sinais.', 'Em contagem, veja se a ordem importa (permutação) ou não (combinação).', 'Comece pelas fáceis para pegar ritmo.'],
  'Errar o sinal no determinante; esquecer o domínio em funções racionais; e esquecer de multiplicar pelas trocas de lugar em permutações com elementos juntos.',
  [],
)

export const LESSONS_PRACTICE: Lesson[] = [MATEMATICA_PRATICA_1, FISICA_PRATICA_1, QUIMICA_PRATICA_1, BIOLOGIA_PRATICA_1, PORTUGUES_PRATICA_1, INGLES_PRATICA_1, MATEMATICA_PRATICA_2]
