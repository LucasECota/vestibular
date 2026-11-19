import type { Block } from '../../../domain/lesson'
import { call, h, list, math, p, table } from './b'

/** Complementos das tarefas de 14 a 18/12. */
export const ADD_WEEK5: Record<string, Block[]> = {
  'ingles-4': [
    h('5. Mais três falsos amigos'),
    list([
      '**eventually** = por fim, no final das contas (e não "eventualmente", que seria *occasionally*).',
      '**lecture** = palestra ou aula expositiva (e não "leitura", que é *reading*).',
      '**support** significa **apoiar** (*I support your idea*) e também **sustentar financeiramente** (*support a family*). Não significa "suportar" (tolerar), que se diz *stand* ou *bear*.',
    ]),
  ],

  'biologia-pratica-1': [
    table(['Hormônio vegetal', 'Funções principais'], [
      ['Auxina', 'Alongamento das células, crescimento do caule e fototropismo; dominância apical'],
      ['Giberelina', 'Germinação de sementes, alongamento do caule e frutos sem sementes'],
      ['Citocinina', 'Divisão celular, brotamento de gemas laterais e retardo da senescência (envelhecimento)'],
      ['Etileno', 'Hormônio **gasoso**: amadurece frutos e provoca queda de folhas; liberado em situações de estresse. O CO₂ inibe sua ação'],
      ['Ácido abscísico', 'Dormência de sementes e gemas; fecha os estômatos na seca'],
    ]),
    p('**Citoplasma e organelas:** o citoplasma (citosol ou hialoplasma, mais as organelas) existe em procariontes e eucariontes. O retículo endoplasmático **rugoso** sintetiza proteínas; o **liso** sintetiza lipídios. O lisossomo faz a digestão intracelular; o peroxissomo oxida ácidos graxos; a mitocôndria faz a respiração celular.'),
    list([
      '**Meiose I:** prófase I (cromossomos se condensam, homólogos pareiam e fazem crossing-over), metáfase I (pares de homólogos na placa), anáfase I (**separam-se os homólogos**) e telófase I.',
      '**Meiose II:** não há nova duplicação do DNA. Na anáfase II separam-se as **cromátides-irmãs**, e a telófase II termina com **4 células haploides**.',
      'O **fuso** se forma na prófase; na anáfase ele já está pronto e puxa os cromossomos.',
    ]),
    p('**Genética com sexo e vários genes:** analise cada gene separadamente e multiplique só as probabilidades que a pergunta pede (o sexo feminino tem probabilidade 1/2). Genes que não entram na pergunta não entram na conta.'),
    call('exemplo', String.raw`Aa × aa: a chance de uma **filha** Aa é $\dfrac12 \cdot \dfrac12 = \dfrac14$ (1/2 de ser menina e 1/2 de ser Aa).`),
    p('**Hardy-Weinberg:** $p^2 + 2pq + q^2 = 1$, em que $q^2$ é a frequência de aa, $q$ é a do alelo a, $p = 1 - q$ e $2pq$ é a de heterozigotos. Se $q^2 = 0{,}16$, então $q=0{,}4$, $p=0{,}6$ e $2pq=0{,}48$.'),
    table(['Bioma', 'Clima e vegetação'], [
      ['Amazônia', 'Quente e úmido; mata de terra firme, igapós e várzeas; vitória-régia'],
      ['Cerrado', 'Inverno seco e verão chuvoso; árvores, arbustos e gramíneas; latossolos; lobo-guará e tamanduá'],
      ['Mata Atlântica', 'Tropical úmido; floresta ombrófila (araucária no Sul); muitas espécies endêmicas'],
      ['Caatinga', '**Semiárido**; vegetação xerófila (xeromorfismo), solos pedregosos'],
      ['Pampa', '**Subtropical**; campos de gramíneas no Sul (não é semiárido)'],
    ]),
    p('**Anfíbios (sapos, rãs, salamandras, cecílias):** pele fina, úmida e rica em glândulas (e não grossa e com poucas glândulas), ectotérmicos, com respiração cutânea. Características exclusivas do grupo: **dentes pedicelados** (base e coroa unidas por tecido conjuntivo) e a **papila amphibiorum** (sons de baixa frequência, até cerca de 1 000 Hz) junto com a papila basilar (acima de 1 000 Hz).'),
    p('**Cadeia alimentar:** só cerca de 10% da energia passa de um nível trófico ao seguinte; o resto é gasto em respiração, calor e restos.'),
  ],

  'matematica-9': [
    h('5. Mais relações úteis'),
    p(String.raw`**Diagonal do quadrado:** $d = l\sqrt{2}$ (por Pitágoras). Se a diagonal mede $6\sqrt2$, o lado é 6 e a área é 36.`),
    p('**Círculo inscrito em um quadrado:** o diâmetro do círculo é igual ao lado do quadrado. A parte do quadrado que fica fora do círculo é a área do quadrado menos a área do círculo.'),
    call('exemplo', String.raw`Quadrado de lado 8 com círculo inscrito: $r=4$ e a área do círculo é $16\pi$. Fora do círculo: $64 - 16\pi$.`),
  ],

  'portugues-5': [
    h('5. Conectivos de concessão'),
    table(['Valor', 'Conectivos', 'Exemplo'], [
      ['Concessão', 'embora, ainda que, mesmo que, apesar de', '**Embora** chovesse, saímos para passear.'],
    ]),
    p('Na concessão, apresenta-se um obstáculo que **não impediu** o fato principal. Não confunda com a causa ("porque", "visto que") nem com a conclusão ("portanto"). Depois de "embora" o verbo vai para o subjuntivo (chovesse, estude).'),
  ],

  'fisica-5': [
    h('6. Rendimento de máquinas térmicas'),
    math(String.raw`\eta = \dfrac{W}{Q_q} = \dfrac{Q_q - Q_f}{Q_q} = 1 - \dfrac{Q_f}{Q_q}`),
    p(String.raw`Em que $Q_q$ é o calor recebido da fonte quente, $Q_f$ é o calor rejeitado para a fonte fria e $W$ é o trabalho útil. Em uma **máquina ideal de Carnot**, o rendimento depende só das temperaturas, **em kelvin**:`),
    math(String.raw`\eta_{\text{Carnot}} = 1 - \dfrac{T_f}{T_q}`),
    call('exemplo', String.raw`Máquina que recebe 800 J e rejeita 600 J: $W = 200$ J e $\eta = \dfrac{200}{800} = 25\%$. Carnot entre 500 K e 300 K: $\eta = 1 - \dfrac{300}{500} = 40\%$.`),
  ],

  'biologia-5': [
    h('6. Sucessão ecológica'),
    p('**Sucessão ecológica** é a substituição gradual das comunidades em um local, até chegar a uma comunidade estável, a **comunidade clímax**. Na **sucessão primária** o local nunca teve vida (rocha nua, lava). Os primeiros a chegar são as **espécies pioneiras**, como os **liquens**, que vão desfazendo a rocha e formando solo. Depois vêm musgos, gramíneas, arbustos e árvores. Na **sucessão secundária**, uma área já ocupada é recolonizada (mata derrubada, campo abandonado), e o processo é mais rápido.'),
  ],

  'quimica-5': [
    h('4. Mais dois pontos de prova'),
    p(String.raw`**A energia é proporcional à quantidade:** o $\Delta H$ da equação vale para os mols dos coeficientes. Se queimar 1 mol libera 890 kJ, queimar 3 mol libera $3\cdot 890 = 2\,670$ kJ.`),
    p(String.raw`**Lei de velocidade:** $v = k\,[A]^a\,[B]^b$. O expoente mostra quanto a velocidade depende de cada concentração. Dobrando $[A]$ quando $a=2$, a velocidade fica $2^2=4$ vezes maior; quando $a=1$, dobra.`),
  ],

  'geografia-5': [
    h('5. IDH e transição demográfica'),
    p('O **IDH (Índice de Desenvolvimento Humano)** combina três dimensões: **renda** (PIB per capita), **educação** (anos de estudo) e **saúde/longevidade** (expectativa de vida). Varia de 0 a 1 e não mede apenas o PIB.'),
    p('**Transição demográfica:** no início, natalidade e mortalidade são altas e o crescimento é pequeno. Depois a **mortalidade cai primeiro** (saúde e saneamento), e a **natalidade continua alta** por um tempo, o que faz a população crescer rápido. Por fim, a natalidade também cai, o crescimento desacelera e a população envelhece.'),
  ],

  'historia-5': [
    h('7. Pontos que costumam cair'),
    list([
      '**Lei de Terras (1850):** passou a exigir **compra** para obter terras do Estado. Com isso, pobres, libertos e imigrantes sem dinheiro não tiveram acesso à terra, e os grandes latifúndios foram preservados.',
      '**Farroupilha (1835–1845), no RS:** a elite gaúcha de estancieiros reclamava dos altos impostos e da concorrência do **charque** (carne seca) platino, que era mais barato. Foi a revolta mais longa do período regencial.',
    ]),
  ],
}
