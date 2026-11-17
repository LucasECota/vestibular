import { describe, expect, it } from 'vitest'
import { DIFFICULTY_ORDER, type Difficulty } from '../domain/types'
import { EXTRAS } from './extras'
import { difficultyOf } from './officialDifficulty'
import { PLAN } from './plan'
import { exerciseById } from './questionBank'

/**
 * A partir de 18/11 cada tarefa tem 12 questões: 5 fáceis, 5 médias e 2 difíceis.
 * Esta data marca até onde as tarefas já foram completadas; avance-a a cada lote de questões novas.
 */
const COMPLETE_THROUGH = '2027-01-05'
const FIRST_DAY = '2026-11-18'

const countByLevel = (ids: string[]): Record<Difficulty, number> => {
  const c: Record<Difficulty, number> = { facil: 0, media: 0, dificil: 0 }
  for (const id of ids) c[difficultyOf(exerciseById(id)!)] += 1
  return c
}

describe('12 questões por tarefa: 5 fáceis, 5 médias e 2 difíceis', () => {
  it('as tarefas já completadas (de 18/11 até a data de corte) têm exatamente 5/5/2', () => {
    const tasks = PLAN.filter((t) => t.date >= FIRST_DAY && t.date <= COMPLETE_THROUGH)
    for (const t of tasks) {
      expect(t.exerciseIds, t.id).toHaveLength(12)
      expect(countByLevel(t.exerciseIds), t.id).toEqual({ facil: 5, media: 5, dificil: 2 })
    }
  })

  it('a tarefa de 17/11 (já feita hoje) não foi alterada: segue com as 5 questões da aula', () => {
    for (const t of PLAN.filter((t) => t.date === '2026-11-17')) expect(t.exerciseIds).toHaveLength(5)
  })

  it('dentro de cada tarefa, as questões vão das mais fáceis para as mais difíceis', () => {
    for (const t of PLAN) {
      const ranks = t.exerciseIds.map((id) => DIFFICULTY_ORDER.indexOf(difficultyOf(exerciseById(id)!)))
      expect(ranks, t.id).toEqual([...ranks].sort((a, b) => a - b))
    }
  })

  it('as questões extras têm nível marcado, com ids únicos e gabarito conferido pela explicação', () => {
    const all = Object.values(EXTRAS).flat()
    expect(new Set(all.map((e) => e.id)).size).toBe(all.length)
    const letters = ['A', 'B', 'C', 'D']
    const practiceIds = new Set(Object.entries(EXTRAS).filter(([slug]) => /-pratica-\d+$/.test(slug)).flatMap(([, l]) => l.map((e) => e.id)))
    for (const e of all) {
      // as tarefas de prática também recebem fáceis; as demais só médias e difíceis
      expect(practiceIds.has(e.id) ? ['facil', 'media', 'dificil'] : ['media', 'dificil'], e.id).toContain(e.difficulty)
      expect(new Set(e.options).size, `${e.id}: alternativas repetidas`).toBe(4)
      expect(e.explanation!.startsWith(`Resposta ${letters[e.answer]}`), `${e.id}: explicação não confere`).toBe(true)
    }
  })

  it('cada aula de conteúdo ou revisão com extras recebe 5 médias e 2 difíceis', () => {
    for (const [slug, list] of Object.entries(EXTRAS)) {
      if (/-pratica-\d+$/.test(slug)) continue // as de prática são balanceadas no nível da tarefa
      expect(list.filter((e) => e.difficulty === 'media'), slug).toHaveLength(5)
      expect(list.filter((e) => e.difficulty === 'dificil'), slug).toHaveLength(2)
    }
  })
})
