import type { SubjectId } from '../domain/types'

export interface ExerciseContext {
  text: string
  images: string[]
}

export interface Exercise {
  id: string
  subject: SubjectId
  statement: string
  options: [string, string, string, string]
  /** Índice (0–3) da alternativa correta. */
  answer: 0 | 1 | 2 | 3
  /** Explicação do porquê; ainda não existe para as questões importadas das provas. */
  explanation?: string
  /** Textos de apoio compartilhados (ex.: "Leia o texto para as questões 1 e 2"). */
  context?: ExerciseContext[]
  /** Figuras recortadas da prova (caminhos relativos a `public/`). */
  images?: string[]
  /** Recortes da questão inteira, como aparece na prova. */
  snapshots?: string[]
  /** Origem, para questões de provas anteriores. */
  source?: { year: number; number: number }
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


