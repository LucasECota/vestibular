import { loadDoubts } from '../storage/doubtsStorage'
import { loadProgress } from '../storage/progressStorage'
import { LOCAL_CHANGE_EVENT } from '../storage/scope'
import { setCloudStatus } from './status'
import type { CloudApi, UserData } from './types'

export const readLocalData = (): UserData => ({ progress: loadProgress(), doubts: loadDoubts() })
export const snapshotOf = (data: UserData): string => JSON.stringify(data)

interface Options {
  api: CloudApi
  userId: string
  /** Estado já sincronizado (para não reenviar à toa ao abrir). */
  initialSnapshot: string
  read?: () => UserData
  debounceMs?: number
  retryMs?: number
  intervalMs?: number
}

let active: Uploader | null = null

/** Envia agora o que estiver pendente (usado antes de sair da conta). */
export async function flushActiveUploader(): Promise<void> {
  await active?.flush()
}

export interface Uploader {
  flush: () => Promise<void>
  stop: () => void
}

/**
 * Envia o progresso para a nuvem quando algo muda: espera um pouco depois da última mudança
 * (debounce), tenta de novo se falhar e envia ao sair da página.
 */
export function startUploader(opts: Options): Uploader {
  const { api, userId, read = readLocalData, debounceMs = 1500, retryMs = 15000, intervalMs = 60000 } = opts
  let lastSent = opts.initialSnapshot
  let timer: ReturnType<typeof setTimeout> | undefined
  let stopped = false
  let inFlight: Promise<void> | null = null

  const schedule = (ms: number) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => void flush(), ms)
  }

  async function flush(): Promise<void> {
    if (stopped) return
    if (inFlight) return inFlight
    const data = read()
    const snap = snapshotOf(data)
    if (snap === lastSent) return
    setCloudStatus('saving')
    inFlight = api
      .saveState(userId, data)
      .then(() => {
        lastSent = snap
        setCloudStatus('saved')
      })
      .catch(() => {
        setCloudStatus('offline')
        if (!stopped) schedule(retryMs)
      })
      .finally(() => {
        inFlight = null
      })
    return inFlight
  }

  const onChange = () => schedule(debounceMs)
  const onHide = () => {
    if (document.visibilityState === 'hidden') void flush()
  }
  const onPageHide = () => void flush()
  const interval = setInterval(() => void flush(), intervalMs)

  window.addEventListener(LOCAL_CHANGE_EVENT, onChange)
  document.addEventListener('visibilitychange', onHide)
  window.addEventListener('pagehide', onPageHide)
  setCloudStatus('saved')

  const uploader: Uploader = {
    flush,
    stop() {
      stopped = true
      if (active === uploader) active = null
      if (timer) clearTimeout(timer)
      clearInterval(interval)
      window.removeEventListener(LOCAL_CHANGE_EVENT, onChange)
      document.removeEventListener('visibilitychange', onHide)
      window.removeEventListener('pagehide', onPageHide)
    },
  }
  active = uploader
  return uploader
}
