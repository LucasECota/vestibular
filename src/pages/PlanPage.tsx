import { Link } from 'react-router-dom'
import { SubjectChip } from '../components/SubjectChip'
import { EXAM_DATE_ESTIMATE, PLAN } from '../data/plan'
import { addDays, daysBetween, formatBR } from '../domain/date'
import type { TaskKind } from '../domain/types'
import { useProgress } from '../state/useProgress'

const KIND_LABEL: Record<TaskKind, string> = {
  conteudo: 'Conteúdo novo',
  pratica: 'Questões de provas',
  revisao: 'Revisão final',
}

const WEEKDAY = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export function PlanPage() {
  const { progress, today } = useProgress()
  const start = PLAN[0].date
  const weeks = [...new Set(PLAN.map((t) => Math.floor(daysBetween(start, t.date) / 7)))]

  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm font-bold text-brand">‹ Hoje</Link>
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Plano de estudo</h1>
        <p className="text-muted">
          2 horas por dia, de segunda a sexta, até a prova (prevista para {formatBR(EXAM_DATE_ESTIMATE)}).
          Fins de semana livres para as dúvidas.
        </p>
      </header>

      {weeks.map((w) => {
        const monday = addDays(start, w * 7)
        const tasks = PLAN.filter((t) => t.date >= monday && t.date <= addDays(monday, 4))
        const phase: TaskKind =
          w === weeks.length - 1 ? 'revisao' : w === weeks.length - 2 ? 'pratica' : 'conteudo'
        const done = tasks.filter((t) => progress.completedTaskIds.includes(t.id)).length
        return (
          <section key={w} aria-label={`Semana ${w + 1}`} className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-extrabold">Semana {w + 1}</h2>
              <span className="text-sm font-bold text-muted">
                {formatBR(monday).slice(0, 5)} a {formatBR(addDays(monday, 4)).slice(0, 5)} · {done}/{tasks.length}
              </span>
            </div>
            <p className="text-sm font-bold text-brand">{KIND_LABEL[phase]}</p>
            <ul className="card divide-y divide-line">
              {tasks.map((t) => {
                const isDone = progress.completedTaskIds.includes(t.id)
                return (
                  <li key={t.id}>
                    <Link
                      to={`/tarefa/${t.id}`}
                      className={`flex items-center gap-3 px-4 py-3 ${t.date === today ? 'bg-brand-soft' : ''}`}
                    >
                      <span className="w-10 shrink-0 text-center text-xs font-extrabold text-muted">
                        {WEEKDAY[new Date(`${t.date}T00:00:00Z`).getUTCDay()]}
                        <br />
                        {formatBR(t.date).slice(0, 2)}
                      </span>
                      <span className="flex-1 space-y-1">
                        <SubjectChip subject={t.subject} />
                        <span className="block text-sm font-bold leading-snug">{t.title}</span>
                      </span>
                      <span aria-label={isDone ? 'Concluída' : 'Pendente'} className={isDone ? 'font-extrabold text-ok' : 'text-muted'}>
                        {isDone ? '✓' : '›'}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
