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
