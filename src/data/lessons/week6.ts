import type { Lesson } from '../../domain/lesson'
import { BIOLOGIA_6 } from './biologia'
import { FISICA_6 } from './fisica'
import { GEOGRAFIA_6 } from './geografia'
import { HISTORIA_6 } from './historia'
import { MATEMATICA_11, MATEMATICA_12 } from './matematica'
import { PORTUGUES_6 } from './portugues'
import { QUIMICA_6 } from './quimica'

/** Aulas da sexta semana de estudo (22 a 28/12; o dia 25 é feriado e Inglês só tem questões de prova). */
export const LESSONS_WEEK6: Lesson[] = [
  MATEMATICA_11,
  PORTUGUES_6,
  FISICA_6,
  BIOLOGIA_6,
  QUIMICA_6,
  GEOGRAFIA_6,
  MATEMATICA_12,
  HISTORIA_6,
]
