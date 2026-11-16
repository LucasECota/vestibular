import type { Exercise } from '../exercises'
import type { Lesson } from '../../domain/lesson'
import { LESSONS_WEEK1 } from './week1'
import { LESSONS_WEEK2 } from './week2'
import { LESSONS_WEEK3 } from './week3'
import { LESSONS_WEEK4 } from './week4'
import { LESSONS_WEEK5 } from './week5'
import { LESSONS_WEEK6 } from './week6'
import { LESSONS_WEEK7 } from './week7'

export const LESSONS: Lesson[] = [...LESSONS_WEEK1, ...LESSONS_WEEK2, ...LESSONS_WEEK3, ...LESSONS_WEEK4, ...LESSONS_WEEK5, ...LESSONS_WEEK6, ...LESSONS_WEEK7]

export const lessonBySlug = (slug: string): Lesson | undefined => LESSONS.find((l) => l.slug === slug)

/** Exercícios de todas as aulas, para a busca por id. */
export const LESSON_EXERCISES: Exercise[] = LESSONS.flatMap((l) => l.exercises)
