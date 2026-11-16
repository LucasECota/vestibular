import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ExerciseView } from '../components/ExerciseCard'
import { LessonView } from '../components/LessonView'
import { lessonBySlug } from '../data/lessons'
import { exerciseById } from '../data/questionBank'
import { taskById } from '../data/plan'
import { SubjectChip } from '../components/SubjectChip'
import { SUBJECT_COLOR } from '../data/subjects'
import { dueReviews } from '../domain/review'
import { useDraftAnswers } from '../state/useDraftAnswers'
import { useProgress } from '../state/useProgress'

export function TaskPage() {
  const { taskId = '' } = useParams()
  const { progress, today, answer, answerReview, finishTask, openTask } = useProgress()
  const { draft, choose, clearStorage } = useDraftAnswers(taskId)
  const [finishedHere, setFinishedHere] = useState(false)
  const resultRef = useRef<HTMLElement>(null)
  // revisão de erros vencidos: lista fixada ao abrir a tarefa
  const [reviewItems] = useState(() =>
    dueReviews(progress, today)
      .slice(0, 3)
      .map((r) => exerciseById(r.exerciseId))
      .filter((e) => e !== undefined),
  )
  const task = taskById(taskId)
  const lesson = task ? lessonBySlug(task.lessonSlug) : undefined
  const taskDone = progress.completedTaskIds.includes(taskId)

  // ao concluir, leva a tela direto ao resultado ("Você acertou X/Y"), no fim da página
  useEffect(() => {
    if (finishedHere) resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [finishedHere])

  // guarda a tarefa aberta e não concluída, para o botão "voltar para a tarefa" do menu
  useEffect(() => {
    if (task && !taskDone) openTask(task.id)
  }, [task, taskDone, openTask])

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
  const allAnswered = exercises.every((e) => draft[e.id] !== undefined)
  const showReview = reviewItems.length > 0 && (!done || finishedHere)

  /** Alternativa mostrada: o que ela marcou (rascunho) ou, depois de concluir, o que foi corrigido. */
  const chosenFor = (id: string): number | null => {
    if (done && !finishedHere) return progress.attempts.find((a) => a.exerciseId === id)?.chosen ?? null
    return draft[id] ?? null
  }

  const correctCount = exercises.filter((e) => {
    const chosen = chosenFor(e.id)
    return chosen !== null ? chosen === e.answer : progress.attempts.find((a) => a.exerciseId === e.id)?.correct
  }).length

  const finish = () => {
    for (const e of exercises) {
      const chosen = draft[e.id]
      answer({ exerciseId: e.id, taskId: task.id, subject: task.subject, correct: chosen === e.answer, chosen })
    }
    for (const e of reviewItems) {
      if (draft[e.id] !== undefined) answerReview(e.id, draft[e.id] === e.answer)
    }
    finishTask(task.id)
    setFinishedHere(true)
    clearStorage()
  }

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
        {!done && exercises.length > 0 && (
          <p className="text-sm text-muted">
            Marque uma alternativa em cada questão. O gabarito e as explicações aparecem quando você concluir a tarefa.
          </p>
        )}
        {exercises.length === 0 && <p className="text-muted">Sem exercícios nesta tarefa ainda.</p>}
        {exercises.map((e, i) => (
          <ExerciseView
            key={e.id}
            exercise={e}
            index={i}
            chosen={chosenFor(e.id)}
            revealed={done}
            onChoose={done ? undefined : (opt) => choose(e.id, opt)}
          />
        ))}
      </section>

      {showReview && (
        <section aria-label="Revisão de erros" className="space-y-3">
          <div>
            <h2 className="text-xl font-extrabold">🔁 Revisão de erros</h2>
            <p className="text-sm text-muted">Questões que você errou antes. Opcional, mas vale XP.</p>
          </div>
          {reviewItems.map((e, i) => (
            <ExerciseView
              key={e.id}
              exercise={e}
              index={i}
              chosen={draft[e.id] ?? null}
              revealed={done}
              onChoose={done ? undefined : (opt) => choose(e.id, opt)}
            />
          ))}
        </section>
      )}

      <Link
        to={`/duvidas?materia=${task.subject}`}
        className="card block px-4 py-3 text-center text-base font-bold text-brand"
      >
        ❓ Anotar uma dúvida desta matéria
      </Link>

      {done && exercises.length > 0 && (
        <section
          ref={resultRef}
          role="status"
          aria-label="Resultado da tarefa"
          className="card p-5 text-center"
          style={{ background: 'linear-gradient(135deg, #ede4ff 0%, #ffe9c7 100%)' }}
        >
          <p className="text-sm font-bold text-muted">Seu resultado</p>
          <p className="text-4xl font-extrabold">
            Você acertou {correctCount}/{exercises.length}
          </p>
          <p className="mt-1 text-base font-semibold">
            {correctCount === exercises.length
              ? 'Perfeito! 🎉'
              : correctCount / exercises.length >= 0.6
                ? 'Muito bem! 👏 Leia a explicação das que errou.'
                : 'Sem problema! 💪 Releia a aula e as explicações: as que errou voltam para revisão.'}
          </p>
        </section>
      )}

      <button
        type="button"
        disabled={done || !allAnswered}
        onClick={finish}
        className="w-full rounded-2xl px-4 py-4 text-base font-extrabold text-white shadow-md disabled:bg-line disabled:text-muted disabled:shadow-none"
        style={done || !allAnswered ? undefined : { background: SUBJECT_COLOR[task.subject] }}
      >
        {done ? 'Tarefa concluída ✓' : 'Concluir tarefa e ver o gabarito (+50 XP)'}
      </button>
    </div>
  )
}
