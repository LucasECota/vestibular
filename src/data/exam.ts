/**
 * Estrutura da Prova de Conhecimentos Gerais, conforme os cadernos de 2023 e 2024.
 * Confirme sempre no edital vigente.
 */
export interface ExamSection {
  name: string
  from: number
  to: number
  note?: string
}

export const EXAM = {
  durationMinutes: 240,
  minStayMinutes: 120,
  totalQuestions: 48,
  optionsPerQuestion: 4,
  pointsPerQuestion: 2,
  essayLines: { min: 7, max: 30 },
  sections: [
    { name: 'Língua Portuguesa e Literatura', from: 1, to: 6 },
    { name: 'Língua Estrangeira', from: 7, to: 12, note: 'Inglês ou Espanhol, conforme a escolha na inscrição' },
    { name: 'Física', from: 13, to: 18 },
    { name: 'Química', from: 19, to: 24 },
    { name: 'Biologia', from: 25, to: 30 },
    { name: 'Geografia', from: 31, to: 36 },
    { name: 'História', from: 37, to: 42 },
    { name: 'Matemática', from: 43, to: 48 },
  ] satisfies ExamSection[],
} as const

export function examTotals() {
  const questions = EXAM.sections.reduce((n, s) => n + (s.to - s.from + 1), 0)
  return { questions, points: questions * EXAM.pointsPerQuestion }
}

export interface PaceBlock {
  label: string
  minutes: number
}

/** Sugestão de ritmo (não oficial) que soma o tempo total da prova. */
export function paceSuggestion(): PaceBlock[] {
  return [
    { label: 'Questões objetivas (48 × ~3 min)', minutes: 144 },
    { label: 'Redação (rascunho + texto final)', minutes: 55 },
    { label: 'Revisão das questões', minutes: 25 },
    { label: 'Cartão-resposta e folha de redação', minutes: 16 },
  ]
}
