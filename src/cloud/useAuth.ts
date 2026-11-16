import { createContext, useContext } from 'react'
import type { CloudUser } from './types'

export interface AuthValue {
  status: 'loading' | 'signedOut' | 'signedIn'
  user: CloudUser | null
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

/** Sem login (como nos testes de telas isoladas) o site funciona como antes, sem usuário. */
export const AuthCtx = createContext<AuthValue>({
  status: 'signedOut',
  user: null,
  signIn: async () => {},
  signOut: async () => {},
})

export const useAuth = (): AuthValue => useContext(AuthCtx)
