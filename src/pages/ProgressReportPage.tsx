import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { BackButton } from '../components/BackButton'
import { ProgressBar } from '../components/ProgressBar'
import { useCloudApi } from '../cloud/useCloudApi'
import type { CloudState, StudentSnapshot } from '../cloud/types'
import { useAuth } from '../cloud/useAuth'
import { PLAN } from '../data/plan'
import { exerciseById } from '../data/questionBank'
import { SUBJECT_COLOR, SUBJECT_LABEL } from '../data/subjects'
import { addDays, formatBR } from '../domain/date'
import { levelFromXp, studyStreak } from '../domain/gamification'
import { subjectProgress, totalXp } from '../domain/progress'
import { dueReviews } from '../domain/review'
import { SUBJECTS } from '../domain/types'
import { useProgress } from '../state/useProgress'

const LETTERS = ['A', 'B', 'C', 'D']

const formatDateTime = (iso: string | null): string => {
  if (!iso) return 'nunca'
  const d = new Date(iso)
  return `${d.toLocaleDateString('pt-BR')} às ${d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="card p-3 text-center">
      <p className="text-xs font-bold text-muted">{label}</p>
      <p className="text-2xl font-extrabold">{value}</p>
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  )
}

function StudentReport({ snapshot, today }: { snapshot: StudentSnapshot; today: string }) {
  const { user } = snapshot
  const state: CloudState | null = snapshot.state

  if (!state) {
    return (
      <section aria-label={`Acompanhamento de ${user.displayName}`} className="card p-4">
        <h2 className="text-xl font-extrabold">{user.displayName}</h2>
        <p className="mt-1 text-muted">Ainda não há dados: {user.displayName} ainda não usou o site com o login.</p>
      </section>
    )
  }

  const { progress, doubts } = state
  const xp = totalXp(progress)
  const level = levelFromXp(xp)
  const streak = studyStreak(progress.activeDates, today)
  const planned = PLAN.filter((t) => t.date <= today)
  const doneOfPlanned = planned.filter((t) => progress.completedTaskIds.includes(t.id)).length
  const answered = progress.attempts.length
  const correct = progress.attempts.filter((a) => a.correct).length
  const accuracy = answered === 0 ? 0 : Math.round((correct / answered) * 100)
  const lastDays = Array.from({ length: 14 }, (_, i) => addDays(today, i - 13))
  const missed = progress.attempts.filter((a) => !a.correct).slice(-8).reverse()
  const dueNow = dueReviews(progress, today).length
  const openDoubts = doubts.filter((d) => !d.resolved)

  return (
    <section aria-label={`Acompanhamento de ${user.displayName}`} className="space-y-5">
      <header>
        <h2 className="text-2xl font-extrabold">{user.displayName}</h2>
        <p className="text-sm text-muted">Última atualização: {formatDateTime(state.updatedAt)}</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <Stat label="Nível" value={String(level.level)} hint={`${xp} XP`} />
        <Stat label="Sequência" value={`${streak} ${streak === 1 ? 'dia' : 'dias'}`} />
        <Stat label="Tarefas até hoje" value={`${doneOfPlanned}/${planned.length}`} hint={`${progress.completedTaskIds.length} concluídas no total`} />
        <Stat label="Acertos" value={`${accuracy}%`} hint={`${correct} de ${answered} questões`} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-extrabold">Dias de estudo (últimos 14)</h3>
        <ul className="flex flex-wrap gap-1.5" aria-label="Dias de estudo">
          {lastDays.map((d) => {
            const active = progress.activeDates.includes(d)
            return (
              <li
                key={d}
                title={formatBR(d)}
                className={`flex h-9 w-12 flex-col items-center justify-center rounded-lg text-[10px] font-bold ${
                  active ? 'bg-ok text-white' : 'bg-line text-muted'
                }`}
              >
                <span>{formatBR(d).slice(0, 5)}</span>
                <span>{active ? '✓' : '·'}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-extrabold">Desempenho por disciplina</h3>
        <ul className="space-y-3">
          {SUBJECTS.map((s) => {
            const p = subjectProgress(s, PLAN, progress)
            return (
              <li key={s} className="card p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-bold">{SUBJECT_LABEL[s]}</span>
                  <span className="text-sm text-muted">
                    {p.tasksDone}/{p.tasksTotal} tarefas ·{' '}
                    {p.answered === 0 ? 'sem questões' : `${p.accuracy}% de ${p.answered}`}
                  </span>
                </div>
                <div className="mt-2">
                  <ProgressBar label={`Progresso de ${user.displayName} em ${SUBJECT_LABEL[s]}`} percent={p.percent} color={SUBJECT_COLOR[s]} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-extrabold">Últimas questões erradas</h3>
        {missed.length === 0 && <p className="card p-3 text-muted">Nenhum erro registrado.</p>}
        <ul className="space-y-2">
          {missed.map((a) => {
            const q = exerciseById(a.exerciseId)
            return (
              <li key={a.exerciseId} className="card p-3 text-sm">
                <p className="text-xs font-bold text-muted">
                  {SUBJECT_LABEL[a.subject]}
                  {q?.source ? ` · UEMG ${q.source.year}, questão ${q.source.number}` : ''}
                </p>
                <p className="mt-1 font-semibold">{q ? `${q.statement.slice(0, 140)}${q.statement.length > 140 ? '…' : ''}` : a.exerciseId}</p>
                {q && (
                  <p className="mt-1 text-xs text-muted">
                    {a.chosen !== undefined ? `Marcou ${LETTERS[a.chosen]}. ` : ''}Certa: {LETTERS[q.answer]}.
                  </p>
                )}
              </li>
            )
          })}
        </ul>
        <p className="text-sm text-muted">
          Para revisar: {dueNow} {dueNow === 1 ? 'questão vence' : 'questões vencem'} hoje; {progress.reviewQueue.length} na fila no total.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-extrabold">Dúvidas abertas ({openDoubts.length})</h3>
        {openDoubts.length === 0 && <p className="card p-3 text-muted">Nenhuma dúvida aberta.</p>}
        <ul className="space-y-2">
          {openDoubts.map((d) => (
            <li key={d.id} className="card p-3 text-sm">
              {d.subject && <p className="text-xs font-bold text-muted">{SUBJECT_LABEL[d.subject]}</p>}
              <p className="font-semibold">{d.text}</p>
              <p className="mt-1 text-xs text-muted">Anotada em {formatBR(d.createdAt.slice(0, 10))}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Página só do administrador: mostra o desempenho dos alunos. */
export function ProgressReportPage() {
  const { user } = useAuth()
  const api = useCloudApi()
  const { today } = useProgress()
  const [students, setStudents] = useState<StudentSnapshot[] | null>(null)
  const [error, setError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    if (user?.role !== 'admin') return
    let alive = true
    api
      .loadStudents()
      .then((list) => {
        if (alive) setStudents(list)
      })
      .catch(() => {
        if (alive) setError(true)
      })
    return () => {
      alive = false
    }
  }, [api, user?.role, reloadKey])

  const reload = () => {
    setError(false)
    setStudents(null)
    setReloadKey((k) => k + 1)
  }

  if (user?.role !== 'admin') return <Navigate to="/" replace />

  return (
    <div className="space-y-5">
      <BackButton fallback="/guia" />
      <header className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Acompanhamento</h1>
          <p className="text-muted">Como a Daniela está indo nos estudos.</p>
        </div>
        <button type="button" onClick={reload} className="shrink-0 rounded-xl border-2 border-brand px-3 py-2 text-sm font-extrabold text-brand">
          Atualizar
        </button>
      </header>

      {error && (
        <p role="alert" className="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-bad">
          Não foi possível carregar agora. Confira a internet e toque em Atualizar.
        </p>
      )}
      {!error && students === null && <p role="status" className="text-muted">Carregando...</p>}
      {students?.length === 0 && <p className="card p-4 text-muted">Nenhum aluno encontrado.</p>}
      {students?.map((s) => <StudentReport key={s.user.id} snapshot={s} today={today} />)}
    </div>
  )
}
