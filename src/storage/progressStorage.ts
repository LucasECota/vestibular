import { emptyProgress, type ProgressState } from '../domain/types'

export const STORAGE_KEY = 'vestibular-uemg:progress:v1'

const isStringArray = (v: unknown): v is string[] =>
  Array.isArray(v) && v.every((x) => typeof x === 'string')

function isProgress(v: unknown): v is Partial<ProgressState> {
  if (typeof v !== 'object' || v === null) return false
  const o = v as Record<string, unknown>
  return (
    isStringArray(o.completedTaskIds) && isStringArray(o.activeDates) && Array.isArray(o.attempts)
  )
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgress()
    const parsed: unknown = JSON.parse(raw)
    return isProgress(parsed) ? { ...emptyProgress(), ...parsed } : emptyProgress()
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // armazenamento indisponível (modo privado/cheio): segue sem persistir
  }
}
