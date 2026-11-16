import { useEffect, useState, type ReactNode } from 'react'
import { totalXp } from '../domain/progress'
import { setStorageScope } from '../storage/scope'
import { useCloudApi } from './useCloudApi'
import { setCloudStatus } from './status'
import type { CloudUser } from './types'
import { startUploader } from './uploader'
import { useUserData } from './useUserData'

function Splash({ text }: { text: string }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <p aria-hidden className="text-5xl">📚</p>
      <p role="status" className="mt-3 text-base font-bold text-muted">{text}</p>
    </main>
  )
}

/** Tudo que depende do usuário logado: isola os dados dele, carrega da nuvem e envia as mudanças. */
export function UserArea({ user, children }: { user: CloudUser; children: ReactNode }) {
  // define o escopo antes de qualquer filho ler o armazenamento
  useState(() => {
    setStorageScope(user.id)
    return null
  })
  const api = useCloudApi()
  const data = useUserData(api, user)

  useEffect(() => {
    if (data.status !== 'ready') return
    const uploader = startUploader({ api, userId: user.id, initialSnapshot: data.snapshot })
    if (data.offline) setCloudStatus('offline')
    return () => uploader.stop()
  }, [api, user.id, data.status, data.snapshot, data.offline])

  if (data.status === 'loading') return <Splash text="Carregando seus dados..." />

  if (data.status === 'ask-import' && data.legacy) {
    const xp = totalXp(data.legacy.progress)
    const done = data.legacy.progress.completedTaskIds.length
    return (
      <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6 py-10">
        <div role="dialog" aria-labelledby="import-title" className="card space-y-4 p-5">
          <h1 id="import-title" className="text-2xl font-extrabold tracking-tight">
            Progresso encontrado neste aparelho
          </h1>
          <p>
            Havia pontos salvos aqui antes do login: <strong>{xp} XP</strong> e{' '}
            <strong>{done} {done === 1 ? 'tarefa concluída' : 'tarefas concluídas'}</strong>. Quer levar isso para a
            conta de <strong>{user.displayName}</strong>?
          </p>
          <p className="text-sm text-muted">
            Se foram só testes, escolha começar do zero para não misturar com a pontuação real.
          </p>
          <button
            type="button"
            onClick={() => void data.importLegacy()}
            className="w-full rounded-2xl bg-brand px-4 py-4 text-base font-extrabold text-white shadow-md"
          >
            Importar para esta conta
          </button>
          <button
            type="button"
            onClick={() => void data.startFresh()}
            className="w-full rounded-2xl border-2 border-brand px-4 py-3 text-base font-extrabold text-brand"
          >
            Começar do zero
          </button>
        </div>
      </main>
    )
  }

  return <>{children}</>
}
