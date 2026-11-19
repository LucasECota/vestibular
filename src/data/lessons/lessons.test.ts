import { describe, expect, it } from 'vitest'
import { PLAN } from '../plan'
import { ADDITIONS } from './additions'
import { LESSONS, lessonBySlug } from './index'

const LETTERS = ['A', 'B', 'C', 'D']

describe('aulas', () => {
  it('todo complemento de aula aponta para uma aula existente e entra no conteúdo dela', () => {
    for (const [slug, extra] of Object.entries(ADDITIONS)) {
      const l = lessonBySlug(slug)
      expect(l, slug).toBeDefined()
      expect(extra.length, slug).toBeGreaterThan(0)
      for (const b of extra) expect(l!.blocks, slug).toContainEqual(b)
    }
  })

  it('têm slug único e pelo menos 5 exercícios com ids únicos', () => {
    expect(new Set(LESSONS.map((l) => l.slug)).size).toBe(LESSONS.length)
    const ids = LESSONS.flatMap((l) => l.exercises.map((e) => e.id))
    expect(new Set(ids).size).toBe(ids.length)
    for (const l of LESSONS) {
      expect(l.exercises.length, l.slug).toBeGreaterThanOrEqual(5)
      expect(l.blocks.length).toBeGreaterThan(5)
    }
  })

  it('cada exercício tem 4 alternativas, e a explicação confirma a letra certa', () => {
    for (const l of LESSONS) {
      for (const e of l.exercises) {
        expect(e.options).toHaveLength(4)
        expect(new Set(e.options).size, `${e.id}: alternativas repetidas`).toBe(4)
        expect(e.explanation!.startsWith(`Resposta ${LETTERS[e.answer]}`), `${e.id}: explicação não confere`).toBe(true)
        expect(e.subject, e.id).toBe(l.slug.split('-')[0])
      }
    }
  })

  it('todas as tarefas de conteúdo da primeira semana têm aula e 5 exercícios', () => {
    const week1 = PLAN.filter((t) => t.date <= '2026-11-23' && t.kind === 'conteudo')
    expect(week1).toHaveLength(9)
    for (const t of week1) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('todas as tarefas de conteúdo da segunda semana (24 a 30/11) têm aula e 5 exercícios', () => {
    const week2 = PLAN.filter((t) => t.date >= '2026-11-24' && t.date <= '2026-11-30' && t.kind === 'conteudo')
    expect(week2).toHaveLength(9)
    for (const t of week2) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('todas as tarefas de conteúdo da terceira semana (1 a 7/12) têm aula e 5 exercícios', () => {
    const week3 = PLAN.filter((t) => t.date >= '2026-12-01' && t.date <= '2026-12-07' && t.kind === 'conteudo')
    expect(week3).toHaveLength(9)
    for (const t of week3) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('todas as tarefas de conteúdo da quarta semana (8 a 14/12) têm aula e 5 exercícios', () => {
    const week4 = PLAN.filter((t) => t.date >= '2026-12-08' && t.date <= '2026-12-14' && t.kind === 'conteudo')
    expect(week4).toHaveLength(9)
    for (const t of week4) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('todas as tarefas de conteúdo da quinta semana (15 a 21/12) têm aula e 5 exercícios', () => {
    const week5 = PLAN.filter((t) => t.date >= '2026-12-15' && t.date <= '2026-12-21' && t.kind === 'conteudo')
    expect(week5).toHaveLength(9)
    for (const t of week5) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('todas as tarefas de conteúdo da sexta semana (22 a 28/12) têm aula e 5 exercícios', () => {
    const week6 = PLAN.filter((t) => t.date >= '2026-12-22' && t.date <= '2026-12-28' && t.kind === 'conteudo')
    expect(week6).toHaveLength(8) // 25/12 é feriado; Inglês já cumpriu os 5 tópicos
    for (const t of week6) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('todas as tarefas de conteúdo da sétima semana (29/12 a 5/1) têm aula e 5 exercícios', () => {
    const week7 = PLAN.filter((t) => t.date >= '2026-12-29' && t.date <= '2027-01-05' && t.kind === 'conteudo')
    expect(week7).toHaveLength(8) // 29/12 só tem questões de provas; 1/1 é feriado
    for (const t of week7) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('semana 8 (6 a 12/01): toda tarefa de prática tem simulado próprio e soma as questões de provas com 5 extras', () => {
    const week8 = PLAN.filter((t) => t.date >= '2027-01-06' && t.date <= '2027-01-12')
    expect(week8).toHaveLength(10)
    for (const t of week8) {
      expect(t.kind, t.id).toBe('pratica')
      const lesson = lessonBySlug(t.lessonSlug)
      expect(lesson, t.id).toBeDefined()
      expect(lesson!.heading, t.id).toBe('Simulado')
      for (const e of lesson!.exercises) expect(t.exerciseIds, t.id).toContain(e.id) // as extras do simulado estão na tarefa
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(8)
    }
  })

  it('semana 9 (13 a 15/01): as 6 tarefas de revisão têm resumão e 5 questões', () => {
    const week9 = PLAN.filter((t) => t.date >= '2027-01-13')
    expect(week9).toHaveLength(6)
    for (const t of week9) {
      expect(t.kind, t.id).toBe('revisao')
      expect(lessonBySlug(t.lessonSlug)?.heading, t.id).toBe('Resumão')
      expect(t.exerciseIds.length, t.id).toBeGreaterThanOrEqual(5)
    }
  })

  it('nenhuma tarefa do plano fica sem material: todas têm aula/resumão ou questões', () => {
    const empty = PLAN.filter((t) => t.exerciseIds.length === 0).map((t) => t.id)
    expect(empty).toEqual([])
  })

  it('o conteúdo programático está completo: toda tarefa de conteúdo do plano tem aula', () => {
    const missing = PLAN.filter((t) => t.kind === 'conteudo' && !lessonBySlug(t.lessonSlug)).map((t) => t.id)
    expect(missing).toEqual([])
  })

  it('o título da aula é o mesmo da tarefa', () => {
    for (const t of PLAN.filter((t) => t.kind === 'conteudo' && lessonBySlug(t.lessonSlug))) {
      expect(lessonBySlug(t.lessonSlug)!.title).toBe(t.title)
    }
  })
})
