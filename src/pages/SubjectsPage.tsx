import { PLAN } from '../data/plan'
import { SUBJECT_LABEL } from '../data/subjects'
import { ProgressBar } from '../components/ProgressBar'
import { subjectProgress } from '../domain/progress'
import { SUBJECTS } from '../domain/types'
import { useProgress } from '../state/useProgress'

export function SubjectsPage() {
  const { progress } = useProgress()
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Disciplinas</h1>
      <ul className="space-y-3">
        {SUBJECTS.map((s) => {
          const p = subjectProgress(s, PLAN, progress)
          return (
            <li key={s} className="rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{SUBJECT_LABEL[s]}</span>
                <span className="text-sm text-muted">
                  {p.tasksDone}/{p.tasksTotal} tarefas
                </span>
              </div>
              <div className="mt-2">
                <ProgressBar label={`Progresso em ${SUBJECT_LABEL[s]}`} percent={p.percent} />
              </div>
              <p className="mt-2 text-sm text-muted">
                {p.answered === 0 ? 'Nenhum exercício feito' : `Acertos: ${p.accuracy}% de ${p.answered}`}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
