import type { SubjectId } from '../domain/types'

export const SUBJECT_LABEL: Record<SubjectId, string> = {
  portugues: 'Português e Literatura',
  ingles: 'Inglês',
  matematica: 'Matemática',
  fisica: 'Física',
  quimica: 'Química',
  biologia: 'Biologia',
  geografia: 'Geografia',
  historia: 'História',
}

/** Cor de cada disciplina, usada em chips, barras e acentos. */
export const SUBJECT_COLOR: Record<SubjectId, string> = {
  portugues: '#be123c',
  ingles: '#1d4ed8',
  matematica: '#6d28d9',
  fisica: '#0e7490',
  quimica: '#c2410c',
  biologia: '#15803d',
  geografia: '#0f766e',
  historia: '#a16207',
}

export const SUBJECT_ICON: Record<SubjectId, string> = {
  portugues: '📖',
  ingles: '🌎',
  matematica: '➗',
  fisica: '⚡',
  quimica: '🧪',
  biologia: '🌱',
  geografia: '🗺️',
  historia: '🏛️',
}
