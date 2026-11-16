interface Props {
  percent: number
  label: string
  /** Cor da barra; padrão é a cor da marca. */
  color?: string
}

export function ProgressBar({ percent, label, color = 'var(--color-brand)' }: Props) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-3 w-full overflow-hidden rounded-full"
      style={{ background: `color-mix(in srgb, ${color} 15%, white)` }}
    >
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${percent}%`, background: color }}
      />
    </div>
  )
}
