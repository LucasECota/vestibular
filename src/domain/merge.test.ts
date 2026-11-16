import { describe, expect, it } from 'vitest'
import { mergeDoubts, mergeProgress, isEmptyProgress } from './merge'
import type { Doubt } from './doubts'
import { emptyProgress, type ExerciseAttempt, type ProgressState } from './types'

const att = (exerciseId: string, correct: boolean): ExerciseAttempt => ({ exerciseId, taskId: 't', subject: 'fisica', correct })
const prog = (over: Partial<ProgressState>): ProgressState => ({ ...emptyProgress(), ...over })

describe('mergeProgress', () => {
  it('une tarefas e dias de atividade sem repetir', () => {
    const a = prog({ completedTaskIds: ['t1', 't2'], activeDates: ['2026-11-17', '2026-11-18'] })
    const b = prog({ completedTaskIds: ['t2', 't3'], activeDates: ['2026-11-18', '2026-11-19'] })
    const m = mergeProgress(a, b)
    expect(m.completedTaskIds.sort()).toEqual(['t1', 't2', 't3'])
    expect(m.activeDates).toEqual(['2026-11-17', '2026-11-18', '2026-11-19'])
  })

  it('a tentativa de cada questão vale uma vez; em conflito vence a primeira (nuvem)', () => {
    const cloud = prog({ attempts: [att('q1', false), att('q2', true)] })
    const local = prog({ attempts: [att('q1', true), att('q3', true)] })
    const m = mergeProgress(cloud, local)
    expect(m.attempts.map((x) => x.exerciseId).sort()).toEqual(['q1', 'q2', 'q3'])
    expect(m.attempts.find((x) => x.exerciseId === 'q1')!.correct).toBe(false)
  })

  it('na fila de revisão fica a etapa mais avançada; revisões certas ficam com o maior valor', () => {
    const a = prog({ reviewQueue: [{ exerciseId: 'q1', subject: 'fisica', dueDate: '2026-11-18', step: 0 }], reviewCorrect: 2 })
    const b = prog({
      reviewQueue: [
        { exerciseId: 'q1', subject: 'fisica', dueDate: '2026-11-21', step: 1 },
        { exerciseId: 'q2', subject: 'fisica', dueDate: '2026-11-19', step: 0 },
      ],
      reviewCorrect: 5,
    })
    const m = mergeProgress(a, b)
    expect(m.reviewQueue.find((r) => r.exerciseId === 'q1')).toMatchObject({ step: 1, dueDate: '2026-11-21' })
    expect(m.reviewQueue).toHaveLength(2)
    expect(m.reviewCorrect).toBe(5)
  })

  it('não muta as entradas e mesclar com vazio devolve o mesmo conteúdo', () => {
    const a = prog({ completedTaskIds: ['t1'] })
    expect(mergeProgress(a, emptyProgress())).toEqual(a)
    expect(mergeProgress(emptyProgress(), a)).toEqual(a)
    expect(a.completedTaskIds).toEqual(['t1'])
  })

  it('isEmptyProgress', () => {
    expect(isEmptyProgress(emptyProgress())).toBe(true)
    expect(isEmptyProgress(prog({ activeDates: ['2026-11-17'] }))).toBe(false)
  })
})

describe('mergeDoubts', () => {
  const d = (id: string, resolved = false): Doubt => ({ id, text: id, subject: null, createdAt: '2026-11-17', resolved })
  it('une por id; em conflito vence a primeira lista, e resolvida em qualquer lado conta como resolvida', () => {
    const m = mergeDoubts([d('1'), d('2', true)], [d('2'), d('3'), d('1', true)])
    expect(m.map((x) => x.id)).toEqual(['1', '2', '3'])
    expect(m.find((x) => x.id === '1')!.resolved).toBe(true)
    expect(m.find((x) => x.id === '2')!.resolved).toBe(true)
  })
})
