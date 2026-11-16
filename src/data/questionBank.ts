import type { Exercise } from './exercises'
import { EXERCISES } from './exercises'
import q2023 from './questions/2023.json'
import q2024 from './questions/2024.json'
import type { SubjectId } from '../domain/types'

interface RawQuestion {
  id: string
  year: number
  number: number
  subject: SubjectId
  statement: string
  options: string[]
  answer: number | null
  annulled: boolean
  context?: { text: string; images: string[] }[]
  images: string[]
  snapshots: string[]
  needsFigure: boolean
}

const toExercise = (q: RawQuestion): Exercise => ({
  id: q.id,
  subject: q.subject,
  statement: q.statement,
  options: q.options as Exercise['options'],
  answer: q.answer as Exercise['answer'],
  context: q.context,
  images: q.images,
  snapshots: q.snapshots,
  source: { year: q.year, number: q.number },
})

/** Questões oficiais de provas anteriores, sem as anuladas. */
export const PAST_QUESTIONS: Exercise[] = ([...q2023, ...q2024] as RawQuestion[])
  .filter((q) => !q.annulled && q.answer !== null)
  .map(toExercise)

export const exerciseById = (id: string): Exercise | undefined =>
  EXERCISES.find((e) => e.id === id) ?? PAST_QUESTIONS.find((e) => e.id === id)

export const questionsBySubject = (subject: SubjectId): Exercise[] =>
  PAST_QUESTIONS.filter((q) => q.subject === subject)

export const QUESTION_YEARS = [...new Set(PAST_QUESTIONS.map((q) => q.source!.year))].sort()
