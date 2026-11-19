import type { Block } from '../../../domain/lesson'
import { call, h, p } from './b'

/** Complementos das tarefas de 4 a 5/01. */
export const ADD_WEEK8: Record<string, Block[]> = {
  'quimica-7': [
    h('6. Fórmulas gerais e cálculos'),
    p(String.raw`**Hidrocarbonetos:** alcanos (só ligações simples) seguem $C_nH_{2n+2}$; alcenos (uma dupla), $C_nH_{2n}$; alcinos (uma tripla), $C_nH_{2n-2}$. Com 5 carbonos, o alcano é $C_5H_{12}$ (pentano).`),
    p('**Cálculos com reações orgânicas:** como em qualquer reação, os coeficientes dão a proporção em mols. Na combustão completa do etanol, $C_2H_5OH + 3\\,O_2 \\to 2\\,CO_2 + 3\\,H_2O$, 1 mol de etanol forma 2 mol de CO₂; então 3 mol de etanol formam 6 mol.'),
  ],

  'geografia-7': [
    h('6. Países emergentes'),
    p('**Países emergentes** (como Brasil, China, Índia e África do Sul) são economias em desenvolvimento com **crescimento rápido, industrialização relativamente recente e grande mercado interno**. Ganham peso na economia mundial, mas ainda têm desigualdades sociais internas.'),
  ],

  'matematica-14': [
    h('5. Mais dois tipos de problema'),
    p(String.raw`**Probabilidade com repetições (moeda ou dado):** conte os resultados favoráveis com combinação e divida pelo total. Em $n$ lançamentos de moeda há $2^n$ resultados. Exatamente $k$ caras: $\dfrac{C(n,k)}{2^n}$.`),
    call('exemplo', String.raw`4 lançamentos, exatamente 1 cara: $\dfrac{C(4,1)}{2^4}=\dfrac{4}{16}=\dfrac14$.`),
    p('**Dois dados:** há $6\\cdot 6 = 36$ resultados possíveis. Liste os favoráveis. Soma 5: (1,4), (2,3), (3,2), (4,1), ou seja, 4 resultados, com probabilidade $\\dfrac{4}{36}=\\dfrac19$.'),
  ],
}
