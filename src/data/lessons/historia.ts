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
