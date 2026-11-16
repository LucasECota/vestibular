import { nextStudyDay } from './date'
import type { ProgressState, ReviewItem } from './types'

/** Dias até a próxima revisão, por etapa. */
export const REVIEW_INTERVALS = [1, 3, 7, 14]
export const XP_REVIEW_CORRECT = 5

const unique = (list: string[], v: string): string[] => (list.includes(v) ? list : [...list, v])

export function enqueueWrong(
  state: ProgressState,
  exerciseId: string,
  subject: ReviewItem['subject'],
  date: string,
): ProgressState {
  if (state.reviewQueue.some((r) => r.exerciseId === exerciseId)) return state
  const item: ReviewItem = {
    exerciseId,
    subject,
    dueDate: nextStudyDay(date, REVIEW_INTERVALS[0]),
    step: 0,
  }
  return { ...state, reviewQueue: [...state.reviewQueue, item] }
}

/** Revisões já vencidas (ou vencendo hoje), das mais antigas para as mais novas. */
export const dueReviews = (state: ProgressState, today: string): ReviewItem[] =>
  state.reviewQueue
    .filter((r) => r.dueDate <= today)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))

export function recordReview(
  state: ProgressState,
  exerciseId: string,
  correct: boolean,
  today: string,
): ProgressState {
  const item = state.reviewQueue.find((r) => r.exerciseId === exerciseId)
  if (!item) return state
  const activeDates = unique(state.activeDates, today)

  if (!correct) {
    const redo = { ...item, step: 0, dueDate: nextStudyDay(today, REVIEW_INTERVALS[0]) }
    return {
      ...state,
      activeDates,
      reviewQueue: state.reviewQueue.map((r) => (r === item ? redo : r)),
    }
  }

  const step = item.step + 1
  const reviewQueue =
    step >= REVIEW_INTERVALS.length
      ? state.reviewQueue.filter((r) => r !== item)
      : state.reviewQueue.map((r) =>
          r === item ? { ...item, step, dueDate: nextStudyDay(today, REVIEW_INTERVALS[step]) } : r,
        )
  return { ...state, activeDates, reviewQueue, reviewCorrect: state.reviewCorrect + 1 }
}
