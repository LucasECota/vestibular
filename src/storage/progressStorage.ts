import { emptyProgress, type ProgressState } from '../domain/types'
import { notifyLocalChange, scopedKey } from './scope'

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

/** Valida dados vindos do aparelho ou da nuvem; o que estiver inválido vira progresso vazio. */
export function parseProgress(raw: unknown): ProgressState {
  return isProgress(raw) ? { ...emptyProgress(), ...raw } : emptyProgress()
}

function read(key: string): ProgressState {
  try {
    const raw = localStorage.getItem(key)
    return raw ? parseProgress(JSON.parse(raw)) : emptyProgress()
  } catch {
    return emptyProgress()
  }
}

export const loadProgress = (): ProgressState => read(scopedKey(STORAGE_KEY))

/** Progresso salvo antes de existir login (chave sem escopo). */
export const loadLegacyProgress = (): ProgressState => read(STORAGE_KEY)

export function removeLegacyProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignora
  }
}

export function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(scopedKey(STORAGE_KEY), JSON.stringify(state))
  } catch {
    // armazenamento indisponível (modo privado/cheio): segue sem persistir
  }
  notifyLocalChange()
}
