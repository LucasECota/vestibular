import { describe, expect, it } from 'vitest'
import { levelFromXp, studyStreak, xpForAttempt, XP_TASK_COMPLETE } from './gamification'

describe('xpForAttempt', () => {
  it('dá mais pontos para acerto do que para erro, e erro ainda vale algo', () => {
    expect(xpForAttempt(true)).toBe(10)
    expect(xpForAttempt(false)).toBe(2)
  })
})

describe('levelFromXp', () => {
  it('começa no nível 1 com progresso zerado', () => {
    expect(levelFromXp(0)).toEqual({ level: 1, xpIntoLevel: 0, xpForNext: 100 })
  })
  it('sobe de nível ao atingir o limite', () => {
    expect(levelFromXp(100).level).toBe(2)
    expect(levelFromXp(99).level).toBe(1)
  })
  it('informa o xp dentro do nível atual', () => {
    const r = levelFromXp(150)
    expect(r.level).toBe(2)
    expect(r.xpIntoLevel).toBe(50)
    expect(r.xpForNext).toBe(150)
  })
})

describe('studyStreak', () => {
  it('é 0 sem atividade', () => {
    expect(studyStreak([], '2026-11-17')).toBe(0)
  })
  it('conta dias úteis consecutivos terminando hoje', () => {
    expect(studyStreak(['2026-11-16', '2026-11-17'], '2026-11-17')).toBe(2)
  })
  it('não zera se hoje ainda não estudou mas ontem sim', () => {
    expect(studyStreak(['2026-11-16'], '2026-11-17')).toBe(1)
  })
  it('zera se ficou um dia útil sem estudar', () => {
    expect(studyStreak(['2026-11-16'], '2026-11-18')).toBe(0)
  })
  it('fim de semana não quebra a sequência', () => {
    // sexta 20/11 e segunda 23/11
    expect(studyStreak(['2026-11-20', '2026-11-23'], '2026-11-23')).toBe(2)
  })
  it('exporta bônus de tarefa concluída', () => {
    expect(XP_TASK_COMPLETE).toBe(50)
  })
})
