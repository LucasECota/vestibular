import { describe, expect, it } from 'vitest'
import { addDoubt, formatDoubtsForShare, removeDoubt, toggleResolved, type Doubt } from './doubts'

const base: Doubt[] = []

describe('doubts', () => {
  it('adiciona dúvida nova no topo, aberta, com texto aparado', () => {
    const a = addDoubt(base, { id: '1', text: '  O que é MRUV?  ', subject: 'fisica', createdAt: '2026-11-20' })
    const b = addDoubt(a, { id: '2', text: 'Crase', subject: 'portugues', createdAt: '2026-11-21' })
    expect(b.map((d) => d.id)).toEqual(['2', '1'])
    expect(b[1]).toMatchObject({ text: 'O que é MRUV?', resolved: false })
  })

  it('ignora texto vazio', () => {
    expect(addDoubt(base, { id: '1', text: '   ', subject: null, createdAt: 'x' })).toBe(base)
  })

  it('marca e desmarca como resolvida sem mutar', () => {
    const a = addDoubt(base, { id: '1', text: 'x', subject: null, createdAt: 'x' })
    const b = toggleResolved(a, '1')
    expect(b[0].resolved).toBe(true)
    expect(a[0].resolved).toBe(false)
    expect(toggleResolved(b, '1')[0].resolved).toBe(false)
  })

  it('remove dúvida', () => {
    const a = addDoubt(base, { id: '1', text: 'x', subject: null, createdAt: 'x' })
    expect(removeDoubt(a, '1')).toEqual([])
  })

  it('formata só as abertas para enviar por mensagem', () => {
    let l = addDoubt(base, { id: '1', text: 'O que é MRUV?', subject: 'fisica', createdAt: '2026-11-20' })
    l = addDoubt(l, { id: '2', text: 'Já resolvida', subject: null, createdAt: '2026-11-21' })
    l = toggleResolved(l, '2')
    const text = formatDoubtsForShare(l)
    expect(text).toContain('Dúvidas da Daniela')
    expect(text).toContain('Física: O que é MRUV?')
    expect(text).not.toContain('Já resolvida')
  })

  it('formata mensagem vazia quando não há dúvidas abertas', () => {
    expect(formatDoubtsForShare([])).toBe('Sem dúvidas abertas.')
  })
})
