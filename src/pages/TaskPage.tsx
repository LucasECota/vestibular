import { Link, useParams } from 'react-router-dom'
import { ExerciseCard } from '../components/ExerciseCard'
import { exerciseById } from '../data/exercises'
import { taskById } from '../data/plan'
import { SUBJECT_LABEL } from '../data/subjects'
import { useProgress } from '../state/useProgress'

export function TaskPage() {
  const { taskId = '' } = useParams()
  const { progress, answer, finishTask } = useProgress()
  const task = taskById(taskId)

  if (!task) {
    return (
      <div className="space-y-3">
        <p>Tarefa não encontrada.</p>
        <Link to="/" className="text-brand">Voltar</Link>
      </div>
    )
  }

  const exercises = task.exerciseIds.map(exerciseById).filter((e) => e !== undefined)
  const done = progress.completedTaskIds.includes(task.id)
  const answeredCount = exercises.filter((e) =>
    progress.attempts.some((a) => a.exerciseId === e.id),
  ).length
  const allAnswered = answeredCount === exercises.length

  return (
    <div className="space-y-5">
      <Link to="/" className="text-sm text-muted">‹ Hoje</Link>
      <header>
        <p className="text-sm text-muted">
          {SUBJECT_LABEL[task.subject]} · {task.minutes} min
        </p>
        <h1 className="text-2xl font-semibold">{task.title}</h1>
      </header>

      <section aria-label="Conteúdo" className="rounded-2xl border border-line bg-surface p-4">
        <h2 className="font-semibold">Conteúdo</h2>
        <p className="mt-1 text-muted">A página de conteúdo desta tarefa será adicionada aqui.</p>
      </section>

      <section aria-label="Exercícios" className="space-y-3">
        <h2 className="text-lg font-semibold">Exercícios</h2>
        {exercises.length === 0 && <p className="text-muted">Sem exercícios nesta tarefa ainda.</p>}
        {exercises.map((e, i) => (
          <ExerciseCard
            key={e.id}
            exercise={e}
            index={i}
            onAnswer={(correct) =>
              answer({ exerciseId: e.id, taskId: task.id, subject: task.subject, correct })
            }
          />
        ))}
      </section>

      <button
        type="button"
        disabled={done || !allAnswered}
        onClick={() => finishTask(task.id)}
        className="w-full rounded-xl bg-brand px-4 py-3 font-semibold text-white disabled:bg-line disabled:text-muted"
      >
        {done ? 'Tarefa concluída ✓' : 'Concluir tarefa (+50 XP)'}
      </button>
    </div>
  )
}
