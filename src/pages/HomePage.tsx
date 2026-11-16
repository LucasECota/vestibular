import { Link } from 'react-router-dom'
import { PLAN } from '../data/plan'
import { SUBJECT_LABEL } from '../data/subjects'
import { ProgressBar } from '../components/ProgressBar'
import { useProgress } from '../state/useProgress'

export function HomePage() {
  const { today, xp, level, streak, progress } = useProgress()
  const todayTasks = PLAN.filter((t) => t.date === today)

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Vestibular UEMG</h1>
        <p className="text-muted">Uma tarefa de cada vez.</p>
      </header>

      <section aria-label="Seu progresso" className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-lg font-semibold">Nível {level.level}</span>
          <span className="text-sm text-muted">{xp} XP</span>
        </div>
        <div className="mt-2">
          <ProgressBar
            label="Progresso do nível"
            percent={Math.round((level.xpIntoLevel / level.xpForNext) * 100)}
          />
        </div>
        <p className="mt-3 text-sm text-muted">
          Sequência: <strong className="text-ink">{streak}</strong> {streak === 1 ? 'dia' : 'dias'}
        </p>
      </section>

      <section aria-label="Tarefas de hoje" className="space-y-3">
        <h2 className="text-lg font-semibold">Hoje</h2>
        {todayTasks.length === 0 && <p className="text-muted">Sem tarefas hoje. Descanse!</p>}
        {todayTasks.map((t) => {
          const done = progress.completedTaskIds.includes(t.id)
          return (
            <Link
              key={t.id}
              to={`/tarefa/${t.id}`}
              className="flex items-center justify-between rounded-2xl border border-line bg-surface p-4 active:bg-bg"
            >
              <div>
                <p className="text-sm text-muted">
                  {SUBJECT_LABEL[t.subject]} · {t.minutes} min
                </p>
                <p className="font-medium">{t.title}</p>
              </div>
              <span className={done ? 'text-ok' : 'text-muted'} aria-label={done ? 'Concluída' : 'Pendente'}>
                {done ? '✓' : '›'}
              </span>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
