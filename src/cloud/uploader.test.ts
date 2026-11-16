import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { emptyProgress } from '../domain/types'
import { LOCAL_CHANGE_EVENT } from '../storage/scope'
import { getCloudStatus, setCloudStatus } from './status'
import { snapshotOf, startUploader } from './uploader'
import type { UserData } from './types'

const data = (n: number): UserData => ({
  progress: { ...emptyProgress(), activeDates: Array.from({ length: n }, (_, i) => `2026-11-${10 + i}`) },
  doubts: [],
})

describe('envio para a nuvem', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    setCloudStatus('idle')
  })
  afterEach(() => vi.useRealTimers())

  const setup = (saveImpl = vi.fn().mockResolvedValue(undefined)) => {
    let current = data(0)
    const api = { saveState: saveImpl } as never
    const uploader = startUploader({ api, userId: 'u1', initialSnapshot: snapshotOf(current), read: () => current, debounceMs: 1000, retryMs: 5000, intervalMs: 60_000 })
    return { uploader, save: saveImpl, change: (n: number) => { current = data(n); window.dispatchEvent(new Event(LOCAL_CHANGE_EVENT)) } }
  }

  it('espera as mudanças pararem (debounce) e envia uma vez só', async () => {
    const { save, change, uploader } = setup()
    change(1)
    change(2)
    change(3)
    await vi.advanceTimersByTimeAsync(900)
    expect(save).not.toHaveBeenCalled()
    await vi.advanceTimersByTimeAsync(200)
    expect(save).toHaveBeenCalledTimes(1)
    expect(save.mock.calls[0][0]).toBe('u1')
    expect(save.mock.calls[0][1].progress.activeDates).toHaveLength(3)
    expect(getCloudStatus()).toBe('saved')
    uploader.stop()
  })

  it('não reenvia quando nada mudou', async () => {
    const { save, change, uploader } = setup()
    change(1)
    await vi.advanceTimersByTimeAsync(1100)
    await uploader.flush()
    await uploader.flush()
    expect(save).toHaveBeenCalledTimes(1)
    uploader.stop()
  })

  it('se falhar, marca "sem conexão" e tenta de novo depois', async () => {
    const save = vi.fn().mockRejectedValueOnce(new Error('sem rede')).mockResolvedValue(undefined)
    const { change, uploader } = setup(save)
    change(1)
    await vi.advanceTimersByTimeAsync(1100)
    expect(getCloudStatus()).toBe('offline')
    await vi.advanceTimersByTimeAsync(5100)
    expect(save).toHaveBeenCalledTimes(2)
    expect(getCloudStatus()).toBe('saved')
    uploader.stop()
  })

  it('flush() envia na hora o que está pendente e parar cancela tudo', async () => {
    const { save, change, uploader } = setup()
    change(2)
    await uploader.flush()
    expect(save).toHaveBeenCalledTimes(1)
    uploader.stop()
    change(5)
    await vi.advanceTimersByTimeAsync(5000)
    expect(save).toHaveBeenCalledTimes(1)
  })
})
