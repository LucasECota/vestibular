import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRoot } from './AppRoot.tsx'
import { createSupabaseApi } from './cloud/supabaseApi.ts'

const api = createSupabaseApi()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoot api={api} />
    </BrowserRouter>
  </StrictMode>,
)
