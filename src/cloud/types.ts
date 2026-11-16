import type { Doubt } from '../domain/doubts'
import type { ProgressState } from '../domain/types'

export type Role = 'student' | 'admin'

export interface CloudUser {
  id: string
  /** Nome de usuário usado no login (ex.: "dani"). */
  username: string
  /** Nome mostrado no site (ex.: "Daniela"). */
  displayName: string
  role: Role
}

export interface UserData {
  progress: ProgressState
  doubts: Doubt[]
}

export interface CloudState extends UserData {
  updatedAt: string | null
}

export interface StudentSnapshot {
  user: CloudUser
  state: CloudState | null
}

/** Erro de login (usuário ou senha incorretos, conta sem perfil...). */
export class LoginError extends Error {}

/** Tudo que o site precisa da nuvem; a implementação real usa o Supabase e os testes usam um falso. */
export interface CloudApi {
  getSessionUser(): Promise<CloudUser | null>
  signIn(username: string, password: string): Promise<CloudUser>
  signOut(): Promise<void>
  loadState(userId: string): Promise<CloudState | null>
  saveState(userId: string, data: UserData): Promise<void>
  /** Só funciona para o administrador: dados de todos os alunos. */
  loadStudents(): Promise<StudentSnapshot[]>
}
