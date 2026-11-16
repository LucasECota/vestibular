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
    <article className="rounded-2xl border border-line bg-surface p-4">
      <p className="text-sm text-muted">Exercício {index + 1}</p>
      <p className="mt-1 font-medium">{exercise.statement}</p>
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
                className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left ${
                  isRight
                    ? 'border-ok bg-ok/10'
                    : isWrong
                      ? 'border-bad bg-bad/10'
                      : 'border-line bg-surface active:bg-bg'
                }`}
              >
                <span className="font-semibold text-muted">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            </li>
          )
        })}
      </ul>
      {answered && (
        <div role="status" className="mt-3 rounded-xl bg-bg p-3 text-sm">
          <p className="font-semibold">
            {chosen === exercise.answer
              ? 'Correto!'
              : `Resposta certa: ${LETTERS[exercise.answer]}`}
          </p>
          <p className="mt-1 text-muted">{exercise.explanation}</p>
        </div>
      )}
    </article>
  )
}
