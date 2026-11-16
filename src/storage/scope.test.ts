import { describe, expect, it } from 'vitest'
import { emptyProgress } from '../domain/types'
import { loadLegacyProgress, loadProgress, saveProgress, STORAGE_KEY } from './progressStorage'
import { scopedKey, setStorageScope } from './scope'

const withXp = (n: number) => ({
  ...emptyProgress(),
  attempts: Array.from({ length: n }, (_, i) => ({ exerciseId: `q${i}`, taskId: 't', subject: 'fisica' as const, correct: true })),
})

describe('escopo por usuário', () => {
  it('sem escopo usa a chave original; com escopo, uma chave por usuário', () => {
    expect(scopedKey('a')).toBe('a')
    setStorageScope('uid-1')
    expect(scopedKey('a')).toBe('a:uid-1')
  })

  it('cada usuário enxerga só o próprio progresso, e o antigo (sem escopo) continua acessível à parte', () => {
    saveProgress(withXp(3)) // antes do login: chave original
    setStorageScope('dani')
    expect(loadProgress().attempts).toHaveLength(0) // a conta nova não herda nada sozinha
    saveProgress(withXp(5))
    setStorageScope('lucas')
    expect(loadProgress().attempts).toHaveLength(0)
    setStorageScope('dani')
    expect(loadProgress().attempts).toHaveLength(5)
    expect(loadLegacyProgress().attempts).toHaveLength(3)
    expect(localStorage.getItem(STORAGE_KEY)).not.toBeNull()
  })
})
