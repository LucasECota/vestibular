import type { Difficulty, SubjectId } from '../domain/types'

export interface ExerciseContext {
  text: string
  images: string[]
}

export interface Exercise {
  id: string
  subject: SubjectId
  statement: string
  options: [string, string, string, string]
  /** Índice (0–3) da alternativa correta. */
  answer: 0 | 1 | 2 | 3
  /** Explicação do porquê; ainda não existe para as questões importadas das provas. */
  explanation?: string
  /** Textos de apoio compartilhados (ex.: "Leia o texto para as questões 1 e 2"). */
  context?: ExerciseContext[]
  /** Figuras recortadas da prova (caminhos relativos a `public/`). */
  images?: string[]
  /** Nível da questão. Sem marca, as de aula contam como fáceis e as de provas anteriores, como médias. */
  difficulty?: Difficulty
  /** Origem, para questões de provas anteriores. */
  source?: { year: number; number: number }
}
