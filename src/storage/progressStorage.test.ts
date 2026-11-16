import { describe, expect, it } from 'vitest'
import { emptyProgress } from '../domain/types'
import { loadProgress, saveProgress, STORAGE_KEY } from './progressStorage'

describe('progressStorage', () => {
  it('retorna progresso vazio quando não há nada salvo', () => {
    expect(loadProgress()).toEqual(emptyProgress())
  })
  it('salva e recarrega o progresso', () => {
    const p = { ...emptyProgress(), completedTaskIds: ['t1'], activeDates: ['2026-11-17'] }
    saveProgress(p)
    expect(loadProgress()).toEqual(p)
  })
  it('ignora JSON corrompido', () => {
    localStorage.setItem(STORAGE_KEY, '{nao-e-json')
    expect(loadProgress()).toEqual(emptyProgress())
  })
  it('ignora dados com formato inválido', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ completedTaskIds: 'x' }))
    expect(loadProgress()).toEqual(emptyProgress())
  })
})
