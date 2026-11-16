import { Link } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import { SubjectChip } from '../components/SubjectChip'
import { PLAN } from '../data/plan'
import { SUBJECT_COLOR } from '../data/subjects'
import { useProgress } from '../state/useProgress'

const STUDENT_NAME = 'Daniela'

function greeting(): string {
  const h = new Date().getHours()
  return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite'
}

export function HomePage() {
  const { today, xp, level, streak, progress } = useProgress()
  const todayTasks = PLAN.filter((t) => t.date === today)
  const doneToday = todayTasks.filter((t) => progress.completedTaskIds.includes(t.id)).length

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-bold text-brand">{greeting()},</p>
        <h1 className="text-3xl font-extrabold tracking-tight">{STUDENT_NAME}! 👋</h1>
        <p className="mt-1 text-muted">Vamos estudar para o vestibular da UEMG.</p>
      </header>

      <section
        aria-label="Seu progresso"
        className="card relative overflow-hidden p-5"
        style={{ background: 'linear-gradient(135deg, #ede4ff 0%, #ffe9c7 100%)' }}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-muted">Seu nível</p>
            <p className="text-3xl font-extrabold">Nível {level.level}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-extrabold">{xp} XP</p>
            <p className="text-sm font-semibold text-muted">
              faltam {level.xpForNext - level.xpIntoLevel} para o próximo
            </p>
          </div>
        </div>
        <div className="mt-4">
          <ProgressBar
            label="Progresso do nível"
            percent={Math.round((level.xpIntoLevel / level.xpForNext) * 100)}
            color="#6d28d9"
          />
        </div>
        <p className="mt-4 text-base font-bold">
          🔥 Sequência: {streak} {streak === 1 ? 'dia' : 'dias'}
        </p>
      </section>

      <section aria-label="Tarefas de hoje" className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-extrabold">Hoje</h2>
          {todayTasks.length > 0 && (
            <span className="text-sm font-bold text-muted">
              {doneToday} de {todayTasks.length} feitas
            </span>
          )}
        </div>
        {todayTasks.length === 0 && <p className="card p-4 text-muted">Sem tarefas hoje. Descanse! 🌿</p>}
        {todayTasks.map((t) => {
          const done = progress.completedTaskIds.includes(t.id)
          const color = SUBJECT_COLOR[t.subject]
          return (
            <Link
              key={t.id}
              to={`/tarefa/${t.id}`}
              className="card flex items-center justify-between gap-3 border-l-[6px] p-4 active:scale-[0.99]"
              style={{ borderLeftColor: color }}
            >
              <div className="space-y-2">
                <SubjectChip subject={t.subject} extra={`${t.minutes} min`} />
                <p className="text-base font-bold leading-snug">{t.title}</p>
              </div>
              <span
                aria-label={done ? 'Concluída' : 'Pendente'}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${
                  done ? 'bg-ok text-white' : 'bg-brand-soft text-brand'
                }`}
              >
                {done ? '✓' : '›'}
              </span>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
