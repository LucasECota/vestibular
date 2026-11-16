import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useCloudApi } from './useCloudApi'
import type { CloudUser } from './types'
import { flushActiveUploader } from './uploader'
import { AuthCtx, type AuthValue } from './useAuth'

/** Guarda quem está logado e oferece entrar e sair. */
export function AuthProvider({ children }: { children: ReactNode }) {
  const api = useCloudApi()
  const [status, setStatus] = useState<AuthValue['status']>('loading')
  const [user, setUser] = useState<CloudUser | null>(null)

  useEffect(() => {
    let alive = true
    api
      .getSessionUser()
      .then((u) => {
        if (!alive) return
        setUser(u)
        setStatus(u ? 'signedIn' : 'signedOut')
      })
      .catch(() => {
        if (alive) setStatus('signedOut')
      })
    return () => {
      alive = false
    }
  }, [api])

  const signIn = useCallback(
    async (username: string, password: string) => {
      const u = await api.signIn(username, password)
      setUser(u)
      setStatus('signedIn')
    },
    [api],
  )

  const signOut = useCallback(async () => {
    await flushActiveUploader().catch(() => {}) // não perde o que ainda não foi enviado
    await api.signOut()
    setUser(null)
    setStatus('signedOut')
  }, [api])

  const value = useMemo<AuthValue>(() => ({ status, user, signIn, signOut }), [status, user, signIn, signOut])
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}
