import { useCallback, useEffect, useState } from 'react'
import { isEmptyProgress, mergeDoubts, mergeProgress } from '../domain/merge'
import { emptyProgress } from '../domain/types'
import {
  loadDoubts,
  loadLegacyDoubts,
  removeLegacyDoubts,
  saveDoubts,
} from '../storage/doubtsStorage'
import {
  loadLegacyProgress,
  loadProgress,
  removeLegacyProgress,
  saveProgress,
} from '../storage/progressStorage'
import type { CloudApi, CloudUser, UserData } from './types'
import { readLocalData, snapshotOf } from './uploader'

export type DataStatus = 'loading' | 'ask-import' | 'ready'

const hasData = (d: UserData): boolean => !isEmptyProgress(d.progress) || d.doubts.length > 0

/**
 * Prepara os dados do usuário depois do login: busca na nuvem, junta com o que já existe
 * neste aparelho e grava tudo localmente. Se a conta é nova e há progresso antigo sem conta
 * neste aparelho, pergunta se deve importar (para não misturar testes com a pontuação real).
 */
export function useUserData(api: CloudApi, user: CloudUser) {
  const [status, setStatus] = useState<DataStatus>('loading')
  const [legacy, setLegacy] = useState<UserData | null>(null)
  const [snapshot, setSnapshot] = useState('')
  const [offline, setOffline] = useState(false)

  const finish = useCallback(
    async (merged: UserData, canUpload: boolean) => {
      saveProgress(merged.progress)
      saveDoubts(merged.doubts)
      if (canUpload) {
        try {
          await api.saveState(user.id, merged)
        } catch {
          setOffline(true)
        }
      }
      setSnapshot(snapshotOf(readLocalData()))
      setStatus('ready')
    },
    [api, user.id],
  )

  useEffect(() => {
    let alive = true
    ;(async () => {
      let cloud: Awaited<ReturnType<CloudApi['loadState']>> = null
      let failed = false
      try {
        cloud = await api.loadState(user.id)
      } catch {
        failed = true
      }
      if (!alive) return
      if (failed) setOffline(true)

      const local: UserData = { progress: loadProgress(), doubts: loadDoubts() }
      const old: UserData = { progress: loadLegacyProgress(), doubts: loadLegacyDoubts() }

      if (!failed && !cloud && !hasData(local) && hasData(old)) {
        setLegacy(old)
        setStatus('ask-import')
        return
      }

      const base: UserData = cloud ?? { progress: emptyProgress(), doubts: [] }
      const merged: UserData = {
        progress: mergeProgress(base.progress, local.progress),
        doubts: mergeDoubts(base.doubts, local.doubts),
      }
      await finish(merged, !failed)
    })()
    return () => {
      alive = false
    }
  }, [api, user.id, finish])

  const importLegacy = useCallback(async () => {
    if (!legacy) return
    await finish(legacy, true)
    removeLegacyProgress()
    removeLegacyDoubts()
  }, [legacy, finish])

  const startFresh = useCallback(() => finish({ progress: emptyProgress(), doubts: [] }, true), [finish])

  return { status, legacy, snapshot, offline, importLegacy, startFresh }
}
