import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { taskById } from '../data/plan'
import { SUBJECT_COLOR, SUBJECT_LABEL } from '../data/subjects'
import { useProgress } from '../state/useProgress'

const icons = {
  home: 'M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  books: 'M5 4h4v16H5zM11 4h4v16h-4zM17.5 5.5l3.5 1-3.5 13.5-3.5-1z',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3.5 2',
  list: 'M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01',
  help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01',
  pen: 'M4 20h4L19 9l-4-4L4 16zM14 6l4 4',
}

const links = [
  { to: '/', label: 'Hoje', end: true, icon: icons.home },
  { to: '/disciplinas', label: 'Disciplinas', end: false, icon: icons.books },
  { to: '/questoes', label: 'Questões', end: false, icon: icons.list },
  { to: '/duvidas', label: 'Dúvidas', end: false, icon: icons.help },
  { to: '/guia', label: 'Guia', end: false, icon: icons.clock },
]

/** Botão para retomar a tarefa que foi aberta e ainda não foi concluída. */
function ResumeTask() {
  const { openTaskId, progress, closeOpenTask } = useProgress()
  const { pathname } = useLocation()
  const task = openTaskId ? taskById(openTaskId) : undefined
  if (!task || progress.completedTaskIds.includes(task.id) || pathname.endsWith(`/tarefa/${task.id}`)) return null
  return (
    <div
      className="mx-auto flex max-w-md items-center gap-2 border-b border-l-[6px] border-line bg-white py-2 pl-4 pr-2 text-sm"
      style={{ borderLeftColor: SUBJECT_COLOR[task.subject] }}
    >
      <Link to={`/tarefa/${task.id}`} className="flex min-w-0 flex-1 items-center justify-between gap-3">
        <span className="min-w-0">
          <span className="block text-xs font-bold text-muted">Tarefa em andamento · {SUBJECT_LABEL[task.subject]}</span>
          <span className="block truncate font-extrabold">{task.title}</span>
        </span>
        <span className="shrink-0 rounded-full bg-brand px-3 py-1.5 text-xs font-extrabold text-white">Voltar ↩</span>
      </Link>
      <button
        type="button"
        onClick={closeOpenTask}
        aria-label="Fechar tarefa em andamento"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-muted active:bg-brand-soft"
      >
        ✕
      </button>
    </div>
  )
}

export function Layout() {
  const { openTaskId, progress } = useProgress()
  const hasResume = Boolean(openTaskId && taskById(openTaskId) && !progress.completedTaskIds.includes(openTaskId))
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col">
      <main className={`flex-1 px-4 pt-6 ${hasResume ? 'pb-44' : 'pb-28'}`}>
        <Outlet />
      </main>
      <nav
        aria-label="Navegação principal"
        className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
      >
        <ResumeTask />
        <ul className="mx-auto flex max-w-md px-2 py-1">
          {links.map((l) => (
            <li key={l.to} className="flex-1">
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 rounded-xl py-2 text-xs font-bold ${
                    isActive ? 'bg-brand-soft text-brand' : 'text-muted'
                  }`
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={l.icon} />
                </svg>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
