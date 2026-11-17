import { describe, expect, it } from 'vitest'
import { SUBJECTS } from '../domain/types'
import { PAST_QUESTIONS, QUESTION_YEARS, exerciseById, formatStatement, questionsBySubject } from './questionBank'

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

  it('exclui as anuladas: 144 questões menos 5 (2022: 29; 2023: 12, 17, 24; 2024: 24)', () => {
    expect(PAST_QUESTIONS).toHaveLength(139)
    expect(QUESTION_YEARS).toEqual([2022, 2023, 2024])
    expect(PAST_QUESTIONS.some((q) => q.id === 'uemg-2022-q29')).toBe(false)
    expect(PAST_QUESTIONS.some((q) => q.id === 'uemg-2023-q12')).toBe(false)
  })

  it('cobre todas as disciplinas, com 6 questões por prova (menos anuladas)', () => {
    for (const s of SUBJECTS) {
      const n = questionsBySubject(s).length
      expect(n).toBeGreaterThanOrEqual(9)
      expect(n).toBeLessThanOrEqual(12)
    }
  })

  it('a prova de 2022 está no banco, mas não alimenta as tarefas do plano', () => {
    expect(PAST_QUESTIONS.filter((q) => q.source!.year === 2022)).toHaveLength(47)
    for (const s of SUBJECTS) expect(questionsBySubject(s).every((q) => q.source!.year !== 2022)).toBe(true)
  })

  it('textos compartilhados e figuras de 2022 estão ligados às questões', () => {
    expect(exerciseById('uemg-2022-q03')!.context?.[0].text).toContain('Mudam-se os tempos')
    expect(exerciseById('uemg-2022-q10')!.context?.[0].text).toContain('Don’t Look Up')
    expect(exerciseById('uemg-2022-q15')!.context?.[0].images).toHaveLength(5)
    expect(exerciseById('uemg-2022-q44')!.statement).toContain('det A = 2')
  })

  it('confere gabaritos oficiais conhecidos', () => {
    // 2024: Q14 (morcego) = C; Q43 (quadrilátero) = D; 2023: Q47 = D
    expect(exerciseById('uemg-2024-q14')!.answer).toBe(2)
    expect(exerciseById('uemg-2024-q43')!.answer).toBe(3)
    expect(exerciseById('uemg-2023-q47')!.answer).toBe(3)
    // 2022: Q1 = D; Q16 (relatividade) = C; Q45 (domínio) = B; Q48 (progressões) = B
    expect(exerciseById('uemg-2022-q01')!.answer).toBe(3)
    expect(exerciseById('uemg-2022-q16')!.answer).toBe(2)
    expect(exerciseById('uemg-2022-q45')!.answer).toBe(1)
    expect(exerciseById('uemg-2022-q48')!.answer).toBe(1)
  })

  it('formata itens I-/II- e ( ) em linhas separadas', () => {
    expect(formatStatement('Analise. I- Um. II- Dois. III-Três.')).toBe('Analise.\nI- Um.\nII- Dois.\nIII-Três.')
    expect(formatStatement('Marque. ( ) a ( ) b')).toBe('Marque.\n( ) a\n( ) b')
    expect(exerciseById('uemg-2023-q05')!.statement).toContain('\n( ) Variações linguísticas no Sul')
  })

  it('toda questão válida tem explicação que confirma a letra do gabarito oficial', () => {
    const letters = ['A', 'B', 'C', 'D']
    for (const q of PAST_QUESTIONS) {
      expect(q.explanation, `${q.id} sem explicação`).toBeTruthy()
      expect(q.explanation!.startsWith(`Resposta ${letters[q.answer]}`), `${q.id}: explicação não confere com o gabarito`).toBe(true)
    }
  })

  it('acha exercícios de exemplo e questões pelo mesmo id', () => {
    expect(exerciseById('les-matematica-1-1')).toBeDefined()
    expect(exerciseById('nao-existe')).toBeUndefined()
  })
})
