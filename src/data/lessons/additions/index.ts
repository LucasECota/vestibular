import type { Block } from '../../../domain/lesson'
import { ADD_WEEK2 } from './week2'

/**
 * Complementos das aulas: conteúdo que as questões da tarefa pedem e que a aula original não trazia.
 * Em tarefas de prática (simulados), o complemento entra logo depois da apresentação, com o título
 * "Revisão rápida"; nas demais, vai ao fim da aula.
 */
export const ADDITIONS: Record<string, Block[]> = {
  ...ADD_WEEK2,
}
