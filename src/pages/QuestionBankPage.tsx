import { useMemo, useState } from 'react'
import { ExerciseView } from '../components/ExerciseCard'
import { PAST_QUESTIONS, QUESTION_YEARS } from '../data/questionBank'
import { SUBJECT_LABEL } from '../data/subjects'
import { SUBJECTS, type SubjectId } from '../domain/types'
import { useProgress } from '../state/useProgress'

const PAGE = 5

type Status = 'todas' | 'novas' | 'feitas'

export function QuestionBankPage() {
  const { progress, answer } = useProgress()
  const [subject, setSubject] = useState<SubjectId | ''>('')
  const [year, setYear] = useState<number | ''>('')
  const [status, setStatus] = useState<Status>('todas')
  const [shown, setShown] = useState(PAGE)
  const [pending, setPending] = useState<Record<string, number>>({})

  const attempted = (): Set<string> => new Set(progress.attempts.map((a) => a.exerciseId))
  // "feitas" é fixado ao abrir/filtrar, para a questão não sumir da lista logo depois de confirmar
  const [doneAtFilter, setDoneAtFilter] = useState<Set<string>>(attempted)

  const refilter = () => {
    setDoneAtFilter(attempted())
    setShown(PAGE)
  }

  const list = useMemo(
    () =>
      PAST_QUESTIONS.filter(
        (q) =>
          (!subject || q.subject === subject) &&
          (!year || q.source?.year === year) &&
          (status === 'todas' || (status === 'feitas') === doneAtFilter.has(q.id)),
      ),
    [subject, year, status, doneAtFilter],
  )

  const field = 'w-full rounded-xl border-2 border-line bg-surface px-3 py-3 text-base font-semibold'
  const doneCount = PAST_QUESTIONS.filter((q) => progress.attempts.some((a) => a.exerciseId === q.id)).length

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Questões</h1>
        <p className="text-muted">
          Provas anteriores da UEMG com gabarito oficial. Você já fez {doneCount} de {PAST_QUESTIONS.length}.
        </p>
      </header>

      <div className="card grid grid-cols-2 gap-3 p-4">
        <label className="space-y-1 text-sm font-bold">
          Disciplina
          <select
            className={field}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value as SubjectId | '')
              refilter()
            }}
          >
            <option value="">Todas</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {SUBJECT_LABEL[s]}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-1 text-sm font-bold">
          Ano
          <select
            className={field}
            value={year}
            onChange={(e) => {
              setYear(e.target.value ? Number(e.target.value) : '')
              refilter()
            }}
          >
            <option value="">Todos</option>
            {QUESTION_YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <label className="col-span-2 space-y-1 text-sm font-bold">
          Mostrar
          <select
            className={field}
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as Status)
              refilter()
            }}
          >
            <option value="todas">Todas as questões</option>
            <option value="novas">Ainda não feitas</option>
            <option value="feitas">Já feitas</option>
          </select>
        </label>
      </div>

      <p className="text-sm font-bold text-muted">{list.length} questões</p>
      {list.length === 0 && (
        <p className="card p-4 text-muted">
          {status === 'novas' ? 'Você já fez todas as questões deste filtro. 🎉' : 'Nenhuma questão encontrada.'}
        </p>
      )}

      <div className="space-y-4">
        {list.slice(0, shown).map((q, i) => {
          const attempt = progress.attempts.find((a) => a.exerciseId === q.id)
          const chosen = attempt ? (attempt.chosen ?? null) : (pending[q.id] ?? null)
          return (
            <ExerciseView
              key={q.id}
              exercise={q}
              index={i}
              chosen={chosen}
              revealed={Boolean(attempt)}
              onChoose={attempt ? undefined : (opt) => setPending((p) => ({ ...p, [q.id]: opt }))}
              footer={
                <button
                  type="button"
                  disabled={chosen === null}
                  onClick={() =>
                    answer({
                      exerciseId: q.id,
                      taskId: 'banco',
                      subject: q.subject,
                      correct: chosen === q.answer,
                      chosen: chosen ?? undefined,
                    })
                  }
                  className="mt-3 w-full rounded-2xl bg-brand px-4 py-3 text-base font-extrabold text-white shadow-md disabled:bg-line disabled:text-muted disabled:shadow-none"
                >
                  Confirmar resposta
                </button>
              }
            />
          )
        })}
      </div>

      {shown < list.length && (
        <button
          type="button"
          onClick={() => setShown((n) => n + PAGE)}
          className="w-full rounded-2xl border-2 border-brand px-4 py-3 text-base font-extrabold text-brand"
        >
          Mostrar mais questões
        </button>
      )}
    </div>
  )
}
