import type { Exercise } from '../exercises'
import type { SubjectId } from '../../domain/types'

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
