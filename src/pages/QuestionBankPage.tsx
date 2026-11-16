import { useMemo, useState } from 'react'
import { ExerciseCard } from '../components/ExerciseCard'
import { PAST_QUESTIONS, QUESTION_YEARS } from '../data/questionBank'
import { SUBJECT_LABEL } from '../data/subjects'
import { SUBJECTS, type SubjectId } from '../domain/types'
import { useProgress } from '../state/useProgress'

const PAGE = 5

export function QuestionBankPage() {
  const { answer } = useProgress()
  const [subject, setSubject] = useState<SubjectId | ''>('')
  const [year, setYear] = useState<number | ''>('')
  const [shown, setShown] = useState(PAGE)

  const list = useMemo(
    () =>
      PAST_QUESTIONS.filter((q) => (!subject || q.subject === subject) && (!year || q.source?.year === year)),
    [subject, year],
  )

  const field = 'w-full rounded-xl border-2 border-line bg-surface px-3 py-3 text-base font-semibold'

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Questões</h1>
        <p className="text-muted">Provas anteriores da UEMG com gabarito oficial.</p>
      </header>

      <div className="card grid grid-cols-2 gap-3 p-4">
        <label className="space-y-1 text-sm font-bold">
          Disciplina
          <select
            className={field}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value as SubjectId | '')
              setShown(PAGE)
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
              setShown(PAGE)
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
      </div>

      <p className="text-sm font-bold text-muted">{list.length} questões</p>

      <div className="space-y-4">
        {list.slice(0, shown).map((q, i) => (
          <ExerciseCard
            key={q.id}
            exercise={q}
            index={i}
            onAnswer={(correct) =>
              answer({ exerciseId: q.id, taskId: 'banco', subject: q.subject, correct })
            }
          />
        ))}
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
