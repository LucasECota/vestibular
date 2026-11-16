import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LESSONS } from '../data/lessons'
import { LessonView } from './LessonView'
import { RichText } from './RichText'

describe('RichText', () => {
  it('cifrão de dinheiro seguido de espaço é texto, não fórmula', () => {
    const { container } = render(
      <p>
        <RichText text={String.raw`Um produto de R$ 200 sobe 20% e cai 20%. $200 \cdot 1{,}2 \cdot 0{,}8 = 192$ Pronto.`} />
      </p>,
    )
    expect(container.textContent).toContain('R$ 200 sobe 20% e cai 20%.')
    expect(container.textContent).toContain('Pronto.')
    expect(container.querySelectorAll('.katex')).toHaveLength(1)
    expect(container.textContent).not.toContain('\\cdot')
  })

  it('fórmula dentro de negrito também é desenhada', () => {
    const { container } = render(<RichText text={String.raw`Veja a **linha $i$** e a **coluna $j$** da matriz.`} />)
    expect(container.querySelectorAll('strong .katex')).toHaveLength(2)
    expect(container.textContent).not.toContain('$')
  })

  it('negrito e fórmulas curtas funcionam juntos', () => {
    const { container } = render(<RichText text={'O valor de $x$ é **importante** e custa R$ 5,00.'} />)
    expect(container.querySelector('strong')?.textContent).toBe('importante')
    expect(container.querySelectorAll('.katex')).toHaveLength(1)
    expect(container.textContent).toContain('R$ 5,00.')
  })
})

describe('todas as aulas', () => {
  it('renderizam sem sobras de LaTeX cru nem fórmulas quebradas', () => {
    for (const lesson of LESSONS) {
      const { container, unmount } = render(<LessonView blocks={lesson.blocks} />)
      const text = container.textContent ?? ''
      expect(text, `${lesson.slug}: comando LaTeX visível`).not.toMatch(/\\[a-zA-Z]+/)
      expect(text, `${lesson.slug}: chaves de LaTeX visíveis`).not.toContain('{,}')
      // um "$" só pode sobrar em valores em reais, como "R$ 200"
      expect(text.replace(/R\$/g, ''), `${lesson.slug}: "$" sobrando (fórmula mal fechada)`).not.toContain('$')
      expect(container.querySelector('.katex-error'), `${lesson.slug}: erro do KaTeX`).toBeNull()
      unmount()
    }
  })
})
