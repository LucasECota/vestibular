import { SUBJECT_COLOR, SUBJECT_ICON, SUBJECT_LABEL } from '../data/subjects'
import type { SubjectId } from '../domain/types'

export function SubjectChip({ subject, extra }: { subject: SubjectId; extra?: string }) {
  const c = SUBJECT_COLOR[subject]
  return (
    <span
      className="tint inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold"
      style={{ '--c': c, color: c } as React.CSSProperties}
    >
      <span aria-hidden>{SUBJECT_ICON[subject]}</span>
      {SUBJECT_LABEL[subject]}
      {extra ? <span className="font-semibold opacity-80">· {extra}</span> : null}
    </span>
  )
}
