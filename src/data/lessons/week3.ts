import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_3 } from './biologia'
import { FISICA_3 } from './fisica'
import { GEOGRAFIA_3 } from './geografia'
import { HISTORIA_3 } from './historia'
import { INGLES_3 } from './ingles'
import { MATEMATICA_5, MATEMATICA_6 } from './matematica'
import { PORTUGUES_3 } from './portugues'
import { QUIMICA_3 } from './quimica'

/** Aulas da terceira semana de estudo (1 a 7/12). */
export const LESSONS_WEEK3: Lesson[] = [
  MATEMATICA_5,
  PORTUGUES_3,
  FISICA_3,
  BIOLOGIA_3,
  QUIMICA_3,
  GEOGRAFIA_3,
  MATEMATICA_6,
  HISTORIA_3,
  INGLES_3,
]
