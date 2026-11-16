import { describe, expect, it } from 'vitest'
import { PLAN } from '../plan'
import { LESSONS, lessonBySlug } from './index'

const LETTERS = ['A', 'B', 'C', 'D']

describe('aulas', () => {
  it('têm slug único e 5 exercícios com ids únicos', () => {
    expect(new Set(LESSONS.map((l) => l.slug)).size).toBe(LESSONS.length)
    const ids = LESSONS.flatMap((l) => l.exercises.map((e) => e.id))
    expect(new Set(ids).size).toBe(ids.length)
    for (const l of LESSONS) {
      expect(l.exercises, l.slug).toHaveLength(5)
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
      expect(t.exerciseIds, t.id).toHaveLength(5)
    }
  })

  it('todas as tarefas de conteúdo da segunda semana (24 a 30/11) têm aula e 5 exercícios', () => {
    const week2 = PLAN.filter((t) => t.date >= '2026-11-24' && t.date <= '2026-11-30' && t.kind === 'conteudo')
    expect(week2).toHaveLength(9)
    for (const t of week2) {
      expect(lessonBySlug(t.lessonSlug), t.id).toBeDefined()
      expect(t.exerciseIds, t.id).toHaveLength(5)
    }
  })

  it('o título da aula é o mesmo da tarefa', () => {
    for (const t of PLAN.filter((t) => lessonBySlug(t.lessonSlug))) {
      expect(lessonBySlug(t.lessonSlug)!.title).toBe(t.title)
    }
  })
})
