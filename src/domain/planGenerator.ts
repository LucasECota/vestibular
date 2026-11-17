import { SUBJECT_LABEL } from '../data/subjects'
import { addDays, daysBetween, weekdayOf } from './date'
import type { StudyTask, SubjectId, TaskKind } from './types'

export interface PlanConfig {
  /** Primeiro dia de estudo (YYYY-MM-DD). */
  startDate: string
  /** Último dia de estudo (YYYY-MM-DD). */
  endDate: string
  /** Dias úteis sem estudo. */
  holidays: string[]
  curriculum: Record<SubjectId, string[]>
  /** Quantos dias úteis finais são só de revisão. */
  reviewDays?: number
}

type Slot = SubjectId | 'rotativa'

/** Ciclo de 5 dias de estudo, com 2 tarefas de 1h por dia. */
const CYCLE: Slot[][] = [
  ['matematica', 'portugues'],
  ['fisica', 'biologia'],
  ['quimica', 'geografia'],
  ['matematica', 'historia'],
  ['ingles', 'rotativa'],
]

/** Disciplinas que ocupam o horário "rotativo" do ciclo, em rodízio (questões de provas). */
const ROTATION: SubjectId[] = ['matematica', 'fisica', 'quimica', 'biologia', 'portugues']

const MINUTES = 60

export function studyDays(config: PlanConfig): string[] {
  const days: string[] = []
  const total = daysBetween(config.startDate, config.endDate)
  for (let i = 0; i <= total; i++) {
    const d = addDays(config.startDate, i)
    const wd = weekdayOf(d)
    if (wd !== 0 && wd !== 6 && !config.holidays.includes(d)) days.push(d)
  }
  return days
}

/**
 * Gera o plano: cada disciplina percorre seus tópicos em ordem; quando acabam, as tarefas
 * viram questões de provas anteriores. Os últimos dias são só de revisão.
 */
export function generatePlan(config: PlanConfig): StudyTask[] {
  const days = studyDays(config)
  const reviewFrom = days.length - (config.reviewDays ?? 3)
  const nextTopic: Partial<Record<SubjectId, number>> = {}
  const practiceCount: Partial<Record<SubjectId, number>> = {}
  let rotation = 0
  const tasks: StudyTask[] = []

  days.forEach((date, dayIdx) => {
    for (const slot of CYCLE[dayIdx % CYCLE.length]) {
      const subject: SubjectId = slot === 'rotativa' ? ROTATION[rotation++ % ROTATION.length] : slot
      const topics = config.curriculum[subject]
      const used = nextTopic[subject] ?? 0

      let kind: TaskKind
      let title: string
      let lessonSlug: string
      if (dayIdx >= reviewFrom) {
        kind = 'revisao'
        title = `Revisão: ${SUBJECT_LABEL[subject]}`
        lessonSlug = `${subject}-revisao`
      } else if (slot !== 'rotativa' && used < topics.length) {
        kind = 'conteudo'
        title = topics[used]
        lessonSlug = `${subject}-${used + 1}`
        nextTopic[subject] = used + 1
      } else {
        kind = 'pratica'
        title = `Questões de provas anteriores: ${SUBJECT_LABEL[subject]}`
        practiceCount[subject] = (practiceCount[subject] ?? 0) + 1
        lessonSlug = `${subject}-pratica-${practiceCount[subject]}`
      }

      tasks.push({
        id: `t-${date}-${subject}`,
        date,
        subject,
        kind,
        title,
        minutes: MINUTES,
        lessonSlug,
        exerciseIds: [],
      })
    }
  })
  return tasks
}
