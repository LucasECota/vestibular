import { useState } from 'react'
import type { Exercise } from '../data/exercises'

interface Props {
  exercise: Exercise
  index: number
  onAnswer: (correct: boolean) => void
}

const LETTERS = ['A', 'B', 'C', 'D']

export function ExerciseCard({ exercise, index, onAnswer }: Props) {
  const [chosen, setChosen] = useState<number | null>(null)
  const answered = chosen !== null

  const choose = (i: number) => {
    if (answered) return
    setChosen(i)
    onAnswer(i === exercise.answer)
  }

  return (
    <article className="card p-4">
      <p className="text-xs font-extrabold uppercase tracking-wide text-brand">Exercício {index + 1}</p>
      <p className="mt-1 text-lg font-bold leading-snug">{exercise.statement}</p>
      <ul className="mt-3 space-y-2">
        {exercise.options.map((opt, i) => {
          const isRight = answered && i === exercise.answer
          const isWrong = answered && i === chosen && i !== exercise.answer
          return (
            <li key={opt}>
              <button
                type="button"
                disabled={answered}
                onClick={() => choose(i)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-3 py-3 text-left text-base font-semibold ${
                  isRight
                    ? 'border-ok bg-green-50'
                    : isWrong
                      ? 'border-bad bg-red-50'
                      : 'border-line bg-surface active:bg-brand-soft'
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-sm font-extrabold text-brand">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            </li>
          )
        })}
      </ul>
      {answered && (
        <div role="status" className="mt-3 rounded-xl bg-brand-soft p-3 text-sm">
          <p className="font-semibold">
            {chosen === exercise.answer
              ? 'Correto!'
              : `Resposta certa: ${LETTERS[exercise.answer]}`}
          </p>
          <p className="mt-1 text-ink">{exercise.explanation}</p>
        </div>
      )}
    </article>
  )
}
