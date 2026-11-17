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

export const LESSONS_PRACTICE: Lesson[] = [MATEMATICA_PRATICA_1]
