import { scopedKey } from './scope'

export const OPEN_TASK_KEY = 'vestibular-uemg:open-task:v1'

/** Id da última tarefa aberta (para o botão "voltar para a tarefa"). */
export function loadOpenTask(): string | null {
  try {
    return localStorage.getItem(scopedKey(OPEN_TASK_KEY))
  } catch {
    return null
  }
}

export function saveOpenTask(taskId: string): void {
  try {
    localStorage.setItem(scopedKey(OPEN_TASK_KEY), taskId)
  } catch {
    // sem armazenamento: o botão só vale enquanto o site estiver aberto
  }
}

export function clearOpenTask(): void {
  try {
    localStorage.removeItem(scopedKey(OPEN_TASK_KEY))
  } catch {
    // ignora
  }
}
