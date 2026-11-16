import katex from 'katex'
import 'katex/dist/katex.min.css'

const PART = /(\$[^$]+\$|\*\*[^*]+\*\*)/g

export function Tex({ tex, display = false }: { tex: string; display?: boolean }) {
  const html = katex.renderToString(tex, { displayMode: display, throwOnError: false, output: 'html' })
  return (
    <span
      className={display ? 'block overflow-x-auto py-2 text-center' : undefined}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

/** Texto com **negrito** e fórmulas inline $...$. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(PART).map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) return <Tex key={i} tex={part.slice(1, -1)} />
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
        return <span key={i}>{part}</span>
      })}
    </>
  )
}
