import { Link } from 'react-router-dom'
import { useCloudStatus } from '../cloud/status'
import { useAuth } from '../cloud/useAuth'

const items = [
  { to: '/plano', title: 'Plano de estudo', text: '9 semanas, dia a dia, até a prova.', icon: '🗓️' },
  { to: '/prova', title: 'A prova', text: 'Quantas questões, tempo, pontos e regras.', icon: '📝' },
  { to: '/redacao', title: 'Redação', text: 'Estrutura e como é avaliada.', icon: '✍️' },
]

const STATUS_TEXT = {
  idle: '☁️ Conectado',
  saving: '☁️ Salvando na nuvem...',
  saved: '☁️ Progresso salvo na nuvem',
  offline: '⚠️ Sem conexão: seu progresso está salvo neste aparelho e será enviado quando a internet voltar',
} as const

export function GuidePage() {
  const { user, signOut } = useAuth()
  const status = useCloudStatus()
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Guia</h1>
        <p className="text-muted">Tudo sobre o vestibular e o seu plano.</p>
      </header>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="card flex items-center gap-4 p-4">
              <span aria-hidden className="text-3xl">{i.icon}</span>
              <span>
                <span className="block text-lg font-extrabold">{i.title}</span>
                <span className="text-sm text-muted">{i.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {user?.role === 'admin' && (
        <Link to="/acompanhamento" className="card flex items-center gap-4 border-l-[6px] border-l-brand p-4">
          <span aria-hidden className="text-3xl">📊</span>
          <span>
            <span className="block text-lg font-extrabold">Acompanhamento</span>
            <span className="text-sm text-muted">Veja o desempenho da Daniela.</span>
          </span>
        </Link>
      )}

      {user && (
        <section aria-label="Sua conta" className="card space-y-2 p-4">
          <h2 className="text-base font-extrabold">Sua conta</h2>
          <p className="text-sm">
            Você entrou como <strong>{user.displayName}</strong>.
          </p>
          <p className="text-xs text-muted">{STATUS_TEXT[status]}</p>
          <button
            type="button"
            onClick={() => void signOut()}
            className="mt-1 w-full rounded-xl border-2 border-line px-4 py-3 text-base font-extrabold text-muted"
          >
            Sair
          </button>
        </section>
      )}
    </div>
  )
}
