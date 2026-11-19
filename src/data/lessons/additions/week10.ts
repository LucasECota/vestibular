import type { Block } from '../../../domain/lesson'
import { call, list, table } from './b'

/** Complementos das tarefas de 11 e 12/01 (simulados com questões de provas anteriores). */
export const ADD_WEEK10: Record<string, Block[]> = {
  'quimica-pratica-2': [
    list([
      '**Ligações covalentes e pares compartilhados:** cada ligação simples compartilha 1 par de elétrons, a dupla compartilha 2 pares e a tripla, 3. CO₂ (O=C=O) tem duas duplas: 4 pares. CO (C≡O) tem uma tripla: 3 pares. CH₄ tem quatro simples: 4 pares. Total dos três gases: $4+3+4=11$ pares. Ametal com ametal: ligação covalente.',
      '**Isomeria geométrica (cis-trans):** ocorre quando há uma dupla ligação ou anel e grupos iguais podem ficar do mesmo lado (cis) ou de lados opostos (trans). Moléculas de gordura trans e cis têm a mesma função orgânica (ácido carboxílico, −COOH) e são isômeros **geométricos**.',
      '**Caráter ácido ou básico pela função:** o ácido carboxílico (−COOH) tem caráter ácido. As funções nitrogenadas, como as **aminas** e as **amidas** (a cafeína tem grupos amida), têm caráter **básico**.',
      '**NPK:** os macronutrientes dos fertilizantes são **N** (nitrogênio), **P** (fósforo) e **K** (potássio, de *kalium*). Símbolos: de uma letra maiúscula ou uma maiúscula e uma minúscula.',
      String.raw`**Oxirredução da ferrugem:** em $4\,Fe + 3\,O_2 \to 2\,Fe_2O_3$, o ferro passa de Nox 0 a +3: **perde 3 elétrons**, sofre **oxidação** e é o **agente redutor**. O oxigênio passa de 0 a −2: **ganha 2 elétrons**, sofre **redução** e é o **agente oxidante**.`,
      String.raw`**Contas:** $n=\dfrac{m}{M}$; $pH=-\log[H^+]$; para o ácido fraco, $[H^+]=\alpha\cdot M$ (grau de ionização × concentração); nêutrons $=A-Z$; neutralização HCl + NaOH → NaCl + H₂O.`,
    ]),
  ],

  'geografia-pratica-1': [
    list([
      '**Tipos de mapa quanto à finalidade (IBGE):** **gerais** (visão ampla de uma área), **topográficos** (representam o relevo e detalhes do terreno com precisão), **especiais** (para fins específicos, como navegação) e **temáticos** (mostram um tema: clima, população, vegetação).',
      '**Placa do Brasil:** todo o território brasileiro está na **Placa Sul-Americana**, longe das bordas, onde os terremotos são raros.',
      '**Migração venezuelana:** o principal motivo foi **econômico**: o colapso da economia (queda do PIB, falta de alimentos e remédios) levou milhões a sair do país.',
      '**País × Estado:** o Estado é a entidade jurídica que exerce soberania sobre o território. O **Reino Unido** é um Estado formado por quatro países: **Inglaterra, Escócia, País de Gales e Irlanda do Norte**.',
      '**Ouro e a mudança da capital:** a descoberta de ouro e pedras preciosas em **Minas Gerais** (século XVIII) deslocou o centro econômico do Nordeste para o Centro-Sul e levou a capital de Salvador para o Rio de Janeiro (1763).',
      '**Hidrelétricas:** vantagens: fonte renovável e limpa, baixo custo de operação, geração de empregos e renda. Desvantagens: alagamento de grandes áreas (florestas e habitats), mudança do curso dos rios e interferência na migração de peixes, e impacto sobre as terras e a população da região. Numa questão "exceto", procure a alternativa que traz uma **vantagem**.',
      '**Mercosul:** Brasil, Argentina, Paraguai e Uruguai.',
    ]),
  ],

  'matematica-pratica-4': [
    list([
      String.raw`**Retângulo com lados em relação:** se um lado mede $x$ e o outro $x+13$, a área é $x(x+13)=1080$, uma equação do 2º grau: $x^2+13x-1080=0$, que dá $x=27$ (a raiz positiva) e lados 27 e 40. Perímetro: $2(27+40)=134$.`,
      String.raw`**Polinômio com raízes conhecidas:** se $P$ é de grau 3 e tem raízes $r_1,r_2,r_3$, então $P(x)=a(x-r_1)(x-r_2)(x-r_3)$. Use um valor dado para achar $a$. Raízes 5, 10, 15 e $P(7)=144$: $a\cdot 2\cdot(-3)\cdot(-8)=144$, então $a=3$, e $P(9)=3\cdot 4\cdot(-1)\cdot(-6)=72$.`,
      '**Quadros e sequências:** descubra o padrão de cada linha (aqui, cada linha tem 4 números consecutivos e a linha $k$ vai de $4k-2$ a $4k+1$; a ordem, crescente ou decrescente, não muda a soma). A soma de 4 números consecutivos é $4\\cdot$ média: $S_k=2(8k-1)=16k-2$. Para $k=20$: $S=318$.',
      String.raw`**Sistema, cilindro, trigonometria e logaritmo (extras):** resolva o sistema por adição ou substituição; $V=\pi r^2 h$; $\text{sen}\,30^\circ=\cos 60^\circ=\dfrac12$; distância entre pontos $d=\sqrt{\Delta x^2+\Delta y^2}$; $\log_3 81=4$ porque $3^4=81$.`,
    ]),
  ],

  'historia-pratica-1': [
    list([
      '**Independências na América Latina:** as elites criollas lideraram o processo e **mantiveram a ordem social**, afastando as classes populares das decisões políticas. As rebeliões populares foram duramente reprimidas.',
      '**Resistência escrava:** vem desde o início da escravidão (fugas, quilombos, revoltas como a dos **Malês**, em 1835) e se somou ao **movimento abolicionista**; os escravizados tiveram papel fundamental na luta pela abolição.',
      '**Primeira República:** a "questão social é um caso de polícia" mostra a repressão ao movimento operário, que fez greves e manifestações. O voto era controlado pelos coronéis (cabresto), não uma ferramenta de mobilização operária.',
      '**Golpe de 1964:** em plena Guerra Fria, o anticomunismo e a campanha de desestabilização contra Goulart, financiada por empresários e pelo governo dos EUA, levaram ao golpe civil-militar.',
      '**Bossuet:** o poder do rei vem de Deus (**direito divino dos reis**), um dos argumentos do Absolutismo.',
      '**Causas da Primeira Guerra:** corrida armamentista ("paz armada"), disputas imperialistas, nacionalismos exacerbados e sistema de alianças. A crise do liberalismo e a ascensão do autoritarismo vieram depois, no período entreguerras.',
    ]),
    table(['Data', 'Fato'], [
      ['1789', 'Revolução Francesa (Queda da Bastilha, 14 de julho)'],
      ['Séc. XVIII', 'Ciclo do ouro em Minas Gerais'],
      ['1888', 'Lei Áurea (abolição da escravidão)'],
      ['1943', 'CLT (Era Vargas)'],
      ['1989', 'Queda do Muro de Berlim'],
    ]),
    call('dica', 'Em questões de "analise os itens", marque verdadeiro ou falso em cada item usando esses fatos, e depois procure a alternativa que combina com o seu julgamento.'),
  ],
}
