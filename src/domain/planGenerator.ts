import { SUBJECT_LABEL } from '../data/subjects'
import { addDays } from './date'
import type { StudyTask, SubjectId, TaskKind } from './types'

export interface PlanConfig {
  /** Segunda-feira da primeira semana (YYYY-MM-DD). */
  startMonday: string
  weeks: number
  /** Dias úteis sem estudo. */
  holidays: string[]
  curriculum: Record<SubjectId, string[]>
}

type Slot = SubjectId | 'rotativa'

/** Duas tarefas de 1h por dia, de segunda a sexta. */
const WEEK_TEMPLATE: Slot[][] = [
  ['matematica', 'portugues'],
  ['fisica', 'biologia'],
  ['quimica', 'geografia'],
  ['matematica', 'historia'],
  ['ingles', 'rotativa'],
]

/** Disciplinas que ocupam o 2º horário das sextas, em rodízio. */
const FRIDAY_ROTATION: SubjectId[] = ['matematica', 'fisica', 'quimica', 'biologia', 'portugues']

/** Semanas de conteúdo novo; depois vêm 1 semana de questões e 1 de revisão. */
const REVIEW_WEEKS = 1
const PRACTICE_WEEKS = 1

const MINUTES = 60

export function generatePlan(config: PlanConfig): StudyTask[] {
  const tasks: StudyTask[] = []
  const nextTopic: Record<SubjectId, number> = {
    matematica: 0, portugues: 0, ingles: 0, fisica: 0,
    quimica: 0, biologia: 0, geografia: 0, historia: 0,
  }
  const contentWeeks = config.weeks - PRACTICE_WEEKS - REVIEW_WEEKS
  let rotationIdx = 0

  for (let week = 0; week < config.weeks; week++) {
    const weekKind: TaskKind =
      week < contentWeeks ? 'conteudo' : week < contentWeeks + PRACTICE_WEEKS ? 'pratica' : 'revisao'

    for (let dow = 0; dow < 5; dow++) {
      const date = addDays(config.startMonday, week * 7 + dow)
      if (config.holidays.includes(date)) continue

      for (const slot of WEEK_TEMPLATE[dow]) {
        let subject: SubjectId
        let kind = weekKind
        if (slot === 'rotativa') {
          subject = FRIDAY_ROTATION[rotationIdx % FRIDAY_ROTATION.length]
          rotationIdx += 1
          if (kind === 'conteudo') kind = 'pratica'
        } else {
          subject = slot
        }

        const topics = config.curriculum[subject]
        if (kind === 'conteudo' && nextTopic[subject] >= topics.length) kind = 'pratica'

        let title: string
        if (kind === 'conteudo') {
          title = topics[nextTopic[subject]]
          nextTopic[subject] += 1
        } else if (kind === 'pratica') {
          title = `Questões de provas anteriores: ${SUBJECT_LABEL[subject]}`
        } else {
          title = `Revisão: ${SUBJECT_LABEL[subject]}`
        }

        tasks.push({
          id: `t-${date}-${subject}`,
          date,
          subject,
          kind,
          title,
          minutes: MINUTES,
          lessonSlug: `${subject}-${kind}-${tasks.length + 1}`,
          exerciseIds: [],
        })
      }
    }
  }
  return tasks
}
