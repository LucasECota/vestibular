import type { Block, CalloutKind } from '../domain/lesson'
import { RichText, Tex } from './RichText'

const CALLOUT: Record<CalloutKind, { label: string; icon: string; cls: string }> = {
  dica: { label: 'Dica', icon: '💡', cls: 'border-brand bg-brand-soft' },
  atencao: { label: 'Atenção', icon: '⚠️', cls: 'border-accent bg-amber-50' },
  exemplo: { label: 'Exemplo resolvido', icon: '✏️', cls: 'border-ok bg-green-50' },
  resumo: { label: 'Resumo', icon: '📌', cls: 'border-ink bg-bg' },
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'h':
      return <h3 className="pt-2 text-xl font-extrabold">{block.text}</h3>
    case 'p':
      return (
        <p className="leading-relaxed">
          <RichText text={block.text} />
        </p>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className={`space-y-1 pl-5 leading-relaxed ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
          {block.items.map((it) => (
            <li key={it}>
              <RichText text={it} />
            </li>
          ))}
        </Tag>
      )
    }
    case 'math':
      return <Tex tex={block.tex} display />
    case 'table':
      return (
        <figure className="overflow-x-auto">
          <table className="w-full min-w-max border-collapse text-sm">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="border border-line bg-brand-soft px-3 py-2 text-left font-extrabold">
                    <RichText text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r) => (
                <tr key={r.join('|')}>
                  {r.map((c, i) => (
                    <td key={i} className="border border-line px-3 py-2 align-top">
                      <RichText text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && <figcaption className="mt-1 text-xs text-muted">{block.caption}</figcaption>}
        </figure>
      )
    case 'callout': {
      const c = CALLOUT[block.kind]
      return (
        <aside className={`rounded-xl border-l-4 p-3 ${c.cls}`}>
          <p className="text-sm font-extrabold">
            {c.icon} {block.title ?? c.label}
          </p>
          <p className="mt-1 whitespace-pre-line leading-relaxed">
            <RichText text={block.text} />
          </p>
        </aside>
      )
    }
    case 'figure':
      return (
        <figure>
          <div
            role="img"
            aria-label={block.alt}
            className="overflow-hidden rounded-xl border border-line bg-white [&>svg]:h-auto [&>svg]:w-full"
            dangerouslySetInnerHTML={{ __html: block.svg }}
          />
          <figcaption className="mt-1 text-xs text-muted">{block.caption}</figcaption>
        </figure>
      )
  }
}

export function LessonView({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  )
}
