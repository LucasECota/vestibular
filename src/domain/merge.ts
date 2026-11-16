import type { Doubt } from './doubts'
import type { ProgressState, ReviewItem } from './types'

const unique = <T,>(list: T[]): T[] => [...new Set(list)]

const newer = (a: ReviewItem, b: ReviewItem): ReviewItem =>
  b.step > a.step || (b.step === a.step && b.dueDate > a.dueDate) ? b : a

export const isEmptyProgress = (p: ProgressState): boolean =>
  p.completedTaskIds.length === 0 &&
  p.activeDates.length === 0 &&
  p.attempts.length === 0 &&
  p.reviewQueue.length === 0 &&
  p.reviewCorrect === 0

/**
 * Junta dois progressos (por exemplo, o da nuvem e o salvo no aparelho), sem perder nada.
 * Em conflito de tentativa na mesma questão, vence `a` (a primeira tentativa já registrada).
 */
export function mergeProgress(a: ProgressState, b: ProgressState): ProgressState {
  const attemptIds = new Set(a.attempts.map((x) => x.exerciseId))
  const queue = new Map<string, ReviewItem>()
  for (const item of [...a.reviewQueue, ...b.reviewQueue]) {
    const current = queue.get(item.exerciseId)
    queue.set(item.exerciseId, current ? newer(current, item) : item)
  }
  return {
    completedTaskIds: unique([...a.completedTaskIds, ...b.completedTaskIds]),
    activeDates: unique([...a.activeDates, ...b.activeDates]).sort(),
    attempts: [...a.attempts, ...b.attempts.filter((x) => !attemptIds.has(x.exerciseId))],
    reviewQueue: [...queue.values()],
    reviewCorrect: Math.max(a.reviewCorrect, b.reviewCorrect),
  }
}

/** Junta duas listas de dúvidas por id; resolvida em qualquer lado continua resolvida. */
export function mergeDoubts(a: Doubt[], b: Doubt[]): Doubt[] {
  const byId = new Map<string, Doubt>()
  for (const d of [...a, ...b]) {
    const cur = byId.get(d.id)
    byId.set(d.id, cur ? { ...cur, resolved: cur.resolved || d.resolved } : d)
  }
  return [...byId.values()]
}
