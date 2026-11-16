import { useState, type FormEvent } from 'react'
import { LoginError } from '../cloud/types'
import { useAuth } from '../cloud/useAuth'

export function LoginPage() {
  const { signIn } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (busy || !username.trim() || !password) return
    setBusy(true)
    setError(null)
    try {
      await signIn(username, password)
    } catch (err) {
      setError(
        err instanceof LoginError ? err.message : 'Não foi possível entrar agora. Confira a internet e tente de novo.',
      )
      setBusy(false)
    }
  }

  const field = 'w-full rounded-xl border-2 border-line bg-surface px-4 py-3 text-base font-semibold'

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6 py-10">
      <div className="text-center">
        <p aria-hidden className="text-5xl">📚</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">Vestibular UEMG</h1>
        <p className="mt-1 text-muted">Entre para continuar seus estudos.</p>
      </div>

      <form onSubmit={submit} className="card mt-8 space-y-4 p-5">
        <div className="space-y-1">
          <label htmlFor="login-user" className="block text-sm font-bold">
            Usuário
          </label>
          <input
            id="login-user"
            className={field}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="username"
            spellCheck={false}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="login-password" className="block text-sm font-bold">
            Senha
          </label>
          <div className="flex gap-2">
            <input
              id="login-password"
              className={field}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Esconder a senha' : 'Mostrar a senha'}
              className="shrink-0 rounded-xl border-2 border-line px-3 text-lg"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        {error && (
          <p role="alert" className="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-bad">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={busy || !username.trim() || !password}
          className="w-full rounded-2xl bg-brand px-4 py-4 text-base font-extrabold text-white shadow-md disabled:bg-line disabled:text-muted disabled:shadow-none"
        >
          {busy ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </main>
  )
}
