import type { Lesson } from '../../domain/lesson'
import { ex } from './helpers'

const S = 'biologia' as const

const SVG_CELL = `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="320" height="220" fill="#fff"/>
<ellipse cx="160" cy="110" rx="140" ry="95" fill="#fff7ed" stroke="#c2410c" stroke-width="4"/>
<ellipse cx="160" cy="110" rx="132" ry="87" fill="#fffbeb" stroke="#fdba74" stroke-width="1.5"/>
<circle cx="160" cy="108" r="32" fill="#ede4ff" stroke="#6d28d9" stroke-width="3"/>
<circle cx="168" cy="102" r="9" fill="#6d28d9"/>
<ellipse cx="85" cy="85" rx="20" ry="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<path d="M70 85 q5 -6 10 0 t10 0 t10 0" fill="none" stroke="#b91c1c" stroke-width="1.5"/>
<ellipse cx="240" cy="140" rx="20" ry="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
<path d="M225 140 q5 -6 10 0 t10 0 t10 0" fill="none" stroke="#b91c1c" stroke-width="1.5"/>
<circle cx="80" cy="140" r="3" fill="#0f766e"/><circle cx="92" cy="148" r="3" fill="#0f766e"/><circle cx="70" cy="152" r="3" fill="#0f766e"/><circle cx="100" cy="136" r="3" fill="#0f766e"/>
<path d="M200 68 q20 -10 35 0 q-10 14 -35 0z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
<text x="160" y="156" text-anchor="middle" fill="#0a0a0f" font-size="10">núcleo</text>
<text x="62" y="68" fill="#b91c1c" font-size="10">mitocôndria</text>
<text x="55" y="172" fill="#0f766e" font-size="10">ribossomos</text>
<text x="196" y="62" fill="#15803d" font-size="10">complexo de Golgi</text>
<text x="14" y="30" fill="#c2410c" font-size="10">membrana plasmática</text>
<line x1="60" y1="33" x2="68" y2="40" stroke="#c2410c"/></svg>`

export const BIOLOGIA_1: Lesson = {
  slug: 'biologia-1',
  title: 'Citologia: célula, membrana e organelas',
  blocks: [
    { type: 'p', text: 'A célula é a unidade básica da vida: todos os seres vivos são formados por células. A Citologia estuda como elas são e como funcionam. Na UEMG, o tema já apareceu em questões sobre organelas, divisão celular e células-tronco.' },
    { type: 'h', text: '1. Procariontes × eucariontes' },
    { type: 'table', head: ['', 'Procarionte', 'Eucarionte'], rows: [
      ['Núcleo', 'Sem núcleo organizado (DNA solto no citoplasma)', 'Núcleo delimitado por membrana'],
      ['Organelas membranosas', 'Ausentes (só ribossomos)', 'Presentes (mitocôndrias, retículos, Golgi...)'],
      ['Tamanho', 'Menores', 'Maiores'],
      ['Exemplos', 'Bactérias e arqueas', 'Animais, plantas, fungos, protozoários'],
    ] },
    { type: 'h', text: '2. Organelas e funções' },
    { type: 'figure', svg: SVG_CELL, alt: 'Esquema de uma célula animal com núcleo, mitocôndrias, ribossomos e complexo de Golgi', caption: 'Esquema simplificado de uma célula animal.' },
    { type: 'table', head: ['Organela', 'Função'], rows: [
      ['Núcleo', 'Guarda o DNA e controla as atividades da célula'],
      ['Mitocôndria', 'Respiração celular: produz ATP (energia)'],
      ['Ribossomo', 'Síntese de proteínas'],
      ['Retículo endoplasmático rugoso', 'Produz e transporta proteínas (tem ribossomos)'],
      ['Retículo endoplasmático liso', 'Síntese de lipídios e desintoxicação'],
      ['Complexo de Golgi', 'Modifica, empacota e distribui substâncias'],
      ['Lisossomo', 'Digestão intracelular'],
      ['Peroxissomo', 'Oxida ácidos graxos e decompõe a água oxigenada'],
      ['Cloroplasto (só em vegetais e algas)', 'Fotossíntese'],
      ['Vacúolo grande e parede celular (só em vegetais)', 'Reserva de água e sustentação/proteção'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Erro clássico na prova: trocar as funções. Lisossomo digere; mitocôndria respira; retículo liso faz lipídios; retículo rugoso faz proteínas.' },
    { type: 'h', text: '3. Membrana plasmática e transporte' },
    { type: 'p', text: 'A membrana plasmática é formada por uma bicamada de **fosfolipídios** com proteínas (modelo mosaico fluido). Ela é **seletiva**: controla o que entra e sai.' },
    { type: 'table', head: ['Transporte', 'Gasta ATP?', 'Sentido', 'Exemplos'], rows: [
      ['Difusão simples', 'Não', 'Do mais concentrado para o menos concentrado', 'O₂ e CO₂'],
      ['Difusão facilitada', 'Não', 'A favor do gradiente, com proteínas carreadoras', 'Glicose'],
      ['Osmose', 'Não', 'Água passa do meio menos concentrado (hipotônico) para o mais concentrado (hipertônico)', 'Hemácia em água pura incha'],
      ['Transporte ativo', 'Sim', 'Contra o gradiente (do menos para o mais concentrado)', 'Bomba de sódio e potássio'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Osmose: a água "vai atrás do soluto", ou seja, para o lado mais concentrado. Uma hemácia em meio hipotônico (menos soluto fora) ganha água e pode estourar (lise).' },
  ],
  exercises: [
    ex('biologia-1', 1, S, 'A organela responsável pela respiração celular, produzindo a maior parte do ATP, é a:', ['mitocôndria', 'lisossomo', 'complexo de Golgi', 'retículo endoplasmático liso'], 0, 'Resposta A (mitocôndria). É nela que ocorre a respiração celular aeróbia, que libera energia armazenada em ATP. O lisossomo digere, o Golgi empacota e distribui, e o retículo liso sintetiza lipídios.'),
    ex('biologia-1', 2, S, 'Uma bactéria é uma célula procarionte porque:', ['não possui material genético', 'não possui núcleo delimitado por membrana', 'não possui membrana plasmática', 'possui mitocôndrias e cloroplastos'], 1, 'Resposta B. Em células procariontes o DNA fica solto no citoplasma, sem núcleo delimitado por membrana. Elas têm material genético e membrana plasmática, mas não têm organelas membranosas como mitocôndrias e cloroplastos.'),
    ex('biologia-1', 3, S, 'Uma hemácia colocada em água destilada (meio hipotônico) tende a:', ['perder água e murchar', 'ganhar água e inchar, podendo estourar', 'permanecer exatamente igual', 'fazer transporte ativo de sódio'], 1, 'Resposta B. Na água destilada há menos soluto fora da célula. Por osmose, a água passa para o lado mais concentrado (dentro da hemácia), que incha e pode se romper (lise). Perder água e murchar aconteceria em meio hipertônico.'),
    ex('biologia-1', 4, S, 'Uma estrutura encontrada em células vegetais, mas não em células animais, é:', ['núcleo', 'mitocôndria', 'cloroplasto', 'ribossomo'], 2, 'Resposta C (cloroplasto). Ele faz a fotossíntese e existe em vegetais e algas. Núcleo, mitocôndrias e ribossomos existem em células animais e vegetais. Também só as vegetais têm parede celular e vacúolo grande.'),
    ex('biologia-1', 5, S, 'O transporte ativo através da membrana plasmática se caracteriza por:', ['ocorrer a favor do gradiente de concentração, sem gasto de energia', 'ocorrer contra o gradiente de concentração, com gasto de ATP', 'ser exclusivo da passagem de água', 'depender apenas da temperatura'], 1, 'Resposta B. No transporte ativo, a célula move substâncias do meio menos concentrado para o mais concentrado, contra o gradiente, e por isso gasta ATP. Um exemplo é a bomba de sódio e potássio. A é o transporte passivo; C descreve a osmose.'),
  ],
}

export const BIOLOGIA_2: Lesson = {
  slug: 'biologia-2',
  title: 'Metabolismo energético, enzimas e divisão celular',
  blocks: [
    { type: 'p', text: 'As células precisam de energia o tempo todo. Essa energia fica guardada no **ATP**, a "moeda de energia" da célula. Aqui você vai ver como o ATP é produzido, como as enzimas aceleram as reações e como as células se dividem (temas que já caíram na UEMG).' },
    { type: 'h', text: '1. Respiração celular aeróbia' },
    { type: 'math', tex: String.raw`C_6H_{12}O_6 + 6\,O_2 \longrightarrow 6\,CO_2 + 6\,H_2O + \text{energia (ATP)}` },
    { type: 'table', head: ['Etapa', 'Onde ocorre', 'O que acontece', 'Saldo'], rows: [
      ['Glicólise', 'Citoplasma (hialoplasma)', 'Glicose é quebrada em 2 piruvatos (sem oxigênio)', '2 ATP'],
      ['Ciclo de Krebs', 'Matriz da mitocôndria', 'Piruvato é degradado e libera CO₂', '2 ATP'],
      ['Cadeia respiratória', 'Cristas mitocondriais', 'Elétrons passam por proteínas; o O₂ é o aceptor final e forma água', 'cerca de 32 a 34 ATP'],
    ] },
    { type: 'p', text: 'Saldo total: cerca de **36 a 38 ATP** por glicose.' },
    { type: 'h', text: '2. Fermentação' },
    { type: 'p', text: 'Sem oxigênio, a célula faz só a glicólise e depois fermenta. O saldo é de apenas **2 ATP** por glicose.' },
    { type: 'table', head: ['Tipo', 'Produtos', 'Quem faz'], rows: [
      ['Alcoólica', 'Etanol + CO₂', 'Leveduras (pão, cerveja, vinho)'],
      ['Láctica', 'Ácido lático', 'Bactérias do iogurte; músculos em esforço intenso'],
    ] },
    { type: 'h', text: '3. Fotossíntese (resumo)' },
    { type: 'math', tex: String.raw`6\,CO_2 + 6\,H_2O \xrightarrow{\ \text{luz, clorofila}\ } C_6H_{12}O_6 + 6\,O_2` },
    { type: 'p', text: 'Ocorre nos **cloroplastos** e é o processo inverso da respiração: produz glicose e libera O₂.' },
    { type: 'h', text: '4. Enzimas' },
    { type: 'list', items: ['São **proteínas catalisadoras**: aceleram reações sem serem consumidas.', 'Cada uma é **específica**: o substrato se encaixa no **sítio ativo** (modelo chave-fechadura).', '**Temperatura:** cada enzima tem uma temperatura ótima; calor excessivo causa **desnaturação** (perda da forma e da função).', '**pH:** cada enzima tem um pH ótimo (pepsina ≈ 2; amilase salivar ≈ 7; tripsina ≈ 8). Fora dele, a atividade cai.'] },
    { type: 'h', text: '5. Divisão celular' },
    { type: 'table', head: ['', 'Mitose', 'Meiose'], rows: [
      ['Onde', 'Células do corpo (crescimento e reparo)', 'Células germinativas (formação de gametas)'],
      ['Divisões', '1', '2 (meiose I e II)'],
      ['Células-filhas', '2, idênticas à mãe (mesmo número de cromossomos)', '4, com metade dos cromossomos (haploides) e geneticamente diferentes'],
      ['Variabilidade', 'Não gera', 'Gera (crossing-over e separação aleatória)'],
    ] },
    { type: 'p', text: '**Fases da mitose (PMAT):** **P**rófase (cromossomos se condensam), **M**etáfase (alinham-se na placa equatorial), **A**náfase (cromátides-irmãs se separam e vão para polos opostos) e **T**elófase (formam-se dois núcleos e a célula se divide).' },
    { type: 'callout', kind: 'atencao', text: 'Na meiose I separam-se os cromossomos **homólogos**; na meiose II separam-se as **cromátides-irmãs** (como na mitose). A metáfase I tem pares de homólogos alinhados.' },
  ],
  exercises: [
    ex('biologia-2', 1, S, 'A etapa inicial da respiração celular, chamada glicólise, ocorre:', ['na matriz da mitocôndria', 'no citoplasma da célula', 'no núcleo', 'nos cloroplastos'], 1, 'Resposta B. A glicólise acontece no citoplasma (hialoplasma) e não depende de oxigênio. O ciclo de Krebs ocorre na matriz mitocondrial e a cadeia respiratória, nas cristas da mitocôndria.'),
    ex('biologia-2', 2, S, 'O aquecimento excessivo de uma enzima provoca:', ['aumento contínuo da atividade enzimática', 'a desnaturação da proteína, com perda de função', 'a transformação da enzima em carboidrato', 'a produção de mais substrato'], 1, 'Resposta B. Enzimas são proteínas. Temperaturas muito altas alteram sua forma tridimensional (desnaturação), e o sítio ativo deixa de encaixar no substrato, o que faz a enzima perder a função.'),
    ex('biologia-2', 3, S, 'Os produtos da fermentação alcoólica realizada por leveduras são:', ['etanol e gás carbônico', 'ácido lático e água', 'glicose e oxigênio', 'ATP e oxigênio'], 0, 'Resposta A. Na fermentação alcoólica, o piruvato vira etanol e CO₂ (é o CO₂ que faz o pão crescer). O ácido lático é produto da fermentação láctica. O saldo energético é de só 2 ATP.'),
    ex('biologia-2', 4, S, 'Na mitose, a fase em que os cromossomos se alinham na região central (placa equatorial) da célula é a:', ['prófase', 'metáfase', 'anáfase', 'telófase'], 1, 'Resposta B (metáfase). Na prófase os cromossomos se condensam; na metáfase alinham-se na placa equatorial; na anáfase as cromátides-irmãs se separam; na telófase formam-se os dois novos núcleos.'),
    ex('biologia-2', 5, S, 'Uma célula diploide sofre meiose. Ao final do processo, formam-se:', ['2 células idênticas à célula mãe', '4 células haploides, geneticamente diferentes entre si', '4 células diploides idênticas', '1 célula com o dobro de cromossomos'], 1, 'Resposta B. A meiose tem duas divisões e produz 4 células com metade do número de cromossomos (haploides), diferentes entre si por causa do crossing-over e da separação aleatória dos homólogos. É assim que se formam os gametas.'),
  ],
}
