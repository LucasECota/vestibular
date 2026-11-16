import { ProgressBar } from '../components/ProgressBar'
import { PLAN } from '../data/plan'
import { SUBJECT_COLOR, SUBJECT_ICON, SUBJECT_LABEL } from '../data/subjects'
import { subjectProgress } from '../domain/progress'
import { SUBJECTS } from '../domain/types'
import { useProgress } from '../state/useProgress'

export function SubjectsPage() {
  const { progress } = useProgress()
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Disciplinas</h1>
        <p className="text-muted">Seu progresso em cada matéria.</p>
      </header>
      <ul className="space-y-3">
        {SUBJECTS.map((s) => {
          const p = subjectProgress(s, PLAN, progress)
          const color = SUBJECT_COLOR[s]
          return (
            <li key={s} className="card p-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="tint flex h-11 w-11 items-center justify-center rounded-2xl text-xl"
                  style={{ '--c': color } as React.CSSProperties}
                >
                  {SUBJECT_ICON[s]}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold">{SUBJECT_LABEL[s]}</span>
                    <span className="text-sm font-bold" style={{ color }}>
                      {p.percent}%
                    </span>
                  </div>
                  <p className="text-sm text-muted">
                    {p.tasksDone}/{p.tasksTotal} tarefas ·{' '}
                    {p.answered === 0 ? 'nenhum exercício' : `${p.accuracy}% de acerto em ${p.answered}`}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <ProgressBar label={`Progresso em ${SUBJECT_LABEL[s]}`} percent={p.percent} color={color} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
