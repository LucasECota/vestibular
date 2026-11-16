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
