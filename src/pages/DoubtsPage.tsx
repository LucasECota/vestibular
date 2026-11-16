import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SubjectChip } from '../components/SubjectChip'
import { SUBJECT_LABEL } from '../data/subjects'
import { formatDoubtsForShare } from '../domain/doubts'
import { SUBJECTS, type SubjectId } from '../domain/types'
import { useDoubts } from '../state/useDoubts'

const isSubject = (v: string | null): v is SubjectId => SUBJECTS.includes(v as SubjectId)

export function DoubtsPage() {
  const [params] = useSearchParams()
  const initial = params.get('materia')
  const { doubts, add, toggle, remove } = useDoubts()
  const [text, setText] = useState('')
  const [subject, setSubject] = useState<SubjectId | ''>(isSubject(initial) ? initial : '')
  const [copied, setCopied] = useState(false)

  const open = doubts.filter((d) => !d.resolved)
  const solved = doubts.filter((d) => d.resolved)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    add(text, subject || null)
    setText('')
  }

  const share = async () => {
    const message = formatDoubtsForShare(doubts)
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.prompt('Copie o texto abaixo:', message)
    }
  }

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Minhas dúvidas</h1>
        <p className="text-muted">Anote aqui o que não entendeu e mande para o Lucas no fim de semana.</p>
      </header>

      <form onSubmit={submit} className="card space-y-3 p-4">
        <label className="block text-sm font-bold" htmlFor="doubt-subject">
          Disciplina (opcional)
        </label>
        <select
          id="doubt-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value as SubjectId | '')}
          className="w-full rounded-xl border-2 border-line bg-surface px-3 py-3 text-base font-semibold"
        >
          <option value="">Qualquer</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {SUBJECT_LABEL[s]}
            </option>
          ))}
        </select>
        <label className="block text-sm font-bold" htmlFor="doubt-text">
          Qual é a sua dúvida?
        </label>
        <textarea
          id="doubt-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="Ex.: não entendi por que a resposta é a letra C"
          className="w-full rounded-xl border-2 border-line bg-surface px-3 py-3 text-base"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="w-full rounded-2xl bg-brand px-4 py-4 text-base font-extrabold text-white shadow-md disabled:bg-line disabled:text-muted disabled:shadow-none"
        >
          Anotar dúvida
        </button>
      </form>

      <section aria-label="Dúvidas abertas" className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-extrabold">Abertas ({open.length})</h2>
          {open.length > 0 && (
            <button type="button" onClick={share} className="text-sm font-bold text-brand">
              {copied ? 'Copiado! ✓' : 'Copiar para enviar'}
            </button>
          )}
        </div>
        {open.length === 0 && <p className="card p-4 text-muted">Nenhuma dúvida aberta. 🎉</p>}
        <ul className="space-y-3">
          {open.map((d) => (
            <DoubtItem key={d.id} d={d} onToggle={toggle} onRemove={remove} />
          ))}
        </ul>
      </section>

      {solved.length > 0 && (
        <section aria-label="Dúvidas resolvidas" className="space-y-3">
          <h2 className="text-xl font-extrabold">Resolvidas ({solved.length})</h2>
          <ul className="space-y-3 opacity-70">
            {solved.map((d) => (
              <DoubtItem key={d.id} d={d} onToggle={toggle} onRemove={remove} />
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

interface ItemProps {
  d: ReturnType<typeof useDoubts>['doubts'][number]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

function DoubtItem({ d, onToggle, onRemove }: ItemProps) {
  return (
    <li className="card space-y-2 p-4">
      {d.subject && <SubjectChip subject={d.subject} />}
      <p className="text-base font-semibold leading-snug">{d.text}</p>
      <div className="flex gap-4 pt-1 text-sm font-bold">
        <button type="button" onClick={() => onToggle(d.id)} className="text-brand">
          {d.resolved ? 'Reabrir' : 'Marcar como resolvida'}
        </button>
        <button type="button" onClick={() => onRemove(d.id)} className="text-bad">
          Apagar
        </button>
      </div>
    </li>
  )
}
