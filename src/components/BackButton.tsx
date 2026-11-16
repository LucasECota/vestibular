import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Volta para a página anterior. Se a pessoa abriu esta página direto (sem histórico no site),
 * vai para `fallback`.
 */
export function BackButton({ fallback = '/guia' }: { fallback?: string }) {
  const navigate = useNavigate()
  const { key } = useLocation()
  const hasHistory = key !== 'default'

  return (
    <button
      type="button"
      onClick={() => (hasHistory ? navigate(-1) : navigate(fallback, { replace: true }))}
      className="-ml-2 inline-flex items-center gap-1 rounded-xl px-2 py-2 text-base font-extrabold text-brand active:bg-brand-soft"
    >
      <span aria-hidden>‹</span> Voltar
    </button>
  )
}
