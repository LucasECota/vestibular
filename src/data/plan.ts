import type { StudyTask } from '../domain/types'

/** Plano de exemplo; o plano completo até a prova será gerado depois. */
export const PLAN: StudyTask[] = [
  {
    id: 't-2026-11-16-mat',
    date: '2026-11-16',
    subject: 'matematica',
    title: 'Potenciação e porcentagem',
    minutes: 60,
    lessonSlug: 'matematica-potenciacao-porcentagem',
    exerciseIds: ['ex-mat-1', 'ex-mat-2'],
  },
  {
    id: 't-2026-11-16-ing',
    date: '2026-11-16',
    subject: 'ingles',
    title: 'Interpretação de texto em inglês',
    minutes: 60,
    lessonSlug: 'ingles-interpretacao',
    exerciseIds: [],
  },
  {
    id: 't-2026-11-17-fis',
    date: '2026-11-17',
    subject: 'fisica',
    title: 'Cinemática: MRU e MRUV',
    minutes: 60,
    lessonSlug: 'fisica-cinematica',
    exerciseIds: [],
  },
]

export const taskById = (id: string): StudyTask | undefined => PLAN.find((t) => t.id === id)
