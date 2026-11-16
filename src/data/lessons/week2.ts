import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_2 } from './biologia'
import { FISICA_2 } from './fisica'
import { GEOGRAFIA_2 } from './geografia'
import { HISTORIA_2 } from './historia'
import { INGLES_2 } from './ingles'
import { MATEMATICA_3, MATEMATICA_4 } from './matematica'
import { PORTUGUES_2 } from './portugues'
import { QUIMICA_2 } from './quimica'

/** Aulas da segunda semana de estudo (24 a 30/11). */
export const LESSONS_WEEK2: Lesson[] = [
  MATEMATICA_3,
  PORTUGUES_2,
  FISICA_2,
  BIOLOGIA_2,
  QUIMICA_2,
  GEOGRAFIA_2,
  MATEMATICA_4,
  HISTORIA_2,
  INGLES_2,
]
