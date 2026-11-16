import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_7 } from './biologia'
import { FISICA_7 } from './fisica'
import { GEOGRAFIA_7 } from './geografia'
import { HISTORIA_7 } from './historia'
import { MATEMATICA_13, MATEMATICA_14 } from './matematica'
import { PORTUGUES_7 } from './portugues'
import { QUIMICA_7 } from './quimica'

/** Aulas da sétima semana de estudo (30/12 a 5/1; 29/12 é só prática e 1/1 é feriado). Fecha todo o conteúdo programático. */
export const LESSONS_WEEK7: Lesson[] = [
  MATEMATICA_13,
  PORTUGUES_7,
  FISICA_7,
  BIOLOGIA_7,
  QUIMICA_7,
  GEOGRAFIA_7,
  MATEMATICA_14,
  HISTORIA_7,
]
