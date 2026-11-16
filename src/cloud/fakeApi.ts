import { vi } from 'vitest'
import { LoginError, type CloudApi, type CloudState, type CloudUser, type StudentSnapshot, type UserData } from './types'

export const DANI: CloudUser = { id: 'uid-dani', username: 'dani', displayName: 'Daniela', role: 'student' }
export const LUCAS: CloudUser = { id: 'uid-lucas', username: 'lucas', displayName: 'Lucas', role: 'admin' }

interface Options {
  session?: CloudUser | null
  states?: Record<string, CloudState>
  loadStateFails?: boolean
  saveStateFails?: boolean
}

/** Nuvem falsa em memória, só para os testes. */
export function createFakeApi(opts: Options = {}) {
  const passwords: Record<string, { password: string; user: CloudUser }> = {
    dani: { password: 'senha-dani', user: DANI },
    lucas: { password: 'senha-lucas', user: LUCAS },
  }
  const states = new Map<string, CloudState>(Object.entries(opts.states ?? {}))
  let session = opts.session ?? null

  const api = {
    getSessionUser: vi.fn(async () => session),
    signIn: vi.fn(async (username: string, password: string) => {
      const entry = passwords[username.trim().toLowerCase()]
      if (!entry || entry.password !== password) throw new LoginError('Usuário ou senha incorretos.')
      session = entry.user
      return entry.user
    }),
    signOut: vi.fn(async () => {
      session = null
    }),
    loadState: vi.fn(async (userId: string) => {
      if (opts.loadStateFails) throw new Error('sem rede')
      return states.get(userId) ?? null
    }),
    saveState: vi.fn(async (userId: string, data: UserData) => {
      if (opts.saveStateFails) throw new Error('sem rede')
      states.set(userId, { ...data, updatedAt: '2026-11-17T12:00:00.000Z' })
    }),
    loadStudents: vi.fn(async (): Promise<StudentSnapshot[]> => [{ user: DANI, state: states.get(DANI.id) ?? null }]),
  }
  return { api: api satisfies CloudApi, states }
}
