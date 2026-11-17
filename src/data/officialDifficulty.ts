import type { Difficulty } from '../domain/types'

/**
 * Nível das questões oficiais de provas anteriores usadas nas tarefas de prática.
 * As que não aparecem aqui contam como médias.
 */
export const OFFICIAL_DIFFICULTY: Record<string, Difficulty> = {
  // 23/11: expressão com fatoração e potência negativa
  'uemg-2023-q43': 'dificil',
}

/** Nível de uma questão: o marcado nela, ou o padrão (aula = fácil; prova anterior = média). */
export const difficultyOf = (e: { difficulty?: Difficulty; source?: unknown; id: string }): Difficulty =>
  e.difficulty ?? OFFICIAL_DIFFICULTY[e.id] ?? (e.source ? 'media' : 'facil')
