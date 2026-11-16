import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Ao trocar de página (por exemplo, abrir uma tarefa), volta ao topo em vez de manter a rolagem anterior. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
