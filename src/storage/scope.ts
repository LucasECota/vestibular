/**
 * Isola os dados salvos no aparelho por usuário: cada conta (Daniela, Lucas) usa suas próprias
 * chaves, então duas pessoas no mesmo celular não misturam pontos. Sem escopo (null), vale a
 * chave original, usada antes do login existir.
 */
let scope: string | null = null

export const setStorageScope = (value: string | null): void => {
  scope = value
}

export const scopedKey = (base: string): string => (scope ? `${base}:${scope}` : base)

/** Aviso interno de que algo foi salvo localmente (o envio para a nuvem escuta isso). */
export const LOCAL_CHANGE_EVENT = 'vestibular:local-change'

export const notifyLocalChange = (): void => {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(LOCAL_CHANGE_EVENT))
}
