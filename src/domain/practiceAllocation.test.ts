import { describe, expect, it } from 'vitest'
import { allocatePractice } from './practiceAllocation'
import type { StudyTask } from './types'

const task = (id: string, subject: StudyTask['subject'], kind: StudyTask['kind']): StudyTask => ({
  id, date: '2026-11-16', subject, kind, title: id, minutes: 60, lessonSlug: id, exerciseIds: [],
})

const pool = { matematica: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'], fisica: ['f1', 'f2'] }

describe('allocatePractice', () => {
  it('divide as questões da disciplina entre as tarefas de prática, sem repetir', () => {
    const plan = [task('a', 'matematica', 'pratica'), task('b', 'matematica', 'pratica'), task('c', 'matematica', 'conteudo')]
    const out = allocatePractice(plan, pool, 6)
    expect(out[0].exerciseIds).toEqual(['m1', 'm2', 'm3', 'm4'])
    expect(out[1].exerciseIds).toEqual(['m5', 'm6', 'm7'])
    expect(out[2].exerciseIds).toEqual([])
  })

  it('respeita o máximo por tarefa', () => {
    const out = allocatePractice([task('a', 'matematica', 'pratica')], pool, 3)
    expect(out[0].exerciseIds).toEqual(['m1', 'm2', 'm3'])
  })

  it('não mexe em tarefas que já têm exercícios nem em disciplinas sem banco', () => {
    const preset = { ...task('a', 'fisica', 'pratica'), exerciseIds: ['x'] }
    const out = allocatePractice([preset, task('b', 'historia', 'pratica')], pool, 6)
    expect(out[0].exerciseIds).toEqual(['x'])
    expect(out[1].exerciseIds).toEqual([])
  })
})
