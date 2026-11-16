export function ProgressBar({ percent, label }: { percent: number; label: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-2 w-full overflow-hidden rounded-full bg-line"
    >
      <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${percent}%` }} />
    </div>
  )
}
