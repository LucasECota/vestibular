import type { StudyTask, SubjectId } from './types'

/**
 * Distribui as questões de provas anteriores entre as tarefas de prática de cada disciplina,
 * sem repetir questão. Tarefas que já têm exercícios ficam como estão.
 */
export function allocatePractice(
  tasks: StudyTask[],
  poolBySubject: Partial<Record<SubjectId, string[]>>,
  maxPerTask: number,
): StudyTask[] {
  const result = tasks.map((t) => ({ ...t }))
  for (const [subject, pool = []] of Object.entries(poolBySubject) as [SubjectId, string[]][]) {
    const targets = result.filter((t) => t.subject === subject && t.kind === 'pratica' && t.exerciseIds.length === 0)
    if (targets.length === 0 || pool.length === 0) continue
    const chunk = Math.min(maxPerTask, Math.ceil(pool.length / targets.length))
    targets.forEach((t, i) => {
      t.exerciseIds = pool.slice(i * chunk, (i + 1) * chunk)
    })
  }
  return result
}
