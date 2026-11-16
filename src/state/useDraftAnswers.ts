import { useCallback, useState } from 'react'
import { scopedKey } from '../storage/scope'

const key = (taskId: string) => scopedKey(`vestibular-uemg:draft:${taskId}`)

function load(taskId: string): Record<string, number> {
  try {
    const raw = localStorage.getItem(key(taskId))
    const parsed: unknown = raw ? JSON.parse(raw) : {}
    if (typeof parsed !== 'object' || parsed === null) return {}
    return Object.fromEntries(Object.entries(parsed).filter(([, v]) => Number.isInteger(v) && (v as number) >= 0 && (v as number) <= 3)) as Record<string, number>
  } catch {
    return {}
  }
}

/** Respostas marcadas, mas ainda não corrigidas; sobrevivem a recarregar a página. */
export function useDraftAnswers(taskId: string) {
  const [draft, setDraft] = useState<Record<string, number>>(() => load(taskId))

  const choose = useCallback(
    (exerciseId: string, option: number) => {
      setDraft((d) => {
        const next = { ...d, [exerciseId]: option }
        try {
          localStorage.setItem(key(taskId), JSON.stringify(next))
        } catch {
          // sem armazenamento: o rascunho fica só na memória
        }
        return next
      })
    },
    [taskId],
  )

  const clearStorage = useCallback(() => {
    try {
      localStorage.removeItem(key(taskId))
    } catch {
      // ignora
    }
  }, [taskId])

  return { draft, choose, clearStorage }
}
