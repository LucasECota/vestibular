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
    { type: 'h', text: '5. Situações clássicas de prova' },
    { type: 'p', text: String.raw`**Travessia de ponte ou túnel:** o móvel só termina de atravessar quando a **traseira** sai. Por isso, a distância percorrida é o comprimento do móvel mais o comprimento da ponte: $\Delta s = L_{\text{móvel}} + L_{\text{ponte}}$.` },
    { type: 'callout', kind: 'exemplo', title: 'Travessia', text: String.raw`Um trem de 100 m atravessa um túnel de 300 m a 10 m/s. Distância: $100 + 300 = 400$ m. Tempo: $400 \div 10 = 40$ s.` },
    { type: 'p', text: String.raw`**Encontro e alcance:** dois móveis se encontram quando ocupam a mesma posição. Escreva a posição de cada um ($s = s_0 + vt$) e iguale. Outro jeito é usar a **velocidade relativa**: no mesmo sentido, subtraia as velocidades; em sentidos opostos, some.` },
    { type: 'callout', kind: 'exemplo', title: 'Alcance', text: String.raw`O carro A, a 10 m/s, está 100 m à frente do carro B, a 20 m/s (mesmo sentido). B se aproxima a $20 - 10 = 10$ m/s, então alcança A em $100 \div 10 = 10$ s.` },
    { type: 'p', text: '**Deslocamento no MRUV sem usar a aceleração:** a velocidade média é a média entre a inicial e a final.' },
    { type: 'math', tex: String.raw`\Delta s = \dfrac{v_0 + v}{2}\cdot t` },
    { type: 'callout', kind: 'exemplo', text: String.raw`A velocidade vai de 2 m/s a 8 m/s em 3 s: $\Delta s = \dfrac{2+8}{2}\cdot 3 = 15$ m.` },
    { type: 'p', text: String.raw`**Lançamento horizontal:** na vertical é queda livre a partir do repouso ($h = \dfrac{g\,t^2}{2}$), e o tempo de queda **não depende** da velocidade horizontal. Na horizontal é MRU: o alcance é $A = v \cdot t$.` },
    { type: 'callout', kind: 'exemplo', title: 'Lançamento horizontal', text: String.raw`Uma bola é lançada a 10 m/s do alto de um prédio de 45 m (g = 10 m/s²). Queda: $45 = 5t^2$, então $t = 3$ s. Alcance: $10 \cdot 3 = 30$ m.` },
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

const SVG_FORCAS = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">

<rect width="320" height="200" fill="#fff"/>
<line x1="20" y1="140" x2="300" y2="140" stroke="#0a0a0f" stroke-width="3"/>
<rect x="115" y="95" width="90" height="45" fill="#ede4ff" stroke="#6d28d9" stroke-width="3"/>
<text x="160" y="123" text-anchor="middle" fill="#6d28d9" font-weight="bold">bloco</text>
<g stroke="#0a0a0f" stroke-width="2.5" fill="none">
<line x1="160" y1="95" x2="160" y2="42"/><line x1="160" y1="140" x2="160" y2="178"/>
<line x1="205" y1="118" x2="268" y2="118"/><line x1="115" y1="118" x2="62" y2="118"/></g>
<g fill="#0a0a0f"><polygon points="153,46 167,46 160,32"/><polygon points="153,174 167,174 160,188"/><polygon points="264,111 264,125 278,118"/><polygon points="66,111 66,125 52,118"/></g>
<text x="168" y="40" fill="#0a0a0f">N (normal)</text><text x="168" y="180" fill="#0a0a0f">P = m·g (peso)</text>
<text x="225" y="108" fill="#0a0a0f">F</text><text x="20" y="108" fill="#0a0a0f">atrito</text>
<text x="160" y="16" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Forças sobre um bloco</text></svg>`

export const FISICA_2: Lesson = {
  slug: 'fisica-2',
  title: 'Dinâmica: leis de Newton e aplicações',
  blocks: [
    { type: 'p', text: 'A Dinâmica explica **por que** os corpos se movem: o que causa mudanças de velocidade. A resposta está nas três leis de Newton. Na unidade de força, 1 newton (N) é a força que dá a uma massa de 1 kg a aceleração de 1 m/s².' },
    { type: 'h', text: '1. As três leis' },
    { type: 'table', head: ['Lei', 'Enunciado', 'Exemplo do dia a dia'], rows: [
      ['1ª: Inércia', 'Sem força resultante, o corpo continua em repouso ou em MRU.', 'Quando o ônibus freia, você é jogado para a frente.'],
      ['2ª: Princípio fundamental', String.raw`$F_R = m \cdot a$ (a força resultante causa aceleração)`, 'Empurrar um carrinho vazio acelera mais que um cheio.'],
      ['3ª: Ação e reação', 'Toda ação tem uma reação de mesma intensidade e sentido oposto, em corpos diferentes.', 'Foguete expulsa gases para baixo e é empurrado para cima.'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Ação e reação **não se anulam**, porque atuam em corpos diferentes. Para anular, as forças precisam atuar no mesmo corpo.' },
    { type: 'h', text: '2. Forças que você precisa conhecer' },
    { type: 'figure', svg: SVG_FORCAS, alt: 'Bloco sobre uma superfície com setas para peso, normal, força aplicada e atrito', caption: 'Peso para baixo, normal para cima, força F puxando e atrito contrário ao movimento.' },
    { type: 'list', items: [String.raw`**Peso:** $P = m\cdot g$ (com $g \approx 10\ \text{m/s}^2$). Peso é força (N); massa é quantidade de matéria (kg).`, '**Normal (N):** força de contato que a superfície faz sobre o corpo, perpendicular a ela.', String.raw`**Atrito:** contrário ao movimento (ou à tendência dele). $f_{at} = \mu \cdot N$.`, '**Tração (T):** força transmitida por fios ou cordas.'] },
    { type: 'h', text: '3. Como resolver um problema' },
    { type: 'list', ordered: true, items: ['Desenhe o corpo e todas as forças que atuam **nele**.', 'Escolha o sentido do movimento como positivo.', String.raw`Aplique $F_R = m\cdot a$: soma das forças a favor menos as contrárias.`] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Um bloco de 10 kg é puxado por uma força de 50 N, e o atrito vale 20 N.` + '\n' + String.raw`$F_R = 50 - 20 = 30\ \text{N}$` + '\n' + String.raw`$a = \dfrac{F_R}{m} = \dfrac{30}{10} = 3\ \text{m/s}^2$` },
    { type: 'callout', kind: 'dica', text: 'Se a força resultante é zero, a aceleração é zero: o corpo está em repouso ou em MRU (equilíbrio). Isso vale até para um carro viajando em velocidade constante.' },
  ],
  exercises: [
    ex('fisica-2', 1, S, 'Uma força resultante de 20 N atua sobre um corpo de massa 5 kg. A aceleração do corpo é:', ['2 m/s²', '4 m/s²', '25 m/s²', '100 m/s²'], 1, 'Resposta B (4 m/s²). Pela 2ª lei de Newton, F = m·a, então a = F/m = 20/5 = 4 m/s².'),
    ex('fisica-2', 2, S, 'O peso de uma pessoa de massa 60 kg, num local onde g = 10 m/s², é:', ['6 N', '60 N', '600 N', '6 000 N'], 2, 'Resposta C (600 N). Peso é uma força: P = m·g = 60 · 10 = 600 N. A massa (60 kg) não muda de lugar para lugar, mas o peso muda com a gravidade.'),
    ex('fisica-2', 3, S, 'Quando um ônibus freia bruscamente, os passageiros são projetados para a frente. Esse fato é explicado pela:', ['1ª lei de Newton (inércia)', '2ª lei de Newton', '3ª lei de Newton', 'lei da gravitação universal'], 0, 'Resposta A. Pela inércia, os corpos tendem a manter o estado de movimento: o ônibus para, mas os passageiros continuam com a velocidade que tinham, indo para a frente.'),
    ex('fisica-2', 4, S, 'Um foguete é impulsionado para cima ao expelir gases em alta velocidade para baixo. Isso é explicado principalmente pela:', ['lei da inércia', 'lei da ação e reação', 'lei de Ohm', 'lei de Kepler'], 1, 'Resposta B (ação e reação, 3ª lei). O foguete empurra os gases para baixo (ação) e os gases empurram o foguete para cima (reação). São forças de mesma intensidade e sentidos opostos, aplicadas em corpos diferentes.'),
    ex('fisica-2', 5, S, 'Um bloco de 10 kg é puxado por uma força de 50 N sobre uma superfície com atrito de 20 N. A aceleração do bloco é:', ['2 m/s²', '3 m/s²', '5 m/s²', '7 m/s²'], 1, 'Resposta B (3 m/s²). A força resultante é a força que puxa menos o atrito: 50 − 20 = 30 N. Então a = FR/m = 30/10 = 3 m/s².'),
  ],
}

const SVG_ENERGIA = `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="200" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Conservação da energia mecânica (sem atrito)</text>
<path d="M20 50 C80 50 90 150 150 150 C210 150 220 90 300 90" fill="none" stroke="#0a0a0f" stroke-width="3"/>
<circle cx="30" cy="42" r="9" fill="#6d28d9"/><circle cx="150" cy="142" r="9" fill="#6d28d9"/><circle cx="290" cy="82" r="9" fill="#6d28d9"/>
<text x="40" y="38" fill="#0a0a0f">A: só Ep</text><text x="150" y="166" text-anchor="middle" fill="#0a0a0f">B: só Ec</text><text x="215" y="78" fill="#0a0a0f">C: Ep + Ec</text>
<g font-size="10"><rect x="20" y="180" width="70" height="12" fill="#bbf7d0" stroke="#15803d"/><text x="26" y="190" fill="#0a0a0f">Ep (altura)</text>
<rect x="110" y="180" width="70" height="12" fill="#fecaca" stroke="#b91c1c"/><text x="116" y="190" fill="#0a0a0f">Ec (velocidade)</text>
<text x="200" y="190" fill="#0a0a0f">Em = Ec + Ep é constante</text></g></svg>`

export const FISICA_3: Lesson = {
  slug: 'fisica-3',
  title: 'Trabalho, energia, potência e impulso',
  blocks: [
    { type: 'p', text: 'Energia é a capacidade de realizar trabalho. Ela não se cria nem se destrói: só se transforma. Essa ideia resolve muitos problemas sem precisar acompanhar o movimento ponto a ponto, como na questão da montanha-russa da UEMG 2024.' },
    { type: 'h', text: '1. Trabalho de uma força' },
    { type: 'math', tex: String.raw`W = F \cdot d \cdot \cos\theta` },
    { type: 'p', text: String.raw`Unidade: **joule (J)**. Se a força é paralela ao deslocamento ($\theta = 0^\circ$), $W = F\cdot d$. Se a força é perpendicular ao deslocamento ($90^\circ$), o trabalho é zero (a força normal e o peso numa superfície horizontal não realizam trabalho).` },
    { type: 'h', text: '2. Tipos de energia mecânica' },
    { type: 'table', head: ['Tipo', 'Fórmula', 'Depende de'], rows: [
      ['Cinética', String.raw`$E_c = \dfrac{m\,v^2}{2}$`, 'Massa e velocidade'],
      ['Potencial gravitacional', String.raw`$E_p = m\,g\,h$`, 'Massa e altura'],
      ['Potencial elástica', String.raw`$E_{el} = \dfrac{k\,x^2}{2}$`, 'Constante da mola e deformação'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'A velocidade entra ao **quadrado** na energia cinética: dobrar a velocidade quadruplica a energia (e a distância de frenagem).' },
    { type: 'h', text: '3. Conservação da energia mecânica' },
    { type: 'figure', svg: SVG_ENERGIA, alt: 'Trilho com três posições: no alto só energia potencial, embaixo só cinética, e no meio as duas', caption: 'Sem atrito, a soma Ec + Ep permanece igual em todos os pontos.' },
    { type: 'math', tex: String.raw`E_{m,\text{inicial}} = E_{m,\text{final}} \quad\Rightarrow\quad m g h = \dfrac{m v^2}{2} \ \ (\text{queda a partir do repouso})` },
    { type: 'callout', kind: 'exemplo', text: String.raw`Um objeto cai de 5 m, do repouso ($g = 10$ m/s²): $v = \sqrt{2\,g\,h} = \sqrt{2\cdot 10\cdot 5} = 10$ m/s. A massa se cancela.` },
    { type: 'h', text: '4. Potência e rendimento' },
    { type: 'math', tex: String.raw`P = \dfrac{W}{\Delta t} \qquad \eta = \dfrac{P_{\text{útil}}}{P_{\text{total}}}` },
    { type: 'p', text: 'Unidade de potência: **watt (W)** = 1 J/s. Na conta de luz, a energia vem em **kWh** (quilowatt-hora): 1 kWh = 3,6 · 10⁶ J. Nenhuma máquina tem rendimento de 100%.' },
    { type: 'h', text: '5. Quantidade de movimento e impulso' },
    { type: 'table', head: ['Grandeza', 'Fórmula', 'Unidade'], rows: [
      ['Quantidade de movimento', String.raw`$Q = m\cdot v$`, 'kg·m/s'],
      ['Impulso de uma força', String.raw`$I = F\cdot\Delta t = \Delta Q$`, 'N·s'],
    ] },
    { type: 'p', text: 'Em colisões e explosões, se não há forças externas, a **quantidade de movimento total se conserva**. Colisão elástica conserva também a energia cinética; na inelástica, parte dela vira calor e deformação.' },
  ],
  exercises: [
    ex('fisica-3', 1, S, 'Uma força de 20 N, paralela ao deslocamento, move um corpo por 5 m. O trabalho realizado é:', ['4 J', '25 J', '100 J', '400 J'], 2, 'Resposta C (100 J). Como a força é paralela ao deslocamento, W = F · d = 20 · 5 = 100 J.'),
    ex('fisica-3', 2, S, 'A energia cinética de um corpo de massa 4 kg com velocidade de 5 m/s é:', ['20 J', '25 J', '50 J', '100 J'], 2, 'Resposta C (50 J). Ec = m·v²/2 = 4 · 5² / 2 = 4 · 25 / 2 = 50 J.'),
    ex('fisica-3', 3, S, 'Um objeto é solto, do repouso, de uma altura de 5 m. Desprezando o ar e adotando g = 10 m/s², a velocidade com que atinge o solo é:', ['5 m/s', '10 m/s', '25 m/s', '50 m/s'], 1, 'Resposta B (10 m/s). Conservando a energia: m·g·h = m·v²/2, então v = √(2·g·h) = √(2 · 10 · 5) = √100 = 10 m/s.'),
    ex('fisica-3', 4, S, 'Uma máquina realiza um trabalho de 600 J em 20 s. Sua potência média é:', ['30 W', '120 W', '12 000 W', '3 W'], 0, 'Resposta A (30 W). Potência é trabalho por tempo: P = W/Δt = 600/20 = 30 W (30 J por segundo).'),
    ex('fisica-3', 5, S, 'A quantidade de movimento de um carro de 1 000 kg que se move a 20 m/s é:', ['20 kg·m/s', '2 000 kg·m/s', '20 000 kg·m/s', '50 kg·m/s'], 2, 'Resposta C (20 000 kg·m/s). Q = m · v = 1 000 · 20 = 20 000 kg·m/s.'),
  ],
}

const SVG_KEPLER = `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="210" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Órbita elíptica (1ª e 2ª leis de Kepler)</text>
<ellipse cx="170" cy="110" rx="140" ry="75" fill="none" stroke="#0a0a0f" stroke-width="2.5"/>
<circle cx="100" cy="110" r="12" fill="#f59e0b"/><text x="100" y="140" text-anchor="middle" fill="#0a0a0f">Sol (foco)</text>
<circle cx="30" cy="110" r="7" fill="#6d28d9"/><circle cx="14" cy="176" r="5" fill="#6d28d9"/><text x="24" y="180" fill="#6d28d9" font-weight="bold">periélio: mais rápido</text>
<circle cx="310" cy="110" r="7" fill="#15803d"/><circle cx="190" cy="176" r="5" fill="#15803d"/><text x="200" y="180" fill="#15803d" font-weight="bold">afélio: mais lento</text>
<text x="170" y="203" text-anchor="middle" fill="#0a0a0f">O raio Sol–planeta varre áreas iguais em tempos iguais.</text></svg>`

export const FISICA_4: Lesson = {
  slug: 'fisica-4',
  title: 'Gravitação, leis de Kepler e hidrostática',
  blocks: [
    { type: 'p', text: 'Esta aula tem duas partes: o que explica o movimento dos astros (gravitação) e o que explica o comportamento dos líquidos em repouso (hidrostática). Ambas caíram na UEMG: Kepler (2024), gravitação (2023) e, na Engenharia Ambiental, a hidrostática está por trás de barragens, pressão em tubulações e flutuação.' },
    { type: 'h', text: '1. Lei da gravitação universal' },
    { type: 'math', tex: String.raw`F = G\,\dfrac{M\,m}{d^2}` },
    { type: 'list', items: ['A força é de **atração**, proporcional ao **produto das massas** e **inversamente proporcional ao quadrado da distância**.', 'Se a distância dobra, a força cai para 1/4. Se a distância é reduzida à metade, a força quadruplica.', String.raw`A aceleração da gravidade na superfície de um planeta é $g = \dfrac{G\,M}{R^2}$.`] },
    { type: 'h', text: '2. Leis de Kepler' },
    { type: 'figure', svg: SVG_KEPLER, alt: 'Elipse com o Sol em um dos focos, o periélio à esquerda e o afélio à direita', caption: 'O planeta é mais rápido no periélio (mais perto do Sol) e mais lento no afélio.' },
    { type: 'table', head: ['Lei', 'Enunciado'], rows: [
      ['1ª (órbitas)', 'Os planetas descrevem **elipses** com o Sol em um dos focos.'],
      ['2ª (áreas)', 'O raio vetor Sol–planeta varre áreas iguais em tempos iguais; logo a velocidade é **maior no periélio** e menor no afélio.'],
      ['3ª (períodos)', String.raw`$\dfrac{T^2}{R^3}$ é constante: quanto mais distante do Sol, **maior o período** (ano mais longo).`],
    ] },
    { type: 'h', text: '3. Hidrostática' },
    { type: 'table', head: ['Grandeza', 'Fórmula', 'Unidade'], rows: [
      ['Densidade', String.raw`$d = \dfrac{m}{V}$`, 'kg/m³ ou g/cm³'],
      ['Pressão', String.raw`$p = \dfrac{F}{A}$`, 'Pa (N/m²)'],
      ['Pressão hidrostática (Stevin)', String.raw`$p = d\cdot g\cdot h$`, 'Pa'],
      ['Empuxo (Arquimedes)', String.raw`$E = d_{\text{líq}}\cdot V_{\text{imerso}}\cdot g$`, 'N'],
    ] },
    { type: 'list', items: ['**Princípio de Stevin:** a pressão em um líquido aumenta com a **profundidade**, independentemente do formato do recipiente. A cada 10 m de água, a pressão aumenta cerca de 1 atm (10⁵ Pa).', '**Princípio de Pascal:** a pressão aplicada a um líquido se transmite integralmente a todos os pontos (prensa hidráulica, freios).', '**Princípio de Arquimedes:** todo corpo imerso recebe uma força para cima (empuxo) igual ao **peso do líquido deslocado**.'] },
    { type: 'callout', kind: 'dica', title: 'Flutua ou afunda?', text: 'Compare as densidades: se d_corpo < d_líquido, o corpo flutua; se d_corpo > d_líquido, afunda; se são iguais, fica em equilíbrio. Um navio de aço flutua porque o casco oco deixa a densidade média menor que a da água.' },
    { type: 'callout', kind: 'exemplo', text: String.raw`Pressão a 10 m de profundidade na água ($d = 1000$ kg/m³, $g = 10$ m/s²): $p = 1000\cdot 10\cdot 10 = 10^5$ Pa.` },
  ],
  exercises: [
    ex('fisica-4', 1, S, 'Um bloco tem massa de 200 g e volume de 50 cm³. Sua densidade é:', ['0,25 g/cm³', '4 g/cm³', '10 g/cm³', '250 g/cm³'], 1, 'Resposta B (4 g/cm³). Densidade é massa dividida pelo volume: d = m/V = 200/50 = 4 g/cm³.'),
    ex('fisica-4', 2, S, 'Uma força de 100 N é aplicada perpendicularmente a uma superfície de área 0,5 m². A pressão exercida é de:', ['50 Pa', '200 Pa', '100 Pa', '0,005 Pa'], 1, 'Resposta B (200 Pa). Pressão = força/área = 100/0,5 = 200 Pa (200 N/m²).'),
    ex('fisica-4', 3, S, 'A pressão hidrostática a 10 m de profundidade na água (d = 1 000 kg/m³, g = 10 m/s²) é:', ['10³ Pa', '10⁴ Pa', '10⁵ Pa', '10⁶ Pa'], 2, 'Resposta C (10⁵ Pa). Pelo teorema de Stevin, p = d · g · h = 1 000 · 10 · 10 = 100 000 Pa = 10⁵ Pa, ou cerca de 1 atm (sem contar a pressão atmosférica acima).'),
    ex('fisica-4', 4, S, 'Um objeto de volume 0,002 m³ está totalmente submerso na água (d = 1 000 kg/m³). Adotando g = 10 m/s², o empuxo sobre ele é:', ['2 N', '20 N', '200 N', '2 000 N'], 1, 'Resposta B (20 N). E = d · V · g = 1 000 · 0,002 · 10 = 20 N. O empuxo depende da densidade do líquido e do volume imerso, não da massa do objeto.'),
    ex('fisica-4', 5, S, 'De acordo com a 2ª lei de Kepler, um planeta se move com maior velocidade:', ['no afélio', 'no periélio', 'quando está no centro da órbita', 'com a mesma velocidade em toda a órbita'], 1, 'Resposta B (no periélio). O raio vetor varre áreas iguais em tempos iguais; para isso, quando o planeta está mais perto do Sol (periélio), ele tem de andar mais rápido. No afélio é mais lento.'),
  ],
}

const SVG_ESCALAS = `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="210" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Escalas de temperatura</text>
<g text-anchor="middle" font-weight="bold" fill="#0a0a0f"><text x="60" y="38">Celsius</text><text x="170" y="38">Fahrenheit</text><text x="280" y="38">Kelvin</text></g>
<g stroke="#0a0a0f" stroke-width="3"><line x1="60" y1="55" x2="60" y2="165"/><line x1="170" y1="55" x2="170" y2="165"/><line x1="280" y1="55" x2="280" y2="165"/></g>
<g fill="#c2410c"><circle cx="60" cy="55" r="6"/><circle cx="170" cy="55" r="6"/><circle cx="280" cy="55" r="6"/></g>
<g fill="#1d4ed8"><circle cx="60" cy="165" r="6"/><circle cx="170" cy="165" r="6"/><circle cx="280" cy="165" r="6"/></g>
<g font-size="10" fill="#c2410c" text-anchor="start"><text x="72" y="59">100 °C</text><text x="182" y="59">212 °F</text><text x="292" y="59" text-anchor="start">373 K</text></g>
<g font-size="10" fill="#1d4ed8"><text x="72" y="169">0 °C</text><text x="182" y="169">32 °F</text><text x="292" y="169">273 K</text></g>
<text x="170" y="190" text-anchor="middle" fill="#c2410c">● ebulição da água</text><text x="170" y="204" text-anchor="middle" fill="#1d4ed8">● fusão do gelo</text></svg>`

export const FISICA_5: Lesson = {
  slug: 'fisica-5',
  title: 'Termologia e termodinâmica',
  blocks: [
    { type: 'p', text: '**Temperatura** mede o grau de agitação das partículas de um corpo. **Calor** é energia térmica em trânsito, que flui do corpo mais quente para o mais frio. A UEMG já cobrou dilatação de um líquido e um recipiente (2023) e, em Engenharia Ambiental, a termologia ajuda a entender clima, efeito estufa e energia.' },
    { type: 'h', text: '1. Escalas termométricas' },
    { type: 'figure', svg: SVG_ESCALAS, alt: 'Três termômetros lado a lado com os pontos de fusão e ebulição da água em Celsius, Fahrenheit e Kelvin', caption: 'A água ferve a 100 °C = 212 °F = 373 K e congela a 0 °C = 32 °F = 273 K.' },
    { type: 'math', tex: String.raw`\dfrac{T_C}{5} = \dfrac{T_F - 32}{9} = \dfrac{T_K - 273}{5}` },
    { type: 'callout', kind: 'exemplo', text: String.raw`$50\ ^\circ\text{C} = 50 + 273 = 323\ \text{K}$. E $86\ ^\circ\text{F}$: $\dfrac{T_C}{5} = \dfrac{86-32}{9} = 6 \Rightarrow T_C = 30\ ^\circ\text{C}$.` },
    { type: 'h', text: '2. Dilatação térmica' },
    { type: 'table', head: ['Tipo', 'Fórmula', 'Observação'], rows: [
      ['Linear', String.raw`$\Delta L = L_0\cdot\alpha\cdot\Delta T$`, 'Fios, barras, trilhos'],
      ['Superficial', String.raw`$\Delta A = A_0\cdot\beta\cdot\Delta T$, com $\beta = 2\alpha$`, 'Chapas'],
      ['Volumétrica', String.raw`$\Delta V = V_0\cdot\gamma\cdot\Delta T$, com $\gamma = 3\alpha$`, 'Líquidos e sólidos'],
    ] },
    { type: 'p', text: 'Um líquido dilata mais que o recipiente (como o petróleo no vidro da UEMG 2023) e, por isso, pode transbordar.' },
    { type: 'h', text: '3. Calorimetria' },
    { type: 'list', items: [String.raw`**Calor sensível** (muda a temperatura): $Q = m\cdot c\cdot\Delta T$. O calor específico da água é $c = 1\ \text{cal/g}\cdot^\circ\text{C}$ (alto: a água esquenta e esfria devagar, o que modera o clima perto do mar).`, String.raw`**Calor latente** (muda o estado, sem mudar a temperatura): $Q = m\cdot L$.`, 'Em um sistema isolado, a soma dos calores trocados é zero (**equilíbrio térmico**).'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Aquecer 200 g de água de 20 °C a 70 °C: $Q = 200\cdot 1\cdot 50 = 10\,000$ cal.` },
    { type: 'h', text: '4. Propagação do calor' },
    { type: 'table', head: ['Processo', 'Como ocorre', 'Exemplo'], rows: [
      ['Condução', 'Por contato, em sólidos', 'Cabo de panela esquentando'],
      ['Convecção', 'Movimento de fluidos (quente sobe, frio desce)', 'Brisa marítima, ar-condicionado'],
      ['Irradiação', 'Por ondas eletromagnéticas, inclusive no vácuo', 'Calor do Sol'],
    ] },
    { type: 'h', text: '5. Gases e termodinâmica' },
    { type: 'math', tex: String.raw`P\,V = n\,R\,T \qquad \Delta U = Q - W` },
    { type: 'list', items: ['A temperatura deve estar em **kelvin** na equação dos gases.', '**1ª lei:** a variação da energia interna é o calor recebido menos o trabalho realizado (conservação da energia).', '**2ª lei:** o calor flui espontaneamente do corpo quente para o frio e nenhuma máquina térmica converte todo o calor em trabalho (rendimento menor que 100%).'] },
  ],
  exercises: [
    ex('fisica-5', 1, S, 'A temperatura de 50 °C, expressa na escala Kelvin, corresponde a:', ['223 K', '273 K', '323 K', '373 K'], 2, 'Resposta C (323 K). T(K) = T(°C) + 273 = 50 + 273 = 323 K.'),
    ex('fisica-5', 2, S, 'Uma temperatura de 86 °F corresponde, em graus Celsius, a:', ['20 °C', '30 °C', '40 °C', '54 °C'], 1, 'Resposta B (30 °C). Use TC/5 = (TF − 32)/9: (86 − 32)/9 = 54/9 = 6, então TC = 6 · 5 = 30 °C.'),
    ex('fisica-5', 3, S, 'Quantas calorias são necessárias para aquecer 200 g de água de 20 °C até 70 °C? (calor específico da água = 1 cal/g·°C)', ['1 000 cal', '4 000 cal', '10 000 cal', '14 000 cal'], 2, 'Resposta C (10 000 cal). Q = m · c · ΔT = 200 · 1 · (70 − 20) = 200 · 50 = 10 000 cal.'),
    ex('fisica-5', 4, S, 'Uma barra de 2 m, com coeficiente de dilatação linear de 1,2 · 10⁻⁵ °C⁻¹, sofre aquecimento de 100 °C. Seu aumento de comprimento é:', ['0,24 mm', '2,4 mm', '24 mm', '12 mm'], 1, 'Resposta B (2,4 mm). ΔL = L₀ · α · ΔT = 2 · 1,2 · 10⁻⁵ · 100 = 2,4 · 10⁻³ m = 2,4 mm.'),
    ex('fisica-5', 5, S, 'A energia do Sol chega à Terra através do vácuo do espaço por meio de:', ['condução', 'convecção', 'irradiação', 'dilatação'], 2, 'Resposta C (irradiação). Condução e convecção precisam de meio material (sólido ou fluido). A irradiação ocorre por ondas eletromagnéticas e se propaga até no vácuo.'),
  ],
}

/** Gráfico de uma onda senoidal com amplitude e comprimento de onda indicados. */
const SVG_ONDA = (() => {
  const x0 = 30
  const y0 = 105
  const A = 40
  const L = 120
  const pts: string[] = []
  for (let x = 0; x <= 2 * L + 1e-9; x += 4) pts.push(`${(x0 + x).toFixed(1)} ${(y0 - A * Math.sin((2 * Math.PI * x) / L)).toFixed(1)}`)
  const crest1 = x0 + L / 4
  const crest2 = x0 + L / 4 + L
  return `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="340" height="200" fill="#fff"/>
<line x1="${x0 - 8}" y1="${y0}" x2="${x0 + 2 * L + 20}" y2="${y0}" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M${pts.join(' L')}" fill="none" stroke="#6d28d9" stroke-width="3"/>
<line x1="${crest2}" y1="${y0}" x2="${crest2}" y2="${y0 - A}" stroke="#c2410c" stroke-width="2"/><text x="${crest2 + 10}" y="${y0 - A - 2}" fill="#c2410c" font-weight="bold">A (amplitude)</text>
<line x1="${crest1}" y1="${y0 - A - 12}" x2="${crest2}" y2="${y0 - A - 12}" stroke="#15803d" stroke-width="2"/><line x1="${crest1}" y1="${y0 - A - 17}" x2="${crest1}" y2="${y0 - A - 7}" stroke="#15803d" stroke-width="2"/><line x1="${crest2}" y1="${y0 - A - 17}" x2="${crest2}" y2="${y0 - A - 7}" stroke="#15803d" stroke-width="2"/>
<text x="${(crest1 + crest2) / 2}" y="${y0 - A - 22}" text-anchor="middle" fill="#15803d" font-weight="bold">λ (comprimento de onda)</text>
<text x="170" y="168" text-anchor="middle" fill="#0a0a0f" font-weight="bold">v = λ · f</text>
<text x="170" y="186" text-anchor="middle" fill="#0a0a0f">frequência f: número de ondas por segundo (Hz)</text></svg>`
})()

export const FISICA_6: Lesson = {
  slug: 'fisica-6',
  title: 'Ondas, som e óptica',
  blocks: [
    { type: 'p', text: 'Uma **onda** transporta **energia** sem transportar matéria. O som e a luz são os exemplos mais importantes. Na UEMG, o morcego com ecolocalização (2024) usou ondas sonoras, e a luz aparece em questões de eclipses e efeito fotoelétrico.' },
    { type: 'h', text: '1. Grandezas de uma onda' },
    { type: 'figure', svg: SVG_ONDA, alt: 'Onda senoidal com a amplitude e o comprimento de onda marcados', caption: 'A distância entre duas cristas consecutivas é o comprimento de onda λ.' },
    { type: 'math', tex: String.raw`v = \lambda\cdot f \qquad f = \dfrac{1}{T}` },
    { type: 'table', head: ['Grandeza', 'Significado', 'Unidade'], rows: [
      ['Amplitude (A)', 'Altura da onda (relacionada à energia)', 'm'],
      ['Comprimento de onda (λ)', 'Distância entre duas cristas', 'm'],
      ['Frequência (f)', 'Ondas que passam por segundo', 'Hz'],
      ['Período (T)', 'Tempo de uma onda completa', 's'],
      ['Velocidade (v)', 'Rapidez com que a onda se propaga', 'm/s'],
    ] },
    { type: 'h', text: '2. Tipos de onda' },
    { type: 'table', head: ['Critério', 'Tipos', 'Exemplos'], rows: [
      ['Natureza', '**Mecânicas** (precisam de meio material) × **eletromagnéticas** (propagam-se no vácuo)', 'Som, onda na água × luz, rádio, raios X'],
      ['Direção da vibração', '**Transversais** (vibram perpendicular à propagação) × **longitudinais** (na mesma direção)', 'Luz, corda × som no ar'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'O som é uma onda **mecânica e longitudinal**: não se propaga no vácuo. A luz é **eletromagnética e transversal** e se propaga no vácuo (a 300 000 km/s).' },
    { type: 'h', text: '3. Fenômenos ondulatórios' },
    { type: 'list', items: ['**Reflexão:** a onda volta ao encontrar um obstáculo (eco, espelho).', '**Refração:** a onda muda de meio e **muda de velocidade** (luz do ar para a água).', '**Difração:** a onda contorna obstáculos (você ouve atrás de uma parede).', '**Interferência:** soma de ondas. **Ressonância:** quando a frequência externa coincide com a natural do corpo (a taça que quebra, a ponte que balança).'] },
    { type: 'h', text: '4. Som' },
    { type: 'list', items: ['Velocidade no ar: cerca de **340 m/s** (maior em líquidos e sólidos).', '**Altura:** grave × agudo, depende da **frequência**. **Intensidade:** volume, depende da amplitude. **Timbre:** "assinatura" que distingue instrumentos.', String.raw`**Eco e sonar:** $d = \dfrac{v\cdot t}{2}$ (o som vai e volta).`, '**Efeito Doppler:** a frequência percebida muda quando fonte e observador se movem (a sirene de ambulância).'] },
    { type: 'callout', kind: 'exemplo', text: String.raw`Um eco volta depois de 0,5 s. Com $v = 340$ m/s: $d = \dfrac{340\cdot 0{,}5}{2} = 85$ m.` },
    { type: 'h', text: '5. Óptica geométrica' },
    { type: 'list', items: ['**Reflexão:** o ângulo de incidência é igual ao de reflexão. No **espelho plano**, a imagem é virtual, do mesmo tamanho e fica à mesma distância atrás do espelho.', String.raw`**Refração:** lei de Snell, $n_1\,\text{sen}\,\theta_1 = n_2\,\text{sen}\,\theta_2$, e índice de refração $n = \dfrac{c}{v}$. Ao entrar num meio com maior $n$ (ar → água), a luz **diminui a velocidade** e se aproxima da normal.`, '**Lentes:** convergentes (bordas finas, usadas na hipermetropia e em lupas) e divergentes (bordas grossas, usadas na miopia).', '**Cores:** a luz branca é a soma das cores do arco-íris, que se separam na refração (prisma).'] },
  ],
  exercises: [
    ex('fisica-6', 1, S, 'Uma onda tem comprimento de onda de 2 m e frequência de 5 Hz. Sua velocidade de propagação é:', ['2,5 m/s', '7 m/s', '10 m/s', '20 m/s'], 2, 'Resposta C (10 m/s). Pela equação fundamental da ondulatória, v = λ · f = 2 · 5 = 10 m/s.'),
    ex('fisica-6', 2, S, 'Uma pessoa grita diante de um paredão e ouve o eco 0,5 s depois. Sendo a velocidade do som 340 m/s, a distância até o paredão é:', ['85 m', '170 m', '340 m', '680 m'], 0, 'Resposta A (85 m). O som vai até o obstáculo e volta, então percorre o dobro da distância: 2d = v · t = 340 · 0,5 = 170 m. Logo d = 85 m. É o mesmo raciocínio do morcego da UEMG 2024.'),
    ex('fisica-6', 3, S, 'A qualidade do som que permite distinguir um som grave de um agudo é a:', ['intensidade', 'altura (frequência)', 'timbre', 'velocidade'], 1, 'Resposta B (altura). O som agudo tem frequência alta e o grave tem frequência baixa. Intensidade é o "volume" e timbre diferencia, por exemplo, um violão de um piano tocando a mesma nota.'),
    ex('fisica-6', 4, S, 'Quando um raio de luz passa do ar para a água, ocorre o fenômeno da refração e a luz:', ['aumenta de velocidade', 'diminui de velocidade', 'mantém a velocidade', 'deixa de se propagar'], 1, 'Resposta B. A água tem índice de refração maior que o do ar (n = c/v), então a velocidade da luz diminui. A frequência não muda; muda a velocidade e o comprimento de onda.'),
    ex('fisica-6', 5, S, 'Uma pessoa está a 2 m de um espelho plano. A distância entre ela e a sua imagem é:', ['2 m', '4 m', '1 m', '8 m'], 1, 'Resposta B (4 m). No espelho plano, a imagem se forma à mesma distância do espelho que o objeto, mas do outro lado: 2 m atrás do espelho. Entre a pessoa e a imagem: 2 + 2 = 4 m.'),
  ],
}

const SVG_CIRCUITOS = `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="210" fill="#fff"/>
<text x="85" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Em série</text><text x="255" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Em paralelo</text>
<g stroke="#0a0a0f" stroke-width="2.5" fill="none">
<path d="M20 40 H42 M72 40 H98 M128 40 H150 V120 H20 V86 M20 74 V40"/>
<path d="M190 40 H320 V150 H190 V106 M190 94 V40"/>
<path d="M215 40 V60 M245 40 V60 M215 120 V150 M245 120 V150"/></g>
<g fill="#fff" stroke="#0a0a0f" stroke-width="2.5"><rect x="42" y="30" width="30" height="20"/><rect x="98" y="30" width="30" height="20"/><rect x="205" y="60" width="20" height="60"/><rect x="235" y="60" width="20" height="60"/></g>
<g stroke="#0a0a0f" stroke-width="3"><line x1="12" y1="74" x2="28" y2="74"/><line x1="16" y1="86" x2="24" y2="86"/><line x1="182" y1="94" x2="198" y2="94"/><line x1="186" y1="106" x2="194" y2="106"/></g>
<g text-anchor="middle" fill="#0a0a0f" font-weight="bold"><text x="57" y="44">R₁</text><text x="113" y="44">R₂</text><text x="215" y="94" dx="0">R₁</text><text x="245" y="94">R₂</text></g>
<g fill="#6d28d9" font-weight="bold" text-anchor="middle"><text x="85" y="150">mesma corrente (i)</text><text x="85" y="166">Req = R₁ + R₂</text><text x="255" y="172">mesma tensão (U)</text><text x="255" y="188">1/Req = 1/R₁ + 1/R₂</text></g>
<text x="170" y="204" text-anchor="middle" fill="#0a0a0f" font-size="10">Lei de Ohm: U = R · i</text></svg>`

export const FISICA_7: Lesson = {
  slug: 'fisica-7',
  title: 'Eletricidade, eletromagnetismo e física moderna',
  blocks: [
    { type: 'p', text: 'Esta é a última aula de Física e reúne três assuntos: **eletricidade** (cargas e circuitos), **eletromagnetismo** (a relação entre eletricidade e magnetismo) e **física moderna** (efeito fotoelétrico e radioatividade). Aparecem nas provas: circuitos em série e paralelo (2024), efeito fotoelétrico (2023) e fissão nuclear (2024).' },
    { type: 'h', text: '1. Cargas elétricas' },
    { type: 'list', items: ['Prótons têm carga **positiva** e elétrons, **negativa**. Cargas de mesmo sinal **se repelem**; de sinais opostos, **se atraem**.', '**Eletrização:** por atrito, por contato ou por indução. A carga total se conserva.', String.raw`**Lei de Coulomb:** $F = k\,\dfrac{|q_1\,q_2|}{d^2}$. Se a distância dobra, a força cai a 1/4.`, String.raw`**Campo elétrico:** $E = \dfrac{F}{q}$ (unidade N/C).`] },
    { type: 'h', text: '2. Corrente, tensão e resistência' },
    { type: 'table', head: ['Grandeza', 'Fórmula', 'Unidade'], rows: [
      ['Corrente elétrica', String.raw`$i = \dfrac{\Delta Q}{\Delta t}$`, 'ampère (A)'],
      ['Tensão (ddp)', 'U', 'volt (V)'],
      ['Resistência', String.raw`$R = \dfrac{U}{i}$ (Lei de Ohm)`, 'ohm (Ω)'],
      ['Potência elétrica', String.raw`$P = U\cdot i = R\,i^2 = \dfrac{U^2}{R}$`, 'watt (W)'],
      ['Energia consumida', String.raw`$E = P\cdot\Delta t$`, 'joule ou kWh'],
    ] },
    { type: 'p', text: 'A passagem da corrente em um resistor o esquenta (**efeito Joule**: chuveiro, ferro de passar, lâmpada incandescente).' },
    { type: 'h', text: '3. Associação de resistores' },
    { type: 'figure', svg: SVG_CIRCUITOS, alt: 'Dois circuitos: dois resistores em série e dois resistores em paralelo, com as fórmulas da resistência equivalente', caption: 'Série: a corrente é a mesma e as resistências somam. Paralelo: a tensão é a mesma e a resistência equivalente diminui.' },
    { type: 'callout', kind: 'exemplo', text: String.raw`Em série, 3 Ω e 6 Ω: $R_{eq} = 9\ \Omega$. Em paralelo, 6 Ω e 3 Ω: $R_{eq} = \dfrac{6\cdot 3}{6+3} = 2\ \Omega$. Três lâmpadas iguais de 160 Ω em paralelo: $160/3 \approx 53{,}3\ \Omega$ (como na UEMG 2024).` },
    { type: 'callout', kind: 'dica', text: 'Em casa, as lâmpadas e tomadas ficam em **paralelo**: cada aparelho recebe a mesma tensão (127 V ou 220 V) e funciona independente dos outros. Consumo: quilowatts × horas = **kWh** (é o que aparece na conta de luz).' },
    { type: 'h', text: '4. Magnetismo e eletromagnetismo' },
    { type: 'list', items: ['**Ímãs** têm polos norte e sul (polos iguais se repelem; diferentes se atraem) e é impossível separar um polo do outro.', '**Oersted:** corrente elétrica produz **campo magnético** (eletroímãs, campainhas).', '**Faraday e Lenz (indução):** um campo magnético **variável** induz corrente elétrica. É o princípio dos **geradores** (usinas hidrelétricas, eólicas) e dos transformadores.'] },
    { type: 'h', text: '5. Física moderna' },
    { type: 'list', items: [String.raw`**Efeito fotoelétrico:** a luz arranca elétrons de um metal se a energia do fóton for maior que a função trabalho: $E = h\,f$ e $E_c = h f - W$. Mostra a natureza **corpuscular** da luz (Einstein).`, '**Radioatividade:** emissões **alfa** (pouco penetrante), **beta** e **gama** (muito penetrante, ondas eletromagnéticas). **Meia-vida** é o tempo para a quantidade de uma amostra cair à metade.', '**Fissão nuclear:** divisão de um núcleo pesado (urânio), liberando energia (usinas Angra 1 e 2). **Fusão:** junção de núcleos leves (o que acontece no Sol).', String.raw`**Relatividade:** $E = m\,c^2$ (massa e energia se relacionam).`] },
  ],
  exercises: [
    ex('fisica-7', 1, S, 'Um resistor de 4 Ω é submetido a uma tensão de 12 V. A corrente que o atravessa é:', ['3 A', '8 A', '16 A', '48 A'], 0, 'Resposta A (3 A). Pela Lei de Ohm, i = U/R = 12/4 = 3 A.'),
    ex('fisica-7', 2, S, 'Dois resistores de 3 Ω e 6 Ω estão ligados em série. A resistência equivalente é:', ['2 Ω', '9 Ω', '18 Ω', '3 Ω'], 1, 'Resposta B (9 Ω). Em série, as resistências se somam: 3 + 6 = 9 Ω.'),
    ex('fisica-7', 3, S, 'Dois resistores de 6 Ω e 3 Ω estão ligados em paralelo. A resistência equivalente é:', ['2 Ω', '4,5 Ω', '9 Ω', '18 Ω'], 0, 'Resposta A (2 Ω). Em paralelo com dois resistores: Req = (R₁ · R₂)/(R₁ + R₂) = (6 · 3)/(6 + 3) = 18/9 = 2 Ω. Fica sempre menor que o menor resistor.'),
    ex('fisica-7', 4, S, 'Um chuveiro de potência 5 500 W fica ligado por 30 minutos. A energia consumida é de:', ['2,75 kWh', '5,5 kWh', '11 kWh', '27,5 kWh'], 0, 'Resposta A (2,75 kWh). Converta: 5 500 W = 5,5 kW e 30 min = 0,5 h. E = P · Δt = 5,5 · 0,5 = 2,75 kWh.'),
    ex('fisica-7', 5, S, 'Duas cargas elétricas se atraem com uma força F. Se a distância entre elas for dobrada, a força passará a valer:', ['F/2', 'F/4', '2F', '4F'], 1, 'Resposta B (F/4). Pela lei de Coulomb, F é inversamente proporcional ao quadrado da distância: 2² = 4, então a força fica dividida por 4.'),
  ],
}
