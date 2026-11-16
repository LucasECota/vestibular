import { useState } from 'react'
import type { Exercise } from '../data/exercises'
import { asset } from '../lib/assets'

interface Props {
  exercise: Exercise
  index: number
  onAnswer: (correct: boolean) => void
}

const LETTERS = ['A', 'B', 'C', 'D']

function Figures({ images, alt }: { images: string[]; alt: string }) {
  return (
    <>
      {images.map((src) => (
        <img key={src} src={asset(src)} alt={alt} loading="lazy" className="my-2 max-w-full rounded-lg border border-line" />
      ))}
    </>
  )
}

export function ExerciseCard({ exercise, index, onAnswer }: Props) {
  const [chosen, setChosen] = useState<number | null>(null)
  const [showOriginal, setShowOriginal] = useState(false)
  const answered = chosen !== null

  const choose = (i: number) => {
    if (answered) return
    setChosen(i)
    onAnswer(i === exercise.answer)
  }

  return (
    <article className="card p-4">
      <p className="text-xs font-extrabold uppercase tracking-wide text-brand">
        Exercício {index + 1}
        {exercise.source ? ` · UEMG ${exercise.source.year}, questão ${exercise.source.number}` : ''}
      </p>

      {exercise.context?.map((c) => (
        <div key={c.text + c.images.join()} className="mt-2 rounded-xl bg-bg p-3 text-sm leading-relaxed">
          {c.text && <p>{c.text}</p>}
          <Figures images={c.images} alt="Figura do texto de apoio" />
        </div>
      ))}

      <p className="mt-2 text-lg font-bold leading-snug">{exercise.statement}</p>
      {exercise.images && <Figures images={exercise.images} alt="Figura da questão" />}

      {exercise.snapshots && exercise.snapshots.length > 0 && (
        <div className="mt-1">
          <button type="button" onClick={() => setShowOriginal((v) => !v)} className="text-sm font-bold text-brand">
            {showOriginal ? 'Esconder a questão original' : 'Ver a questão como na prova'}
          </button>
          {showOriginal && <Figures images={exercise.snapshots} alt="Questão como aparece na prova" />}
        </div>
      )}

      <ul className="mt-3 space-y-2">
        {exercise.options.map((opt, i) => {
          const isRight = answered && i === exercise.answer
          const isWrong = answered && i === chosen && i !== exercise.answer
          return (
            <li key={opt + i}>
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
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-sm font-extrabold text-brand">
                  {LETTERS[i]}
                </span>
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
          {exercise.explanation ? (
            <p className="mt-1 text-ink">{exercise.explanation}</p>
          ) : (
            <p className="mt-1 text-muted">Gabarito oficial da UEMG. Dúvida? Anote em Dúvidas.</p>
          )}
        </div>
      )}
    </article>
  )
}
