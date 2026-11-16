import { describe, expect, it } from 'vitest'
import { DOUBTS_KEY, loadDoubts, saveDoubts } from './doubtsStorage'

const sample = [{ id: '1', text: 'x', subject: 'fisica' as const, createdAt: '2026-11-20', resolved: false }]

describe('doubtsStorage', () => {
  it('vazio por padrão', () => {
    expect(loadDoubts()).toEqual([])
  })
  it('salva e recarrega', () => {
    saveDoubts(sample)
    expect(loadDoubts()).toEqual(sample)
  })
  it('ignora dados corrompidos ou inválidos', () => {
    localStorage.setItem(DOUBTS_KEY, '{ruim')
    expect(loadDoubts()).toEqual([])
    localStorage.setItem(DOUBTS_KEY, JSON.stringify([{ id: 1 }]))
    expect(loadDoubts()).toEqual([])
  })
})
