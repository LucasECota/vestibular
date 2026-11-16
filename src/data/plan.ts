import { allocatePractice } from '../domain/practiceAllocation'
import { generatePlan } from '../domain/planGenerator'
import { SUBJECTS, type SubjectId } from '../domain/types'
import type { StudyTask } from '../domain/types'
import { CURRICULUM } from './curriculum'
import { lessonBySlug } from './lessons'
import { questionsBySubject } from './questionBank'

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
}).map((t) => ({ ...t, exerciseIds: lessonBySlug(t.lessonSlug)?.exercises.map((e) => e.id) ?? [] }))

/** Tarefas de prática recebem até 6 questões de provas anteriores da disciplina. */
export const PLAN: StudyTask[] = allocatePractice(generated, practicePool, 6)

export const taskById = (id: string): StudyTask | undefined => PLAN.find((t) => t.id === id)
