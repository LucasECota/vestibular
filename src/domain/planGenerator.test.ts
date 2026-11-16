import { describe, expect, it } from 'vitest'
import { CURRICULUM } from '../data/curriculum'
import { weekdayOf } from './date'
import { generatePlan, studyDays, type PlanConfig } from './planGenerator'

const config: PlanConfig = {
  startDate: '2026-11-17',
  endDate: '2027-01-15',
  holidays: ['2026-12-25', '2027-01-01'],
  curriculum: CURRICULUM,
}
const plan = generatePlan(config)
const days = studyDays(config)

describe('generatePlan', () => {
  it('começa em 17/11 (amanhã) e termina em 15/01, sem nenhuma tarefa antes', () => {
    expect(days[0]).toBe('2026-11-17')
    expect(days.at(-1)).toBe('2027-01-15')
    expect(plan.every((t) => t.date >= '2026-11-17')).toBe(true)
  })

  it('só tem dias úteis e pula os feriados', () => {
    expect(days.every((d) => weekdayOf(d) >= 1 && weekdayOf(d) <= 5)).toBe(true)
    expect(days).not.toContain('2026-12-25')
    expect(days).not.toContain('2027-01-01')
    expect(days).toHaveLength(42)
  })

  it('tem 2 tarefas de 1 hora por dia, de disciplinas diferentes', () => {
    for (const d of days) {
      const t = plan.filter((x) => x.date === d)
      expect(t).toHaveLength(2)
      expect(t[0].subject).not.toBe(t[1].subject)
      expect(t.every((x) => x.minutes === 60)).toBe(true)
    }
    expect(plan).toHaveLength(84)
  })

  it('tem ids únicos', () => {
    expect(new Set(plan.map((t) => t.id)).size).toBe(plan.length)
  })

  it('cobre todos os tópicos de cada disciplina, em ordem e sem repetir', () => {
    for (const [subject, topics] of Object.entries(CURRICULUM)) {
      const studied = plan.filter((t) => t.subject === subject && t.kind === 'conteudo').map((t) => t.title)
      expect(studied).toEqual(topics)
    }
  })

  it('a primeira semana de estudo (10 tarefas) é toda de conteúdo novo, menos o rodízio', () => {
    const first = plan.slice(0, 10)
    expect(first.map((t) => t.subject)).toEqual([
      'matematica', 'portugues', 'fisica', 'biologia', 'quimica',
      'geografia', 'matematica', 'historia', 'ingles', 'matematica',
    ])
    expect(first.filter((t) => t.kind === 'conteudo')).toHaveLength(9)
    expect(first[9].kind).toBe('pratica')
    expect(first[0].lessonSlug).toBe('matematica-1')
    expect(first[6].lessonSlug).toBe('matematica-2')
  })

  it('termina com 3 dias de revisão', () => {
    const last = plan.filter((t) => t.date >= days.at(-3)!)
    expect(last).toHaveLength(6)
    expect(last.every((t) => t.kind === 'revisao')).toBe(true)
    expect(plan.filter((t) => t.kind === 'revisao')).toHaveLength(6)
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
