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

export const GEOGRAFIA_3: Lesson = {
  slug: 'geografia-3',
  title: 'Clima, vegetação e biomas',
  blocks: [
    { type: 'p', text: 'Clima, vegetação e biomas estão ligados: onde faz calor e chove muito, há florestas; onde chove pouco, há vegetação seca. Esse é um assunto central para a Engenharia Ambiental e já apareceu na UEMG em questões sobre biomas e queimadas.' },
    { type: 'h', text: '1. Tempo × clima' },
    { type: 'p', text: '**Tempo** é o estado da atmosfera em um momento (hoje choveu). **Clima** é o conjunto de condições típicas de uma região ao longo de muitos anos (a média de 30 anos ou mais). Os elementos do clima são **temperatura, umidade, pressão atmosférica, ventos e precipitação**.' },
    { type: 'h', text: '2. Fatores que influenciam o clima' },
    { type: 'table', head: ['Fator', 'Como influencia'], rows: [
      ['Latitude', 'Quanto mais perto do Equador, mais quente (os raios solares chegam mais perpendiculares)'],
      ['Altitude', 'Quanto maior, mais frio (cerca de 0,6 °C a menos a cada 100 m)'],
      ['Maritimidade e continentalidade', 'O mar suaviza a temperatura; o interior tem maior amplitude térmica'],
      ['Massas de ar e correntes marítimas', 'Transportam calor e umidade (a corrente fria de Humboldt, por exemplo, deixa o deserto do Atacama seco)'],
      ['Relevo', 'Serras barram a umidade (chuva de relevo)'],
    ] },
    { type: 'h', text: '3. Principais climas do Brasil' },
    { type: 'table', head: ['Clima', 'Onde', 'Características'], rows: [
      ['Equatorial', 'Amazônia', 'Quente e muito úmido o ano todo'],
      ['Tropical', 'Brasil Central e boa parte do país', 'Quente, com verão chuvoso e inverno seco'],
      ['Tropical de altitude', 'Serras do Sudeste (como MG e SP)', 'Verão chuvoso e inverno seco, mas temperaturas mais amenas'],
      ['Tropical úmido (litorâneo)', 'Litoral leste', 'Chuvas abundantes e bem distribuídas'],
      ['Semiárido', 'Sertão nordestino', 'Quente, chuvas escassas e irregulares, secas prolongadas'],
      ['Subtropical', 'Sul do país', 'Chuvas bem distribuídas, estações bem definidas, geadas no inverno'],
    ] },
    { type: 'h', text: '4. Biomas brasileiros' },
    { type: 'table', head: ['Bioma', 'Clima', 'Vegetação', 'Observações'], rows: [
      ['Amazônia', 'Equatorial', 'Floresta densa e úmida (terra firme, várzea, igapó)', 'Maior bioma; sofre com desmatamento e queimadas'],
      ['Cerrado', 'Tropical', 'Savana: árvores de troncos retorcidos e gramíneas', 'Chamado "berço das águas"; avanço da soja e da pecuária'],
      ['Mata Atlântica', 'Tropical úmido', 'Floresta densa, muitas espécies endêmicas', 'Restam cerca de 12% da cobertura original'],
      ['Caatinga', 'Semiárido', 'Vegetação xerófila (cactos, arbustos espinhosos)', 'Exclusivamente brasileiro'],
      ['Pantanal', 'Tropical', 'Mosaico de campos, cerrado e matas; planície alagável', 'Maior planície alagável do mundo'],
      ['Pampa', 'Subtropical', 'Campos (gramíneas), poucas árvores', 'No Rio Grande do Sul; pecuária'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Pegadinha clássica: o Pampa NÃO é semiárido. Clima semiárido, vegetação xerófila e solos pedregosos são da **Caatinga**. O Pampa tem clima subtropical e campos de gramíneas.' },
    { type: 'callout', kind: 'dica', text: 'Para identificar o bioma, procure a combinação: floresta + chuva o ano todo = Amazônia; cactos + seca = Caatinga; árvores retorcidas + estação seca = Cerrado; campos no Sul = Pampa; alagado = Pantanal; floresta litorânea muito devastada = Mata Atlântica.' },
    { type: 'h', text: '5. Impactos ambientais' },
    { type: 'list', items: ['**Queimadas** liberam CO₂, CO e CH₄ (gases do efeito estufa) e reduzem a biodiversidade.', '**Desmatamento** causa erosão, perda de solo, assoreamento de rios e alteração do ciclo da água.', '**Desertificação** é a degradação de terras em áreas secas, ligada ao mau uso do solo (e não ao avanço natural de dunas).'] },
  ],
  exercises: [
    ex('geografia-3', 1, S, 'O bioma de clima semiárido, com vegetação adaptada à seca (cactos e arbustos espinhosos), é a:', ['Amazônia', 'Caatinga', 'Mata Atlântica', 'Pampa'], 1, 'Resposta B (Caatinga). A Caatinga ocupa o sertão nordestino, de clima semiárido, com vegetação xerófila (adaptada à falta de água). É o único bioma exclusivamente brasileiro.'),
    ex('geografia-3', 2, S, 'O Cerrado é caracterizado por:', ['floresta densa e chuvas o ano todo', 'savana, com árvores de troncos retorcidos e gramíneas, e estação seca definida', 'campos de gramíneas no Sul, com clima subtropical', 'planície alagável com grande biodiversidade de aves'], 1, 'Resposta B. O Cerrado é a savana brasileira, com clima tropical, verão chuvoso e inverno seco. A é a Amazônia, C é o Pampa e D é o Pantanal.'),
    ex('geografia-3', 3, S, 'O bioma brasileiro mais devastado, com cerca de 12% de sua cobertura original preservada, é a:', ['Caatinga', 'Amazônia', 'Mata Atlântica', 'Cerrado'], 2, 'Resposta C (Mata Atlântica). Ela cobria boa parte do litoral e foi bastante desmatada para cidades, agricultura e pecuária, pois é onde vive a maior parte da população brasileira. Restam cerca de 12% da cobertura original.'),
    ex('geografia-3', 4, S, 'Em geral, com o aumento da altitude, a temperatura do ar:', ['aumenta', 'diminui', 'permanece igual', 'varia só com a latitude'], 1, 'Resposta B (diminui). A temperatura cai, em média, cerca de 0,6 °C a cada 100 m de altitude, porque o ar fica mais rarefeito e retém menos calor. Por isso o clima é mais ameno nas serras do Sudeste, como em Minas Gerais.'),
    ex('geografia-3', 5, S, 'O Pampa, bioma típico do Rio Grande do Sul, apresenta:', ['clima semiárido e vegetação xerófila', 'clima equatorial e floresta densa', 'clima subtropical e predomínio de campos de gramíneas', 'clima tropical de altitude e mangues'], 2, 'Resposta C. O Pampa tem clima subtropical, com chuvas bem distribuídas e estações definidas, e vegetação de campos (gramíneas), usada na pecuária. Clima semiárido e vegetação xerófila são da Caatinga.'),
  ],
}

export const GEOGRAFIA_4: Lesson = {
  slug: 'geografia-4',
  title: 'Recursos hídricos e matriz energética',
  blocks: [
    { type: 'p', text: 'Água e energia são dois recursos essenciais e muito ligados: o Brasil gera a maior parte da sua eletricidade com a força da água. Esses temas são muito cobrados (a UEMG 2023 falou das hidrelétricas, e 2024, dos recursos energéticos e da sustentabilidade) e são o dia a dia de quem cursa Engenharia Ambiental.' },
    { type: 'h', text: '1. Ciclo da água e águas do planeta' },
    { type: 'p', text: 'A água circula entre oceanos, atmosfera e continentes: **evaporação** → **condensação** (nuvens) → **precipitação** → **infiltração e escoamento** → volta aos rios e mares. Cerca de 97% da água do planeta é salgada; da doce, a maior parte está em geleiras e aquíferos, e só uma pequena fração está em rios e lagos.' },
    { type: 'h', text: '2. Bacias hidrográficas' },
    { type: 'p', text: '**Bacia hidrográfica** é a área drenada por um rio principal e seus afluentes. Os limites entre bacias são chamados de **divisores de água**. É a unidade usada para gestão dos recursos hídricos.' },
    { type: 'table', head: ['Bacia', 'Característica'], rows: [
      ['Amazônica', 'A maior do Brasil e do mundo em volume de água; rios de planície, navegáveis; baixo aproveitamento hidrelétrico'],
      ['Tocantins-Araguaia', 'Rios de planalto; grande potencial hidrelétrico (Tucuruí)'],
      ['São Francisco', 'Rio da integração nacional; atravessa MG, BA, PE, AL e SE; irrigação e energia'],
      ['Paraná', 'Maior produção de energia hidrelétrica do país (Itaipu); alta população'],
      ['Atlântico Sul, Leste e Sudeste', 'Rios curtos e importantes para abastecimento (Rio Doce, Paraíba do Sul)'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Aquífero Guarani: uma das maiores reservas de água subterrânea do mundo, sob Brasil, Argentina, Paraguai e Uruguai. Precisa de proteção contra poluição e uso excessivo.' },
    { type: 'h', text: '3. Usos e problemas da água' },
    { type: 'list', items: ['A **agropecuária** é o maior consumidor de água (irrigação), seguida do abastecimento urbano e da indústria.', '**Poluição** por esgoto não tratado, agrotóxicos, mineração e lixo.', '**Assoreamento** (acúmulo de sedimentos no leito do rio) por desmatamento da mata ciliar.', '**Escassez:** não é falta de água no planeta, mas má distribuição e mau uso (como no semiárido e nas grandes metrópoles).'] },
    { type: 'h', text: '4. Fontes de energia' },
    { type: 'table', head: ['Tipo', 'Fontes', 'Características'], rows: [
      ['Não renováveis', 'Petróleo, carvão mineral, gás natural, urânio', 'Esgotáveis; as fósseis emitem gases de efeito estufa'],
      ['Renováveis', 'Hidráulica, solar, eólica, biomassa (etanol, bagaço de cana), geotérmica', 'Se renovam naturalmente e poluem menos'],
    ] },
    { type: 'h', text: '5. Matriz energética brasileira' },
    { type: 'list', items: ['**Matriz energética** = todas as fontes usadas (combustíveis, eletricidade, calor). **Matriz elétrica** = só a eletricidade.', 'A **matriz elétrica** brasileira é majoritariamente renovável (cerca de 80% ou mais): predominam as **hidrelétricas**, com crescimento rápido da energia **eólica** e **solar**.', 'Na **matriz energética** total, o petróleo e seus derivados têm peso grande; o Brasil também se destaca no **etanol** e no **pré-sal**.', 'Há duas usinas nucleares em operação, Angra 1 e 2 (RJ), e uma em construção (Angra 3).'] },
    { type: 'table', head: ['Hidrelétricas: vantagens', 'Hidrelétricas: desvantagens'], rows: [
      ['Fonte renovável, sem queima de combustível', 'Alagam grandes áreas (florestas, terras, casas)'],
      ['Gera empregos e acumula água para outros usos', 'Alteram o curso do rio e a migração de peixes'],
      ['Baixo custo de operação depois de construída', 'Dependem das chuvas (secas reduzem a geração) e deslocam populações'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Renovável não significa "sem impacto". Toda fonte (inclusive hidrelétrica, eólica e solar) causa algum impacto ambiental e social e precisa de planejamento.' },
  ],
  exercises: [
    ex('geografia-4', 1, S, 'Bacia hidrográfica é:', ['a área drenada por um rio principal e seus afluentes', 'o conjunto de todos os mares do planeta', 'uma região onde só existem águas subterrâneas', 'o ponto mais alto do relevo'], 0, 'Resposta A. A bacia hidrográfica reúne o rio principal, seus afluentes e toda a área que escoa a água para ele. É a unidade de planejamento da gestão da água.'),
    ex('geografia-4', 2, S, 'A maior bacia hidrográfica do Brasil, em volume de água, é a:', ['Bacia do Rio São Francisco', 'Bacia Amazônica', 'Bacia do Paraná', 'Bacia do Tocantins-Araguaia'], 1, 'Resposta B (Amazônica). A bacia do Amazonas é a maior do país e do mundo em volume de água. A do Paraná, apesar de menor, é a que mais produz energia hidrelétrica, por ter rios de planalto e a maior demanda.'),
    ex('geografia-4', 3, S, 'Qual das fontes de energia abaixo é renovável?', ['carvão mineral', 'petróleo', 'energia eólica', 'gás natural'], 2, 'Resposta C (eólica). Usa a força dos ventos, que se renova naturalmente. Carvão, petróleo e gás natural são combustíveis fósseis, não renováveis e emissores de CO₂.'),
    ex('geografia-4', 4, S, 'Um impacto ambiental comum da construção de grandes hidrelétricas é:', ['a redução da área de floresta alagada', 'o alagamento de grandes áreas, com perda de vegetação e habitat', 'o aumento da emissão de gases pelo uso de carvão', 'a eliminação total do uso de água dos rios'], 1, 'Resposta B. O reservatório alaga áreas de vegetação, destrói habitats, desloca populações e muda o curso natural do rio e a migração de peixes. A usina não queima carvão.'),
    ex('geografia-4', 5, S, 'O Aquífero Guarani é:', ['um rio da Amazônia', 'uma das maiores reservas de água subterrânea do mundo, sob países do Mercosul', 'uma usina hidrelétrica no Sul', 'um oceano interior'], 1, 'Resposta B. O aquífero é um grande reservatório de água subterrânea, que ocupa parte do subsolo do Brasil, Argentina, Paraguai e Uruguai. Por ser subterrâneo, o cuidado com poluição e retirada excessiva é fundamental.'),
  ],
}

export const GEOGRAFIA_5: Lesson = {
  slug: 'geografia-5',
  title: 'População, urbanização e migrações',
  blocks: [
    { type: 'p', text: 'Geografia da população estuda quantas pessoas vivem em um lugar, como elas se distribuem e por que se deslocam. Na UEMG 2023 caiu a migração venezuelana (causada por crise econômica). Para a Engenharia Ambiental, urbanização e população explicam consumo de água, resíduos e planejamento das cidades.' },
    { type: 'h', text: '1. Conceitos básicos' },
    { type: 'table', head: ['Conceito', 'Definição'], rows: [
      ['População absoluta', 'Número total de habitantes'],
      ['Densidade demográfica', 'Habitantes por km² (população ÷ área)'],
      ['Taxa de natalidade', 'Nascimentos por mil habitantes ao ano'],
      ['Taxa de mortalidade', 'Mortes por mil habitantes ao ano'],
      ['Crescimento vegetativo', 'Natalidade − mortalidade'],
      ['Expectativa de vida', 'Média de anos que se espera viver'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'População **absoluta** (quantos são) não é o mesmo que população **relativa** ou densidade (quantos por km²). A China é muito populosa; Bangladesh é muito densa.' },
    { type: 'h', text: '2. Transição demográfica e pirâmides etárias' },
    { type: 'p', text: 'Com o desenvolvimento, caem primeiro a mortalidade (saúde, saneamento) e depois a natalidade. O crescimento diminui e a população **envelhece**.' },
    { type: 'table', head: ['Forma da pirâmide', 'Significa', 'Exemplo'], rows: [
      ['Base larga e topo estreito (triângulo)', 'Alta natalidade, população jovem', 'Países pobres, como o Niger'],
      ['Base se estreitando e meio mais largo', 'Natalidade em queda; muitos adultos (**bônus demográfico**)', 'Brasil nas últimas décadas'],
      ['Topo largo e base estreita', 'Baixa natalidade e envelhecimento', 'Japão, Itália, Alemanha'],
    ] },
    { type: 'p', text: 'O Brasil está em **transição demográfica** avançada: a natalidade caiu, o número de idosos cresce e o país deve ter menos população jovem e mais aposentados nas próximas décadas, o que pressiona a Previdência.' },
    { type: 'h', text: '3. Urbanização' },
    { type: 'list', items: ['**Urbanização** é o aumento da população urbana em relação à rural. No Brasil, foi muito rápida a partir dos anos 1950, impulsionada pela industrialização e pelo **êxodo rural** (deslocamento do campo para a cidade).', 'Hoje mais de 80% dos brasileiros vivem em cidades.', '**Metrópole:** cidade grande que polariza uma região. **Conurbação:** união física de áreas urbanas de cidades vizinhas. **Região metropolitana:** conjunto de municípios integrados.', '**Megacidade:** mais de 10 milhões de habitantes (São Paulo).'] },
    { type: 'table', head: ['Problemas urbanos', 'Impacto ambiental'], rows: [
      ['Moradia precária (favelas), ocupação de encostas e várzeas', 'Deslizamentos e enchentes'],
      ['Impermeabilização do solo e falta de saneamento', 'Alagamentos e poluição dos rios'],
      ['Trânsito e queima de combustíveis', 'Poluição do ar e ilhas de calor'],
      ['Produção de lixo', 'Aterros e lixões; contaminação do solo e da água'],
    ] },
    { type: 'h', text: '4. Migrações' },
    { type: 'table', head: ['Tipo', 'Descrição'], rows: [
      ['Emigração / imigração', 'Saída de um país / entrada em um país'],
      ['Migração interna', 'Dentro do país (êxodo rural; Nordeste → Sudeste)'],
      ['Migração pendular', 'Ida e volta diária entre cidades, para trabalhar ou estudar'],
      ['Migração sazonal', 'Em determinada época (colheitas)'],
      ['Refugiados', 'Pessoas que fogem de guerras, perseguição ou crises, como os venezuelanos, sírios e ucranianos'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Causas das migrações: econômicas (busca de emprego), políticas (guerra, perseguição), ambientais (secas, enchentes) e familiares. Fatores de **expulsão** (o que faz sair) e de **atração** (o que faz chegar).' },
  ],
  exercises: [
    ex('geografia-5', 1, S, 'O crescimento vegetativo de uma população é calculado pela diferença entre:', ['a população urbana e a rural', 'a natalidade e a mortalidade', 'a imigração e a emigração', 'a população absoluta e a área'], 1, 'Resposta B. Crescimento vegetativo = natalidade − mortalidade. Imigração e emigração formam o saldo migratório, que é outra componente do crescimento total.'),
    ex('geografia-5', 2, S, 'O êxodo rural consiste no deslocamento de pessoas:', ['da cidade para o campo', 'do campo para a cidade', 'de um país para outro', 'entre cidades vizinhas, todos os dias, para trabalhar'], 1, 'Resposta B. É a saída da população do campo para as cidades, em busca de emprego e melhores condições. Foi um dos motores da urbanização brasileira no século XX.'),
    ex('geografia-5', 3, S, 'A migração pendular é caracterizada por:', ['mudança definitiva de país', 'deslocamento diário entre municípios, por trabalho ou estudo', 'fuga de guerras', 'deslocamento para a colheita'], 1, 'Resposta B. Quem faz migração pendular mora em uma cidade e vai todos os dias trabalhar ou estudar em outra, e volta. Costuma ocorrer em regiões metropolitanas.'),
    ex('geografia-5', 4, S, 'Uma pirâmide etária com base estreita e topo largo indica:', ['alta natalidade e população jovem', 'baixa natalidade e envelhecimento da população', 'crescimento populacional muito rápido', 'população majoritariamente rural'], 1, 'Resposta B. Poucos jovens (base estreita) e muitos idosos (topo largo) indicam queda da natalidade e envelhecimento, como no Japão e em países europeus. Alta natalidade dá base larga.'),
    ex('geografia-5', 5, S, 'A união física das áreas urbanas de cidades vizinhas, que passam a formar uma mancha urbana contínua, é chamada de:', ['êxodo rural', 'conurbação', 'densidade demográfica', 'migração pendular'], 1, 'Resposta B (conurbação). Ocorre quando duas ou mais cidades crescem tanto que se encontram, formando um conjunto urbano, como São Paulo e os municípios do ABC.'),
  ],
}
