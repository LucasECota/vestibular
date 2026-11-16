import { describe, expect, it } from 'vitest'
import { SUBJECTS } from '../domain/types'
import { PAST_QUESTIONS, QUESTION_YEARS, exerciseById, questionsBySubject } from './questionBank'

describe('banco de questões', () => {
  it('tem ids únicos e alternativas completas', () => {
    expect(new Set(PAST_QUESTIONS.map((q) => q.id)).size).toBe(PAST_QUESTIONS.length)
    for (const q of PAST_QUESTIONS) {
      expect(q.options).toHaveLength(4)
      expect(q.options.every((o) => o.length > 0)).toBe(true)
      expect([0, 1, 2, 3]).toContain(q.answer)
      expect(q.statement.length).toBeGreaterThan(5)
    }
  })

  it('exclui as anuladas: 96 questões menos 4 (2023: 12, 17, 24; 2024: 24)', () => {
    expect(PAST_QUESTIONS).toHaveLength(92)
    expect(QUESTION_YEARS).toEqual([2023, 2024])
    expect(PAST_QUESTIONS.some((q) => q.id === 'uemg-2023-q12')).toBe(false)
  })

  it('cobre todas as disciplinas, com 6 questões por prova (menos anuladas)', () => {
    for (const s of SUBJECTS) {
      const n = questionsBySubject(s).length
      expect(n).toBeGreaterThanOrEqual(9)
      expect(n).toBeLessThanOrEqual(12)
    }
  })

  it('confere gabaritos oficiais conhecidos', () => {
    // 2024: Q14 (morcego) = C; Q43 (quadrilátero) = D; 2023: Q47 = D
    expect(exerciseById('uemg-2024-q14')!.answer).toBe(2)
    expect(exerciseById('uemg-2024-q43')!.answer).toBe(3)
    expect(exerciseById('uemg-2023-q47')!.answer).toBe(3)
  })

  it('acha exercícios de exemplo e questões pelo mesmo id', () => {
    expect(exerciseById('ex-mat-1')).toBeDefined()
    expect(exerciseById('nao-existe')).toBeUndefined()
  })
})
