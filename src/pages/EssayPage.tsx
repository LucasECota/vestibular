import { BackButton } from '../components/BackButton'

const parts = [
  { title: 'Introdução', text: 'Apresente o tema e a sua tese (o ponto de vista que você vai defender) em 3 a 5 linhas.' },
  { title: 'Desenvolvimento 1', text: 'Primeiro argumento, com explicação e um exemplo, dado ou referência que o sustente.' },
  { title: 'Desenvolvimento 2', text: 'Segundo argumento, em outro eixo (social, econômico, ambiental), também com exemplo.' },
  { title: 'Conclusão', text: 'Retome a tese e feche com uma proposta de intervenção: quem faz, o que faz, como e para quê.' },
]

export function EssayPage() {
  return (
    <div className="space-y-4">
      <BackButton />
      <h1 className="text-3xl font-extrabold tracking-tight">Redação</h1>
      <p className="text-muted">
        Texto dissertativo-argumentativo com 15 a 30 linhas, a partir de textos motivadores, valendo até 60
        pontos. Na prova de 2024 o tema foi mudanças climáticas.
      </p>
      <ol className="space-y-3">
        {parts.map((p, i) => (
          <li key={p.title} className="card p-4">
            <p className="text-sm text-muted">Parágrafo {i + 1}</p>
            <h2 className="font-semibold">{p.title}</h2>
            <p className="mt-1">{p.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
