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

export const BIOLOGIA_3: Lesson = {
  slug: 'biologia-3',
  title: 'Genética: Mendel e heredogramas',
  blocks: [
    { type: 'p', text: 'A Genética explica como as características passam dos pais para os filhos. Gregor Mendel, estudando ervilhas, descobriu as leis básicas da hereditariedade. Na UEMG já caiu probabilidade com genótipos (2023).' },
    { type: 'h', text: '1. Vocabulário essencial' },
    { type: 'table', head: ['Termo', 'Significado', 'Exemplo'], rows: [
      ['Gene', 'Trecho de DNA que determina uma característica', 'cor da semente'],
      ['Alelos', 'Formas diferentes de um mesmo gene', 'A (dominante) e a (recessivo)'],
      ['Genótipo', 'Combinação de alelos do indivíduo', 'AA, Aa, aa'],
      ['Fenótipo', 'Característica observável (genótipo + ambiente)', 'semente amarela'],
      ['Homozigoto', 'Alelos iguais', 'AA ou aa'],
      ['Heterozigoto', 'Alelos diferentes', 'Aa'],
      ['Dominante', 'Se manifesta mesmo em dose única', 'A'],
      ['Recessivo', 'Só se manifesta em dose dupla', 'aa'],
    ] },
    { type: 'h', text: '2. Primeira lei de Mendel (segregação)' },
    { type: 'p', text: 'Cada característica é determinada por **dois fatores (alelos)**, que se **separam** na formação dos gametas: cada gameta leva apenas um deles.' },
    { type: 'p', text: 'Cruzamento de dois heterozigotos (**Aa × Aa**) pelo quadro de Punnett:' },
    { type: 'table', head: ['', 'A', 'a'], rows: [
      ['**A**', 'AA', 'Aa'],
      ['**a**', 'Aa', 'aa'],
    ] },
    { type: 'p', text: 'Proporção genotípica: **1 AA : 2 Aa : 1 aa**. Proporção fenotípica: **3 dominantes : 1 recessivo**. Ou seja, a chance de aa é 1/4.' },
    { type: 'callout', kind: 'dica', title: 'Macete dos heredogramas', text: 'Pais **sem** a característica que têm um filho **com** ela: a característica é **recessiva** e os pais são heterozigotos (Aa). Exemplo clássico: casal de pigmentação normal com filho albino.' },
    { type: 'h', text: '3. Probabilidade em Genética' },
    { type: 'list', items: ['**Regra do "e":** eventos independentes que precisam acontecer juntos → **multiplica** as probabilidades.', '**Regra do "ou":** eventos que não podem ocorrer juntos → **soma** as probabilidades.', 'Exemplo: Aa × Aa terem **dois** filhos aa = 1/4 × 1/4 = 1/16.'] },
    { type: 'h', text: '4. Segunda lei de Mendel' },
    { type: 'p', text: 'Genes para características diferentes, localizados em cromossomos diferentes, **segregam-se independentemente**. O cruzamento AaBb × AaBb dá a proporção fenotípica **9 : 3 : 3 : 1**.' },
    { type: 'h', text: '5. Sistema ABO e ligação ao sexo' },
    { type: 'table', head: ['Grupo', 'Genótipos possíveis'], rows: [
      ['A', String.raw`$I^AI^A$ ou $I^Ai$`],
      ['B', String.raw`$I^BI^B$ ou $I^Bi$`],
      ['AB', String.raw`$I^AI^B$ (codominância)`],
      ['O', 'ii'],
    ] },
    { type: 'p', text: 'Doenças como **daltonismo** e **hemofilia** são recessivas e ligadas ao cromossomo **X**. Homens (XY) têm um único X, por isso são mais afetados. Mulheres (XX) precisam de dois alelos recessivos.' },
    { type: 'callout', kind: 'exemplo', text: 'Mãe portadora ($X^DX^d$) × pai normal ($X^DY$): filhos possíveis $X^DX^D$, $X^DX^d$, $X^DY$ e $X^dY$, cada um com 1/4. A chance de um filho ser um **menino daltônico** ($X^dY$) é 1/4.' },
  ],
  exercises: [
    ex('biologia-3', 1, S, 'Do cruzamento de dois indivíduos heterozigotos (Aa × Aa), a probabilidade de nascer um descendente homozigoto recessivo (aa) é:', ['1/4', '1/2', '3/4', '1'], 0, 'Resposta A (1/4). No quadro de Punnett saem AA, Aa, Aa e aa. Só um dos quatro cruzamentos é aa, ou seja, 1/4 (25%).'),
    ex('biologia-3', 2, S, 'Um casal de pigmentação normal tem um filho albino (albinismo é recessivo). Os genótipos dos pais são:', ['AA e AA', 'Aa e Aa', 'aa e aa', 'AA e aa'], 1, 'Resposta B (Aa e Aa). O filho albino é aa, então cada pai passou um alelo a. Como os pais têm pigmentação normal, também têm o alelo dominante A. Logo, ambos são heterozigotos (Aa).'),
    ex('biologia-3', 3, S, 'Um casal Aa × Aa terá dois filhos. A probabilidade de os dois serem aa é:', ['1/2', '1/4', '1/8', '1/16'], 3, 'Resposta D (1/16). Para cada filho, P(aa) = 1/4. Como os dois eventos precisam acontecer juntos e são independentes, multiplicamos: 1/4 × 1/4 = 1/16.'),
    ex('biologia-3', 4, S, 'Um homem do grupo sanguíneo A (genótipo IAi) casa-se com uma mulher do grupo B (genótipo IBi). A probabilidade de terem um filho do grupo O é:', ['0', '1/4', '1/2', '1'], 1, 'Resposta B (1/4). Cada um passa IA ou i (pai) e IB ou i (mãe). O grupo O (ii) exige que os dois passem i: 1/2 × 1/2 = 1/4. Os outros filhos podem ser AB, A ou B, 1/4 cada.'),
    ex('biologia-3', 5, S, 'O daltonismo é recessivo e ligado ao cromossomo X. Uma mulher portadora (XDXd) casa-se com um homem normal (XDY). A probabilidade de terem um menino daltônico é:', ['1/8', '1/4', '1/2', '3/4'], 1, 'Resposta B (1/4). Os filhos possíveis são XDXD, XDXd, XDY e XdY, cada um com probabilidade 1/4. O menino daltônico é o XdY, ou seja, 1/4 de todos os filhos (ou 1/2 dos meninos).'),
  ],
}

export const BIOLOGIA_4: Lesson = {
  slug: 'biologia-4',
  title: 'Biotecnologia e evolução',
  blocks: [
    { type: 'p', text: 'Biotecnologia usa seres vivos ou seus componentes para criar produtos. A evolução explica como os seres vivos mudam ao longo do tempo. As duas se encontram na hereditariedade: o DNA. Para a Engenharia Ambiental, ambas são importantes (biorremediação, resistência a pesticidas, conservação).' },
    { type: 'h', text: '1. Biotecnologia' },
    { type: 'table', head: ['Técnica', 'O que é', 'Exemplos'], rows: [
      ['DNA recombinante (engenharia genética)', 'Cortar e colar genes com enzimas de restrição e ligases', 'Insulina humana produzida por bactérias'],
      ['Transgênicos (OGM)', 'Organismos que recebem gene de outra espécie', 'Soja resistente a herbicida; milho Bt'],
      ['Clonagem', 'Obter cópias geneticamente idênticas', 'Ovelha Dolly (1996), a partir de célula adulta'],
      ['Células-tronco', 'Células capazes de se multiplicar e se diferenciar', 'Terapias celulares; pesquisa'],
      ['PCR', 'Copia (amplifica) trechos de DNA', 'Teste de COVID-19, exame de paternidade'],
      ['CRISPR', 'Edita genes de forma precisa', 'Pesquisa de doenças genéticas'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Células-tronco **embrionárias** são pluripotentes (geram quase todos os tipos de célula). As **adultas** são multipotentes (mais limitadas). Elas se multiplicam por mitose e podem gerar tumores se saírem de controle (assunto da UEMG 2024).' },
    { type: 'h', text: '2. Teorias evolutivas' },
    { type: 'table', head: ['', 'Lamarck (1809)', 'Darwin e Wallace (1859)'], rows: [
      ['Ideia central', 'Uso e desuso e herança dos caracteres adquiridos', 'Seleção natural'],
      ['Exemplo', 'O pescoço da girafa cresceu de tanto esticar; os filhos já nasceriam com pescoço maior', 'Girafas de pescoço mais longo alcançavam mais folhas, sobreviviam mais e deixavam mais descendentes'],
      ['Hoje', 'Superada (características adquiridas não são herdadas)', 'Aceita e complementada pela genética'],
    ] },
    { type: 'p', text: '**Seleção natural (Darwin):** 1) os indivíduos de uma população **variam**; 2) parte dessa variação é **hereditária**; 3) nascem mais indivíduos do que o ambiente sustenta (**luta pela sobrevivência**); 4) os **mais adaptados** sobrevivem e deixam mais descendentes.' },
    { type: 'callout', kind: 'exemplo', title: 'Seleção natural em ação', text: 'Ao usar antibiótico, morrem as bactérias sensíveis; as raras bactérias resistentes sobrevivem e se multiplicam. O antibiótico não "cria" a resistência: ele selecionou quem já tinha. O mesmo vale para insetos resistentes a inseticidas.' },
    { type: 'h', text: '3. Teoria sintética da evolução' },
    { type: 'list', items: ['Une Darwin à genética. Fontes de variabilidade: **mutação** e **recombinação gênica** (meiose e reprodução sexuada).', 'Fatores evolutivos: **seleção natural**, **deriva genética**, **migração (fluxo gênico)** e **mutação**.', '**Especiação:** formação de novas espécies, geralmente após isolamento geográfico e reprodutivo.'] },
    { type: 'h', text: '4. Evidências da evolução' },
    { type: 'table', head: ['Evidência', 'Explicação', 'Exemplo'], rows: [
      ['Fósseis', 'Restos de seres antigos mostram formas intermediárias', 'Archaeopteryx (réptil e ave)'],
      ['Órgãos homólogos', 'Mesma origem embrionária, funções que podem diferir', 'Braço humano, asa de morcego, nadadeira de baleia'],
      ['Órgãos análogos', 'Mesma função, origens diferentes', 'Asa de ave e asa de inseto'],
      ['Moleculares', 'Semelhança de DNA e proteínas entre espécies', 'Humanos e chimpanzés'],
    ] },
  ],
  exercises: [
    ex('biologia-4', 1, S, 'A ideia de que o pescoço da girafa se alongou por esticar-se para alcançar folhas altas, e que essa característica foi transmitida aos filhos, corresponde à teoria de:', ['Darwin', 'Lamarck', 'Mendel', 'Pasteur'], 1, 'Resposta B (Lamarck). Ele propôs a lei do uso e desuso e a herança dos caracteres adquiridos. Hoje sabemos que o que é adquirido em vida não altera o DNA nem passa aos descendentes.'),
    ex('biologia-4', 2, S, 'Segundo Darwin, a seleção natural ocorre porque:', ['os organismos criam mutações de acordo com suas necessidades', 'os mais adaptados ao ambiente sobrevivem e deixam mais descendentes', 'o uso excessivo de um órgão o desenvolve', 'todos os indivíduos de uma espécie são iguais'], 1, 'Resposta B. Havendo variação hereditária e recursos limitados, os indivíduos mais adaptados têm mais chance de sobreviver e se reproduzir, e suas características se tornam mais comuns na população.'),
    ex('biologia-4', 3, S, 'O braço humano, a asa de um morcego e a nadadeira de uma baleia são exemplos de:', ['órgãos análogos', 'órgãos homólogos', 'órgãos vestigiais', 'convergência adaptativa'], 1, 'Resposta B (homólogos). Têm a mesma origem embrionária e estrutura básica, ainda que desempenhem funções diferentes. Isso indica um ancestral comum. Análogos têm a mesma função, mas origens diferentes.'),
    ex('biologia-4', 4, S, 'Um organismo transgênico é aquele que:', ['foi clonado a partir de uma célula adulta', 'recebeu em seu genoma um gene de outra espécie', 'possui o dobro de cromossomos', 'sofreu mutação por radiação natural'], 1, 'Resposta B. Transgênicos (OGM) recebem genes de outras espécies por engenharia genética, como o milho Bt, que ganha um gene de bactéria. Clonagem é a produção de cópias idênticas.'),
    ex('biologia-4', 5, S, 'O aparecimento de populações de bactérias resistentes a antibióticos é explicado principalmente pela:', ['herança dos caracteres adquiridos', 'seleção natural das bactérias já resistentes', 'vontade das bactérias de se adaptar', 'ação direta do antibiótico, que cria a resistência'], 1, 'Resposta B. Na população há bactérias com variações; as raras que já eram resistentes sobrevivem ao antibiótico, se multiplicam e passam o gene adiante. Por isso é importante usar antibióticos só com receita e até o fim.'),
  ],
}

const SVG_PIRAMIDE = `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
<rect width="340" height="220" fill="#fff"/>
<text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#0a0a0f">Pirâmide de energia (regra dos 10%)</text>
<rect x="115" y="30" width="110" height="38" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/><text x="170" y="48" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Consumidor 3º</text><text x="170" y="62" text-anchor="middle" fill="#0a0a0f">10 kJ</text>
<rect x="85" y="72" width="170" height="38" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="170" y="90" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Consumidor 2º</text><text x="170" y="104" text-anchor="middle" fill="#0a0a0f">100 kJ</text>
<rect x="55" y="114" width="230" height="38" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="170" y="132" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Consumidor 1º (herbívoro)</text><text x="170" y="146" text-anchor="middle" fill="#0a0a0f">1 000 kJ</text>
<rect x="25" y="156" width="290" height="38" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="170" y="174" text-anchor="middle" fill="#0a0a0f" font-weight="bold">Produtores (plantas)</text><text x="170" y="188" text-anchor="middle" fill="#0a0a0f">10 000 kJ</text>
<text x="170" y="212" text-anchor="middle" fill="#0a0a0f">A cada nível, só cerca de 10% da energia passa ao seguinte.</text></svg>`

export const BIOLOGIA_5: Lesson = {
  slug: 'biologia-5',
  title: 'Ecologia: cadeias, ciclos, biomas e impactos ambientais',
  blocks: [
    { type: 'p', text: 'Ecologia estuda as relações dos seres vivos entre si e com o ambiente. É o coração da Biologia para a Engenharia Ambiental e já apareceu na UEMG em cadeia alimentar (2024) e biomas (2023). O conteúdo programático oficial também inclui poluição e desenvolvimento sustentável.' },
    { type: 'h', text: '1. Níveis de organização' },
    { type: 'table', head: ['Nível', 'Definição', 'Exemplo'], rows: [
      ['Espécie', 'Indivíduos que se cruzam e geram descendentes férteis', 'Onça-pintada'],
      ['População', 'Indivíduos da mesma espécie, na mesma área e tempo', 'Todas as onças de um parque'],
      ['Comunidade (biocenose)', 'Conjunto de populações de espécies diferentes em uma área', 'Onças, capivaras, plantas, fungos...'],
      ['Ecossistema', 'Comunidade + ambiente físico (clima, solo, água)', 'Pantanal'],
      ['Bioma', 'Grande conjunto de ecossistemas com clima e vegetação característicos', 'Cerrado'],
      ['Biosfera', 'Todos os ecossistemas da Terra', 'O planeta vivo'],
    ] },
    { type: 'callout', kind: 'dica', text: '**Habitat** é o "endereço" (onde a espécie vive). **Nicho ecológico** é a "profissão" (o que ela faz e de que se alimenta).' },
    { type: 'h', text: '2. Cadeias alimentares e fluxo de energia' },
    { type: 'list', items: ['**Produtores** (plantas, algas): fazem fotossíntese. **Consumidores:** primários (herbívoros), secundários (comem herbívoros), terciários... **Decompositores** (fungos e bactérias): reciclam a matéria.', 'A cadeia começa sempre no produtor: capim → gafanhoto → sapo → cobra. Várias cadeias interligadas formam uma **teia alimentar**.', 'A **energia** flui em **um só sentido** (Sol → produtores → consumidores → calor) e só cerca de **10%** passa de um nível trófico a outro. A **matéria**, ao contrário, é reciclada.'] },
    { type: 'figure', svg: SVG_PIRAMIDE, alt: 'Pirâmide com produtores na base com 10 mil kJ e consumidores acima com 1000, 100 e 10 kJ', caption: 'Por isso há muito menos predadores de topo do que herbívoros.' },
    { type: 'h', text: '3. Relações ecológicas' },
    { type: 'table', head: ['Relação', 'Tipo', 'Exemplo'], rows: [
      ['Mutualismo', 'Harmônica (ambos ganham, interdependentes)', 'Líquen (alga + fungo); micorrizas'],
      ['Protocooperação', 'Harmônica (ambos ganham, mas vivem sem a relação)', 'Anu e gado'],
      ['Comensalismo', 'Harmônica (um ganha, o outro não é afetado)', 'Rêmora e tubarão'],
      ['Predação', 'Desarmônica (um mata e come o outro)', 'Onça e capivara'],
      ['Parasitismo', 'Desarmônica (um prejudica o outro, sem matar rapidamente)', 'Carrapato e boi'],
      ['Competição', 'Desarmônica (disputa por recursos)', 'Dois herbívoros pelo mesmo pasto'],
    ] },
    { type: 'h', text: '4. Ciclos biogeoquímicos' },
    { type: 'list', items: ['**Carbono:** fotossíntese retira CO₂; respiração, decomposição e queima de combustíveis o devolvem.', '**Nitrogênio:** bactérias fixam o N₂ do ar (fixação), formam nitratos que as plantas absorvem; a decomposição e a desnitrificação devolvem N₂.', '**Água:** evaporação, condensação, precipitação e infiltração.'] },
    { type: 'h', text: '5. Impactos ambientais' },
    { type: 'table', head: ['Problema', 'Causa', 'Consequência'], rows: [
      ['Efeito estufa intensificado', 'Queima de combustíveis fósseis, queimadas', 'Aquecimento global'],
      ['Eutrofização', 'Esgoto e fertilizantes (excesso de nutrientes) na água', 'Proliferação de algas, falta de oxigênio, morte de peixes'],
      ['Bioacumulação / magnificação trófica', 'Poluentes persistentes (mercúrio, DDT) que se acumulam ao longo da cadeia', 'Maior concentração nos predadores de topo'],
      ['Chuva ácida', 'Óxidos de enxofre e nitrogênio', 'Danos a solos, água e construções'],
      ['Desmatamento', 'Agropecuária e urbanização', 'Perda de biodiversidade, erosão, assoreamento'],
    ] },
    { type: 'callout', kind: 'atencao', text: '**Desenvolvimento sustentável:** atender às necessidades de hoje sem comprometer as das gerações futuras, equilibrando economia, sociedade e ambiente.' },
  ],
  exercises: [
    ex('biologia-5', 1, S, 'O conjunto de populações de espécies diferentes que vivem em uma mesma área é chamado de:', ['espécie', 'população', 'comunidade', 'bioma'], 2, 'Resposta C (comunidade, ou biocenose). População é um grupo de indivíduos da mesma espécie. Bioma é um conjunto de ecossistemas muito maior, com clima e vegetação típicos.'),
    ex('biologia-5', 2, S, 'Na cadeia alimentar capim → gafanhoto → sapo → cobra, o sapo é um consumidor:', ['primário', 'secundário', 'terciário', 'produtor'], 1, 'Resposta B (secundário). O capim é o produtor; o gafanhoto, que come o produtor, é consumidor primário; o sapo, que come o gafanhoto, é secundário; a cobra é terciária.'),
    ex('biologia-5', 3, S, 'Em uma cadeia alimentar, os produtores armazenam 10 000 kJ de energia. Considerando que só 10% passa de um nível para o seguinte, os consumidores secundários receberão:', ['1 000 kJ', '100 kJ', '10 kJ', '10 000 kJ'], 1, 'Resposta B (100 kJ). Produtores: 10 000 kJ → consumidores primários: 10% = 1 000 kJ → consumidores secundários: 10% de 1 000 = 100 kJ.'),
    ex('biologia-5', 4, S, 'A associação entre alga e fungo que forma os líquens, em que ambos se beneficiam, é um exemplo de:', ['parasitismo', 'predação', 'mutualismo', 'competição'], 2, 'Resposta C (mutualismo). A alga faz fotossíntese e alimenta o fungo, e o fungo protege a alga e retém água. Os dois ganham e dependem um do outro (relação harmônica).'),
    ex('biologia-5', 5, S, 'O excesso de esgoto e de fertilizantes em lagos e rios provoca a proliferação de algas e a diminuição do oxigênio na água. Esse fenômeno é chamado de:', ['chuva ácida', 'eutrofização', 'bioacumulação', 'inversão térmica'], 1, 'Resposta B (eutrofização). Os nutrientes em excesso fazem as algas se multiplicarem. Quando morrem, a decomposição consome o oxigênio da água e muitos peixes morrem.'),
  ],
}

export const BIOLOGIA_6: Lesson = {
  slug: 'biologia-6',
  title: 'Fisiologia humana e saúde',
  blocks: [
    { type: 'p', text: 'Fisiologia estuda como o corpo funciona. Cada sistema tem uma função e todos trabalham juntos. O programa oficial da UEMG cobra o funcionamento dos sistemas respiratório, excretor, nervoso, digestório, locomotor, circulatório e endócrino, além de saúde e doenças.' },
    { type: 'h', text: '1. Sistema digestório' },
    { type: 'table', head: ['Órgão', 'O que faz'], rows: [
      ['Boca', 'Mastigação e início da digestão do amido (amilase salivar)'],
      ['Estômago', 'Suco gástrico (HCl e pepsina) digere proteínas'],
      ['Fígado e pâncreas', 'Fígado produz a **bile** (emulsifica gorduras); pâncreas produz enzimas (tripsina, lipase) e **insulina**'],
      ['Intestino delgado', 'Digestão final e **absorção dos nutrientes** (vilosidades)'],
      ['Intestino grosso', 'Absorve água e forma as fezes'],
    ] },
    { type: 'h', text: '2. Sistemas respiratório e circulatório' },
    { type: 'list', items: ['**Respiratório:** o ar passa por nariz → faringe → laringe → traqueia → brônquios → **alvéolos**, onde ocorrem as **trocas gasosas** (O₂ entra no sangue, CO₂ sai). O **diafragma** controla a ventilação.', '**Circulatório:** o coração tem 4 câmaras (2 átrios e 2 ventrículos). A circulação é **dupla e completa**: a **pequena** (coração → pulmões → coração) oxigena o sangue; a **grande** (coração → corpo → coração) leva O₂ aos tecidos.', 'O **ventrículo esquerdo** bombeia sangue oxigenado para o corpo pela **aorta**. As **artérias** saem do coração; as **veias** chegam a ele.', '**Sangue:** hemácias (levam O₂ pela hemoglobina), leucócitos (defesa) e plaquetas (coagulação).'] },
    { type: 'h', text: '3. Sistemas excretor, nervoso e endócrino' },
    { type: 'table', head: ['Sistema', 'Função', 'Destaques'], rows: [
      ['Excretor', 'Filtra o sangue e elimina excretas', 'O **néfron** (unidade do rim) forma a urina; ureia e sais; regula água e sais do corpo'],
      ['Nervoso', 'Recebe, interpreta e responde a estímulos', 'Neurônio, **sinapse**, SNC (encéfalo e medula) e SNP (nervos); ato reflexo'],
      ['Endócrino', 'Regula funções por hormônios no sangue', 'Insulina (baixa a glicose) e glucagon (aumenta); tireoide; adrenalina; hormônios sexuais'],
    ] },
    { type: 'callout', kind: 'atencao', text: 'Diabetes: falta ou ação ineficaz da **insulina**, com glicose alta no sangue. Insulina e glucagon agem em sentidos opostos.' },
    { type: 'h', text: '4. Locomotor e reprodução' },
    { type: 'list', items: ['**Locomotor:** ossos (sustentação, proteção), músculos (contração) e articulações; o músculo precisa de cálcio e de ATP.', '**Reprodução humana:** o óvulo é fecundado na tuba uterina e o embrião se implanta no útero; anexos embrionários (placenta, âmnio). **Métodos contraceptivos:** barreira (camisinha, a única que também protege de ISTs), hormonais (pílula), DIU e cirúrgicos.'] },
    { type: 'h', text: '5. Saúde e doenças' },
    { type: 'table', head: ['Doença', 'Agente', 'Transmissão ou prevenção'], rows: [
      ['Dengue, zika, chikungunya', 'Vírus', 'Mosquito Aedes aegypti: **eliminar água parada**'],
      ['Malária', 'Protozoário (Plasmodium)', 'Mosquito Anopheles'],
      ['Doença de Chagas', 'Protozoário', 'Barbeiro (inseto)'],
      ['Esquistossomose', 'Verme (platelminto)', 'Água contaminada com fezes; **saneamento**'],
      ['Gripe, sarampo, COVID-19', 'Vírus', 'Contato e vias respiratórias; **vacinas**'],
      ['Tuberculose, cólera', 'Bactérias', 'Ar ou água contaminada; saneamento; antibióticos'],
    ] },
    { type: 'callout', kind: 'dica', text: 'Prevenção: **saneamento básico** (água tratada e esgoto), **vacinação**, higiene e controle de vetores. Muitos desses problemas têm ligação com o ambiente (Engenharia Ambiental).' },
  ],
  exercises: [
    ex('biologia-6', 1, S, 'A maior parte da absorção dos nutrientes ocorre no:', ['estômago', 'intestino delgado', 'intestino grosso', 'fígado'], 1, 'Resposta B (intestino delgado). Suas vilosidades aumentam muito a superfície de absorção. O intestino grosso absorve principalmente água; o estômago digere proteínas.'),
    ex('biologia-6', 2, S, 'As trocas gasosas (hematose) ocorrem nos:', ['brônquios', 'alvéolos pulmonares', 'bronquíolos', 'diafragma'], 1, 'Resposta B (alvéolos). São pequenas bolsas cercadas por capilares, onde o O₂ entra no sangue e o CO₂ sai. O diafragma é o músculo que controla a respiração.'),
    ex('biologia-6', 3, S, 'O hormônio que diminui a concentração de glicose no sangue é:', ['glucagon', 'adrenalina', 'insulina', 'tiroxina'], 2, 'Resposta C (insulina), produzida pelo pâncreas. Ela favorece a entrada da glicose nas células. O glucagon tem efeito contrário, aumentando a glicose no sangue.'),
    ex('biologia-6', 4, S, 'O sangue rico em oxigênio é bombeado para o corpo, pela aorta, a partir do:', ['átrio direito', 'ventrículo direito', 'átrio esquerdo', 'ventrículo esquerdo'], 3, 'Resposta D (ventrículo esquerdo). Ele é a câmara de parede mais forte do coração e impulsiona o sangue oxigenado pela grande circulação. O ventrículo direito envia o sangue aos pulmões.'),
    ex('biologia-6', 5, S, 'Uma medida eficaz para prevenir a dengue, transmitida pelo Aedes aegypti, é:', ['tomar antibiótico regularmente', 'eliminar recipientes com água parada', 'lavar as mãos só antes das refeições', 'evitar o contato com animais domésticos'], 1, 'Resposta B. O mosquito põe os ovos em água parada limpa (pneus, vasos, caixas-d\'água destampadas). Eliminar esses focos interrompe o ciclo. A dengue é causada por vírus, e antibióticos não funcionam contra vírus.'),
  ],
}
