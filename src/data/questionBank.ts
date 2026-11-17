import type { Exercise } from './exercises'
import { LESSON_EXERCISES } from './lessons'
import q2023 from './questions/2023.json'
import q2024 from './questions/2024.json'
import fixes from './questionFixes.json'
import { EXPLANATIONS } from './explanations'
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

interface Fix {
  statement?: string
  options?: string[]
  context?: { text: string; images: string[] }[]
}

/** Correções manuais onde a extração do PDF perdeu fórmulas, frações ou símbolos. */
const FIXES = fixes as Record<string, Fix>

/** Põe cada item "I-", "II-" e cada "( )" em linha própria, para ficar legível no celular. */
export const formatStatement = (text: string): string =>
  text
    .replace(/(?<=\S)\s+(?=\( \) )/g, '\n')
    .replace(/(?<=[.:;?!)”"])\s+(?=(?:I|II|III|IV|V|VI)\s?-\s?[A-ZÀ-Ú])/g, '\n')

const toExercise = (raw: RawQuestion): Exercise => {
  const q = { ...raw, statement: formatStatement(raw.statement), ...FIXES[raw.id] }
  return {
  id: q.id,
  subject: q.subject,
  statement: q.statement,
  options: q.options as Exercise['options'],
  answer: q.answer as Exercise['answer'],
  explanation: EXPLANATIONS[q.id],
  context: q.context,
  images: q.images,
  source: { year: q.year, number: q.number },
  }
}

/** Questões oficiais de provas anteriores, sem as anuladas. */
export const PAST_QUESTIONS: Exercise[] = ([...q2023, ...q2024] as RawQuestion[])
  .filter((q) => !q.annulled && q.answer !== null)
  .map(toExercise)

export const exerciseById = (id: string): Exercise | undefined =>
  LESSON_EXERCISES.find((e) => e.id === id) ?? PAST_QUESTIONS.find((e) => e.id === id)

export const questionsBySubject = (subject: SubjectId): Exercise[] =>
  PAST_QUESTIONS.filter((q) => q.subject === subject)

export const QUESTION_YEARS = [...new Set(PAST_QUESTIONS.map((q) => q.source!.year))].sort()
