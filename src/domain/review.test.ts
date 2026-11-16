import { describe, expect, it } from 'vitest'
import { dueReviews, recordReview, REVIEW_INTERVALS } from './review'
import { recordAttempt, totalXp } from './progress'
import { emptyProgress, type ExerciseAttempt } from './types'
import { nextStudyDay } from './date'

const att = (exerciseId: string, correct: boolean): ExerciseAttempt => ({
  exerciseId, taskId: 't', subject: 'fisica', correct,
})

describe('nextStudyDay', () => {
  it('pula o fim de semana', () => {
    expect(nextStudyDay('2026-11-20', 1)).toBe('2026-11-23') // sexta + 1 = sábado -> segunda
    expect(nextStudyDay('2026-11-16', 3)).toBe('2026-11-19')
    expect(nextStudyDay('2026-11-16', 7)).toBe('2026-11-23')
  })
})

describe('fila de revisão', () => {
  it('erro entra na fila para o próximo dia útil; acerto não entra', () => {
    let p = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    p = recordAttempt(p, att('q2', true), '2026-11-16')
    expect(p.reviewQueue).toEqual([{ exerciseId: 'q1', subject: 'fisica', dueDate: '2026-11-17', step: 0 }])
  })

  it('não duplica a questão na fila', () => {
    let p = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    p = recordAttempt(p, att('q1', false), '2026-11-16')
    expect(p.reviewQueue).toHaveLength(1)
  })

  it('dueReviews só traz o que já venceu, do mais antigo ao mais novo', () => {
    let p = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    p = recordAttempt(p, att('q2', false), '2026-11-17')
    expect(dueReviews(p, '2026-11-16')).toEqual([])
    expect(dueReviews(p, '2026-11-17').map((r) => r.exerciseId)).toEqual(['q1'])
    expect(dueReviews(p, '2026-11-18').map((r) => r.exerciseId)).toEqual(['q1', 'q2'])
  })

  it('acertar na revisão avança o espaçamento (3, 7, 14 dias) e some no fim', () => {
    expect(REVIEW_INTERVALS).toEqual([1, 3, 7, 14])
    let p = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    p = recordReview(p, 'q1', true, '2026-11-17')
    expect(p.reviewQueue[0]).toMatchObject({ step: 1, dueDate: '2026-11-20' })
    p = recordReview(p, 'q1', true, '2026-11-20')
    expect(p.reviewQueue[0]).toMatchObject({ step: 2, dueDate: '2026-11-27' })
    p = recordReview(p, 'q1', true, '2026-11-27')
    expect(p.reviewQueue[0]).toMatchObject({ step: 3, dueDate: '2026-12-11' })
    p = recordReview(p, 'q1', true, '2026-12-11')
    expect(p.reviewQueue).toEqual([])
    expect(p.reviewCorrect).toBe(4)
  })

  it('errar de novo na revisão volta ao começo (amanhã) e não dá XP', () => {
    let p = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    p = recordReview(p, 'q1', true, '2026-11-17')
    p = recordReview(p, 'q1', false, '2026-11-20')
    expect(p.reviewQueue[0]).toMatchObject({ step: 0, dueDate: '2026-11-23' })
    expect(p.reviewCorrect).toBe(1)
  })

  it('ignora revisão de questão que não está na fila e registra atividade', () => {
    const p = recordReview(emptyProgress(), 'x', true, '2026-11-17')
    expect(p).toEqual(emptyProgress())
    const q = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    expect(recordReview(q, 'q1', false, '2026-11-17').activeDates).toContain('2026-11-17')
  })

  it('revisão certa vale 5 XP', () => {
    let p = recordAttempt(emptyProgress(), att('q1', false), '2026-11-16')
    const before = totalXp(p)
    p = recordReview(p, 'q1', true, '2026-11-17')
    expect(totalXp(p) - before).toBe(5)
  })
})
