import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_5 } from './biologia'
import { FISICA_5 } from './fisica'
import { GEOGRAFIA_5 } from './geografia'
import { HISTORIA_5 } from './historia'
import { INGLES_5 } from './ingles'
import { MATEMATICA_9, MATEMATICA_10 } from './matematica'
import { PORTUGUES_5 } from './portugues'
import { QUIMICA_5 } from './quimica'

/** Aulas da quinta semana de estudo (15 a 21/12). */
export const LESSONS_WEEK5: Lesson[] = [
  MATEMATICA_9,
  PORTUGUES_5,
  FISICA_5,
  BIOLOGIA_5,
  QUIMICA_5,
  GEOGRAFIA_5,
  MATEMATICA_10,
  HISTORIA_5,
  INGLES_5,
]
