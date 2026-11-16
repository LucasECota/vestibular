import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'geografia' as const

const SVG_FUSOS = `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
<rect width="340" height="170" fill="#fff"/>
<line x1="20" y1="70" x2="320" y2="70" stroke="#0a0a0f" stroke-width="2"/>
<g stroke="#0a0a0f" stroke-width="1.5"><line x1="30" y1="62" x2="30" y2="78"/><line x1="75" y1="62" x2="75" y2="78"/><line x1="120" y1="62" x2="120" y2="78"/><line x1="165" y1="62" x2="165" y2="78"/><line x1="210" y1="62" x2="210" y2="78"/><line x1="255" y1="62" x2="255" y2="78"/><line x1="300" y1="62" x2="300" y2="78"/></g>
<g fill="#0a0a0f" text-anchor="middle"><text x="30" y="96">−9</text><text x="75" y="96">−6</text><text x="120" y="96">−3</text><text x="165" y="96">0</text><text x="210" y="96">+3</text><text x="255" y="96">+6</text><text x="300" y="96">+9</text></g>
<circle cx="165" cy="70" r="7" fill="#6d28d9"/><text x="200" y="54" text-anchor="middle" fill="#6d28d9" font-weight="bold">Greenwich (Londres)</text>
<circle cx="120" cy="70" r="7" fill="#15803d"/><text x="120" y="38" text-anchor="middle" fill="#15803d" font-weight="bold">Brasília</text>
<circle cx="300" cy="70" r="7" fill="#c2410c"/><text x="300" y="50" text-anchor="middle" fill="#c2410c" font-weight="bold">Tóquio</text>
<text x="20" y="130" fill="#0a0a0f">← Oeste: horas ATRASADAS (−)</text><text x="320" y="150" text-anchor="end" fill="#0a0a0f">Leste: horas ADIANTADAS (+) →</text>
<text x="170" y="20" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Fusos horários (diferença em horas para Greenwich)</text></svg>`

export const GEOGRAFIA_1: Lesson = {
  slug: 'geografia-1',
  title: 'Cartografia, coordenadas e fusos horários',
  blocks: [
    { type: 'p', text: 'Cartografia é a ciência de representar a Terra em mapas. Para o vestibular, quatro assuntos rendem pontos: coordenadas geográficas, escala, projeções e fusos horários (esse último já foi cobrado com contas de horário em 2024).' },
    { type: 'h', text: '1. Coordenadas geográficas' },
    { type: 'table', head: ['', 'Latitude', 'Longitude'], rows: [
      ['O que é', 'Distância em graus ao norte ou ao sul do Equador', 'Distância em graus a leste ou oeste do Meridiano de Greenwich'],
      ['Linha de origem', 'Equador (0°)', 'Meridiano de Greenwich (0°)'],
      ['Variação', '0° a 90° N ou S', '0° a 180° L (E) ou O (W)'],
      ['Linhas', 'Paralelos', 'Meridianos'],
    ] },
    { type: 'p', text: 'Paralelos importantes: **Equador** (0°), **Trópico de Câncer** (23°27′ N), **Trópico de Capricórnio** (23°27′ S), **Círculos Polares** Ártico e Antártico (66°33′). O Brasil fica quase todo no hemisfério Sul e a oeste de Greenwich.' },
    { type: 'h', text: '2. Escala' },
    { type: 'p', text: 'A escala mostra a proporção entre o mapa e a realidade. A escala **numérica** 1 : 2 000 000 significa que 1 cm no mapa = 2 000 000 cm = 20 km reais.' },
    { type: 'math', tex: String.raw`E = \dfrac{d}{D} \qquad (d = \text{distância no mapa},\ D = \text{distância real, na mesma unidade})` },
    { type: 'callout', kind: 'dica', text: 'Escala grande (1:1 000) mostra pouca área com muito detalhe (cidade). Escala pequena (1:50 000 000) mostra muita área com pouco detalhe (mundo). O truque: quanto MENOR o denominador, MAIOR a escala.' },
    { type: 'h', text: '3. Projeções cartográficas' },
    { type: 'p', text: 'Como a Terra é esférica, todo mapa plano **distorce** algo. **Mercator** (cilíndrica) conserva os ângulos e é usada em navegação, mas aumenta as áreas perto dos polos (a Groenlândia parece enorme). **Peters** conserva as áreas. **Azimutal** é centrada em um ponto (útil para polos).' },
    { type: 'h', text: '4. Fusos horários' },
    { type: 'p', text: String.raw`A Terra gira 360° em 24 h, então cada hora corresponde a $\dfrac{360^\circ}{24} = 15^\circ$ de longitude. Existem 24 fusos. Tomamos Greenwich como referência (UTC 0).` },
    { type: 'figure', svg: SVG_FUSOS, alt: 'Reta com os fusos horários de -9 a +9 em relação a Greenwich, com Brasília em -3 e Tóquio em +9', caption: 'Para o leste, o Sol nasce antes e as horas ficam adiantadas (+). Para o oeste, ficam atrasadas (−).' },
    { type: 'table', head: ['Cidade', 'Fuso (UTC)', 'Quando é meio-dia em Greenwich'], rows: [
      ['Londres', '0', '12h'],
      ['Brasília e São Paulo', '−3', '9h'],
      ['Nova York', '−5', '7h'],
      ['Manaus', '−4', '8h'],
      ['Tóquio', '+9', '21h'],
    ] },
    { type: 'p', text: 'O Brasil tem **quatro fusos**: UTC−2 (ilhas oceânicas, como Fernando de Noronha), UTC−3 (horário de Brasília, que vale em quase todo o litoral e no Sudeste), UTC−4 (Amazonas, Mato Grosso, Mato Grosso do Sul, Rondônia e Roraima) e UTC−5 (Acre e extremo oeste do Amazonas).' },
    { type: 'callout', kind: 'exemplo', title: 'Passo a passo: conta com fusos', text: 'Quando é 12h em Brasília (UTC−3), que horas são em Tóquio (UTC+9)?' + '\n' + 'Diferença = (+9) − (−3) = 12 horas à frente.' + '\n' + 'Em Tóquio são 24h, ou seja, 0h do dia seguinte.' },
    { type: 'callout', kind: 'atencao', text: 'Em viagens, converta tudo para UTC: horário local − fuso = UTC. Some a duração do voo e converta de novo para o fuso do destino. Isso evita erros de sinal.' },
  ],
  exercises: [
    ex('geografia-1', 1, S, 'A Terra tem 24 fusos horários de 15° cada. A diferença de horário entre dois locais cujas longitudes são 45° O e 15° L é de:', ['2 horas', '3 horas', '4 horas', '6 horas'], 2, 'Resposta C (4 horas). A diferença de longitude é 45° + 15° = 60° (um está a oeste e o outro a leste, então somam). Como 15° = 1 hora, 60° ÷ 15° = 4 horas.'),
    ex('geografia-1', 2, S, 'Quando é meio-dia (12h) em Brasília (UTC−3), o horário em Londres (UTC 0) é:', ['9h', '12h', '15h', '18h'], 2, 'Resposta C (15h). Londres está 3 fusos a leste de Brasília, portanto adiantado em 3 horas: 12h + 3h = 15h.'),
    ex('geografia-1', 3, S, 'Em um mapa com escala 1 : 2 000 000, uma distância de 5 cm representa, na realidade:', ['10 km', '50 km', '100 km', '200 km'], 2, 'Resposta C (100 km). 5 cm × 2 000 000 = 10 000 000 cm. Como 100 000 cm = 1 km, o resultado é 100 km.'),
    ex('geografia-1', 4, S, 'A linha imaginária de latitude 0°, que divide a Terra nos hemisférios Norte e Sul, é o:', ['Meridiano de Greenwich', 'Trópico de Capricórnio', 'Equador', 'Círculo Polar Ártico'], 2, 'Resposta C (Equador). É o paralelo de origem das latitudes. O Meridiano de Greenwich (longitude 0°) é que divide Leste e Oeste, e não é um paralelo.'),
    ex('geografia-1', 5, S, 'Um voo parte de São Paulo (UTC−3) às 22h e dura 9 horas, chegando a Lisboa (UTC 0). O horário local de chegada em Lisboa é:', ['7h', '10h', '13h', '1h'], 1, 'Resposta B (10h). Convertendo para UTC: 22h em São Paulo = 25h = 1h UTC do dia seguinte. Somando 9 h de voo: 10h UTC. Como Lisboa está em UTC 0, o horário local é 10h.'),
  ],
}

const SVG_PLACAS = `<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="250" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Tipos de limites entre placas tectônicas</text>
<g>
<rect x="15" y="30" width="145" height="26" fill="#fed7aa" stroke="#c2410c"/><rect x="170" y="30" width="145" height="26" fill="#fde68a" stroke="#a16207"/>
<polygon points="100,38 100,52 114,45" fill="#c2410c"/><polygon points="235,38 235,52 221,45" fill="#a16207"/>
<line x1="50" y1="45" x2="102" y2="45" stroke="#c2410c" stroke-width="3"/><line x1="285" y1="45" x2="233" y2="45" stroke="#a16207" stroke-width="3"/>
<text x="20" y="76" fill="#0a0a0f" font-weight="bold">Convergente (placas se aproximam)</text><text x="20" y="90" fill="#0a0a0f">Dobramentos (Andes), vulcões, terremotos</text>
</g>
<g>
<rect x="15" y="110" width="145" height="26" fill="#fed7aa" stroke="#c2410c"/><rect x="170" y="110" width="145" height="26" fill="#fde68a" stroke="#a16207"/>
<polygon points="50,118 50,132 36,125" fill="#c2410c"/><polygon points="285,118 285,132 299,125" fill="#a16207"/>
<line x1="110" y1="125" x2="48" y2="125" stroke="#c2410c" stroke-width="3"/><line x1="225" y1="125" x2="287" y2="125" stroke="#a16207" stroke-width="3"/>
<text x="20" y="156" fill="#0a0a0f" font-weight="bold">Divergente (placas se afastam)</text><text x="20" y="170" fill="#0a0a0f">Dorsais oceânicas, nova crosta (Atlântico)</text>
</g>
<g>
<rect x="15" y="190" width="145" height="26" fill="#fed7aa" stroke="#c2410c"/><rect x="170" y="190" width="145" height="26" fill="#fde68a" stroke="#a16207"/>
<line x1="70" y1="198" x2="70" y2="226" stroke="#c2410c" stroke-width="3"/><polygon points="64,200 76,200 70,190" fill="#c2410c"/>
<line x1="260" y1="226" x2="260" y2="198" stroke="#a16207" stroke-width="3"/><polygon points="254,224 266,224 260,234" fill="#a16207"/>
<text x="20" y="238" fill="#0a0a0f" font-weight="bold">Transformante: deslizam lado a lado (terremotos)</text>
</g></svg>`

export const GEOGRAFIA_2: Lesson = {
  slug: 'geografia-2',
  title: 'Geologia, placas tectônicas e relevo',
  blocks: [
    { type: 'p', text: 'A Geologia explica de que a Terra é feita e como ela muda. Isso ajuda a entender terremotos, vulcões, montanhas, minérios e petróleo, e é muito importante para quem vai estudar Engenharia Ambiental. A UEMG já cobriu estrutura geológica e placas tectônicas.' },
    { type: 'h', text: '1. Estrutura interna da Terra' },
    { type: 'table', head: ['Camada', 'Características'], rows: [
      ['Crosta (litosfera)', 'Camada sólida e fina, onde vivemos; dividida em placas tectônicas'],
      ['Manto', 'Rochas quentes e pastosas (astenosfera); sobre ele as placas "flutuam"'],
      ['Núcleo externo e interno', 'Metais (ferro e níquel); o externo é líquido e o interno é sólido; geram o campo magnético'],
    ] },
    { type: 'h', text: '2. Tectônica de placas' },
    { type: 'p', text: 'A litosfera é um "quebra-cabeça" de placas que se movem lentamente (alguns centímetros por ano) sobre o manto. O contato entre as placas é onde ocorrem **terremotos, vulcões e a formação de cordilheiras**.' },
    { type: 'figure', svg: SVG_PLACAS, alt: 'Três esquemas: placas convergentes, divergentes e transformantes', caption: 'As setas mostram o sentido do movimento das placas.' },
    { type: 'callout', kind: 'exemplo', text: 'Os **Andes** nasceram do choque entre a Placa de Nazca e a Placa Sul-Americana (convergente). O **Oceano Atlântico** cresce porque as placas Sul-Americana e Africana se afastam (divergente).' },
    { type: 'callout', kind: 'dica', title: 'Por que o Brasil quase não tem terremotos fortes?', text: 'O território brasileiro está no **interior da Placa Sul-Americana**, longe das bordas, onde os choques acontecem. Por isso não há vulcões ativos e os tremores são fracos.' },
    { type: 'h', text: '3. Tipos de rocha' },
    { type: 'table', head: ['Tipo', 'Como se forma', 'Exemplos'], rows: [
      ['Ígnea (magmática)', 'Resfriamento e solidificação do magma', 'Granito, basalto'],
      ['Sedimentar', 'Acúmulo e compactação de sedimentos (areia, argila, restos de seres vivos)', 'Arenito, calcário (aqui ficam fósseis, petróleo e carvão)'],
      ['Metamórfica', 'Transformação de outras rochas por calor e pressão', 'Mármore, gnaisse, quartzito'],
    ] },
    { type: 'h', text: '4. Estrutura geológica do Brasil' },
    { type: 'table', head: ['Estrutura', 'Idade', 'Características e recursos'], rows: [
      ['Escudos cristalinos (embasamentos)', 'Muito antiga (Pré-cambriano)', 'Rochas ígneas e metamórficas; ricos em minérios metálicos, como o ferro do Quadrilátero Ferrífero (MG)'],
      ['Bacias sedimentares', 'Mais recentes (Paleozoico ao Cenozoico)', 'Rochas sedimentares; petróleo, gás, carvão e água subterrânea (Aquífero Guarani)'],
      ['Dobramentos modernos', 'Recentes, em bordas de placas', 'Não existem no Brasil (por isso o relevo é antigo, desgastado e sem grandes cordilheiras)'],
    ] },
    { type: 'h', text: '5. Relevo brasileiro' },
    { type: 'list', items: ['**Planaltos** predominam (áreas altas e desgastadas pela erosão), como o Planalto Central e o Atlântico.', '**Planícies** são áreas baixas de acúmulo de sedimentos (Planície Amazônica, Pantanal).', '**Depressões** são áreas rebaixadas em relação ao entorno (Depressão Sertaneja e do Rio São Francisco).', 'O ponto mais alto é o **Pico da Neblina (AM)**, com cerca de 2 995 m.'] },
    { type: 'callout', kind: 'atencao', text: 'Cuidado com as definições das rochas: ígnea = resfriamento do magma; metamórfica = transformação por calor e pressão; sedimentar = acúmulo de sedimentos. Em 2024, as definições vieram trocadas de propósito.' },
  ],
  exercises: [
    ex('geografia-2', 1, S, 'A rocha formada pelo resfriamento e solidificação do magma é classificada como:', ['ígnea (magmática)', 'sedimentar', 'metamórfica', 'calcária'], 0, 'Resposta A (ígnea). O granito e o basalto são exemplos. As sedimentares vêm da compactação de sedimentos e as metamórficas, da transformação de outras rochas por calor e pressão.'),
    ex('geografia-2', 2, S, 'O Brasil não possui vulcões ativos nem grandes terremotos principalmente porque:', ['seu território está no interior da Placa Sul-Americana, longe das bordas', 'o país não tem rochas', 'o território fica sobre uma placa de limite convergente', 'o clima tropical impede movimentos da crosta'], 0, 'Resposta A. Terremotos e vulcões se concentram nas bordas das placas. O Brasil está no meio da Placa Sul-Americana, uma área geologicamente estável.'),
    ex('geografia-2', 3, S, 'O choque entre a Placa de Nazca e a Placa Sul-Americana, que formou a Cordilheira dos Andes, é um exemplo de limite:', ['divergente', 'transformante', 'convergente', 'estático'], 2, 'Resposta C (convergente). As placas se aproximam e colidem: a Nazca (oceânica) mergulha sob a Sul-Americana, formando montanhas, vulcões e terremotos. No limite divergente as placas se afastam.'),
    ex('geografia-2', 4, S, 'No Brasil, o petróleo e o carvão mineral são encontrados principalmente em:', ['escudos cristalinos', 'bacias sedimentares', 'dobramentos modernos', 'rochas ígneas vulcânicas'], 1, 'Resposta B. Combustíveis fósseis se formam a partir de restos de seres vivos acumulados em rochas sedimentares, por isso ocorrem nas bacias sedimentares. Nos escudos cristalinos ficam mais os minérios metálicos.'),
    ex('geografia-2', 5, S, 'O Quadrilátero Ferrífero, em Minas Gerais, é muito rico em minério de ferro. Essa riqueza está associada, principalmente, à estrutura geológica de:', ['bacias sedimentares recentes', 'escudos cristalinos (rochas antigas do Pré-cambriano)', 'dobramentos modernos', 'planícies aluviais'], 1, 'Resposta B. Os minérios metálicos, como ferro, ouro e manganês, ocorrem principalmente nos escudos cristalinos, formados por rochas muito antigas do Pré-cambriano. Foi essa riqueza que fez de Minas Gerais um polo de mineração e siderurgia, como João Monlevade.'),
  ],
}
