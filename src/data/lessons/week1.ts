import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_1 } from './biologia'
import { FISICA_1 } from './fisica'
import { GEOGRAFIA_1 } from './geografia'
import { HISTORIA_1 } from './historia'
import { INGLES_1 } from './ingles'
import { MATEMATICA_1, MATEMATICA_2 } from './matematica'
import { PORTUGUES_1 } from './portugues'
import { QUIMICA_1 } from './quimica'

/** Aulas da primeira semana de estudo (17 a 23/11). */
export const LESSONS_WEEK1: Lesson[] = [
  MATEMATICA_1,
  PORTUGUES_1,
  FISICA_1,
  BIOLOGIA_1,
  QUIMICA_1,
  GEOGRAFIA_1,
  MATEMATICA_2,
  HISTORIA_1,
  INGLES_1,
]
