import { Link } from 'react-router-dom'
import { ReviewSection } from '../components/ReviewSection'

export function ReviewPage() {
  return (
    <div className="space-y-5">
      <Link to="/" className="text-sm font-bold text-brand">‹ Hoje</Link>
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Revisão</h1>
        <p className="text-muted">
          As questões erradas voltam depois de 1, 3, 7 e 14 dias. Cada acerto vale 5 XP.
        </p>
      </header>
      <ReviewSection limit={10} showEmpty />
    </div>
  )
}
