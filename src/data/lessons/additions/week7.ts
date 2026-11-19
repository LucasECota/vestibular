import type { Block } from '../../../domain/lesson'
import { call, h, list, p, table } from './b'

/** Complementos das tarefas de 28 a 31/12. */
export const ADD_WEEK7: Record<string, Block[]> = {
  'matematica-12': [
    h('6. Equações com seno e cosseno'),
    p(String.raw`Como $\text{sen}\,x = \text{sen}(\pi - x)$, uma equação $\text{sen}\,x = c$ (com $0<c<1$) tem **duas** soluções em $[0,2\pi]$: uma no 1º quadrante e outra no 2º. Para $\text{sen}\,x=\dfrac12$: $x=\dfrac{\pi}{6}$ ou $x=\pi-\dfrac{\pi}{6}=\dfrac{5\pi}{6}$ (soma $=\pi$). O seno é positivo no 1º e no 2º quadrantes; o cosseno, no 1º e no 4º.`),
  ],

  'ingles-pratica-1': [
    list([
      '**Pronomes:** "it" retoma a coisa de que se está falando. Em "What is this, behind this veil? ... I am sure it is unique", "it" é o objeto misterioso atrás do véu (o presente), e não a poeta.',
      '**Discurso direto × indireto:** no direto, reproduzimos a fala exata ("I think we\'re lost"). No indireto, o narrador conta o que foi dito, geralmente com *said (that)* e ajustes de pronome e tempo ("She said she was going to go home"). A pergunta direta ("What did Alice say?") também é discurso direto.',
      '**Tempo verbal:** verbos regulares no passado terminam em **-ed** (*realised*, *watched*). Procure marcas de tempo (yesterday, ago, "the moment I realised").',
      '**Conectivos:** *but* indica **oposição**; *because*, causa; *so*, consequência; *and*, adição.',
      '**Palavras repetidas revelam o tema:** em "I am tomorrow... I am today... I established yesterday", as palavras *tomorrow, today, yesterday* mostram que o eu poético é pensado a partir do **tempo**.',
      '**Palavras com -ing:** podem ser adjetivo ("a boring book" = um livro chato) ou verbo ("lectures are boring everyone" = estão entediando todos, com objeto). Se descreve um substantivo, é adjetivo; se tem objeto, é verbo.',
    ]),
    p('**Gramática básica que aparece nas extras:** verbo to be (*I am, he is, they are*); plural irregular (*child → children*, *man → men*); *there is* (singular) e *there are* (plural); primeiro condicional (*If it rains, we will stay*); concessão com *although* e *despite* (apesar de).'),
  ],

  'matematica-pratica-2': [
    p(String.raw`**Duas retas se cortam no centro de uma circunferência:** resolva o sistema das duas equações para achar o centro $(a,b)$ e use $(x-a)^2+(y-b)^2=r^2$.`),
    call('exemplo', String.raw`Retas $x+y=4$ e $x-y=2$: somando, $x=3$ e $y=1$. Com raio 5: $(x-3)^2+(y-1)^2=25$.`),
    p(String.raw`**Domínio de funções racionais e de $f(f(x))$:** o denominador não pode ser zero. Para $h(x)=f(f(x))$, é preciso que $x$ esteja no domínio de $f$ **e** que $f(x)$ também esteja.`),
    call('exemplo', String.raw`$f(x)=\dfrac{1}{x-2}$ tem domínio $\mathbb{R}\setminus\{2\}$. Em $f(f(x))=\dfrac{1}{\frac{1}{x-2}-2}=\dfrac{x-2}{5-2x}$, ficam de fora $x=2$ e $x=\dfrac52$.`),
    p(String.raw`**Determinantes:** em 2×2, $\det=ad-bc$. Em 3×3, use Sarrus. Em equações como $\text{sen}\,x-\cos x=0$, isole e use $\text{tg}\,x=1$.`),
    p(String.raw`**Contagem:** permutação de $n$ elementos: $n!$. Com elementos repetidos, divida pelos fatoriais das repetições: ARARA tem $\dfrac{5!}{3!\,2!}=10$ anagramas. Quando dois elementos devem ficar **juntos**, trate o par como um bloco e multiplique pelas trocas internas ($2!$).`),
    p('**Probabilidade:** casos favoráveis ÷ casos possíveis. **Média:** soma dos valores ÷ quantidade de valores. **Porcentagem:** $15\\%$ de 200 é $0{,}15\\cdot 200=30$.'),
  ],

  'matematica-13': [
    h('5. Mais duas ferramentas'),
    p(String.raw`**Multiplicar a matriz por um número:** em uma matriz de ordem $n$, $\det(kA)=k^n\cdot\det A$ (cada uma das $n$ linhas fica multiplicada por $k$). Em uma 2×2 com $\det A=4$, $\det(2A)=2^2\cdot 4=16$.`),
    p(String.raw`**Regra de Cramer (sistema 2×2):** $x=\dfrac{D_x}{D}$ e $y=\dfrac{D_y}{D}$. $D$ é o determinante da matriz dos coeficientes; em $D_x$ troca-se a coluna dos $x$ pela dos termos independentes (e em $D_y$, a coluna dos $y$).`),
    call('exemplo', String.raw`$\begin{cases}x+y=7\\x-y=1\end{cases}$: $D=-2$; $D_x=\begin{vmatrix}7&1\\1&-1\end{vmatrix}=-8$, então $x=4$; $D_y=\begin{vmatrix}1&7\\1&1\end{vmatrix}=-6$, então $y=3$.`),
  ],

  'portugues-7': [
    h('4. Mais um nome importante'),
    p('**Guimarães Rosa** (*Grande Sertão: Veredas*, 1956), da 3ª fase do Modernismo, renovou a linguagem: criou **neologismos**, usou a oralidade do sertão e uma sintaxe própria, para tratar de temas universais com **regionalismo universal**.'),
  ],
}
