import type { Exercise } from '../exercises'
import type { Difficulty, SubjectId } from '../../domain/types'

/** Cria um exercício de aula com id estável: les-<slug>-<n>. */
export const ex = (
  slug: string,
  n: number,
  subject: SubjectId,
  statement: string,
  options: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explanation: string,
): Exercise => ({ id: `les-${slug}-${n}`, subject, statement, options, answer, explanation })

/** Questão extra de uma tarefa (as 7 novas: 5 médias e 2 difíceis). Id estável: les-<slug>-<n>. */
export const exd = (
  slug: string,
  n: number,
  subject: SubjectId,
  difficulty: Difficulty,
  statement: string,
  options: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explanation: string,
): Exercise => ({ id: `les-${slug}-${n}`, subject, difficulty, statement, options, answer, explanation })
