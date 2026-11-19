import type { Block } from '../../../domain/lesson'
import { call, h, list, math, p } from './b'

/** Complementos das tarefas de 30/11 a 4/12. */
export const ADD_WEEK3: Record<string, Block[]> = {
  'fisica-pratica-1': [
    h('Notação científica'),
    p(String.raw`Para multiplicar números em notação científica, multiplique os coeficientes e some os expoentes de 10. "Cinco milhões" é $5\cdot 10^{6}$.`),
    call('exemplo', String.raw`Uma estrela é 2 milhões de vezes maior que o Sol, e outra é 400 vezes maior que essa. A razão é $2\cdot 10^{6}\cdot 4\cdot 10^{2} = 8\cdot 10^{8}$ vezes o Sol.`),
    h('Lançamento oblíquo: o alcance'),
    math(String.raw`R = \dfrac{v_0^{2}\,\text{sen}(2\theta)}{g}`),
    p(String.raw`O alcance é máximo em $\theta = 45^\circ$ (porque $\text{sen}\,90^\circ = 1$). Ângulos complementares (30° e 60°) dão o mesmo alcance. Para $30^\circ$, use $\text{sen}\,60^\circ$; para $45^\circ$, $\text{sen}\,90^\circ$.`),
    call('exemplo', String.raw`Com $v_0 = 10$ m/s e $g=10$: a 45°, $R = \dfrac{100\cdot 1}{10} = 10$ m; a 30°, $R = \dfrac{100\cdot 0{,}86}{10} = 8{,}6$ m.`),
    h('Gravitação universal'),
    math(String.raw`F = G\,\dfrac{M\,m}{d^{2}}`),
    p('A força é **proporcional ao produto das massas** e **inversamente proporcional ao quadrado da distância**. Aproximar os corpos aumenta a força. Reduzir a distância à metade multiplica a força por 4; perder $\\dfrac14$ da massa de um dos corpos deixa a força com $\\dfrac34$ do valor inicial (e não aumenta).'),
    h('Dilatação térmica'),
    math(String.raw`\Delta L = L_0\,\alpha\,\Delta T \qquad \Delta V = V_0\,\gamma\,\Delta T \qquad \gamma = 3\alpha`),
    p('Líquidos e sólidos se dilatam ao serem aquecidos. Em um recipiente **totalmente cheio** de líquido, o que transborda é a **dilatação aparente**: dilatação real do líquido menos a dilatação do recipiente. Se o líquido tem coeficiente de dilatação volumétrica maior que o do recipiente (lembre-se de que $\\gamma = 3\\alpha$ para o sólido), ele **transborda**.'),
    h('Fórmulas que aparecem nas questões fáceis'),
    list([
      String.raw`**Conversão:** km/h ÷ 3,6 = m/s (36 km/h = 10 m/s).`,
      String.raw`**MRU:** $\Delta s = v\cdot t$. **MRUV a partir do repouso:** $v = a\,t$ e $\Delta s = \dfrac{a\,t^2}{2}$.`,
      String.raw`**Dinâmica:** $F_R = m\,a$ e $P = m\,g$. Em blocos ligados por fio, a aceleração do conjunto é $a = \dfrac{F}{m_A + m_B}$, e a tração que puxa o bloco A é $T = m_A\cdot a$.`,
      String.raw`**Lançamento vertical:** no ponto mais alto, $v=0$. Subindo com $v_0$: $h_{\max} = \dfrac{v_0^2}{2g}$ e tempo de subida $t = \dfrac{v_0}{g}$.`,
    ]),
  ],

  'matematica-5': [
    h('6. Mais três situações de prova'),
    p(String.raw`**Composição de funções:** calcule de dentro para fora. Se $f(x)=3x-1$, então $f(f(2))$: primeiro $f(2)=5$, depois $f(5)=14$.`),
    p(String.raw`**Função afim por dois pontos:** o coeficiente angular é $a=\dfrac{\Delta y}{\Delta x}$; depois ache $b$ substituindo um dos pontos.`),
    call('exemplo', String.raw`Pelos pontos (2, 7) e (4, 13): $a=\dfrac{13-7}{4-2}=3$. Com $f(2)=7$: $6+b=7$, então $b=1$ e $f(x)=3x+1$.`),
    p(String.raw`**Quadrática a partir das raízes:** $f(x)=a(x-x_1)(x-x_2)$. Com $a=1$ e raízes 2 e 6: $f(x)=(x-2)(x-6)=x^2-8x+12$. O vértice está no meio das raízes ($x_v=4$), e $f(4)=-4$ é o valor mínimo.`),
    p(String.raw`**"Volta ao solo":** é quando a altura vale zero, $h(t)=0$. As raízes são os instantes em que a altura é zero: $t=0$ é o lançamento e a outra raiz é a chegada ao solo.`),
  ],

  'portugues-3': [
    h('6. Pontos que as questões cobram'),
    p('**Advérbios** classificam-se pela circunstância: tempo (hoje, cedo, nunca), lugar (aqui, longe), modo (bem, mal, e a maioria dos terminados em **-mente**: rapidamente), intensidade (muito, pouco, bastante), negação (não) e dúvida (talvez).'),
    p('**A palavra "que":** é **pronome relativo** quando retoma um termo anterior e pode ser trocada por "o qual/a qual" ("O livro **que** li" = "o livro o qual li"). É **conjunção integrante** quando só liga uma oração à outra, completando o verbo, sem retomar nada ("Disse **que** viria", "Espero **que** chova").'),
    list([
      '**Derivação prefixal:** só prefixo (des-leal, in-feliz). **Sufixal:** só sufixo (pedr-eiro). **Prefixal e sufixal:** os dois, em etapas, e cada etapa existe sozinha (in-feliz → infeliz-mente: "infelizmente").',
      '**Parassintética:** prefixo e sufixo entram **ao mesmo tempo**, e não existe a forma só com um deles: **a**-manh-**ecer**, **em**-pobr-**ecer**.',
      '**Regressiva:** a palavra vem de um verbo, perdendo o final (ajudar → a ajuda).',
      '**Composição por justaposição:** juntam-se duas palavras sem perder sons (guarda-chuva, girassol). **Por aglutinação:** há perda de sons (plano + alto = planalto; água + ardente = aguardente).',
    ]),
  ],

  'fisica-3': [
    h('6. Teorema do trabalho e da energia cinética'),
    math(String.raw`W_{total} = \Delta E_c = E_{c,\text{final}} - E_{c,\text{inicial}}`),
    p('O trabalho total das forças sobre um corpo é igual à variação de sua energia cinética. É a ferramenta para problemas de frenagem: o trabalho do atrito é negativo e igual a $-\\Delta E_c$.'),
    call('exemplo', String.raw`Um bloco de 4 kg a 5 m/s é freado até parar, por uma força constante, em 5 m. $\Delta E_c = 0 - \dfrac{4\cdot 25}{2} = -50$ J. Então $-F\cdot 5 = -50$ e $F = 10$ N.`),
  ],

  'biologia-3': [
    h('6. Cruzamento-teste e probabilidade condicional'),
    p('**Cruzamento-teste:** para descobrir se um indivíduo de fenótipo dominante é **AA** ou **Aa**, cruza-se com um **homozigoto recessivo (aa)**. Se todos os filhos tiverem o fenótipo dominante, ele provavelmente é AA. Se aparecer algum filho recessivo, ele é Aa.'),
    p('**Probabilidade condicional:** quando a questão já informa o fenótipo, retire do quadro os genótipos que não são possíveis e calcule a probabilidade entre os que restam.'),
    call('exemplo', String.raw`Aa × Aa e o filho tem fenótipo dominante. Possibilidades: AA, Aa, Aa (o aa foi excluído). A chance de ser AA é 1/3, e a de ser Aa é 2/3.`),
  ],

  'quimica-3': [
    h('5. Fórmula do sal e cálculos com reações'),
    p('**Fórmula do sal formado na neutralização:** junte o cátion da base com o ânion do ácido, de modo que as cargas se anulem. $H_2SO_4 + 2\\,NaOH \\to Na_2SO_4 + 2\\,H_2O$ (dois Na⁺ para um SO₄²⁻). $2\\,HCl + Ca(OH)_2 \\to CaCl_2 + 2\\,H_2O$.'),
    p('**Estequiometria:** os coeficientes da equação balanceada dão a proporção em **mols**. Passos: 1) equação balanceada; 2) transformar massa em mol com $n = \\dfrac{m}{M}$; 3) montar a proporção; 4) transformar o resultado em massa, se pedido. Massas molares úteis: H₂O = 18 g/mol; CO₂ = 44 g/mol; CaCO₃ = 100 g/mol.'),
    call('exemplo', String.raw`$2\,Mg + O_2 \to 2\,MgO$ (Mg = 24; MgO = 40). 12 g de Mg são 0,5 mol, que formam 0,5 mol de MgO, ou seja, $0{,}5\cdot 40 = 20$ g.`),
  ],

  'matematica-6': [
    h('4. Equação exponencial com substituição'),
    p(String.raw`Quando aparecem $a^{2x}$ e $a^{x}$ juntos, faça $y=a^x$ (note que $4^x=(2^x)^2$). Resolva a equação do 2º grau em $y$ e depois volte para $x$, lembrando que $a^x>0$.`),
    call('exemplo', String.raw`$9^x-4\cdot 3^x+3=0$. Com $y=3^x$: $y^2-4y+3=0$, então $y=1$ ou $y=3$. Logo $3^x=1\Rightarrow x=0$ e $3^x=3\Rightarrow x=1$.`),
  ],

  'historia-3': [
    h('5. Pontos que costumam cair'),
    list([
      '**Escravidão indígena × africana:** os indígenas resistiam (fugas, guerras) e eram defendidos pelos jesuítas e por leis da Coroa. Já o **tráfico negreiro** era um negócio muito lucrativo para a Coroa e para os comerciantes. Por isso, a mão de obra africana passou a predominar.',
      '**Derrama:** a Coroa exigia 100 arrobas de ouro por ano (cerca de 1,5 tonelada). Quando a cota não era atingida, decretava-se a derrama, a cobrança forçada dos impostos atrasados, o que gerou revolta.',
    ]),
  ],
}
