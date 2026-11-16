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

export type TaskKind = 'conteudo' | 'pratica' | 'revisao'

export interface StudyTask {
  id: string
  /** Data do dia da tarefa, formato YYYY-MM-DD. */
  date: string
  subject: SubjectId
  kind: TaskKind
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
  /** Índice (0–3) da alternativa marcada. */
  chosen?: number
}

/** Questão errada que deve voltar para revisão em datas futuras. */
export interface ReviewItem {
  exerciseId: string
  subject: SubjectId
  /** Data (YYYY-MM-DD) a partir da qual a questão volta a aparecer. */
  dueDate: string
  /** Etapa do espaçamento: 0 = 1º dia, 1 = 3 dias, 2 = 7 dias, 3 = 14 dias. */
  step: number
}

export interface ProgressState {
  completedTaskIds: string[]
  /** Datas (YYYY-MM-DD) em que houve atividade. */
  activeDates: string[]
  attempts: ExerciseAttempt[]
  reviewQueue: ReviewItem[]
  /** Revisões acertadas (cada uma vale XP). */
  reviewCorrect: number
}

export const emptyProgress = (): ProgressState => ({
  completedTaskIds: [],
  activeDates: [],
  attempts: [],
  reviewQueue: [],
  reviewCorrect: 0,
})
