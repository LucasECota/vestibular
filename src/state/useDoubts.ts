import { useCallback, useEffect, useState } from 'react'
import { addDoubt, removeDoubt, toggleResolved, type Doubt } from '../domain/doubts'
import type { SubjectId } from '../domain/types'
import { loadDoubts, saveDoubts } from '../storage/doubtsStorage'

export function useDoubts() {
  const [doubts, setDoubts] = useState<Doubt[]>(loadDoubts)

  useEffect(() => saveDoubts(doubts), [doubts])

  const add = useCallback((text: string, subject: SubjectId | null) => {
    setDoubts((l) =>
      addDoubt(l, { id: crypto.randomUUID(), text, subject, createdAt: new Date().toISOString() }),
    )
  }, [])
  const toggle = useCallback((id: string) => setDoubts((l) => toggleResolved(l, id)), [])
  const remove = useCallback((id: string) => setDoubts((l) => removeDoubt(l, id)), [])

  return { doubts, add, toggle, remove }
}
