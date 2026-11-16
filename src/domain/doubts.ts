import { SUBJECT_LABEL } from '../data/subjects'
import type { SubjectId } from './types'

export interface Doubt {
  id: string
  text: string
  subject: SubjectId | null
  createdAt: string
  resolved: boolean
}

interface NewDoubt {
  id: string
  text: string
  subject: SubjectId | null
  createdAt: string
}

export function addDoubt(list: Doubt[], input: NewDoubt): Doubt[] {
  const text = input.text.trim()
  if (!text) return list
  return [{ ...input, text, resolved: false }, ...list]
}

export const toggleResolved = (list: Doubt[], id: string): Doubt[] =>
  list.map((d) => (d.id === id ? { ...d, resolved: !d.resolved } : d))

export const removeDoubt = (list: Doubt[], id: string): Doubt[] => list.filter((d) => d.id !== id)

/** Texto pronto para colar numa mensagem, só com as dúvidas ainda abertas. */
export function formatDoubtsForShare(list: Doubt[]): string {
  const open = list.filter((d) => !d.resolved)
  if (open.length === 0) return 'Sem dúvidas abertas.'
  const lines = open.map(
    (d, i) => `${i + 1}. ${d.subject ? `${SUBJECT_LABEL[d.subject]}: ` : ''}${d.text}`,
  )
  return `Dúvidas da Daniela:\n${lines.join('\n')}`
}
