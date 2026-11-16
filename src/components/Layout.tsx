import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Hoje', end: true },
  { to: '/disciplinas', label: 'Disciplinas', end: false },
  { to: '/redacao', label: 'Redação', end: false },
]

export function Layout() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col">
      <main className="flex-1 px-4 pb-24 pt-6">
        <Outlet />
      </main>
      <nav
        aria-label="Navegação principal"
        className="fixed inset-x-0 bottom-0 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]"
      >
        <ul className="mx-auto flex max-w-md">
          {links.map((l) => (
            <li key={l.to} className="flex-1">
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `block py-3 text-center text-sm font-medium ${isActive ? 'text-brand' : 'text-muted'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
