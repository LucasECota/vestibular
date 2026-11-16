/** Data local de hoje no formato YYYY-MM-DD. */
export const todayISO = (): string => new Date().toLocaleDateString('sv-SE')

const DAY_MS = 24 * 60 * 60 * 1000
const parse = (iso: string): number => Date.parse(`${iso}T00:00:00Z`)

export const addDays = (iso: string, days: number): string =>
  new Date(parse(iso) + days * DAY_MS).toISOString().slice(0, 10)

/** 0 = domingo … 6 = sábado. */
export const weekdayOf = (iso: string): number => new Date(parse(iso)).getUTCDay()

export const daysBetween = (fromIso: string, toIso: string): number =>
  Math.round((parse(toIso) - parse(fromIso)) / DAY_MS)

export const formatBR = (iso: string): string => iso.split('-').reverse().join('/')
