import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { todayISO } from '../domain/date'
import { levelFromXp, studyStreak } from '../domain/gamification'
import { completeTask, recordAttempt, totalXp } from '../domain/progress'
import { recordReview } from '../domain/review'
import type { ExerciseAttempt, ProgressState } from '../domain/types'
import { clearOpenTask, loadOpenTask, saveOpenTask } from '../storage/openTaskStorage'
import { loadProgress, saveProgress } from '../storage/progressStorage'
import { ProgressCtx, type ProgressValue } from './useProgress'

export function ProgressProvider({ children, today = todayISO() }: { children: ReactNode; today?: string }) {
  const [progress, setProgress] = useState<ProgressState>(loadProgress)

  useEffect(() => saveProgress(progress), [progress])

  const [openTaskId, setOpenTaskId] = useState<string | null>(loadOpenTask)
  const openTask = useCallback((taskId: string) => {
    setOpenTaskId(taskId)
    saveOpenTask(taskId)
  }, [])
  const closeOpenTask = useCallback(() => {
    setOpenTaskId(null)
    clearOpenTask()
  }, [])

  const answer = useCallback(
    (attempt: ExerciseAttempt) => setProgress((p) => recordAttempt(p, attempt, today)),
    [today],
  )
  const finishTask = useCallback(
    (taskId: string) => setProgress((p) => completeTask(p, taskId, today)),
    [today],
  )

  const answerReview = useCallback(
    (exerciseId: string, correct: boolean) => setProgress((p) => recordReview(p, exerciseId, correct, today)),
    [today],
  )

  const value = useMemo<ProgressValue>(() => {
    const xp = totalXp(progress)
    return {
      progress,
      today,
      xp,
      level: levelFromXp(xp),
      streak: studyStreak(progress.activeDates, today),
      answer,
      finishTask,
      answerReview,
      openTaskId,
      openTask,
      closeOpenTask,
    }
  }, [progress, today, answer, finishTask, answerReview, openTaskId, openTask, closeOpenTask])

  return <ProgressCtx.Provider value={value}>{children}</ProgressCtx.Provider>
}
