import { Link } from 'react-router-dom'

const items = [
  { to: '/plano', title: 'Plano de estudo', text: '9 semanas, dia a dia, até a prova.', icon: '🗓️' },
  { to: '/prova', title: 'A prova', text: 'Quantas questões, tempo, pontos e regras.', icon: '📝' },
  { to: '/redacao', title: 'Redação', text: 'Estrutura e como é avaliada.', icon: '✍️' },
]

export function GuidePage() {
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
    </div>
  )
}
