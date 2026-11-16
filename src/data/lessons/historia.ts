import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'historia' as const

export const HISTORIA_1: Lesson = {
  slug: 'historia-1',
  title: 'Antiguidade clássica: Grécia e Roma',
  blocks: [
    { type: 'p', text: 'Gregos e romanos criaram ideias que ainda usamos: democracia, filosofia, teatro, república, direito e a língua que originou o português. A UEMG já cobrou a República Romana (os irmãos Graco, em 2024).' },
    { type: 'h', text: '1. Grécia Antiga' },
    { type: 'p', text: 'A Grécia não era um país único, e sim um conjunto de **cidades-Estado independentes (pólis)**, como Atenas e Esparta, ligadas pela língua, religião e pelos Jogos Olímpicos.' },
    { type: 'table', head: ['', 'Atenas', 'Esparta'], rows: [
      ['Regime', 'Democracia (a partir das reformas de Clístenes, 507 a.C.)', 'Oligarquia militarizada, com dois reis'],
      ['Economia', 'Comércio marítimo, artesanato e escravidão', 'Agricultura sustentada por servos (hilotas)'],
      ['Educação', 'Voltada à política, às artes e à filosofia', 'Voltada à guerra (treinamento militar desde os 7 anos)'],
      ['Legado', 'Filosofia (Sócrates, Platão, Aristóteles), teatro, democracia', 'Disciplina e tradição militar'],
    ] },
    { type: 'callout', kind: 'atencao', title: 'Democracia ateniense: para quem?', text: 'Era direta (os cidadãos votavam na Assembleia), mas só participavam **homens adultos nascidos em Atenas**. Mulheres, escravos e estrangeiros (metecos) eram excluídos: a maioria da população não votava.' },
    { type: 'p', text: '**Períodos:** Homérico (séc. XII–VIII a.C.), Arcaico (VIII–VI a.C.), Clássico (V–IV a.C., auge de Atenas e Guerras Médicas e do Peloponeso) e Helenístico (após Alexandre, o Grande, que difundiu a cultura grega até o Oriente).' },
    { type: 'h', text: '2. Roma Antiga' },
    { type: 'table', head: ['Fase', 'Período', 'Características'], rows: [
      ['Monarquia', '753 a.C. – 509 a.C.', 'Governada por reis; Roma como cidade-Estado'],
      ['República', '509 a.C. – 27 a.C.', 'Poder do Senado (patrícios) e magistrados; conflitos com plebeus; expansão territorial'],
      ['Império', '27 a.C. – 476 d.C. (Ocidente)', 'Poder concentrado no imperador; Pax Romana; crise e queda do Império do Ocidente em 476'],
    ] },
    { type: 'p', text: 'Na República, a sociedade se dividia entre **patrícios** (aristocratas proprietários, que dominavam o Senado) e **plebeus** (maioria livre, sem direitos políticos plenos). As lutas dos plebeus levaram ao **Tribunato da Plebe** (tribunos que podiam vetar leis contra os plebeus) e à **Lei das Doze Tábuas** (primeiro código escrito de leis, cerca de 450 a.C.).' },
    { type: 'callout', kind: 'exemplo', title: 'Os irmãos Graco (II a.C.)', text: 'O tribuno Tibério Graco (133 a.C.) propôs uma reforma agrária: redistribuir terras públicas (ager publicus), ocupadas pelos grandes proprietários, para cidadãos pobres. Foi assassinado por senadores. Seu irmão Caio Graco retomou a luta e também morreu.' },
    { type: 'p', text: 'Com as conquistas, cresceram a escravidão e o poder dos generais. Após guerras civis, **Otávio recebeu o título de Augusto (27 a.C.)** e nasceu o Império. Em 476 d.C., o último imperador do Ocidente foi deposto por povos germânicos, marcando o fim da Antiguidade.' },
    { type: 'h', text: '3. Legados' },
    { type: 'list', items: ['**Grécia:** democracia, filosofia, ciência, teatro, Jogos Olímpicos.', '**Roma:** direito romano, república, engenharia (aquedutos, estradas), o latim (origem do português) e o cristianismo difundido no Império.'] },
  ],
  exercises: [
    ex('historia-1', 1, S, 'Na democracia ateniense, podiam participar das decisões políticas:', ['todos os habitantes de Atenas, inclusive escravos', 'apenas homens adultos nascidos em Atenas', 'apenas os membros da nobreza militar', 'mulheres e estrangeiros, mas não os escravos'], 1, 'Resposta B. A democracia de Atenas era direta, mas restrita aos cidadãos: homens adultos, nascidos de pais atenienses. Mulheres, escravos e estrangeiros (metecos) ficavam de fora, o que era a maior parte da população.'),
    ex('historia-1', 2, S, 'A cidade-Estado grega de Esparta se destacou por:', ['uma sociedade voltada ao treinamento militar', 'um regime democrático com votos de todos os habitantes', 'sua forte atividade comercial e marítima', 'sua produção de filosofia e teatro'], 0, 'Resposta A. Em Esparta, os meninos eram treinados para a guerra desde crianças, e a sociedade era dominada por uma elite militar. As alternativas B, C e D descrevem Atenas.'),
    ex('historia-1', 3, S, 'Na República Romana, o Tribunato da Plebe foi criado para:', ['proteger os interesses dos plebeus diante dos patrícios', 'garantir o poder absoluto do imperador', 'organizar a expansão militar sobre Cartago', 'administrar as províncias conquistadas'], 0, 'Resposta A. Os plebeus lutaram por direitos contra os patrícios, que dominavam o Senado. Os tribunos da plebe podiam vetar decisões que prejudicassem os plebeus. O imperador só surgiu depois, com o fim da República.'),
    ex('historia-1', 4, S, 'O início do Império Romano é associado a:', ['Rômulo e Remo, em 753 a.C.', 'Júlio César, assassinado em 44 a.C.', 'Otávio, que recebeu o título de Augusto em 27 a.C.', 'Constantino, que adotou o cristianismo'], 2, 'Resposta C. Depois de guerras civis, Otávio concentrou o poder e recebeu o título de Augusto em 27 a.C., iniciando o Império. Rômulo e Remo pertencem à lenda da fundação de Roma; Júlio César governou como ditador, ainda na República.'),
    ex('historia-1', 5, S, 'Um importante legado de Roma para o mundo ocidental é:', ['o alfabeto fenício', 'o direito romano e a língua latina', 'a pólis grega e a democracia direta', 'o código de Hamurabi'], 1, 'Resposta B. O direito romano influencia os sistemas jurídicos atuais, inclusive o brasileiro, e o latim deu origem ao português, espanhol, italiano, francês e romeno. A é dos fenícios, C é da Grécia e D é da Mesopotâmia.'),
  ],
}

const SVG_FEUDAL = `<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
<rect width="340" height="230" fill="#fff"/>
<text x="170" y="18" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Sociedade feudal (estamental)</text>
<polygon points="170,32 120,90 220,90" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="170" y="82" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Rei</text>
<polygon points="120,90 220,90 250,140 90,140" fill="#ede4ff" stroke="#6d28d9" stroke-width="2"/>
<text x="170" y="120" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Nobreza e clero</text>
<polygon points="90,140 250,140 290,205 50,205" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="170" y="170" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Servos (trabalhadores)</text>
<text x="170" y="188" text-anchor="middle" fill="#0a0a0f" font-size="10">maioria da população, presa à terra</text>
<text x="20" y="224" fill="#0a0a0f" font-size="10">Pouca mobilidade social: nascia-se e morria-se no mesmo estamento.</text></svg>`

export const HISTORIA_2: Lesson = {
  slug: 'historia-2',
  title: 'Idade Média, Renascimento e Absolutismo',
  blocks: [
    { type: 'p', text: 'Nesta aula você segue a história da Europa depois de Roma: do mundo feudal, dominado pela Igreja, até o surgimento dos Estados modernos, com reis muito poderosos. A UEMG já cobrou o Absolutismo (2023) e a Idade Média aparece sempre como base.' },
    { type: 'h', text: '1. Idade Média (séc. V a XV)' },
    { type: 'p', text: 'Vai da queda de Roma (476) à tomada de Constantinopla (1453). Dividimos em **Alta Idade Média** (séc. V–X, ruralização e feudalismo) e **Baixa Idade Média** (séc. XI–XV, renascimento comercial e urbano).' },
    { type: 'figure', svg: SVG_FEUDAL, alt: 'Pirâmide com rei no topo, nobreza e clero no meio e servos na base', caption: 'A sociedade feudal era rígida e dividida em ordens.' },
    { type: 'table', head: ['Aspecto', 'No feudalismo'], rows: [
      ['Economia', 'Agrária, de subsistência, baseada no feudo (a terra); pouco comércio e uso de moeda'],
      ['Trabalho', 'Servidão: o servo trabalhava a terra do senhor e pagava obrigações (corveia e talha), mas não era escravo'],
      ['Política', 'Poder fragmentado entre senhores feudais; relações de suserania e vassalagem (proteção em troca de lealdade)'],
      ['Religião', 'A Igreja Católica era a instituição mais poderosa: dona de terras, guardiã da cultura (mosteiros) e orientadora das mentalidades'],
    ] },
    { type: 'p', text: 'A partir do século XI, a melhoria agrícola, as **Cruzadas** (guerras religiosas para retomar Jerusalém) e a reabertura do Mediterrâneo ao comércio dão origem ao **renascimento comercial e urbano**: crescem as cidades (burgos) e surge a **burguesia**. No século XIV, a **peste negra**, a fome e a **Guerra dos Cem Anos** (Inglaterra × França) provocam a crise do feudalismo.' },
    { type: 'h', text: '2. Renascimento (séc. XIV a XVI)' },
    { type: 'p', text: 'Movimento cultural que começou na Itália (Florença, Veneza), financiado por burgueses e nobres (**mecenato**). Valorizou a cultura greco-romana, a razão e a observação da natureza.' },
    { type: 'list', items: ['**Humanismo:** o ser humano e suas capacidades no centro de tudo (**antropocentrismo**), em vez de só Deus (teocentrismo).', '**Artistas:** Leonardo da Vinci, Michelangelo, Rafael.', '**Ciência:** Copérnico (heliocentrismo) e Galileu; **imprensa** de Gutenberg (c. 1450) espalha o conhecimento.'] },
    { type: 'callout', kind: 'atencao', text: 'Não confunda: **Idade Média = teocentrismo** (Deus como centro). **Renascimento = antropocentrismo** (o homem como centro).' },
    { type: 'h', text: '3. Reforma protestante (séc. XVI)' },
    { type: 'p', text: 'Em 1517, o monge **Martinho Lutero** publicou as 95 teses contra a venda de indulgências e outras práticas da Igreja. A ruptura criou as igrejas protestantes (luteranos, calvinistas, anglicanos) e levou à Contrarreforma católica.' },
    { type: 'h', text: '4. Absolutismo e Mercantilismo' },
    { type: 'p', text: 'Com o fim do feudalismo, os reis concentraram o poder, criando os **Estados nacionais modernos**, com exército permanente, impostos e burocracia. No **Absolutismo**, o rei tem poder ilimitado. Teorias que o justificaram: **Bossuet** (direito divino dos reis: o poder vem de Deus) e **Hobbes** (o Leviatã: o Estado forte garante a ordem). O exemplo clássico é **Luís XIV** da França, que teria dito "O Estado sou eu".' },
    { type: 'table', head: ['Mercantilismo (política econômica do Absolutismo)', ''], rows: [
      ['Metalismo', 'A riqueza de um país é medida pelo ouro e pela prata acumulados'],
      ['Balança comercial favorável', 'Exportar mais do que importar'],
      ['Protecionismo e colonialismo', 'Proteger a produção nacional e explorar colônias, com monopólio comercial'],
    ] },
  ],
  exercises: [
    ex('historia-2', 1, S, 'No feudalismo europeu, a maior parte da população era formada por:', ['burgueses ricos que viviam do comércio', 'servos, presos à terra e obrigados a pagar tributos ao senhor', 'escravos comprados em mercados', 'cavaleiros e reis'], 1, 'Resposta B. A maioria era camponesa, em regime de servidão: não era escrava (não podia ser vendida), mas vivia na terra do senhor e pagava obrigações. A burguesia só cresceu depois, com o renascimento comercial.'),
    ex('historia-2', 2, S, 'O Humanismo, uma das principais características do Renascimento, defendia:', ['o teocentrismo, com Deus como centro de tudo', 'a valorização do ser humano e da razão (antropocentrismo)', 'o fortalecimento do feudalismo', 'a proibição da ciência'], 1, 'Resposta B. O Humanismo coloca o ser humano, sua capacidade de pensar e criar, no centro, e retoma a cultura greco-romana. O teocentrismo é a marca da Idade Média.'),
    ex('historia-2', 3, S, 'Em 1517, Martinho Lutero publicou as 95 teses, iniciando:', ['as Cruzadas', 'a Reforma protestante', 'a Revolução Francesa', 'o Absolutismo'], 1, 'Resposta B. As 95 teses criticavam práticas da Igreja, como a venda de indulgências, e deram início à Reforma protestante, que dividiu o cristianismo ocidental.'),
    ex('historia-2', 4, S, 'A frase atribuída a Luís XIV, "O Estado sou eu", resume uma característica do:', ['feudalismo', 'liberalismo', 'Absolutismo monárquico', 'socialismo'], 2, 'Resposta C. No Absolutismo, o poder do rei é concentrado e ilimitado: o rei se confunde com o próprio Estado. No feudalismo o poder era fragmentado entre os senhores.'),
    ex('historia-2', 5, S, 'O Mercantilismo, política econômica dos Estados absolutistas, defendia:', ['livre mercado sem intervenção do Estado', 'acúmulo de metais preciosos, balança comercial favorável e monopólio colonial', 'o fim das colônias', 'a economia baseada apenas na agricultura de subsistência'], 1, 'Resposta B. O Mercantilismo vê a riqueza no ouro e na prata e quer exportar mais do que importar, com forte intervenção do Estado e exploração das colônias. O livre mercado é a ideia do liberalismo (que o critica).'),
  ],
}

export const HISTORIA_3: Lesson = {
  slug: 'historia-3',
  title: 'Colonização do Brasil e escravidão',
  blocks: [
    { type: 'p', text: 'A colonização portuguesa moldou a economia, a sociedade e até a geografia do Brasil. Entender como Portugal organizou a colônia e o papel da escravidão é essencial para compreender a história do país. A UEMG já cobriu a mineração e a mudança da capital para o Rio de Janeiro (2023) e a resistência escrava.' },
    { type: 'h', text: '1. Linha do tempo' },
    { type: 'table', head: ['Período', 'O que aconteceu'], rows: [
      ['1500', 'Chegada de Cabral e posse do território para Portugal (Tratado de Tordesilhas, 1494)'],
      ['1500–1530 (pré-colonial)', 'Exploração do pau-brasil por **escambo** (troca de machados e espelhos por trabalho indígena); feitorias no litoral'],
      ['1534', 'Capitanias hereditárias: o território é dividido em faixas doadas a donatários'],
      ['1549', 'Governo-geral, com Tomé de Sousa e a capital em Salvador, para centralizar a administração'],
      ['Séc. XVI–XVII', 'Ciclo do açúcar no Nordeste'],
      ['1580–1640', 'União Ibérica (Portugal sob a coroa espanhola) e invasões holandesas ao Nordeste'],
      ['Séc. XVII', 'Expansão do território: bandeirantes, pecuária e as drogas do sertão'],
      ['Séc. XVIII', 'Ciclo do ouro em Minas Gerais; capital muda de Salvador para o Rio de Janeiro (1763)'],
    ] },
    { type: 'h', text: '2. Economia açucareira' },
    { type: 'list', items: ['**Latifúndio, monocultura e escravidão:** grandes propriedades (engenhos) dedicadas à cana, com trabalho escravo.', 'Produção voltada à **exportação** para a Europa (economia agroexportadora).', 'Sociedade **patriarcal e hierarquizada**: o senhor de engenho no topo; os escravizados na base.'] },
    { type: 'h', text: '3. Escravidão' },
    { type: 'p', text: 'No início usou-se a escravidão indígena, mas a Coroa e a Igreja restringiram esse uso e o **tráfico negreiro** tornou-se um grande negócio: milhões de africanos foram trazidos à força ao Brasil, que foi o último país das Américas a abolir a escravidão (1888).' },
    { type: 'callout', kind: 'atencao', text: 'A escravidão era lucrativa para Portugal e para os traficantes, por isso o tráfico foi tão intenso. Os africanos escravizados não eram "povos passivos": resistiram o tempo todo.' },
    { type: 'p', text: '**Formas de resistência:** fugas, revoltas, sabotagens, preservação da cultura e a formação de **quilombos**. O mais famoso foi o **Quilombo dos Palmares** (Serra da Barriga, atual Alagoas), no século XVII, liderado por **Zumbi**, que chegou a reunir milhares de pessoas e resistiu por quase cem anos.' },
    { type: 'h', text: '4. Mineração em Minas Gerais (séc. XVIII)' },
    { type: 'list', items: ['A descoberta de **ouro e diamantes** atraiu milhares de pessoas, formou cidades (Vila Rica, atual Ouro Preto) e deslocou o centro econômico para o Centro-Sul; a capital foi para o **Rio de Janeiro** em 1763.', 'Controle rígido da Coroa: **quinto** (20% do ouro), casas de fundição e **derrama** (cobrança forçada de impostos atrasados).', 'Esse contexto levou à **Inconfidência Mineira** (1789), movimento contra a cobrança de impostos.'] },
    { type: 'callout', kind: 'dica', text: 'Relação com Minas: o ouro explica a ocupação do interior do Brasil e a origem de muitas cidades mineiras. Mais tarde, a mineração de ferro faria de Minas um polo siderúrgico, como em João Monlevade.' },
  ],
  exercises: [
    ex('historia-3', 1, S, 'As capitanias hereditárias, criadas em 1534, tinham como objetivo principal:', ['abolir a escravidão indígena', 'ocupar e colonizar o território, dividido em faixas doadas a donatários', 'criar uma república no Brasil', 'expulsar os portugueses do litoral'], 1, 'Resposta B. Sem recursos para colonizar tudo sozinha, a Coroa dividiu o território em faixas e as entregou a donatários, que deveriam povoá-las e explorá-las. O sistema teve resultados irregulares e foi seguido pelo governo-geral (1549).'),
    ex('historia-3', 2, S, 'A economia açucareira colonial se baseava em:', ['pequenas propriedades e trabalho assalariado', 'latifúndio, monocultura e trabalho escravo, voltados à exportação', 'indústrias têxteis e trabalho livre', 'mineração de ouro e diamantes'], 1, 'Resposta B. Os engenhos eram grandes propriedades (latifúndio) dedicadas só à cana (monocultura), com mão de obra escravizada e produção exportada para a Europa. A mineração é do século XVIII.'),
    ex('historia-3', 3, S, 'O Quilombo dos Palmares, no século XVII, foi:', ['um engenho de açúcar de Pernambuco', 'uma comunidade formada por pessoas escravizadas que fugiram, liderada por Zumbi', 'uma capitania hereditária', 'uma missão jesuítica'], 1, 'Resposta B. Palmares foi o maior quilombo colonial, na Serra da Barriga, e simboliza a resistência à escravidão. Zumbi foi seu último grande líder; o Dia da Consciência Negra (20 de novembro) lembra sua morte.'),
    ex('historia-3', 4, S, 'A descoberta de ouro em Minas Gerais, no século XVIII, provocou:', ['a transferência da capital colonial de Salvador para o Rio de Janeiro (1763)', 'o fim da escravidão no Brasil', 'a Independência do Brasil', 'a chegada da família real portuguesa'], 0, 'Resposta A. O ouro deslocou o eixo econômico do Nordeste para o Centro-Sul, e a capital passou para o Rio de Janeiro, mais próximo das minas e do porto de escoamento. A Independência é de 1822 e a chegada da corte, de 1808.'),
    ex('historia-3', 5, S, 'No período pré-colonial (1500–1530), a exploração do pau-brasil era feita principalmente por meio do:', ['trabalho assalariado', 'escambo com os indígenas', 'tráfico de africanos', 'cultivo em grandes engenhos'], 1, 'Resposta B (escambo). Os portugueses trocavam objetos como machados, espelhos e tecidos pelo trabalho dos indígenas no corte e transporte da madeira, sem pagar salários. A escravidão africana e os engenhos vieram depois.'),
  ],
}

export const HISTORIA_4: Lesson = {
  slug: 'historia-4',
  title: 'Revoluções (Industrial e Francesa) e independências',
  blocks: [
    { type: 'p', text: 'Entre os séculos XVIII e XIX, a Europa e as Américas passaram por mudanças profundas: a **Revolução Industrial** transformou o trabalho e a economia, o **Iluminismo** e a **Revolução Francesa** transformaram a política, e as **independências** mudaram o mapa das Américas. Esse é o ponto de partida do mundo contemporâneo (e da UEMG 2023, que trouxe um texto sobre as independências).' },
    { type: 'h', text: '1. Revolução Industrial (a partir de 1760)' },
    { type: 'p', text: 'Começou na **Inglaterra** e substituiu o trabalho artesanal pela produção em **fábricas**, com máquinas. A **máquina a vapor** (James Watt) e o **carvão** foram a base da energia.' },
    { type: 'table', head: ['Por que na Inglaterra?', 'Consequências'], rows: [
      ['Capital acumulado pelo comércio colonial e pelo tráfico', 'Surgimento do **proletariado** (operários) e da burguesia industrial'],
      ['Carvão e ferro em abundância', 'Urbanização acelerada; cidades superlotadas e sujas'],
      ['Mão de obra liberada pelos cercamentos (enclosures) no campo', 'Jornadas longas, trabalho infantil, baixos salários; origem do movimento sindical e do socialismo'],
      ['Mercado consumidor e frota naval', 'Poluição do ar e da água, uso intenso de recursos naturais (primeiros grandes impactos ambientais industriais)'],
    ] },
    { type: 'h', text: '2. Iluminismo (séc. XVIII)' },
    { type: 'p', text: 'Movimento intelectual que defende a **razão**, a liberdade e o progresso e critica o Absolutismo e os privilégios. **Locke** (direitos naturais), **Montesquieu** (separação dos três poderes), **Rousseau** (soberania popular), **Voltaire** (tolerância e liberdade de pensamento).' },
    { type: 'h', text: '3. Independência dos Estados Unidos (1776)' },
    { type: 'p', text: 'As Treze Colônias inglesas se rebelaram contra os impostos e a falta de representação política (**"sem representação, sem tributação"**) e declararam independência em **4 de julho de 1776**, inspirando outros movimentos.' },
    { type: 'h', text: '4. Revolução Francesa (1789)' },
    { type: 'table', head: ['Ano', 'Acontecimento'], rows: [
      ['1789', 'Convocação dos Estados Gerais; **Queda da Bastilha (14 de julho)**; Declaração dos Direitos do Homem e do Cidadão'],
      ['1792–1794', 'República; Terror jacobino (Robespierre); o rei Luís XVI é executado (1793)'],
      ['1795–1799', 'Diretório (burguesia moderada)'],
      ['1799', 'Golpe do 18 Brumário: Napoleão Bonaparte assume o poder'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Lema da Revolução Francesa: **Liberdade, Igualdade e Fraternidade**. Ela acabou com os privilégios do clero e da nobreza e inspirou a ideia de direitos universais.' },
    { type: 'h', text: '5. Independências na América Latina' },
    { type: 'list', items: ['**Haiti (1804):** primeira independência liderada por pessoas escravizadas (Toussaint Louverture) e primeiro país negro livre das Américas.', '**América espanhola (1810–1825):** lideranças como **Simón Bolívar** e **San Martín**; as elites **criollas** (descendentes de espanhóis nascidos na América) lideraram o processo e mantiveram seus privilégios, excluindo as classes populares.', '**Brasil (1822):** independência proclamada por D. Pedro I, de forma negociada, mantendo a monarquia, o latifúndio e a escravidão.'] },
  ],
  exercises: [
    ex('historia-4', 1, S, 'A Revolução Industrial teve início, no século XVIII, em qual país?', ['França', 'Inglaterra', 'Estados Unidos', 'Alemanha'], 1, 'Resposta B (Inglaterra). Reunia capital, carvão e ferro, mão de obra disponível, mercado consumidor e uma frota naval. A máquina a vapor impulsionou as fábricas e a mineração.'),
    ex('historia-4', 2, S, 'O lema "Liberdade, Igualdade e Fraternidade" está associado a:', ['Revolução Industrial', 'Independência dos Estados Unidos', 'Revolução Francesa', 'Reforma protestante'], 2, 'Resposta C (Revolução Francesa). Ela começou em 1789 e se baseou nos ideais iluministas. A queda da Bastilha, em 14 de julho, é o símbolo do início.'),
    ex('historia-4', 3, S, 'O Iluminismo, movimento intelectual do século XVIII, defendia:', ['o Absolutismo e o direito divino dos reis', 'a razão, a liberdade e a crítica aos privilégios do Antigo Regime', 'o feudalismo', 'a volta do teocentrismo'], 1, 'Resposta B. Os iluministas (Locke, Montesquieu, Rousseau, Voltaire) valorizavam a razão e defendiam a liberdade, a separação dos poderes e a soberania popular. Criticavam o Absolutismo, que Bossuet defendia.'),
    ex('historia-4', 4, S, 'A independência do Haiti, em 1804, foi marcante porque:', ['foi liderada por pessoas escravizadas e criou o primeiro país negro livre das Américas', 'manteve a escravidão e a monarquia', 'foi pacífica e negociada com a metrópole', 'foi a primeira independência da América do Sul'], 0, 'Resposta A. Liderados por Toussaint Louverture, os escravizados do Haiti derrotaram as tropas francesas e proclamaram a independência. Foi a única revolta escrava a criar um Estado independente nas Américas.'),
    ex('historia-4', 5, S, 'As Treze Colônias inglesas da América do Norte declararam independência em:', ['1500', '1776', '1822', '1914'], 1, 'Resposta B (1776). Em 4 de julho de 1776, os colonos rejeitaram os impostos cobrados pela Inglaterra sem representação política. 1822 é a independência do Brasil.'),
  ],
}

export const HISTORIA_5: Lesson = {
  slug: 'historia-5',
  title: 'Brasil Império',
  blocks: [
    { type: 'p', text: 'O Império do Brasil (1822–1889) começa com a Independência e termina com a Proclamação da República. É um período decisivo para entender a escravidão, a economia do café e a formação do Estado brasileiro. A UEMG já cobriu revoltas escravas (2023) e a Guerra do Paraguai (2024).' },
    { type: 'h', text: '1. A chegada da corte e a Independência' },
    { type: 'list', items: ['**1808:** a família real portuguesa foge de Napoleão e chega ao Rio de Janeiro; abertura dos portos às nações amigas; o Brasil vira sede do império português.', '**1815:** o Brasil é elevado a Reino Unido a Portugal e Algarves.', '**1820:** Revolução Liberal do Porto: as Cortes querem a volta de D. João VI e a recolonização do Brasil.', '**Dia do Fico (9/1/1822)** e **7 de setembro de 1822:** D. Pedro I proclama a Independência. Foi um processo negociado, que manteve a monarquia, o latifúndio e a escravidão.'] },
    { type: 'h', text: '2. Primeiro Reinado (1822–1831)' },
    { type: 'list', items: ['**Constituição de 1824**, outorgada (imposta) por D. Pedro I, que criou o **Poder Moderador**, exercido só pelo imperador, acima dos outros poderes.', 'Voto censitário (por renda).', '**Confederação do Equador (1824):** revolta separatista em Pernambuco, reprimida.', 'Perda da Cisplatina e crise econômica; D. Pedro I **abdica em 1831**.'] },
    { type: 'h', text: '3. Período Regencial (1831–1840)' },
    { type: 'p', text: 'D. Pedro II tinha só 5 anos, e o país foi governado por regentes. Houve muitas revoltas provinciais: **Cabanagem** (PA), **Sabinada** (BA), **Balaiada** (MA), **Farroupilha** (RS, a mais longa, 1835–1845) e a **Revolta dos Malês** (BA, 1835), de africanos muçulmanos escravizados. O **Golpe da Maioridade** (1840) antecipou o reinado de D. Pedro II.' },
    { type: 'h', text: '4. Segundo Reinado (1840–1889)' },
    { type: 'table', head: ['Tema', 'O que aconteceu'], rows: [
      ['Economia', 'O **café**, no Vale do Paraíba (RJ, SP, depois Oeste Paulista e Minas), dominou a economia e a política'],
      ['Política', 'Alternância entre Liberais e Conservadores; "parlamentarismo às avessas" (o imperador escolhia o primeiro-ministro)'],
      ['Guerra do Paraguai (1864–1870)', 'Brasil, Argentina e Uruguai (Tríplice Aliança) contra o Paraguai; criação dos **Voluntários da Pátria**; fortaleceu o Exército'],
      ['Imigração', 'Chegada de europeus (italianos, alemães) para trabalhar no café, no lugar de escravizados'],
    ] },
    { type: 'h', text: '5. O fim da escravidão (abolição gradual)' },
    { type: 'table', head: ['Ano', 'Lei', 'O que determinou'], rows: [
      ['1850', 'Eusébio de Queirós', 'Proíbe o tráfico de escravizados (pressão inglesa)'],
      ['1871', 'Lei do Ventre Livre', 'Filhos de escravizadas nascem livres (com restrições)'],
      ['1885', 'Lei dos Sexagenários', 'Liberta escravizados com mais de 60 anos'],
      ['1888', 'Lei Áurea', 'Abolição total, assinada pela Princesa Isabel'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'A abolição não veio só de "bondade" do governo: foi resultado da resistência dos escravizados (fugas, revoltas, quilombos) e do movimento abolicionista (José do Patrocínio, Joaquim Nabuco, Luís Gama). Depois da Lei Áurea, os libertos ficaram sem terra, sem indenização e sem políticas de inclusão.' },
    { type: 'h', text: '6. O fim do Império' },
    { type: 'p', text: 'Fatores: a **abolição** (fazendeiros perderam o apoio à monarquia), a **Questão Militar** (insatisfação do Exército), a **Questão Religiosa** (conflito com a Igreja) e o avanço das ideias **republicanas**. Em **15 de novembro de 1889**, o marechal **Deodoro da Fonseca** proclamou a República.' },
  ],
  exercises: [
    ex('historia-5', 1, S, 'A Independência do Brasil foi proclamada por D. Pedro I em:', ['1808', '1822', '1888', '1889'], 1, 'Resposta B (1822). Foi em 7 de setembro. 1808 é a chegada da corte, 1888 é a Lei Áurea e 1889 é a Proclamação da República.'),
    ex('historia-5', 2, S, 'O Poder Moderador, criado pela Constituição de 1824, era exercido:', ['pelo Senado', 'pelos presidentes das províncias', 'exclusivamente pelo imperador', 'pelo Supremo Tribunal'], 2, 'Resposta C. A Constituição outorgada por D. Pedro I criou um quarto poder, o Moderador, só do imperador, que podia dissolver a Câmara, nomear senadores e ministros. Ele ficava acima dos outros poderes.'),
    ex('historia-5', 3, S, 'A Lei Áurea, assinada pela Princesa Isabel, aboliu totalmente a escravidão no Brasil em:', ['1850', '1871', '1885', '1888'], 3, 'Resposta D (1888). Antes houve leis graduais: Eusébio de Queirós (1850, fim do tráfico), Ventre Livre (1871) e Sexagenários (1885). O Brasil foi o último país das Américas a abolir a escravidão.'),
    ex('historia-5', 4, S, 'Os "Voluntários da Pátria" foram criados no contexto da:', ['Confederação do Equador', 'Guerra do Paraguai', 'Revolta dos Malês', 'Revolução Farroupilha'], 1, 'Resposta B (Guerra do Paraguai, 1864–1870). O decreto de 1865 criou unidades de voluntários para a guerra contra o Paraguai, mas muitas das vantagens prometidas não se concretizaram.'),
    ex('historia-5', 5, S, 'A Proclamação da República, em 15 de novembro de 1889, foi liderada por:', ['D. Pedro II', 'Marechal Deodoro da Fonseca', 'Tiradentes', 'Princesa Isabel'], 1, 'Resposta B. O marechal Deodoro da Fonseca, com apoio do Exército e de republicanos, depôs o imperador e proclamou a República. Fatores: abolição, Questão Militar, Questão Religiosa e ideais republicanos.'),
  ],
}

export const HISTORIA_6: Lesson = {
  slug: 'historia-6',
  title: 'República Velha e Era Vargas',
  blocks: [
    { type: 'p', text: 'Esta aula cobre da Proclamação da República (1889) até o fim do Estado Novo (1945). É o período em que o país começa a se industrializar, os trabalhadores ganham direitos e o Estado cresce. A UEMG 2023 trouxe a frase "a questão social é um caso de polícia", do governo de Washington Luís.' },
    { type: 'h', text: '1. República Velha (1889–1930)' },
    { type: 'table', head: ['Fase', 'Características'], rows: [
      ['República da Espada (1889–1894)', 'Governos militares: **Deodoro da Fonseca** e **Floriano Peixoto**'],
      ['República Oligárquica (1894–1930)', 'Governos civis dominados pelas oligarquias rurais; **política do café com leite**'],
    ] },
    { type: 'list', items: ['**Política do café com leite:** acordo entre as elites de **São Paulo** (café) e **Minas Gerais** (leite) para se alternarem na Presidência.', '**Coronelismo:** poder local dos grandes proprietários (coronéis), que controlavam o voto. **Voto de cabresto:** voto aberto, vigiado e manipulado, com fraudes.', '**Política dos Governadores:** o governo federal apoiava as oligarquias estaduais em troca de votos.', '**Convênio de Taubaté (1906):** o governo compra o café excedente para sustentar o preço (proteção ao setor cafeeiro).'] },
    { type: 'h', text: '2. Movimentos sociais e revoltas' },
    { type: 'table', head: ['Movimento', 'Onde e quando', 'Resumo'], rows: [
      ['Canudos', 'Bahia, 1896–97', 'Comunidade de sertanejos liderada por **Antônio Conselheiro**, destruída pelo Exército'],
      ['Revolta da Vacina', 'Rio de Janeiro, 1904', 'Reação popular à vacinação obrigatória e às reformas urbanas autoritárias'],
      ['Revolta da Chibata', 'Rio de Janeiro, 1910', 'Marinheiros (João Cândido) contra castigos físicos'],
      ['Contestado', 'PR e SC, 1912–16', 'Camponeses contra a perda de terras e a ferrovia'],
      ['Greve geral', 'São Paulo, 1917', 'Operários por melhores condições; forte repressão'],
      ['Tenentismo', '1920', 'Jovens militares contra as oligarquias (Revolta dos 18 do Forte, 1922)'],
      ['Semana de Arte Moderna', 'São Paulo, 1922', 'Início do Modernismo'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Washington Luís (1926–30) teria dito que "a questão social é um caso de polícia": os conflitos trabalhistas eram tratados com repressão, não com direitos.' },
    { type: 'h', text: '3. A Revolução de 1930' },
    { type: 'p', text: 'A crise de 1929 derrubou o preço do café. Em 1930, **Júlio Prestes**, de São Paulo, venceu a eleição, quebrando o rodízio (que dava a vez a Minas). A **Aliança Liberal** (Getúlio Vargas, do Rio Grande do Sul) contestou o resultado e a eleição acabou em golpe: Vargas assumiu em 1930, encerrando a República Velha.' },
    { type: 'h', text: '4. Era Vargas (1930–1945)' },
    { type: 'table', head: ['Fase', 'Principais fatos'], rows: [
      ['Governo Provisório (1930–34)', 'Centralização do poder; **Revolução Constitucionalista (1932)** em São Paulo; Código Eleitoral com **voto feminino** e voto secreto'],
      ['Governo Constitucional (1934–37)', '**Constituição de 1934** (direitos trabalhistas); polarização entre a Aliança Nacional Libertadora (esquerda) e a Ação Integralista (direita)'],
      ['Estado Novo (1937–45)', 'Ditadura, com nova Constituição; **censura** e propaganda (DIP); fim dos partidos'],
    ] },
    { type: 'list', items: ['**Direitos trabalhistas:** salário mínimo (1940) e **CLT** (1943), com carteira assinada, jornada de 8 horas e férias. Sindicatos controlados pelo Estado.', '**Economia:** industrialização com **substituição de importações**; **CSN** (siderúrgica de Volta Redonda), Vale do Rio Doce; nacionalismo econômico.', '**Cultura:** forte propaganda do governo e do culto a Vargas ("pai dos pobres").', '**Fim:** pressão pela democracia após a participação do Brasil na 2ª Guerra (a FEB lutou contra o fascismo) levou à deposição de Vargas em 1945.'] },
    { type: 'callout', kind: 'dica', text: 'Vargas voltou ao poder pelo voto (1951–54) e se suicidou em 1954, com a carta-testamento. Essa fase é lembrada pela criação da **Petrobras (1953)** e pelo nacionalismo.' },
  ],
  exercises: [
    ex('historia-6', 1, S, 'A "política do café com leite", na República Velha, consistia em:', ['uma aliança entre o Rio Grande do Sul e a Bahia', 'o rodízio na Presidência entre as elites de São Paulo e de Minas Gerais', 'o controle da Presidência pelos militares', 'a eleição direta com voto feminino'], 1, 'Resposta B. As oligarquias paulista (café) e mineira (leite) se alternavam no poder federal. A Revolução de 1930 acabou com esse acordo.'),
    ex('historia-6', 2, S, 'O "voto de cabresto" e o coronelismo, característicos da República Velha, significam que:', ['o voto era secreto e livre', 'os coronéis controlavam o voto dos eleitores, que era aberto e manipulado', 'todos os cidadãos podiam votar', 'as eleições eram decididas pelo imperador'], 1, 'Resposta B. O voto não era secreto: os grandes proprietários (coronéis) pressionavam e controlavam os eleitores, com muitas fraudes. As mulheres só puderam votar em 1932.'),
    ex('historia-6', 3, S, 'A Guerra de Canudos (1896–1897) foi um conflito entre o Exército brasileiro e:', ['uma comunidade de sertanejos liderada por Antônio Conselheiro', 'os marinheiros liderados por João Cândido', 'os operários paulistas', 'a Marinha paraguaia'], 0, 'Resposta A. O arraial de Canudos, no sertão da Bahia, reunia milhares de sertanejos pobres sob a liderança de Antônio Conselheiro. Foi destruído pelo Exército. A Revolta da Chibata foi dos marinheiros.'),
    ex('historia-6', 4, S, 'A Revolução de 1930 foi o movimento que:', ['proclamou a República', 'levou Getúlio Vargas ao poder e encerrou a República Velha', 'iniciou a ditadura militar', 'aboliu a escravidão'], 1, 'Resposta B. Depois da eleição de 1930 e do desgaste do acordo café com leite, a Aliança Liberal levou Getúlio Vargas ao poder, encerrando a República Velha.'),
    ex('historia-6', 5, S, 'Durante o Estado Novo (1937–1945), foi criada a CLT, que:', ['reuniu as leis trabalhistas, garantindo direitos como carteira assinada e jornada de 8 horas', 'extinguiu os sindicatos', 'proibiu greves de forma definitiva em todos os setores', 'criou a Petrobras'], 0, 'Resposta A. A Consolidação das Leis do Trabalho (1943) organizou os direitos trabalhistas. O Estado Novo foi uma ditadura, mas combinou repressão com leis trabalhistas e propaganda. A Petrobras foi criada em 1953.'),
  ],
}
