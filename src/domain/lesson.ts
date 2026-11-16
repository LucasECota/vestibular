import type { Exercise } from '../data/exercises'

export type CalloutKind = 'dica' | 'atencao' | 'exemplo' | 'resumo'

/** Um bloco de conteúdo de aula. Textos aceitam **negrito** e fórmulas em $...$ (KaTeX). */
export type Block =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'math'; tex: string }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'callout'; kind: CalloutKind; title?: string; text: string }
  | { type: 'figure'; svg: string; caption: string; alt: string }

export interface Lesson {
  /** Mesmo valor de `lessonSlug` da tarefa, por exemplo "matematica-1". */
  slug: string
  title: string
  blocks: Block[]
  /** Exercícios da tarefa (os ids são usados em `exerciseIds`). */
  exercises: Exercise[]
}
