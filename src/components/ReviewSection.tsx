import { useState } from 'react'
import { exerciseById } from '../data/questionBank'
import { dueReviews } from '../domain/review'
import { useProgress } from '../state/useProgress'
import { ExerciseCard } from './ExerciseCard'

/**
 * Questões que a Daniela errou antes e que voltam hoje.
 * A lista é fixada ao abrir, para os cartões continuarem na tela depois de responder.
 */
export function ReviewSection({ limit, showEmpty = false }: { limit: number; showEmpty?: boolean }) {
  const { progress, today, answerReview } = useProgress()
  const [items] = useState(() =>
    dueReviews(progress, today)
      .slice(0, limit)
      .map((r) => exerciseById(r.exerciseId))
      .filter((e) => e !== undefined),
  )

  if (items.length === 0) {
    return showEmpty ? <p className="card p-4 text-muted">Nada para revisar hoje. 🎉</p> : null
  }

  return (
    <section aria-label="Revisão de erros" className="space-y-3">
      <div>
        <h2 className="text-xl font-extrabold">🔁 Revisão de erros</h2>
        <p className="text-sm text-muted">Questões que você errou antes. Agora é a hora de acertar.</p>
      </div>
      {items.map((e, i) => (
        <ExerciseCard key={e.id} exercise={e} index={i} onAnswer={(correct) => answerReview(e.id, correct)} />
      ))}
    </section>
  )
}
