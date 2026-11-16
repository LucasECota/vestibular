export const XP_CORRECT = 10
export const XP_WRONG = 2
export const XP_TASK_COMPLETE = 50

export const xpForAttempt = (correct: boolean): number => (correct ? XP_CORRECT : XP_WRONG)

/** Quantidade de xp necessária para sair do nível indicado. */
const levelSpan = (level: number): number => 50 + 50 * level

export interface LevelInfo {
  level: number
  xpIntoLevel: number
  xpForNext: number
}

export function levelFromXp(xp: number): LevelInfo {
  let level = 1
  let remaining = Math.max(0, xp)
  while (remaining >= levelSpan(level)) {
    remaining -= levelSpan(level)
    level += 1
  }
  return { level, xpIntoLevel: remaining, xpForNext: levelSpan(level) }
}

const DAY_MS = 24 * 60 * 60 * 1000
const toUtc = (iso: string): number => Date.parse(`${iso}T00:00:00Z`)
const fromUtc = (ms: number): string => new Date(ms).toISOString().slice(0, 10)
const isWeekend = (ms: number): boolean => [0, 6].includes(new Date(ms).getUTCDay())

/**
 * Dias úteis consecutivos de estudo até `today`.
 * Se hoje ainda não teve atividade, a sequência de ontem continua valendo.
 * Fins de semana nunca quebram a sequência.
 */
export function studyStreak(activeDates: string[], today: string): number {
  const active = new Set(activeDates)
  let cursor = toUtc(today)
  const stepBack = () => {
    do cursor -= DAY_MS
    while (isWeekend(cursor))
  }
  while (isWeekend(cursor)) cursor -= DAY_MS
  if (!active.has(fromUtc(cursor))) stepBack()
  let streak = 0
  while (active.has(fromUtc(cursor))) {
    streak += 1
    stepBack()
  }
  return streak
}
