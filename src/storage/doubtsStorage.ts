import type { Doubt } from '../domain/doubts'
import { notifyLocalChange, scopedKey } from './scope'

export const DOUBTS_KEY = 'vestibular-uemg:doubts:v1'

const isDoubt = (v: unknown): v is Doubt => {
  if (typeof v !== 'object' || v === null) return false
  const o = v as Record<string, unknown>
  return (
    typeof o.id === 'string' &&
    typeof o.text === 'string' &&
    typeof o.createdAt === 'string' &&
    typeof o.resolved === 'boolean' &&
    (o.subject === null || typeof o.subject === 'string')
  )
}

/** Valida dúvidas vindas do aparelho ou da nuvem; dados inválidos viram lista vazia. */
export const parseDoubts = (raw: unknown): Doubt[] =>
  Array.isArray(raw) && raw.every(isDoubt) ? raw : []

function read(key: string): Doubt[] {
  try {
    const raw = localStorage.getItem(key)
    return raw ? parseDoubts(JSON.parse(raw)) : []
  } catch {
    return []
  }
}

export const loadDoubts = (): Doubt[] => read(scopedKey(DOUBTS_KEY))

export const loadLegacyDoubts = (): Doubt[] => read(DOUBTS_KEY)

export function removeLegacyDoubts(): void {
  try {
    localStorage.removeItem(DOUBTS_KEY)
  } catch {
    // ignora
  }
}

export function saveDoubts(list: Doubt[]): void {
  try {
    localStorage.setItem(scopedKey(DOUBTS_KEY), JSON.stringify(list))
  } catch {
    // armazenamento indisponível: segue sem persistir
  }
  notifyLocalChange()
}
