import type { ReactNode } from 'react'
import { CloudApiCtx } from './useCloudApi'
import type { CloudApi } from './types'

export function CloudProvider({ api, children }: { api: CloudApi; children: ReactNode }) {
  return <CloudApiCtx.Provider value={api}>{children}</CloudApiCtx.Provider>
}
