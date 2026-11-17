import type { Exercise } from '../exercises'
import { EXTRAS_WEEK1 } from './week1'
import { EXTRAS_WEEK2 } from './week2'
import { EXTRAS_WEEK3 } from './week3'
import { EXTRAS_WEEK4 } from './week4'
import { EXTRAS_WEEK5 } from './week5'
import { EXTRAS_WEEK6 } from './week6'
import { EXTRAS_WEEK7 } from './week7'
import { EXTRAS_WEEK8 } from './week8'

/**
 * Questões extras por tarefa (chave = slug da aula). A partir de 18/11 cada tarefa tem 12 questões:
 * 5 fáceis (as de aula), 5 médias e 2 difíceis. Aqui ficam as médias e difíceis novas.
 */
export const EXTRAS: Record<string, Exercise[]> = {
  ...EXTRAS_WEEK1,
  ...EXTRAS_WEEK2,
  ...EXTRAS_WEEK3,
  ...EXTRAS_WEEK4,
  ...EXTRAS_WEEK5,
  ...EXTRAS_WEEK6,
  ...EXTRAS_WEEK7,
  ...EXTRAS_WEEK8,
}
