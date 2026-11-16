import { describe, expect, it } from 'vitest'
import { emailFor } from './supabaseApi'

describe('emailFor', () => {
  it('transforma o usuário no e-mail interno cadastrado no Supabase', () => {
    expect(emailFor('dani')).toBe('dani@vestibular.app')
    expect(emailFor(' Lucas ')).toBe('lucas@vestibular.app')
  })
})
