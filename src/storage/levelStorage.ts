import { scopedKey } from './scope'

export const SEEN_LEVEL_KEY = 'vestibular-uemg:seen-level:v1'

/** Último nível que já foi comemorado (ou visto) neste aparelho. */
export function loadSeenLevel(): number | null {
  try {
    const raw = localStorage.getItem(scopedKey(SEEN_LEVEL_KEY))
    const n = raw === null ? NaN : Number(raw)
    return Number.isInteger(n) && n >= 1 ? n : null
  } catch {
    return null
  }
}

export function saveSeenLevel(level: number): void {
  try {
    localStorage.setItem(scopedKey(SEEN_LEVEL_KEY), String(level))
  } catch {
    // sem armazenamento: pode comemorar de novo ao recarregar
  }
}
