/** Caminho público de um arquivo em `public/` (respeita a base do deploy). */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`
