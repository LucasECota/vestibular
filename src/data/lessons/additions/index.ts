import type { Block } from '../../../domain/lesson'
import { ADD_WEEK2 } from './week2'
import { ADD_WEEK3 } from './week3'
import { ADD_WEEK4 } from './week4'

/**
 * Complementos das aulas: conteúdo que as questões da tarefa pedem e que a aula original não trazia.
 * Em tarefas de prática (simulados), o complemento entra logo depois da apresentação, com o título
 * "Revisão rápida"; nas demais, vai ao fim da aula.
 */
export const ADDITIONS: Record<string, Block[]> = {
  ...ADD_WEEK2,
  ...ADD_WEEK3,
  ...ADD_WEEK4,
}
