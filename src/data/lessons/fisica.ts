import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'fisica' as const

const SVG_ST = `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="320" height="190" fill="#fff"/>
<line x1="40" y1="160" x2="300" y2="160" stroke="#0a0a0f" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="#0a0a0f" stroke-width="1.5"/>
<text x="285" y="178" fill="#0a0a0f">t (s)</text><text x="8" y="22" fill="#0a0a0f">s (m)</text>
<line x1="40" y1="130" x2="270" y2="45" stroke="#6d28d9" stroke-width="3"/>
<circle cx="40" cy="130" r="4" fill="#6d28d9"/>
<text x="46" y="150" fill="#6d28d9">s₀</text>
<text x="120" y="142" fill="#6d28d9" font-weight="bold">inclinação = velocidade</text>
<text x="60" y="36" fill="#0a0a0f">MRU: gráfico s × t é uma reta</text></svg>`

const SVG_VT = `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="320" height="190" fill="#fff"/>
<polygon points="40,160 250,160 250,60 40,110" fill="#ede4ff"/>
<line x1="40" y1="160" x2="300" y2="160" stroke="#0a0a0f" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="#0a0a0f" stroke-width="1.5"/>
<text x="285" y="178" fill="#0a0a0f">t (s)</text><text x="8" y="22" fill="#0a0a0f">v (m/s)</text>
<line x1="40" y1="110" x2="250" y2="60" stroke="#6d28d9" stroke-width="3"/>
<text x="110" y="146" fill="#6d28d9" font-weight="bold">área = deslocamento</text>
<text x="110" y="124" fill="#6d28d9" font-weight="bold">inclinação = aceleração</text>
<text x="60" y="36" fill="#0a0a0f">MRUV: gráfico v × t é uma reta</text></svg>`

export const FISICA_1: Lesson = {
  slug: 'fisica-1',
  title: 'Cinemática: MRU, MRUV e lançamentos',
  blocks: [
    { type: 'p', text: 'Cinemática descreve o movimento sem perguntar a causa: posição, velocidade e aceleração ao longo do tempo. É a porta de entrada da Física e quase sempre aparece na prova.' },
    { type: 'h', text: '1. Conceitos básicos' },
    { type: 'list', items: [String.raw`**Velocidade média:** $v_m = \dfrac{\Delta s}{\Delta t}$ (distância percorrida ÷ tempo).`, String.raw`**Aceleração média:** $a = \dfrac{\Delta v}{\Delta t}$ (quanto a velocidade varia por segundo).`, String.raw`**Conversão:** km/h ÷ 3,6 = m/s. Exemplo: $72\ \text{km/h} = 20\ \text{m/s}$.`] },
    { type: 'h', text: '2. MRU: movimento retilíneo uniforme' },
    { type: 'p', text: String.raw`Velocidade **constante** (aceleração zero). A posição cresce de forma linear: $s = s_0 + v\cdot t$.` },
    { type: 'figure', svg: SVG_ST, alt: 'Gráfico de posição contra tempo, uma reta inclinada', caption: 'No MRU, o gráfico s × t é uma reta. Quanto mais inclinada, maior a velocidade.' },
    { type: 'h', text: '3. MRUV: movimento retilíneo uniformemente variado' },
    { type: 'p', text: 'Aceleração **constante**: a velocidade muda sempre na mesma taxa. Três fórmulas resolvem quase tudo:' },
    { type: 'math', tex: String.raw`v = v_0 + a\,t` },
    { type: 'math', tex: String.raw`s = s_0 + v_0\,t + \dfrac{a\,t^2}{2}` },
    { type: 'math', tex: String.raw`v^2 = v_0^2 + 2\,a\,\Delta s \quad\text{(Torricelli)}` },
    { type: 'figure', svg: SVG_VT, alt: 'Gráfico de velocidade contra tempo, uma reta inclinada com a área abaixo destacada', caption: 'No MRUV, o gráfico v × t é uma reta. A área sob a reta é o deslocamento; a inclinação é a aceleração.' },
    { type: 'callout', kind: 'dica', title: 'Qual fórmula usar?', text: 'Sem tempo no enunciado → Torricelli. Com tempo e sem deslocamento → v = v₀ + at. Pedindo posição ou deslocamento com tempo → s = s₀ + v₀t + at²/2.' },
    { type: 'h', text: '4. Queda livre e lançamentos' },
    { type: 'p', text: String.raw`Na queda livre (sem resistência do ar), é um MRUV com $a = g \approx 10\ \text{m/s}^2$. Se solta do repouso: $h = \dfrac{g\,t^2}{2}$ e $v = g\,t$.` },
    { type: 'p', text: String.raw`No **lançamento oblíquo** (por exemplo, um foguete lançado a $45^\circ$), o movimento na horizontal é MRU e na vertical é MRUV. O alcance é $R = \dfrac{v_0^2\,\text{sen}(2\theta)}{g}$, máximo quando $\theta = 45^\circ$ (questão de 2023 da UEMG).` },
    { type: 'table', head: ['', 'MRU', 'MRUV'], rows: [
      ['Velocidade', 'constante', 'varia de modo uniforme'],
      ['Aceleração', 'zero', 'constante e diferente de zero'],
      ['Gráfico v × t', 'reta horizontal', 'reta inclinada'],
      ['Gráfico s × t', 'reta inclinada', 'parábola'],
    ] },
    { type: 'callout', kind: 'resumo', text: 'MRU: s = s₀ + vt. MRUV: v = v₀ + at; s = s₀ + v₀t + at²/2; v² = v₀² + 2aΔs. Queda livre: a = g = 10 m/s².' },
  ],
  exercises: [
    ex('fisica-1', 1, S, 'Um carro se move a 72 km/h. Sua velocidade em m/s é:', ['20 m/s', '25 m/s', '72 m/s', '259 m/s'], 0, 'Resposta A (20 m/s). Para converter km/h em m/s, divida por 3,6: 72 ÷ 3,6 = 20 m/s.'),
    ex('fisica-1', 2, S, 'A posição de um móvel em MRU é dada por s = 10 + 5t (SI). Sua posição no instante t = 4 s é:', ['20 m', '30 m', '40 m', '50 m'], 1, 'Resposta B (30 m). Basta substituir t = 4: s = 10 + 5 · 4 = 10 + 20 = 30 m. A velocidade do móvel é 5 m/s e a posição inicial é 10 m.'),
    ex('fisica-1', 3, S, 'Um carro parte do repouso com aceleração constante de 2 m/s². Sua velocidade após 6 s é:', ['8 m/s', '12 m/s', '16 m/s', '20 m/s'], 1, 'Resposta B (12 m/s). Como partiu do repouso, v₀ = 0. Então v = v₀ + a·t = 0 + 2 · 6 = 12 m/s.'),
    ex('fisica-1', 4, S, 'Um móvel parte do repouso e acelera a 5 m/s² durante um deslocamento de 10 m. Sua velocidade final é:', ['5 m/s', '10 m/s', '50 m/s', '100 m/s'], 1, 'Resposta B (10 m/s). O enunciado não dá o tempo, então use Torricelli: v² = v₀² + 2aΔs = 0 + 2 · 5 · 10 = 100. Logo v = √100 = 10 m/s.'),
    ex('fisica-1', 5, S, 'Uma pedra é solta, do repouso, do alto de um prédio e leva 3 s para chegar ao solo. Desprezando a resistência do ar e adotando g = 10 m/s², a altura do prédio é:', ['30 m', '45 m', '60 m', '90 m'], 1, 'Resposta B (45 m). Queda livre a partir do repouso: h = g·t²/2 = 10 · 3² / 2 = 10 · 9 / 2 = 45 m.'),
  ],
}
