import type { Block, CalloutKind } from '../../../domain/lesson'

/** Atalhos para escrever os blocos dos complementos de aula. */
export const h = (text: string): Block => ({ type: 'h', text })
export const p = (text: string): Block => ({ type: 'p', text })
export const math = (tex: string): Block => ({ type: 'math', tex })
export const list = (items: string[]): Block => ({ type: 'list', items })
export const call = (kind: CalloutKind, text: string, title?: string): Block => ({ type: 'callout', kind, text, title })
export const table = (head: string[], rows: string[][]): Block => ({ type: 'table', head, rows })
