import { useState, type ReactNode } from 'react'
import type { Exercise } from '../data/exercises'
import { DIFFICULTY_LABEL, type Difficulty } from '../domain/types'
import { asset } from '../lib/assets'

interface Props {
  exercise: Exercise
  index: number
  onAnswer: (correct: boolean) => void
}

const LETTERS = ['A', 'B', 'C', 'D']

const DIFFICULTY_STYLE: Record<Difficulty, string> = {
  facil: 'bg-green-100 text-green-800',
  media: 'bg-amber-100 text-amber-800',
  dificil: 'bg-red-100 text-red-800',
}

function Figures({ images, alt }: { images: string[]; alt: string }) {
  return (
    <>
      {images.map((src) => (
        <img key={src} src={asset(src)} alt={alt} loading="lazy" className="my-2 max-w-full rounded-lg border border-line" />
      ))}
    </>
  )
}

interface ViewProps {
  exercise: Exercise
  index: number
  /** Alternativa marcada (0–3) ou null. */
  chosen: number | null
  /** Sem `onChoose`, as alternativas ficam travadas. */
  onChoose?: (i: number) => void
  /** Mostra o gabarito e a explicação. */
  revealed: boolean
  /** Nível da questão, mostrado como etiqueta (fácil, média ou difícil). */
  difficulty?: Difficulty
  /** Conteúdo extra (ex.: botão de confirmar) mostrado abaixo das alternativas, antes da correção. */
  footer?: ReactNode
}

/** Questão controlada: o pai decide quando mostrar a correção. */
export function ExerciseView({ exercise, index, chosen, onChoose, revealed, difficulty, footer }: ViewProps) {
  return (
    <article className="card p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-extrabold uppercase tracking-wide text-brand">
          Exercício {index + 1}
          {exercise.source ? ` · UEMG ${exercise.source.year}, questão ${exercise.source.number}` : ''}
        </p>
        {difficulty && (
          <span
            data-difficulty={difficulty}
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-extrabold ${DIFFICULTY_STYLE[difficulty]}`}
          >
            {DIFFICULTY_LABEL[difficulty]}
          </span>
        )}
      </div>

      {exercise.context?.map((c) => (
        <div key={c.text + c.images.join()} className="mt-2 rounded-xl bg-bg p-3 text-sm leading-relaxed">
          {c.text && <p>{c.text}</p>}
          <Figures images={c.images} alt="Figura do texto de apoio" />
        </div>
      ))}

      <p className="mt-2 whitespace-pre-line text-lg font-bold leading-snug">{exercise.statement}</p>
      {exercise.images && <Figures images={exercise.images} alt="Figura da questão" />}

      <ul className="mt-3 space-y-2">
        {exercise.options.map((opt, i) => {
          const isRight = revealed && i === exercise.answer
          const isWrong = revealed && i === chosen && i !== exercise.answer
          const isPicked = !revealed && i === chosen
          return (
            <li key={opt + i}>
              <button
                type="button"
                disabled={revealed || !onChoose}
                aria-pressed={i === chosen}
                onClick={() => onChoose?.(i)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-3 py-3 text-left text-base font-semibold ${
                  isRight
                    ? 'border-ok bg-green-50'
                    : isWrong
                      ? 'border-bad bg-red-50'
                      : isPicked
                        ? 'border-brand bg-brand-soft'
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
      {!revealed && footer}
      {revealed && (
        <div role="status" className="mt-3 rounded-xl bg-brand-soft p-3 text-sm">
          <p className="font-semibold">
            {chosen === exercise.answer
              ? 'Correto!'
              : `Resposta certa: ${LETTERS[exercise.answer]}`}
          </p>
          {exercise.explanation ? (
            <p className="mt-1 whitespace-pre-line text-ink">{exercise.explanation}</p>
          ) : (
            <p className="mt-1 text-muted">Gabarito oficial da UEMG. Dúvida? Anote em Dúvidas.</p>
          )}
        </div>
      )}
    </article>
  )
}

interface Props {
  exercise: Exercise
  index: number
  onAnswer: (correct: boolean) => void
}

/** Questão com correção imediata (banco de questões e revisão). */
export function ExerciseCard({ exercise, index, onAnswer }: Props) {
  const [chosen, setChosen] = useState<number | null>(null)

  return (
    <ExerciseView
      exercise={exercise}
      index={index}
      chosen={chosen}
      revealed={chosen !== null}
      onChoose={(i) => {
        if (chosen !== null) return
        setChosen(i)
        onAnswer(i === exercise.answer)
      }}
    />
  )
}
