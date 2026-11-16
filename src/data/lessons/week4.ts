import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_4 } from './biologia'
import { FISICA_4 } from './fisica'
import { GEOGRAFIA_4 } from './geografia'
import { HISTORIA_4 } from './historia'
import { INGLES_4 } from './ingles'
import { MATEMATICA_7, MATEMATICA_8 } from './matematica'
import { PORTUGUES_4 } from './portugues'
import { QUIMICA_4 } from './quimica'

/** Aulas da quarta semana de estudo (8 a 14/12). */
export const LESSONS_WEEK4: Lesson[] = [
  MATEMATICA_7,
  PORTUGUES_4,
  FISICA_4,
  BIOLOGIA_4,
  QUIMICA_4,
  GEOGRAFIA_4,
  MATEMATICA_8,
  HISTORIA_4,
  INGLES_4,
]
