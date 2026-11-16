import { createContext, useContext } from 'react'
import type { CloudApi } from './types'

export const CloudApiCtx = createContext<CloudApi | null>(null)

export function useCloudApi(): CloudApi {
  const api = useContext(CloudApiCtx)
  if (!api) throw new Error('useCloudApi precisa estar dentro de CloudProvider')
  return api
}
