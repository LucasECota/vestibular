import type { Exercise } from '../exercises'
import type { Block, Lesson } from '../../domain/lesson'
import { EXTRAS } from '../extras'
import { ADDITIONS } from './additions'
import { LESSONS_PRACTICE } from './practiceSets'
import { LESSONS_WEEK1 } from './week1'
import { LESSONS_WEEK2 } from './week2'
import { LESSONS_WEEK3 } from './week3'
import { LESSONS_WEEK4 } from './week4'
import { LESSONS_WEEK5 } from './week5'
import { LESSONS_WEEK6 } from './week6'
import { LESSONS_WEEK7 } from './week7'
import { LESSONS_WEEK8 } from './week8'
import { LESSONS_WEEK9 } from './week9'

const BASE_LESSONS: Lesson[] = [...LESSONS_WEEK1, ...LESSONS_WEEK2, ...LESSONS_WEEK3, ...LESSONS_WEEK4, ...LESSONS_WEEK5, ...LESSONS_WEEK6, ...LESSONS_WEEK7, ...LESSONS_WEEK8, ...LESSONS_WEEK9, ...LESSONS_PRACTICE]

/** Simulados ganham a revisão logo depois da apresentação; as aulas, no fim. */
function withAdditions(l: Lesson, extra: Block[]): Block[] {
  if (extra.length === 0) return l.blocks
  if (l.heading === 'Simulado') {
    return [l.blocks[0], { type: 'h', text: 'Revisão rápida: o que as questões pedem' }, ...extra, ...l.blocks.slice(1)]
  }
  return [...l.blocks, ...extra]
}

/** As aulas com as questões extras (médias e difíceis) acrescentadas depois das originais. */
export const LESSONS: Lesson[] = BASE_LESSONS.map((l) => ({
  ...l,
  blocks: withAdditions(l, ADDITIONS[l.slug] ?? []),
  exercises: [...l.exercises, ...(EXTRAS[l.slug] ?? [])],
}))

export const lessonBySlug = (slug: string): Lesson | undefined => LESSONS.find((l) => l.slug === slug)

/** Exercícios de todas as aulas, para a busca por id. */
export const LESSON_EXERCISES: Exercise[] = LESSONS.flatMap((l) => l.exercises)
