import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'ingles' as const

export const INGLES_1: Lesson = {
  slug: 'ingles-1',
  title: 'Estratégias de leitura: cognatos, skimming e scanning',
  blocks: [
    { type: 'p', text: 'A prova de Inglês da UEMG é de **leitura**: você lê um texto curto (notícia, tirinha, poema, diálogo) e responde em português. Não precisa conhecer todas as palavras: precisa de estratégia.' },
    { type: 'h', text: '1. Cognatos' },
    { type: 'p', text: '**Cognatos** são palavras parecidas com o português, na escrita e no significado. Eles te dão o assunto do texto sem dicionário.' },
    { type: 'table', head: ['Inglês', 'Português', 'Inglês', 'Português'], rows: [
      ['important', 'importante', 'environment', 'meio ambiente (parecido: "environment")'],
      ['animal', 'animal', 'population', 'população'],
      ['climate', 'clima', 'energy', 'energia'],
      ['pollution', 'poluição', 'problem', 'problema'],
    ] },
    { type: 'callout', kind: 'atencao', title: 'Falsos cognatos (cuidado!)', text: 'Parecem, mas **não significam o mesmo**: **pretend** = fingir (não "pretender"); **library** = biblioteca (não "livraria", que é bookstore); **actually** = na verdade (não "atualmente"); **attend** = assistir/comparecer (não "atender"); **push** = empurrar (não "puxar").' },
    { type: 'h', text: '2. Skimming × scanning' },
    { type: 'table', head: ['Estratégia', 'Para quê', 'Como fazer'], rows: [
      ['Skimming (leitura rápida)', 'Entender a **ideia geral**', 'Leia o título, a 1ª e a última frases e olhe imagens e palavras repetidas'],
      ['Scanning (leitura seletiva)', 'Achar uma **informação específica** (data, nome, número)', 'Passe o olho pelo texto procurando a palavra-chave da pergunta'],
    ] },
    { type: 'h', text: '3. Pistas do contexto' },
    { type: 'list', items: ['**Título e imagens** mostram o assunto antes de ler.', '**Palavras repetidas** costumam ser o tema.', '**Conectivos** guiam o raciocínio: but, however = oposição; because = causa; so, therefore = consequência; and, also = adição.', '**Pronomes** (it, they, this) retomam algo já dito: ache a quem se referem.'] },
    { type: 'callout', kind: 'dica', title: 'Roteiro para cada questão', text: '1) Leia a pergunta. 2) Leia o texto buscando cognatos e palavras-chave. 3) Elimine alternativas que não aparecem no texto. 4) Releia o trecho certo antes de marcar.' },
  ],
  exercises: [
    ex('ingles-1', 1, S, 'Qual das palavras abaixo é um FALSO cognato (parece com o português, mas tem outro significado)?', ['animal', 'important', 'library', 'problem'], 2, 'Resposta C (library). "Library" significa biblioteca, e não livraria (que em inglês é "bookstore"). Animal, important e problem são cognatos verdadeiros: significam animal, importante e problema.'),
    ex('ingles-1', 2, S, 'O objetivo da estratégia de leitura chamada skimming é:', ['traduzir todas as palavras do texto', 'obter rapidamente a ideia geral do texto', 'encontrar uma data ou um nome específico', 'memorizar o vocabulário'], 1, 'Resposta B. Skimming é a leitura rápida para captar a ideia geral (título, primeiras frases, palavras repetidas). Procurar um dado específico é scanning (alternativa C).'),
    ex('ingles-1', 3, S, 'Text: "The Amazon rainforest absorbs large amounts of carbon dioxide, which helps to slow global warming. However, deforestation releases this carbon back into the atmosphere." Qual é a ideia principal do texto?', ['A floresta amazônica não tem relação com o clima.', 'A Amazônia ajuda a reduzir o aquecimento global, mas o desmatamento prejudica isso.', 'O desmatamento ajuda a absorver o gás carbônico.', 'O aquecimento global acabou por causa da Amazônia.'], 1, 'Resposta B. Cognatos como "carbon dioxide", "global warming" e "deforestation" dão o assunto. A 1ª frase diz que a floresta absorve CO₂ e ajuda a frear o aquecimento global. O "However" introduz a oposição: o desmatamento devolve esse carbono à atmosfera.'),
    ex('ingles-1', 4, S, 'Text: "The city has 2 million people. In 2020, the population grew by 5%, and in 2021 it grew by 3%." Para saber em quanto a população cresceu em 2021, a estratégia mais rápida é:', ['skimming, lendo só o título', 'scanning, procurando "2021" e o número ao lado', 'traduzir o texto inteiro palavra por palavra', 'ler apenas a primeira frase'], 1, 'Resposta B. Quando a pergunta pede um dado específico (aqui, o crescimento em 2021), use scanning: procure a palavra-chave ("2021") e leia só o que está ao redor. A resposta é 3%.'),
    ex('ingles-1', 5, S, 'Em "He wanted to play outside, BUT it was raining", a palavra BUT indica:', ['causa', 'oposição', 'consequência', 'adição'], 1, 'Resposta B (oposição). "But" significa "mas" e contrapõe duas ideias: ele queria brincar fora, porém estava chovendo. Para causa use "because"; para consequência, "so"; para adição, "and".'),
  ],
}

export const INGLES_2: Lesson = {
  slug: 'ingles-2',
  title: 'Tempos verbais: presente, passado e futuro',
  blocks: [
    { type: 'p', text: 'Saber reconhecer o tempo verbal ajuda a entender **quando** algo acontece no texto. Nas provas da UEMG aparecem perguntas como "qual é o tempo verbal de realised?" ou "qual auxiliar completa a pergunta?". Veja os principais.' },
    { type: 'h', text: '1. Simple present (presente simples)' },
    { type: 'p', text: 'Fala de hábitos, rotinas e verdades gerais. Com **he / she / it**, o verbo ganha **-s** (ou -es).' },
    { type: 'table', head: ['Forma', 'Estrutura', 'Exemplo'], rows: [
      ['Afirmativa', 'sujeito + verbo (+ s com he/she/it)', 'She goes to school every day.'],
      ['Negativa', 'do not (don\'t) / does not (doesn\'t) + verbo base', 'He doesn\'t like coffee.'],
      ['Pergunta', 'Do / Does + sujeito + verbo base', 'Does he speak English?'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Depois de does/doesn\'t/did/didn\'t, o verbo fica **no infinitivo, sem -s e sem -ed**: "Does she work?" (não "Does she works?").' },
    { type: 'h', text: '2. Present continuous (presente contínuo)' },
    { type: 'p', text: 'Ação que está acontecendo **agora**: **am / is / are + verbo com -ing**. Palavras-chave: now, right now, at the moment, "Look!". Exemplo: *It is raining right now.*' },
    { type: 'h', text: '3. Simple past (passado simples)' },
    { type: 'p', text: 'Ação terminada no passado. Verbos regulares ganham **-ed** (watch → watched). Os **irregulares** têm forma própria e precisam ser decorados. Palavras-chave: yesterday, last week, in 2020, ago.' },
    { type: 'table', head: ['Presente', 'Passado', 'Presente', 'Passado'], rows: [
      ['go', 'went', 'see', 'saw'],
      ['have', 'had', 'take', 'took'],
      ['make', 'made', 'buy', 'bought'],
      ['be (am/is)', 'was', 'be (are)', 'were'],
    ] },
    { type: 'p', text: 'Pergunta e negação do passado usam **did / didn\'t** + verbo base: *Did you see the movie? I didn\'t see it.*' },
    { type: 'h', text: '4. Futuro' },
    { type: 'list', items: ['**will + verbo**: decisões na hora, previsões, promessas. *I will help you.*', '**am/is/are going to + verbo**: planos e intenções já decididos. *I am going to visit my grandmother tomorrow.*', 'Palavras-chave: tomorrow, next week, soon, in 2030.'] },
    { type: 'h', text: '5. Present perfect (noção)' },
    { type: 'p', text: '**have / has + particípio** liga o passado ao presente: *I have studied English for two years.* Aparece com for, since, already, yet, ever.' },
    { type: 'callout', kind: 'dica', text: 'Para identificar o tempo: procure o auxiliar (do/does/did, am/is/are, will, have/has) e as palavras de tempo (yesterday, now, tomorrow). Isso resolve a maioria das questões.' },
  ],
  exercises: [
    ex('ingles-2', 1, S, 'Complete: "She ____ to school every day."', ['go', 'goes', 'going', 'went'], 1, 'Resposta B (goes). "Every day" indica hábito (presente simples) e o sujeito she exige o -s no verbo: goes. "Go" seria para I/you/we/they; "went" é passado.'),
    ex('ingles-2', 2, S, 'Complete: "Yesterday, they ____ a movie at the cinema."', ['watch', 'watches', 'watched', 'will watch'], 2, 'Resposta C (watched). "Yesterday" indica passado, e watch é verbo regular: watch + ed = watched. "Will watch" seria futuro.'),
    ex('ingles-2', 3, S, 'Complete: "Look! It ____ right now."', ['rains', 'is raining', 'rained', 'will rain'], 1, 'Resposta B (is raining). "Look!" e "right now" indicam ação em andamento, o presente contínuo: is + verbo com -ing.'),
    ex('ingles-2', 4, S, 'Complete: "I ____ my grandmother tomorrow."', ['visited', 'am going to visit', 'have visited', 'visits'], 1, 'Resposta B (am going to visit). "Tomorrow" indica futuro, e a estrutura de plano é am/is/are going to + verbo. "Visited" é passado, "have visited" é present perfect e "visits" não combina com o sujeito I.'),
    ex('ingles-2', 5, S, 'Complete: "Does he ____ English?"', ['speaks', 'speak', 'spoke', 'speaking'], 1, 'Resposta B (speak). Depois de does, o verbo fica na forma base, sem -s: "Does he speak English?". O -s já aparece no auxiliar does.'),
  ],
}

export const INGLES_3: Lesson = {
  slug: 'ingles-3',
  title: 'Pronomes, preposições e conectivos',
  blocks: [
    { type: 'p', text: 'Pronomes, preposições e conectivos são pequenas palavras que dão sentido à frase. Entender a quem um pronome se refere e que relação um conectivo cria é o que mais pesa nas questões de leitura (como "it se refere a quê?" ou "o que indica but?").' },
    { type: 'h', text: '1. Pronomes pessoais e possessivos' },
    { type: 'table', head: ['Sujeito', 'Objeto', 'Adjetivo possessivo', 'Pronome possessivo'], rows: [
      ['I', 'me', 'my', 'mine'],
      ['you', 'you', 'your', 'yours'],
      ['he', 'him', 'his', 'his'],
      ['she', 'her', 'her', 'hers'],
      ['it', 'it', 'its', '—'],
      ['we', 'us', 'our', 'ours'],
      ['they', 'them', 'their', 'theirs'],
    ] },
    { type: 'list', items: ['**Sujeito** vem antes do verbo: *She studies.* **Objeto** vem depois: *I called her.*', '**Adjetivo possessivo** vem antes do substantivo: *her book*. **Pronome possessivo** substitui o substantivo: *The book is hers.*'] },
    { type: 'callout', kind: 'atencao', title: 'its × it\'s', text: '**its** = dele/dela (de coisa ou animal): *The cat licked its paws.* **it\'s** = it is ou it has: *It\'s raining.* Essa confusão apareceu na UEMG 2024.' },
    { type: 'h', text: '2. Demonstrativos' },
    { type: 'table', head: ['', 'Perto', 'Longe'], rows: [
      ['Singular', 'this (este/isto)', 'that (aquele/aquilo)'],
      ['Plural', 'these (estes)', 'those (aqueles)'],
    ] },
    { type: 'h', text: '3. Preposições de tempo e lugar' },
    { type: 'table', head: ['Preposição', 'Tempo', 'Lugar'], rows: [
      ['at', 'horas e momentos: at 9 a.m., at night', 'ponto específico: at school, at the door'],
      ['on', 'dias e datas: on Monday, on May 5th', 'sobre uma superfície: on the table'],
      ['in', 'meses, anos, estações, partes do dia: in July, in 2025, in the morning', 'espaço fechado, cidade, país: in Brazil, in the box'],
    ] },
    { type: 'h', text: '4. Conectivos (connectors)' },
    { type: 'table', head: ['Ideia', 'Palavras', 'Exemplo'], rows: [
      ['Adição', 'and, also, in addition', 'She sings and dances.'],
      ['Oposição', 'but, however, although, though', 'I was tired, but I kept studying.'],
      ['Causa', 'because, since', 'I stayed home because it rained.'],
      ['Consequência', 'so, therefore, as a result', 'It rained, so we stayed home.'],
      ['Alternativa', 'or', 'Tea or coffee?'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Para saber a relação entre duas ideias, pergunte: elas se somam (and), se opõem (but, however), uma explica a outra (because) ou uma leva à outra (so)?' },
  ],
  exercises: [
    ex('ingles-3', 1, S, 'Complete: "Mary and I are friends. ____ study together."', ['We', 'They', 'Us', 'Our'], 0, 'Resposta A (We). "Mary and I" (Mary e eu) forma um grupo que inclui o falante, e o pronome sujeito para isso é we. "Us" é pronome objeto e "our" é possessivo.'),
    ex('ingles-3', 2, S, 'Complete: "This is Ana. ____ brother is a doctor."', ['She', 'Her', 'Hers', 'Herself'], 1, 'Resposta B (Her). Antes de um substantivo (brother) usamos o adjetivo possessivo: her brother (o irmão dela). "Hers" substitui o substantivo e "she" é pronome sujeito.'),
    ex('ingles-3', 3, S, 'Complete: "The cat licked ____ paws."', ['it\'s', 'its', 'it', 'itself'], 1, 'Resposta B (its). "Its" é o possessivo de it: as patas dele (do gato). "It\'s" significa "it is" ou "it has", e não indica posse.'),
    ex('ingles-3', 4, S, 'Complete: "The meeting is ____ Monday ____ 9 a.m."', ['in / at', 'on / at', 'at / on', 'on / in'], 1, 'Resposta B (on / at). Usamos on com dias da semana (on Monday) e at com horas (at 9 a.m.). In é para meses, anos e partes do dia (in July, in the morning).'),
    ex('ingles-3', 5, S, 'Complete: "I was tired, ____ I kept studying."', ['because', 'so', 'but', 'or'], 2, 'Resposta C (but). Há oposição entre as ideias: estava cansado, mas continuou estudando. "Because" daria causa, "so" daria consequência e "or" daria alternativa.'),
  ],
}

export const INGLES_4: Lesson = {
  slug: 'ingles-4',
  title: 'Vocabulário e falsos cognatos',
  blocks: [
    { type: 'p', text: 'Quanto mais vocabulário você reconhece, mais rápido lê o texto. Há três estratégias para crescer o vocabulário sem decorar listas enormes: **prefixos e sufixos**, **cognatos/falsos cognatos** e **phrasal verbs**.' },
    { type: 'h', text: '1. Falsos cognatos (false friends)' },
    { type: 'table', head: ['Inglês', 'Parece ser...', 'Na verdade significa...'], rows: [
      ['actually', 'atualmente', 'na verdade'],
      ['attend', 'atender', 'assistir, comparecer'],
      ['college', 'colégio', 'faculdade'],
      ['library', 'livraria', 'biblioteca'],
      ['parents', 'parentes', 'pais (pai e mãe)'],
      ['pretend', 'pretender', 'fingir'],
      ['push', 'puxar', 'empurrar'],
      ['realize', 'realizar', 'perceber, dar-se conta'],
      ['resume', 'resumir', 'retomar'],
      ['support', 'suportar', 'apoiar'],
      ['fabric', 'fábrica', 'tecido'],
      ['exit', 'êxito', 'saída'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Palavras para o inverso: "fábrica" = factory; "atualmente" = currently; "livraria" = bookstore; "parentes" = relatives; "suportar" = bear/stand.' },
    { type: 'h', text: '2. Prefixos e sufixos' },
    { type: 'table', head: ['Afixo', 'Ideia', 'Exemplos'], rows: [
      ['un-, dis-, in-, im-', 'negação, o contrário', 'unhappy (infeliz), dishonest (desonesto), impossible'],
      ['re-', 'de novo', 'rebuild (reconstruir), rewrite'],
      ['-ful', 'cheio de', 'careful (cuidadoso), helpful'],
      ['-less', 'sem', 'careless (descuidado), homeless'],
      ['-er, -or', 'quem faz', 'teacher (professor), actor'],
      ['-ness', 'qualidade (substantivo)', 'happiness (felicidade), kindness'],
      ['-ly', 'advérbio de modo', 'quickly (rapidamente), slowly'],
    ] },
    { type: 'h', text: '3. Phrasal verbs mais comuns' },
    { type: 'table', head: ['Phrasal verb', 'Significado'], rows: [
      ['give up', 'desistir'],
      ['look for', 'procurar'],
      ['turn on / turn off', 'ligar / desligar'],
      ['find out', 'descobrir'],
      ['take care of', 'cuidar de'],
      ['get up', 'levantar-se'],
      ['carry on', 'continuar'],
    ] },
    { type: 'h', text: '4. Vocabulário do meio ambiente' },
    { type: 'p', text: 'Como a prova gosta de temas atuais, vale conhecer: **climate change** (mudança climática), **global warming** (aquecimento global), **deforestation** (desmatamento), **pollution** (poluição), **renewable energy** (energia renovável), **greenhouse gases** (gases de efeito estufa), **recycling** (reciclagem), **wildlife** (vida selvagem).' },
    { type: 'callout', kind: 'dica', text: 'Se você não conhece uma palavra, quebre-a: radical + prefixo + sufixo. Por exemplo, "unbelievable" = un (não) + believe (acreditar) + able (que se pode) = inacreditável.' },
  ],
  exercises: [
    ex('ingles-4', 1, S, 'A palavra inglesa "actually" significa:', ['atualmente', 'na verdade', 'realmente atual', 'ativamente'], 1, 'Resposta B (na verdade). "Actually" é um falso cognato: não significa "atualmente". Para atualmente, use currently ou nowadays.'),
    ex('ingles-4', 2, S, 'Na frase "My parents live in Minas Gerais", a palavra "parents" significa:', ['parentes', 'primos', 'pais', 'vizinhos'], 2, 'Resposta C (pais). "Parents" são o pai e a mãe. Para "parentes" (tios, primos...), use relatives. É um falso cognato muito frequente em provas.'),
    ex('ingles-4', 3, S, 'Em "Please push the door", o verbo push significa:', ['puxar', 'empurrar', 'abrir', 'fechar'], 1, 'Resposta B (empurrar). "Push" é empurrar e "pull" é puxar. Nas portas, é comum ver as placas PUSH (empurre) e PULL (puxe).'),
    ex('ingles-4', 4, S, 'O prefixo "un-" em "unhappy" indica:', ['repetição', 'negação ou o contrário', 'tamanho', 'tempo'], 1, 'Resposta B. Um-, dis-, in- e im- formam o contrário: happy (feliz) → unhappy (infeliz). Para repetição, usa-se re- (rebuild).'),
    ex('ingles-4', 5, S, 'O phrasal verb "give up" significa:', ['dar presentes', 'desistir', 'levantar-se', 'procurar'], 1, 'Resposta B (desistir). Exemplo: "Don\'t give up!" = Não desista! Já "get up" é levantar-se e "look for" é procurar.'),
  ],
}

export const INGLES_5: Lesson = {
  slug: 'ingles-5',
  title: 'Interpretação de tirinhas, notícias e textos científicos',
  blocks: [
    { type: 'p', text: 'Na UEMG, os textos de Inglês vêm de tirinhas (Calvin e Haroldo), notícias (BBC), poemas e textos de livros didáticos. Cada gênero pede um olhar diferente. Aplique o que você aprendeu: cognatos, skimming e scanning, pronomes e conectivos.' },
    { type: 'h', text: '1. Tirinhas (comics)' },
    { type: 'list', items: ['Leia **quadrinho por quadrinho**, na ordem, e observe as expressões dos personagens.', 'O humor costuma vir de uma **quebra de expectativa** ou **ironia** no último quadrinho.', 'Preste atenção em **pronomes** (it, they) e em **tempos verbais**: as questões costumam perguntar a classe de uma palavra ou o sentido de uma fala.', 'Gírias e expressões fixas (idioms) não se traduzem palavra por palavra.'] },
    { type: 'h', text: '2. Notícias (news)' },
    { type: 'table', head: ['Parte', 'Para que serve'], rows: [
      ['Headline (manchete)', 'Resume o fato; muitas vezes tem verbos no presente ("Brazil hits record")'],
      ['Lead (1º parágrafo)', 'Responde às perguntas: **who** (quem), **what** (o quê), **when** (quando), **where** (onde), **why** (por quê)'],
      ['Corpo', 'Detalhes, dados e declarações'],
      ['Fonte', 'Indica de onde vem a informação'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Para encontrar um dado numa notícia, faça **scanning**: procure números, datas e nomes próprios (escritos com letra maiúscula).' },
    { type: 'h', text: '3. Textos científicos' },
    { type: 'list', items: ['Muitos termos são cognatos: *researchers, temperature, population, species, energy*.', '**Verbos de pesquisa:** *found* (descobriu), *shows* (mostra), *suggests* (sugere), *concluded* (concluiu).', '**Números e comparações:** *up to* (até), *more than* (mais de), *less than* (menos de), *increase* (aumento), *decrease* (queda).'] },
    { type: 'h', text: '4. Roteiro de leitura' },
    { type: 'list', ordered: true, items: ['Olhe o **título** e as imagens: qual é o assunto?', 'Leia a **pergunta** antes do texto.', 'Faça **skimming** para a ideia geral ou **scanning** para um dado.', 'Releia só o trecho da resposta e confira **pronomes** e **conectivos**.', 'Elimine as alternativas que **não aparecem** ou **contradizem** o texto.'] },
    { type: 'callout', kind: 'atencao', text: 'Não responda por opinião própria. A resposta correta é a que está **no texto**, mesmo que você ache outra coisa mais lógica.' },
  ],
  exercises: [
    ex('ingles-5', 1, S, 'Headline: "Brazil\'s solar energy production hits record high". Qual é o assunto principal da notícia?', ['A queda da produção de energia eólica', 'Um recorde na produção de energia solar no Brasil', 'O aumento do preço da energia', 'A construção de uma hidrelétrica'], 1, 'Resposta B. Os cognatos "solar energy production" e "record" dão o assunto; o verbo "hits record high" significa atingir um recorde. Nada fala de energia eólica, preço ou hidrelétrica.'),
    ex('ingles-5', 2, S, 'Text: "On Monday, a new recycling plant opened in Belo Horizonte. It will process 50 tons of plastic per month." Quantas toneladas de plástico a usina vai processar por mês?', ['5 toneladas', '15 toneladas', '50 toneladas', '500 toneladas'], 2, 'Resposta C (50 toneladas). Esta é uma pergunta de scanning: procure o número no texto. "It will process 50 tons of plastic per month". O "It" se refere à usina de reciclagem (recycling plant).'),
    ex('ingles-5', 3, S, 'Text: "Researchers found that trees in urban areas can reduce temperatures by up to 3°C." O que os pesquisadores descobriram?', ['Que as árvores aumentam a temperatura das cidades', 'Que as árvores nas áreas urbanas podem reduzir a temperatura em até 3 °C', 'Que as cidades não têm árvores', 'Que a temperatura nunca muda nas cidades'], 1, 'Resposta B. "Found that" introduz a descoberta; "reduce temperatures" é reduzir temperaturas (cognato) e "up to 3°C" significa "até 3 °C", ou seja, um máximo.'),
    ex('ingles-5', 4, S, 'Text: "Plastic pollution is a serious problem. However, new technologies can help to solve it." Na segunda frase, o pronome "it" se refere a:', ['new technologies', 'the problem of plastic pollution', 'plastic', 'the solution'], 1, 'Resposta B. O pronome "it" retoma o problema mencionado na frase anterior (plastic pollution is a serious problem). "However" marca oposição: há um problema, mas existe uma esperança.'),
    ex('ingles-5', 5, S, 'Na tirinha: "— I\'m going to study all night! — And what about sleeping? — I\'ll sleep during the exam." O humor da tirinha vem do fato de que:', ['o personagem vai estudar a noite toda e dormir bem', 'o personagem pretende dormir durante a prova, o que mostra uma ideia absurda', 'o personagem não gosta de estudar', 'a prova será de madrugada'], 1, 'Resposta B. A graça está na quebra de expectativa: em vez de dormir à noite, ele diz que dormirá durante a prova, justamente o momento em que precisa estar acordado. O verbo "I\'ll" (I will) indica uma decisão futura.'),
  ],
}
