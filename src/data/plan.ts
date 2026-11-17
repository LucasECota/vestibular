import { allocatePractice } from '../domain/practiceAllocation'
import { generatePlan } from '../domain/planGenerator'
import { SUBJECTS, type SubjectId } from '../domain/types'
import type { StudyTask } from '../domain/types'
import { CURRICULUM } from './curriculum'
import { DIFFICULTY_ORDER } from '../domain/types'
import { difficultyOf } from './officialDifficulty'
import { lessonBySlug } from './lessons'
import { exerciseById, questionsBySubject } from './questionBank'

/**
 * Data provável da prova: domingo de meados de janeiro de 2027.
 * O edital da próxima edição ainda não saiu; ajuste aqui quando sair.
 */
export const EXAM_DATE_ESTIMATE = '2027-01-17'

const practicePool = Object.fromEntries(
  SUBJECTS.map((s) => [s, questionsBySubject(s).map((q) => q.id)]),
) as Record<SubjectId, string[]>

const generated = generatePlan({
  startDate: '2026-11-17',
  endDate: '2027-01-15',
  holidays: ['2026-12-25', '2027-01-01'],
  curriculum: CURRICULUM,
})
  // aulas e resumões de revisão trazem os próprios exercícios; as de prática ficam para receber questões de provas
  .map((t) => ({
    ...t,
    exerciseIds: t.kind === 'pratica' ? [] : (lessonBySlug(t.lessonSlug)?.exercises.map((e) => e.id) ?? []),
  }))

/**
 * Tarefas de prática recebem até 6 questões de provas anteriores da disciplina e, quando têm
 * um simulado próprio (semana 8), as questões extras dele vêm depois.
 */
const withExtras = allocatePractice(generated, practicePool, 6).map((t) =>
  t.kind === 'pratica'
    ? { ...t, exerciseIds: [...t.exerciseIds, ...(lessonBySlug(t.lessonSlug)?.exercises.map((e) => e.id) ?? [])] }
    : t,
)

const rank = (id: string): number => {
  const e = exerciseById(id)
  return e ? DIFFICULTY_ORDER.indexOf(difficultyOf(e)) : 0
}

/** Em cada tarefa, as questões ficam das mais fáceis para as mais difíceis (a ordem original é mantida em cada nível). */
export const PLAN: StudyTask[] = withExtras.map((t) => ({
  ...t,
  exerciseIds: t.exerciseIds
    .map((id, i) => ({ id, i, r: rank(id) }))
    .sort((a, b) => a.r - b.r || a.i - b.i)
    .map((x) => x.id),
}))

export const taskById = (id: string): StudyTask | undefined => PLAN.find((t) => t.id === id)
