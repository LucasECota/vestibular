import type { Block } from '../../../domain/lesson'
import { ADD_WEEK2 } from './week2'
import { ADD_WEEK3 } from './week3'
import { ADD_WEEK4 } from './week4'
import { ADD_WEEK5 } from './week5'
import { ADD_WEEK6 } from './week6'
import { ADD_WEEK7 } from './week7'
import { ADD_WEEK8 } from './week8'

/**
 * Complementos das aulas: conteúdo que as questões da tarefa pedem e que a aula original não trazia.
 * Em tarefas de prática (simulados), o complemento entra logo depois da apresentação, com o título
 * "Revisão rápida"; nas demais, vai ao fim da aula.
 */
export const ADDITIONS: Record<string, Block[]> = {
  ...ADD_WEEK2,
  ...ADD_WEEK3,
  ...ADD_WEEK4,
  ...ADD_WEEK5,
  ...ADD_WEEK6,
  ...ADD_WEEK7,
  ...ADD_WEEK8,
}
