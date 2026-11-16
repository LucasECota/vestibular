import { describe, expect, it } from 'vitest'
import { EXAM, examTotals, paceSuggestion } from './exam'

describe('estrutura da prova', () => {
  it('tem seções contíguas de 1 a 48 sem buracos', () => {
    let next = 1
    for (const s of EXAM.sections) {
      expect(s.from).toBe(next)
      next = s.to + 1
    }
    expect(next - 1).toBe(EXAM.totalQuestions)
  })

  it('totais batem com o gabarito oficial (48 questões x 2 pontos)', () => {
    expect(examTotals()).toEqual({ questions: 48, points: 96 })
  })

  it('a sugestão de ritmo ocupa exatamente o tempo da prova', () => {
    const blocks = paceSuggestion()
    expect(blocks.reduce((sum, b) => sum + b.minutes, 0)).toBe(EXAM.durationMinutes)
  })
})
