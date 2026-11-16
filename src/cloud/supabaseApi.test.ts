import { describe, expect, it } from 'vitest'
import { emailFor } from './supabaseApi'

describe('emailFor', () => {
  it('transforma o usuário no e-mail interno cadastrado no Supabase', () => {
    expect(emailFor('dani')).toBe('dani@vestibular.app')
    expect(emailFor(' Lucas ')).toBe('lucas@vestibular.app')
  })

  it('aceita o e-mail completo, sem duplicar o domínio', () => {
    expect(emailFor('lucas@vestibular.app')).toBe('lucas@vestibular.app')
    expect(emailFor(' Dani@Vestibular.app ')).toBe('dani@vestibular.app')
  })
})
