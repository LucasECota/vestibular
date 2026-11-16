import { describe, expect, it } from 'vitest'
import { CURRICULUM } from '../data/curriculum'
import { generatePlan, type PlanConfig } from './planGenerator'
import { weekdayOf } from './date'

const config: PlanConfig = {
  startMonday: '2026-11-16',
  weeks: 9,
  holidays: ['2026-12-25', '2027-01-01'],
  curriculum: CURRICULUM,
}
const plan = generatePlan(config)
const days = [...new Set(plan.map((t) => t.date))]

describe('generatePlan', () => {
  it('começa na segunda-feira de início e termina na sexta da última semana', () => {
    expect(days[0]).toBe('2026-11-16')
    expect(days.at(-1)).toBe('2027-01-15')
  })

  it('só tem dias úteis e pula os feriados', () => {
    expect(days.every((d) => weekdayOf(d) >= 1 && weekdayOf(d) <= 5)).toBe(true)
    expect(days).not.toContain('2026-12-25')
    expect(days).not.toContain('2027-01-01')
  })

  it('tem 2 tarefas de 1 hora por dia, de disciplinas diferentes', () => {
    for (const d of days) {
      const t = plan.filter((x) => x.date === d)
      expect(t).toHaveLength(2)
      expect(t[0].subject).not.toBe(t[1].subject)
      expect(t.every((x) => x.minutes === 60)).toBe(true)
    }
    expect(plan).toHaveLength(86)
  })

  it('tem ids únicos', () => {
    expect(new Set(plan.map((t) => t.id)).size).toBe(plan.length)
  })

  it('percorre o conteúdo de cada disciplina em ordem, sem repetir', () => {
    for (const [subject, topics] of Object.entries(CURRICULUM)) {
      const studied = plan.filter((t) => t.subject === subject && t.kind === 'conteudo').map((t) => t.title)
      expect(studied).toEqual(topics)
    }
  })

  it('termina com prática de questões na penúltima semana e revisão na última', () => {
    const week8 = plan.filter((t) => t.date >= '2027-01-04' && t.date <= '2027-01-08')
    const week9 = plan.filter((t) => t.date >= '2027-01-11')
    expect(week8.every((t) => t.kind === 'pratica')).toBe(true)
    expect(week9.every((t) => t.kind === 'revisao')).toBe(true)
  })

  it('dá mais horas à Matemática do que a qualquer outra disciplina', () => {
    const count = (s: string) => plan.filter((t) => t.subject === s).length
    for (const s of Object.keys(CURRICULUM).filter((s) => s !== 'matematica')) {
      expect(count('matematica')).toBeGreaterThan(count(s))
    }
  })

  it('é determinística', () => {
    expect(generatePlan(config)).toEqual(plan)
  })
})
