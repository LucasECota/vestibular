import { XP_CORRECT, XP_TASK_COMPLETE, XP_WRONG } from '../domain/gamification'
import { XP_REVIEW_CORRECT } from '../domain/review'

/** Explicação curta de como a pontuação funciona (usa as mesmas constantes das regras). */
export function ScoreRules() {
  return (
    <details className="card group px-4 py-3">
      <summary className="cursor-pointer list-none text-base font-bold text-brand">
        ⭐ Como ganho pontos? <span className="text-muted group-open:hidden">(toque para ver)</span>
      </summary>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
        <li>
          <strong>+{XP_CORRECT} XP</strong> por cada questão que você acerta, nas tarefas e também na aba{' '}
          <strong>Questões</strong> (provas anteriores da UEMG).
        </li>
        <li>
          <strong>+{XP_WRONG} XP</strong> por tentar, mesmo errando. A questão errada volta para revisão nos
          próximos dias.
        </li>
        <li>
          <strong>+{XP_TASK_COMPLETE} XP</strong> ao concluir uma tarefa.
        </li>
        <li>
          <strong>+{XP_REVIEW_CORRECT} XP</strong> por acertar uma questão na revisão de erros.
        </li>
      </ul>
      <p className="mt-3 text-xs text-muted">
        Cada questão vale pontos só na primeira vez que você a responde. A cada nível, o próximo exige um pouco
        mais de XP. Uma sequência é formada por dias úteis seguidos estudando.
      </p>
    </details>
  )
}
