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

export const LESSONS_PRACTICE: Lesson[] = [MATEMATICA_PRATICA_1, FISICA_PRATICA_1, QUIMICA_PRATICA_1]
