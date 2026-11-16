import type { Doubt } from '../domain/doubts'

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

export function loadDoubts(): Doubt[] {
  try {
    const raw = localStorage.getItem(DOUBTS_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.every(isDoubt) ? parsed : []
  } catch {
    return []
  }
}

export function saveDoubts(list: Doubt[]): void {
  try {
    localStorage.setItem(DOUBTS_KEY, JSON.stringify(list))
  } catch {
    // armazenamento indisponível: segue sem persistir
  }
}
