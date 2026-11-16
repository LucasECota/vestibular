import { createClient } from '@supabase/supabase-js'
import { parseDoubts } from '../storage/doubtsStorage'
import { parseProgress } from '../storage/progressStorage'
import { LoginError, type CloudApi, type CloudState, type CloudUser, type Role } from './types'

/** Endereço e chave pública (publishable) do projeto. É seguro ficar no código: quem protege os dados é a regra de acesso (RLS) do banco. */
export const SUPABASE_URL = 'https://dxjkyymznotuetzkzdrm.supabase.co'
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_rwZuK9bBfV6XnpMlR7bvhw_KAvr96PM'

/**
 * O login é por "usuário"; o Supabase exige e-mail, então montamos um e-mail interno.
 * Se a pessoa já digitar o e-mail completo, ele é usado como está.
 */
export const emailFor = (username: string): string => {
  const name = username.trim().toLowerCase()
  return name.includes('@') ? name : `${name}@vestibular.app`
}

interface ProfileRow {
  id: string
  username: string
  display_name: string
  role: Role
}

const toUser = (p: ProfileRow): CloudUser => ({
  id: p.id,
  username: p.username,
  displayName: p.display_name,
  role: p.role,
})

export function createSupabaseApi(url = SUPABASE_URL, key = SUPABASE_PUBLISHABLE_KEY): CloudApi {
  const client = createClient(url, key)

  async function profileOf(userId: string): Promise<CloudUser> {
    const { data, error } = await client
      .from('profiles')
      .select('id, username, display_name, role')
      .eq('id', userId)
      .maybeSingle()
    if (error) throw error
    if (!data) throw new LoginError('Esta conta ainda não tem perfil. Peça ajuda ao Lucas.')
    return toUser(data as ProfileRow)
  }

  const toState = (row: { progress: unknown; doubts: unknown; updated_at: string | null }): CloudState => ({
    progress: parseProgress(row.progress),
    doubts: parseDoubts(row.doubts),
    updatedAt: row.updated_at,
  })

  return {
    async getSessionUser() {
      const { data } = await client.auth.getSession()
      const user = data.session?.user
      return user ? profileOf(user.id) : null
    },

    async signIn(username, password) {
      const { data, error } = await client.auth.signInWithPassword({ email: emailFor(username), password })
      if (error || !data.user) throw new LoginError('Usuário ou senha incorretos.')
      return profileOf(data.user.id)
    },

    async signOut() {
      await client.auth.signOut()
    },

    async loadState(userId) {
      const { data, error } = await client
        .from('student_state')
        .select('progress, doubts, updated_at')
        .eq('user_id', userId)
        .maybeSingle()
      if (error) throw error
      return data ? toState(data) : null
    },

    async saveState(userId, state) {
      const { error } = await client.from('student_state').upsert(
        { user_id: userId, progress: state.progress, doubts: state.doubts, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' },
      )
      if (error) throw error
    },

    async loadStudents() {
      const profiles = await client.from('profiles').select('id, username, display_name, role').eq('role', 'student')
      if (profiles.error) throw profiles.error
      const states = await client.from('student_state').select('user_id, progress, doubts, updated_at')
      if (states.error) throw states.error
      return (profiles.data as ProfileRow[]).map((p) => {
        const row = states.data.find((s) => s.user_id === p.id)
        return { user: toUser(p), state: row ? toState(row) : null }
      })
    },
  }
}
