import type { Exercise } from '../exercises'
import type { Lesson } from '../../domain/lesson'
import { LESSONS_WEEK1 } from './week1'
import { LESSONS_WEEK2 } from './week2'

export const LESSONS: Lesson[] = [...LESSONS_WEEK1, ...LESSONS_WEEK2]

export const lessonBySlug = (slug: string): Lesson | undefined => LESSONS.find((l) => l.slug === slug)

/** Exercícios de todas as aulas, para a busca por id. */
export const LESSON_EXERCISES: Exercise[] = LESSONS.flatMap((l) => l.exercises)
