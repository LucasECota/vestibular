import { Link, useParams } from 'react-router-dom'
import { ExerciseCard } from '../components/ExerciseCard'
import { LessonView } from '../components/LessonView'
import { lessonBySlug } from '../data/lessons'
import { ReviewSection } from '../components/ReviewSection'
import { exerciseById } from '../data/questionBank'
import { taskById } from '../data/plan'
import { SubjectChip } from '../components/SubjectChip'
import { SUBJECT_COLOR } from '../data/subjects'
import { useProgress } from '../state/useProgress'

export function TaskPage() {
  const { taskId = '' } = useParams()
  const { progress, answer, finishTask } = useProgress()
  const task = taskById(taskId)
  const lesson = task ? lessonBySlug(task.lessonSlug) : undefined

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
      <Link to="/" className="text-sm font-bold text-brand">‹ Hoje</Link>
      <header>
        <SubjectChip subject={task.subject} extra={`${task.minutes} min`} />
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{task.title}</h1>
      </header>

      {lesson ? (
        <section aria-label="Aula" className="card space-y-3 p-4">
          <h2 className="text-xl font-extrabold">📖 Aula</h2>
          <LessonView blocks={lesson.blocks} />
        </section>
      ) : (
        <section aria-label="Orientação" className="card p-4">
          <p className="text-muted">
            {task.kind === 'conteudo'
              ? 'A aula deste tópico será adicionada em breve.'
              : task.kind === 'pratica'
                ? 'Resolva as questões de provas anteriores. Se errar, a questão volta para revisão nos próximos dias.'
                : 'Hora de revisar: refaça os erros e releia as aulas desta matéria.'}
          </p>
        </section>
      )}

      <section aria-label="Exercícios" className="space-y-3">
        <h2 className="text-xl font-extrabold">Exercícios</h2>
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

      <ReviewSection limit={3} />

      <Link
        to={`/duvidas?materia=${task.subject}`}
        className="card block px-4 py-3 text-center text-base font-bold text-brand"
      >
        ❓ Anotar uma dúvida desta matéria
      </Link>

      <button
        type="button"
        disabled={done || !allAnswered}
        onClick={() => finishTask(task.id)}
        className="w-full rounded-2xl px-4 py-4 text-base font-extrabold text-white shadow-md disabled:bg-line disabled:text-muted disabled:shadow-none"
        style={done || !allAnswered ? undefined : { background: SUBJECT_COLOR[task.subject] }}
      >
        {done ? 'Tarefa concluída ✓' : 'Concluir tarefa (+50 XP)'}
      </button>
    </div>
  )
}
