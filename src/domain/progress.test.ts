import { describe, expect, it } from 'vitest'
import { completeTask, recordAttempt, subjectProgress, totalXp } from './progress'
import { emptyProgress, type StudyTask } from './types'

const task = (id: string, subject: StudyTask['subject'] = 'matematica'): StudyTask => ({
  id,
  date: '2026-11-17',
  subject,
  kind: 'conteudo',
  title: id,
  minutes: 60,
  lessonSlug: 'x',
  exerciseIds: ['e1', 'e2'],
})

const attempt = (exerciseId: string, correct: boolean, taskId = 't1') => ({
  exerciseId,
  taskId,
  subject: 'matematica' as const,
  correct,
})

describe('recordAttempt', () => {
  it('registra a tentativa e a data de atividade', () => {
    const p = recordAttempt(emptyProgress(), attempt('e1', true), '2026-11-17')
    expect(p.attempts).toHaveLength(1)
    expect(p.activeDates).toEqual(['2026-11-17'])
  })
  it('só vale a primeira tentativa de cada exercício (sem farmar pontos)', () => {
    let p = recordAttempt(emptyProgress(), attempt('e1', false), '2026-11-17')
    p = recordAttempt(p, attempt('e1', true), '2026-11-17')
    expect(p.attempts).toHaveLength(1)
    expect(p.attempts[0].correct).toBe(false)
  })
  it('não muta o estado anterior', () => {
    const before = emptyProgress()
    recordAttempt(before, attempt('e1', true), '2026-11-17')
    expect(before.attempts).toHaveLength(0)
  })
})

describe('completeTask', () => {
  it('é idempotente', () => {
    let p = completeTask(emptyProgress(), 't1', '2026-11-17')
    p = completeTask(p, 't1', '2026-11-17')
    expect(p.completedTaskIds).toEqual(['t1'])
    expect(p.activeDates).toEqual(['2026-11-17'])
  })
})

describe('totalXp', () => {
  it('soma acertos, erros e bônus de tarefa', () => {
    let p = recordAttempt(emptyProgress(), attempt('e1', true), '2026-11-17')
    p = recordAttempt(p, attempt('e2', false), '2026-11-17')
    p = completeTask(p, 't1', '2026-11-17')
    expect(totalXp(p)).toBe(10 + 2 + 50)
  })
})

describe('subjectProgress', () => {
  const tasks = [task('t1'), task('t2'), task('t3', 'fisica')]
  it('calcula tarefas feitas e percentual da disciplina', () => {
    const p = completeTask(emptyProgress(), 't1', '2026-11-17')
    expect(subjectProgress('matematica', tasks, p)).toMatchObject({
      tasksDone: 1,
      tasksTotal: 2,
      percent: 50,
    })
  })
  it('calcula aproveitamento nos exercícios', () => {
    let p = recordAttempt(emptyProgress(), attempt('e1', true), '2026-11-17')
    p = recordAttempt(p, attempt('e2', false), '2026-11-17')
    expect(subjectProgress('matematica', tasks, p)).toMatchObject({ answered: 2, accuracy: 50 })
  })
  it('lida com disciplina sem tarefas', () => {
    expect(subjectProgress('historia', tasks, emptyProgress())).toMatchObject({
      tasksTotal: 0,
      percent: 0,
      accuracy: 0,
    })
  })
})
