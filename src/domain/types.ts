export const SUBJECTS = [
  'portugues',
  'ingles',
  'matematica',
  'fisica',
  'quimica',
  'biologia',
  'geografia',
  'historia',
] as const

export type SubjectId = (typeof SUBJECTS)[number]

export interface StudyTask {
  id: string
  /** Data do dia da tarefa, formato YYYY-MM-DD. */
  date: string
  subject: SubjectId
  title: string
  minutes: number
  /** Slug da página de conteúdo associada. */
  lessonSlug: string
  /** Ids das questões de exercício da tarefa. */
  exerciseIds: string[]
}

export interface ExerciseAttempt {
  exerciseId: string
  taskId: string
  subject: SubjectId
  correct: boolean
}

export interface ProgressState {
  completedTaskIds: string[]
  /** Datas (YYYY-MM-DD) em que houve atividade. */
  activeDates: string[]
  attempts: ExerciseAttempt[]
}

export const emptyProgress = (): ProgressState => ({
  completedTaskIds: [],
  activeDates: [],
  attempts: [],
})
