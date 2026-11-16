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
