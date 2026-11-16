import App from './App'
import { AuthGate } from './cloud/AuthGate'
import { AuthProvider } from './cloud/AuthProvider'
import { CloudProvider } from './cloud/CloudContext'
import type { CloudApi } from './cloud/types'
import { ProgressProvider } from './state/ProgressProvider'

/** O site completo: nuvem, login e dados do usuário. Precisa estar dentro de um Router. */
export function AppRoot({ api }: { api: CloudApi }) {
  return (
    <CloudProvider api={api}>
      <AuthProvider>
        <AuthGate>
          <ProgressProvider>
            <App />
          </ProgressProvider>
        </AuthGate>
      </AuthProvider>
    </CloudProvider>
  )
}
