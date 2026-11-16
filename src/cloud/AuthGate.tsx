import type { ReactNode } from 'react'
import { LoginPage } from '../pages/LoginPage'
import { UserArea } from './UserArea'
import { useAuth } from './useAuth'

/** Só deixa ver o site quem fez login; cada usuário recebe sua própria área de dados. */
export function AuthGate({ children }: { children: ReactNode }) {
  const { status, user } = useAuth()

  if (status === 'loading') {
    return (
      <main className="mx-auto flex min-h-dvh max-w-md items-center justify-center px-6 text-center">
        <p role="status" className="text-base font-bold text-muted">Carregando...</p>
      </main>
    )
  }
  if (status === 'signedOut' || !user) return <LoginPage />
  return (
    <UserArea key={user.id} user={user}>
      {children}
    </UserArea>
  )
}
