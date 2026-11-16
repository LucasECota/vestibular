import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'portugues' as const

export const PORTUGUES_1: Lesson = {
  slug: 'portugues-1',
  title: 'Interpretação de texto e gêneros textuais',
  blocks: [
    { type: 'p', text: 'Interpretar é entender o que o texto diz, o que ele sugere e para que foi escrito. Na prova da UEMG, 3 a 4 das 6 questões de Português partem de um texto, tirinha ou poema.' },
    { type: 'h', text: '1. Como ler para a prova' },
    { type: 'list', ordered: true, items: ['Leia **primeiro a pergunta**, para saber o que procurar.', 'Leia o texto uma vez inteiro e marque a **ideia central** (o assunto + o que o autor diz sobre ele).', 'Releia o trecho que a questão cita. Responda com base no texto, **não na sua opinião**.', 'Elimine as alternativas que **exageram** (palavras como "sempre", "apenas", "nunca"), **inventam** informações ou **invertem** o que o texto diz.'] },
    { type: 'h', text: '2. Três níveis de leitura' },
    { type: 'table', head: ['Nível', 'O que pede', 'Exemplo de pergunta'], rows: [
      ['Literal', 'Informação escrita no texto', '"Segundo o texto, qual foi o resultado...?"'],
      ['Inferência', 'O que se conclui do que está escrito', '"O texto sugere que o autor...", "pode-se concluir que..."'],
      ['Crítico', 'Finalidade, tese, tom, relação com outros textos', '"A finalidade do texto é...", "o tom é..."'],
    ] },
    { type: 'callout', kind: 'atencao', title: 'Questões "marque a incorreta"', text: 'Cuidado com o comando! Em "assinale a alternativa incorreta" você procura a que **não** confere com o texto. Sublinhe a palavra "incorreta" na pergunta antes de ler as opções.' },
    { type: 'h', text: '3. Tipos textuais (como o texto é construído)' },
    { type: 'table', head: ['Tipo', 'Função', 'Marcas'], rows: [
      ['Narrativo', 'Contar fatos', 'Personagens, tempo, espaço, enredo, verbos no passado'],
      ['Descritivo', 'Caracterizar algo ou alguém', 'Adjetivos, verbos de estado (ser, estar)'],
      ['Dissertativo-argumentativo', 'Defender um ponto de vista', 'Tese, argumentos, conclusão; conectivos lógicos'],
      ['Expositivo', 'Explicar um assunto', 'Linguagem objetiva, definições, exemplos'],
      ['Injuntivo (instrucional)', 'Orientar ou instruir', 'Verbos no imperativo ou infinitivo ("misture", "adicione")'],
    ] },
    { type: 'h', text: '4. Gêneros textuais (onde o texto circula)' },
    { type: 'list', items: ['**Notícia:** informa um fato recente, de forma objetiva.', '**Crônica:** comenta o cotidiano, em tom leve e pessoal.', '**Artigo de opinião:** defende uma tese com argumentos (é dissertativo-argumentativo, como a redação).', '**Charge e tirinha:** humor com crítica social (charge) ou do cotidiano (tirinha); combinam imagem e texto.', '**Receita e manual:** textos injuntivos.'] },
    { type: 'callout', kind: 'dica', text: 'Tipo textual é a "estrutura" (narrar, descrever, argumentar...). Gênero textual é o "formato" que circula na sociedade (notícia, carta, receita). Um mesmo gênero pode misturar tipos.' },
  ],
  exercises: [
    ex('portugues-1', 1, S, 'Texto: "A cidade de Curitiba ampliou suas ciclovias em 30%. Segundo a prefeitura, o número de pessoas que trocaram o carro pela bicicleta dobrou em dois anos, o que reduziu congestionamentos e emissões de poluentes." A ideia central do texto é:', ['O uso do carro é proibido em Curitiba.', 'A ampliação das ciclovias mudou hábitos e trouxe benefícios à cidade.', 'A prefeitura de Curitiba cobra imposto sobre bicicletas.', 'Os congestionamentos aumentaram com as ciclovias.'], 1, 'Resposta B. O texto relata a ampliação das ciclovias e seus efeitos: mais pessoas usando bicicleta, menos congestionamento e menos poluição. A: nada no texto fala em proibição. C: inventa um imposto. D: afirma o contrário do que o texto diz.'),
    ex('portugues-1', 2, S, 'Texto: "Maria saiu de casa de guarda-chuva e capa de chuva, embora o céu estivesse azul. Na rua, todos a olharam com estranheza. Meia hora depois, o vento mudou e a tempestade desabou." Pode-se inferir do texto que Maria:', ['gostava de chamar a atenção das pessoas', 'sabia ou desconfiava que ia chover', 'detestava o céu azul', 'saiu de casa sem ter para onde ir'], 1, 'Resposta B. O texto não diz isso de forma direta, mas mostra que ela se preparou para a chuva mesmo com o céu limpo, e a tempestade veio depois. Logo, é possível inferir que ela sabia ou desconfiava da chuva. As outras alternativas inventam intenções que o texto não apresenta.'),
    ex('portugues-1', 3, S, 'No trecho "Misture a farinha com o leite, adicione dois ovos e mexa até ficar homogêneo", predomina o tipo textual:', ['narrativo', 'descritivo', 'injuntivo', 'dissertativo-argumentativo'], 2, 'Resposta C (injuntivo). O trecho instrui o leitor a fazer algo, com verbos no imperativo (misture, adicione, mexa). É a marca do texto injuntivo, comum em receitas e manuais.'),
    ex('portugues-1', 4, S, 'A charge é um gênero textual que se caracteriza por:', ['relatar objetivamente um fato recente, sem opinião', 'unir imagem e humor para criticar um fato atual', 'explicar um conceito científico com definições', 'narrar a vida de uma pessoa em ordem cronológica'], 1, 'Resposta B. A charge combina desenho e texto, usa humor e ironia e faz crítica a fatos sociais ou políticos atuais. A é a notícia, C é um texto expositivo e D é uma biografia.'),
    ex('portugues-1', 5, S, 'Texto: "Ler um bom livro não serve apenas para passar o tempo. Quem lê com frequência amplia o vocabulário, desenvolve a imaginação e escreve com mais facilidade." Assinale a alternativa INCORRETA em relação ao texto.', ['A leitura ajuda a ampliar o vocabulário.', 'A leitura desenvolve a imaginação.', 'A leitura serve apenas para passar o tempo.', 'Quem lê com frequência tende a escrever melhor.'], 2, 'Resposta C (a incorreta). O texto diz exatamente o contrário: ler "não serve apenas para passar o tempo". As alternativas A, B e D repetem benefícios citados. Atenção ao comando "INCORRETA" e à palavra "apenas", que costuma indicar exagero.'),
  ],
}

export const PORTUGUES_2: Lesson = {
  slug: 'portugues-2',
  title: 'Variação linguística e funções da linguagem',
  blocks: [
    { type: 'p', text: 'Uma língua não é falada de um único jeito. A **variação linguística** estuda essas diferenças, e as **funções da linguagem** mostram qual é o objetivo de quem fala ou escreve. Os dois temas aparecem sempre em provas de Português, inclusive na UEMG (2023 trouxe uma questão sobre variações regionais).' },
    { type: 'h', text: '1. Tipos de variação' },
    { type: 'table', head: ['Tipo', 'Depende de...', 'Exemplos'], rows: [
      ['Diatópica (regional)', 'Lugar onde se fala', 'Sotaque mineiro, "mainha" no Nordeste, "guri" no Sul, "trem" em Minas'],
      ['Diastrática (social)', 'Grupo social: escolaridade, idade, profissão', 'Gírias de jovens, jargão médico ou de informática'],
      ['Diacrônica (histórica)', 'Época', '"Vossa mercê" → "você"; "farmácia" já foi "pharmacia"'],
      ['Diafásica (situacional)', 'Situação de uso: formal ou informal', 'Entrevista de emprego × conversa com amigos'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Macete: dia-TÓ-pica = TÓpico = lugar. Dia-STRÁ-tica = estrato = camada social. Dia-CRÔ-nica = crono = tempo. Dia-FÁ-sica = fase = situação.' },
    { type: 'h', text: '2. Norma-padrão e preconceito linguístico' },
    { type: 'p', text: 'A **norma-padrão** é o modelo ensinado na escola e cobrado nos vestibulares e na redação. Já a **língua em uso** é o que as pessoas realmente falam. Nenhuma variação é "errada" em si: cada uma é adequada a certos contextos. Discriminar alguém pelo jeito de falar é o **preconceito linguístico**.' },
    { type: 'h', text: '3. Funções da linguagem' },
    { type: 'table', head: ['Função', 'Foco', 'Marcas', 'Exemplo'], rows: [
      ['Referencial', 'O assunto (o referente)', '3ª pessoa, linguagem objetiva', 'Notícias, textos científicos: "A água ferve a 100 °C."'],
      ['Emotiva (expressiva)', 'O emissor', '1ª pessoa, exclamações, emoção', '"Que saudade eu sinto de você!"'],
      ['Conativa (apelativa)', 'O receptor', 'Imperativo, vocativo, apelo', '"Compre agora e economize!"'],
      ['Fática', 'O canal de comunicação', 'Testar ou manter o contato', '"Alô? Está me ouvindo?"'],
      ['Metalinguística', 'O código (a própria língua)', 'A linguagem explica a linguagem', 'Dicionário e gramática: "Substantivo é a palavra que nomeia seres."'],
      ['Poética', 'A mensagem em si', 'Figuras de linguagem, ritmo, rima', 'Poemas e letras de música'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Um mesmo texto pode ter várias funções, mas a prova pede a **predominante**. Pergunte-se: o texto quer informar (referencial), expressar sentimento (emotiva), convencer (conativa), checar a comunicação (fática), explicar a língua (metalinguística) ou chamar atenção para a forma (poética)?' },
  ],
  exercises: [
    ex('portugues-2', 1, S, 'O uso de expressões como "trem" (em Minas Gerais) e "guri" (no Rio Grande do Sul) para se referir a objetos e meninos é um exemplo de variação:', ['diacrônica', 'diatópica', 'diafásica', 'diastrática'], 1, 'Resposta B (diatópica). A diferença depende do lugar (região) onde as pessoas moram. Diacrônica seria a variação no tempo; diafásica, na situação de uso; diastrática, no grupo social.'),
    ex('portugues-2', 2, S, 'Uma pessoa usa linguagem formal numa entrevista de emprego e linguagem bem informal ao conversar com os amigos. Isso mostra variação:', ['diatópica', 'diacrônica', 'diafásica', 'regional'], 2, 'Resposta C (diafásica). A mesma pessoa muda o jeito de falar conforme a situação (formal ou informal). Não depende do lugar (diatópica ou regional) nem da época (diacrônica).'),
    ex('portugues-2', 3, S, 'No anúncio "Compre agora e economize! Aproveite!", predomina a função da linguagem:', ['referencial', 'emotiva', 'conativa', 'poética'], 2, 'Resposta C (conativa). O texto tenta convencer o leitor a agir, com verbos no imperativo (compre, economize, aproveite). É a função centrada no receptor.'),
    ex('portugues-2', 4, S, 'No trecho de uma gramática "Verbo é a palavra que indica ação, estado ou fenômeno", predomina a função:', ['conativa', 'fática', 'metalinguística', 'emotiva'], 2, 'Resposta C (metalinguística). A linguagem está sendo usada para explicar a própria língua (um conceito gramatical). É típica de gramáticas e dicionários.'),
    ex('portugues-2', 5, S, 'Em "Que saudade danada eu sinto de você!", predomina a função da linguagem:', ['referencial', 'emotiva', 'metalinguística', 'conativa'], 1, 'Resposta B (emotiva). O foco está no emissor e em seu sentimento: 1ª pessoa (eu sinto), exclamação e expressão de emoção (saudade danada). Não há apelo ao leitor nem informação objetiva.'),
  ],
}
