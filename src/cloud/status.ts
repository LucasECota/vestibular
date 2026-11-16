import { useSyncExternalStore } from 'react'

export type CloudStatus = 'idle' | 'saving' | 'saved' | 'offline'

let current: CloudStatus = 'idle'
const listeners = new Set<() => void>()

export const getCloudStatus = (): CloudStatus => current

export function setCloudStatus(next: CloudStatus): void {
  if (next === current) return
  current = next
  listeners.forEach((l) => l())
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => {
    listeners.delete(l)
  }
}

/** Situação do envio do progresso para a nuvem (para mostrar "salvo na nuvem"). */
export const useCloudStatus = (): CloudStatus => useSyncExternalStore(subscribe, getCloudStatus, getCloudStatus)
