import { BackButton } from '../components/BackButton'
import { EXAM, examTotals, paceSuggestion } from '../data/exam'

const fmtHours = (min: number) => `${min / 60}h`

export function ExamPage() {
  const totals = examTotals()
  const facts = [
    { label: 'Duração máxima', value: fmtHours(EXAM.durationMinutes) },
    { label: 'Questões objetivas', value: String(totals.questions) },
    { label: 'Alternativas por questão', value: String(EXAM.optionsPerQuestion) },
    { label: 'Pontos objetivos', value: `${totals.points} (${EXAM.pointsPerQuestion} por questão)` },
    { label: 'Pontos da redação', value: `${EXAM.essayPoints}` },
    { label: 'Nota máxima', value: `${totals.maxPoints} pontos` },
    { label: 'Saída permitida após', value: fmtHours(EXAM.minStayMinutes) },
    { label: 'Redação', value: `${EXAM.essayLines.min} a ${EXAM.essayLines.max} linhas` },
  ]

  return (
    <div className="space-y-6">
      <BackButton />
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">A prova</h1>
        <p className="text-muted">
          Prova de Conhecimentos Gerais: 48 questões objetivas e uma redação, no mesmo dia.
        </p>
      </header>

      <section aria-label="Resumo" className="card">
        <dl className="divide-y divide-line">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
              <dt className="text-muted">{f.label}</dt>
              <dd className="text-right font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-label="Distribuição das questões" className="space-y-3">
        <h2 className="text-xl font-extrabold">Questões por disciplina</h2>
        <ul className="space-y-2">
          {EXAM.sections.map((s) => (
            <li key={s.name} className="card p-4">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-muted">
                  {s.to - s.from + 1} questões
                </span>
              </div>
              <p className="text-sm text-muted">
                Questões {s.from} a {s.to}
                {'note' in s && s.note ? ` · ${s.note}` : ''}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Pontuação da redação" className="space-y-3">
        <h2 className="text-xl font-extrabold">Como a redação é avaliada</h2>
        <ul className="card">
          {EXAM.essayCriteria.map((c) => (
            <li key={c.name} className="border-b border-line px-4 py-3 last:border-b-0">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium">{c.name}</span>
                <span className="text-sm text-muted">{c.points} pontos</span>
              </div>
              <p className="text-sm text-muted">{c.hint}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm">
          Nota <strong>zero</strong> na redação, e o candidato é desclassificado, se ela tiver menos de{' '}
          {EXAM.essayLines.min} ou mais de {EXAM.essayLines.max} linhas, fugir do tema ou do gênero, for ilegível,
          tiver identificação, usar corretivo ou caneta que não seja azul ou preta.
        </p>
      </section>

      <section aria-label="Sugestão de ritmo" className="space-y-3">
        <h2 className="text-xl font-extrabold">Como dividir as 4 horas</h2>
        <p className="text-sm text-muted">Sugestão para treinar o ritmo. Não é regra oficial.</p>
        <ul className="card">
          {paceSuggestion().map((b) => (
            <li
              key={b.label}
              className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3 last:border-b-0"
            >
              <span>{b.label}</span>
              <span className="font-medium">{b.minutes} min</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Regras do dia" className="space-y-2">
        <h2 className="text-xl font-extrabold">Regras do dia da prova</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Prova às 14h. Os portões fecham 30 minutos antes; chegue 1 hora antes do fechamento.</li>
          <li>Leve documento oficial com foto e caneta esferográfica azul ou preta transparente.</li>
          <li>Proibidos: calculadora, celular, relógio, boné, óculos de sol e fone. Lanche e bebida sem álcool podem.</li>
          <li>Questão em branco, com duas marcas ou rasurada conta como erro. Não há desconto por erro citado no edital.</li>
          <li>Fique pelo menos 2 horas na sala; sair antes elimina o candidato.</li>
          <li>O gabarito sai em até 48 horas e o resultado preliminar cerca de 3 semanas depois.</li>
        </ul>
        <p className="pt-2 text-xs text-muted">
          Baseado no edital do Vestibular UEMG 2026 (prova de 18/01/2026). A data da próxima prova ainda não foi divulgada: confira o novo edital em vestibular.uemg.br.
        </p>
      </section>
    </div>
  )
}
