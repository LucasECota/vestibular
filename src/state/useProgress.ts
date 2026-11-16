import { createContext, useContext } from 'react'
import type { LevelInfo } from '../domain/gamification'
import type { ExerciseAttempt, ProgressState } from '../domain/types'

export interface ProgressValue {
  progress: ProgressState
  today: string
  xp: number
  level: LevelInfo
  streak: number
  answer: (attempt: ExerciseAttempt) => void
  finishTask: (taskId: string) => void
  answerReview: (exerciseId: string, correct: boolean) => void
  /** Última tarefa aberta (vale só se ainda não foi concluída). */
  openTaskId: string | null
  openTask: (taskId: string) => void
}

export const ProgressCtx = createContext<ProgressValue | null>(null)

export function useProgress(): ProgressValue {
  const v = useContext(ProgressCtx)
  if (!v) throw new Error('useProgress precisa estar dentro de ProgressProvider')
  return v
}
