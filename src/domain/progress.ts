import { XP_TASK_COMPLETE, xpForAttempt } from './gamification'
import { enqueueWrong, XP_REVIEW_CORRECT } from './review'
import type { ExerciseAttempt, ProgressState, StudyTask, SubjectId } from './types'

const addDate = (dates: string[], date: string): string[] =>
  dates.includes(date) ? dates : [...dates, date]

/** Só a primeira tentativa de cada exercício conta (evita farmar pontos). */
export function recordAttempt(
  state: ProgressState,
  attempt: ExerciseAttempt,
  date: string,
): ProgressState {
  if (state.attempts.some((a) => a.exerciseId === attempt.exerciseId)) return state
  const next: ProgressState = {
    ...state,
    attempts: [...state.attempts, attempt],
    activeDates: addDate(state.activeDates, date),
  }
  return attempt.correct ? next : enqueueWrong(next, attempt.exerciseId, attempt.subject, date)
}

export function completeTask(state: ProgressState, taskId: string, date: string): ProgressState {
  if (state.completedTaskIds.includes(taskId)) return state
  return {
    ...state,
    completedTaskIds: [...state.completedTaskIds, taskId],
    activeDates: addDate(state.activeDates, date),
  }
}

export const totalXp = (state: ProgressState): number =>
  state.attempts.reduce((sum, a) => sum + xpForAttempt(a.correct), 0) +
  state.completedTaskIds.length * XP_TASK_COMPLETE +
  state.reviewCorrect * XP_REVIEW_CORRECT

export interface SubjectProgress {
  subject: SubjectId
  tasksDone: number
  tasksTotal: number
  /** 0–100, tarefas concluídas. */
  percent: number
  answered: number
  /** 0–100, acertos nos exercícios respondidos. */
  accuracy: number
}

export function subjectProgress(
  subject: SubjectId,
  tasks: StudyTask[],
  state: ProgressState,
): SubjectProgress {
  const subjectTasks = tasks.filter((t) => t.subject === subject)
  const tasksDone = subjectTasks.filter((t) => state.completedTaskIds.includes(t.id)).length
  const attempts = state.attempts.filter((a) => a.subject === subject)
  const correct = attempts.filter((a) => a.correct).length
  const pct = (n: number, d: number) => (d === 0 ? 0 : Math.round((n / d) * 100))
  return {
    subject,
    tasksDone,
    tasksTotal: subjectTasks.length,
    percent: pct(tasksDone, subjectTasks.length),
    answered: attempts.length,
    accuracy: pct(correct, attempts.length),
  }
}
