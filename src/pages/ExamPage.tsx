import { EXAM, examTotals, paceSuggestion } from '../data/exam'

const fmtHours = (min: number) => `${min / 60}h`

export function ExamPage() {
  const totals = examTotals()
  const facts = [
    { label: 'Duração máxima', value: fmtHours(EXAM.durationMinutes) },
    { label: 'Questões objetivas', value: String(totals.questions) },
    { label: 'Alternativas por questão', value: String(EXAM.optionsPerQuestion) },
    { label: 'Pontos objetivos', value: `${totals.points} (${EXAM.pointsPerQuestion} por questão)` },
    { label: 'Saída permitida após', value: fmtHours(EXAM.minStayMinutes) },
    { label: 'Redação', value: `${EXAM.essayLines.min} a ${EXAM.essayLines.max} linhas` },
  ]

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">A prova</h1>
        <p className="text-muted">
          Prova de Conhecimentos Gerais, no mesmo dia, com questões objetivas e redação.
        </p>
      </header>

      <section aria-label="Resumo" className="rounded-2xl border border-line bg-surface">
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
        <h2 className="text-lg font-semibold">Questões por disciplina</h2>
        <ul className="space-y-2">
          {EXAM.sections.map((s) => (
            <li key={s.name} className="rounded-2xl border border-line bg-surface p-4">
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

      <section aria-label="Sugestão de ritmo" className="space-y-3">
        <h2 className="text-lg font-semibold">Como dividir as 4 horas</h2>
        <p className="text-sm text-muted">Sugestão para treinar o ritmo. Não é regra oficial.</p>
        <ul className="rounded-2xl border border-line bg-surface">
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
        <h2 className="text-lg font-semibold">Regras do dia da prova</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Leve caneta transparente azul ou preta e um documento de identificação.</li>
          <li>Celular desligado e guardado; sem relógio, boné, óculos de sol ou fone.</li>
          <li>Cabelos longos presos, com as orelhas à mostra.</li>
          <li>Marcações duplas ou rasuradas no cartão-resposta são anuladas.</li>
          <li>Reclamações sobre falhas de impressão só valem antes de a prova começar.</li>
        </ul>
        <p className="pt-2 text-xs text-muted">
          Baseado nos cadernos de 2023 e 2024. Confira o edital do seu processo seletivo.
        </p>
      </section>
    </div>
  )
}
