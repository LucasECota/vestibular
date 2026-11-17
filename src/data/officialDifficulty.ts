import type { Difficulty } from '../domain/types'

/**
 * Nível das questões oficiais de provas anteriores usadas nas tarefas de prática.
 * As que não aparecem aqui contam como médias.
 */
export const OFFICIAL_DIFFICULTY: Record<string, Difficulty> = {
  // 23/11: expressão com fatoração e potência negativa
  'uemg-2023-q43': 'dificil',
  // 30/11: notação científica com potências de 10
  'uemg-2023-q13': 'facil',
  // 14/12: Biologia (seis oficiais)
  'uemg-2023-q29': 'facil',
  'uemg-2023-q28': 'dificil',
  // 21/12: Português (seis oficiais)
  'uemg-2023-q04': 'facil',
  'uemg-2023-q02': 'dificil',
  // 29/12: Inglês (seis oficiais)
  'uemg-2023-q08': 'facil',
  'uemg-2023-q07': 'dificil',
  // semana 8: uma oficial vira difícil nas práticas com seis questões
  'uemg-2024-q06': 'dificil',
  'uemg-2024-q27': 'dificil',
  'uemg-2023-q35': 'dificil',
  'uemg-2023-q38': 'dificil',
}

/** Nível de uma questão: o marcado nela, ou o padrão (aula = fácil; prova anterior = média). */
export const difficultyOf = (e: { difficulty?: Difficulty; source?: unknown; id: string }): Difficulty =>
  e.difficulty ?? OFFICIAL_DIFFICULTY[e.id] ?? (e.source ? 'media' : 'facil')
