import type { SubjectId } from '../domain/types'

export interface Exercise {
  id: string
  subject: SubjectId
  statement: string
  options: [string, string, string, string]
  /** Índice (0–3) da alternativa correta. */
  answer: 0 | 1 | 2 | 3
  explanation: string
}

/** Exercícios de exemplo; o banco real virá das provas importadas. */
export const EXERCISES: Exercise[] = [
  {
    id: 'ex-mat-1',
    subject: 'matematica',
    statement: 'Qual é o valor de 2³ + 3²?',
    options: ['11', '13', '17', '25'],
    answer: 2,
    explanation: '2³ = 8 e 3² = 9, então 8 + 9 = 17.',
  },
  {
    id: 'ex-mat-2',
    subject: 'matematica',
    statement: 'Se 20% de x é 30, quanto vale x?',
    options: ['60', '120', '150', '600'],
    answer: 2,
    explanation: '0,2·x = 30, logo x = 30 / 0,2 = 150.',
  },
]

export const exerciseById = (id: string): Exercise | undefined => EXERCISES.find((e) => e.id === id)
