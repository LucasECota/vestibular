import { useEffect, useState, type CSSProperties } from 'react'
import { loadSeenLevel, saveSeenLevel } from '../storage/levelStorage'
import { useAuth } from '../cloud/useAuth'
import { useProgress } from '../state/useProgress'

const COLORS = ['#6d28d9', '#f59e0b', '#16a34a', '#e11d48', '#0ea5e9', '#f97316']

// posições fixas (sem sorteio), para o efeito ser sempre igual e previsível
const CONFETTI = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 29 + 7) % 100,
  delay: (i % 9) * 0.28,
  duration: 2.6 + (i % 5) * 0.45,
  color: COLORS[i % COLORS.length],
  size: 8 + (i % 3) * 3,
}))
const ROCKETS = [8, 28, 50, 72, 90].map((left, i) => ({ left, delay: i * 0.5, duration: 2.8 + (i % 2) * 0.6 }))

/** Card "Você subiu de nível!" com foguetes, confetes e palmas. Aparece uma vez por nível conquistado. */
export function LevelUpCelebration() {
  const { level, xp } = useProgress()
  const { user } = useAuth()
  // nível já "visto" neste aparelho; na primeira vez, é o nível atual (não comemora o que já existia)
  const [seen, setSeen] = useState<number>(() => loadSeenLevel() ?? level.level)

  // grava o nível assim que ele é alcançado, para recarregar a página não repetir a comemoração
  useEffect(() => {
    saveSeenLevel(Math.max(level.level, loadSeenLevel() ?? 0))
  }, [level.level])

  if (level.level <= seen) return null
  const celebrating = level.level
  const close = () => setSeen(level.level)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-6" onClick={close}>
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            className="fx-confetti absolute top-0 block rounded-sm"
            style={
              {
                left: `${c.left}%`,
                width: c.size,
                height: c.size * 1.6,
                background: c.color,
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.duration}s`,
              } as CSSProperties
            }
          />
        ))}
        {ROCKETS.map((r, i) => (
          <span
            key={i}
            className="fx-rocket absolute bottom-0 text-4xl"
            style={{ left: `${r.left}%`, animationDelay: `${r.delay}s`, animationDuration: `${r.duration}s` }}
          >
            🚀
          </span>
        ))}
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="levelup-title"
        onClick={(e) => e.stopPropagation()}
        className="fx-pop relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
        style={{ background: 'linear-gradient(160deg, #ffffff 0%, #ede4ff 55%, #ffe9c7 100%)' }}
      >
        <p aria-hidden className="text-4xl">
          <span className="fx-clap">👏</span>
          <span className="fx-clap mx-2" style={{ animationDelay: '0.15s' }}>🎉</span>
          <span className="fx-clap" style={{ animationDelay: '0.3s' }}>👏</span>
        </p>
        <h2 id="levelup-title" className="mt-2 text-3xl font-extrabold tracking-tight">
          Você subiu de nível!
        </h2>
        <p className="mt-3 text-sm font-bold text-muted">Seu novo nível</p>
        <p className="text-6xl font-extrabold text-brand">{celebrating}</p>
        <p className="mt-1 text-base font-semibold">Total: {xp} XP. Continue assim, {user?.displayName ?? 'Daniela'}! 🚀</p>
        <button
          type="button"
          autoFocus
          onClick={close}
          className="mt-5 w-full rounded-2xl bg-brand px-4 py-4 text-base font-extrabold text-white shadow-md"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
