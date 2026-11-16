import biologia from './biologia.json'
import fisica from './fisica.json'
import geografia from './geografia.json'
import historia from './historia.json'
import ingles from './ingles.json'
import matematica from './matematica.json'
import portugues from './portugues.json'
import quimica from './quimica.json'

/** Explicações (o porquê da resposta certa) por id de questão. */
export const EXPLANATIONS: Record<string, string> = {
  ...matematica,
  ...fisica,
  ...quimica,
  ...biologia,
  ...portugues,
  ...ingles,
  ...geografia,
  ...historia,
}
