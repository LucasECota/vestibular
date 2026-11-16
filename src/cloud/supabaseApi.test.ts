import { describe, expect, it } from 'vitest'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createSupabaseApi, emailFor } from './supabaseApi'

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

/** Cliente falso do Supabase: só o que o login usa. */
function fakeClient(opts: { session: { user: { id: string } } | null; profile: () => Promise<{ data: unknown; error: unknown }> }) {
  return {
    auth: {
      getSession: async () => ({ data: { session: opts.session } }),
      signInWithPassword: async () => ({ data: { user: { id: 'uid-dani' } }, error: null }),
      signOut: async () => ({}),
    },
    from: () => ({ select: () => ({ eq: () => ({ maybeSingle: opts.profile }) }) }),
  } as unknown as SupabaseClient
}

const profileRow = { id: 'uid-dani', username: 'dani', display_name: 'Daniela', role: 'student' }

describe('sessão guardada no aparelho', () => {
  it('sem sessão, devolve null', async () => {
    const api = createSupabaseApi('u', 'k', fakeClient({ session: null, profile: async () => ({ data: null, error: null }) }))
    expect(await api.getSessionUser()).toBeNull()
  })

  it('com sessão, devolve o perfil da conta', async () => {
    const api = createSupabaseApi('u', 'k', fakeClient({ session: { user: { id: 'uid-dani' } }, profile: async () => ({ data: profileRow, error: null }) }))
    expect(await api.getSessionUser()).toMatchObject({ id: 'uid-dani', displayName: 'Daniela', role: 'student' })
  })

  it('sem internet ao abrir o site, continua logada com o perfil guardado', async () => {
    let online = true
    const client = fakeClient({
      session: { user: { id: 'uid-dani' } },
      profile: async () => {
        if (!online) throw new TypeError('Failed to fetch')
        return { data: profileRow, error: null }
      },
    })
    const api = createSupabaseApi('u', 'k', client)
    await api.signIn('dani', 'x') // guarda o perfil no aparelho
    online = false
    expect(await api.getSessionUser()).toMatchObject({ id: 'uid-dani', displayName: 'Daniela' })
  })

  it('sem internet e sem perfil guardado, não inventa um usuário', async () => {
    const api = createSupabaseApi('u', 'k', fakeClient({ session: { user: { id: 'uid-dani' } }, profile: async () => { throw new TypeError('Failed to fetch') } }))
    await expect(api.getSessionUser()).rejects.toThrow()
  })

  it('ao sair, o perfil guardado é apagado', async () => {
    const api = createSupabaseApi('u', 'k', fakeClient({ session: { user: { id: 'uid-dani' } }, profile: async () => ({ data: profileRow, error: null }) }))
    await api.signIn('dani', 'x')
    expect(localStorage.getItem('vestibular-uemg:cloud-user:v1')).not.toBeNull()
    await api.signOut()
    expect(localStorage.getItem('vestibular-uemg:cloud-user:v1')).toBeNull()
  })
})
