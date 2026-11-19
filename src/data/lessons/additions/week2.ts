import type { Block } from '../../../domain/lesson'
import { call, h, list, math, p, table } from './b'

/** Complementos das tarefas de 23 a 27/11. */
export const ADD_WEEK2: Record<string, Block[]> = {
  'ingles-1': [
    h('4. Mais vocabulário e conectivos que aparecem'),
    p('Mais falsos cognatos: **lecture** = palestra ou aula expositiva (e não "leitura", que é *reading*); **parents** = pais (e não "parentes", que é *relatives*); **eventually** = por fim, no final das contas (e não "eventualmente").'),
    table(['Expressão', 'Significado', 'Ideia'], [
      ['although, though, despite', 'embora, apesar de', 'Concessão: algo aconteceu apesar de um obstáculo'],
      ['but, however', 'mas, no entanto', 'Oposição'],
      ['because, since', 'porque', 'Causa'],
      ['so, therefore', 'então, portanto', 'Consequência'],
      ['contrary to popular belief', 'ao contrário do que muita gente pensa', 'O texto vai **contestar** uma crença comum'],
    ]),
    call('exemplo', '"Although it was cold, we went to the beach" = "Embora estivesse frio, fomos à praia". O frio seria um obstáculo, mas não impediu o passeio.'),
  ],

  'matematica-pratica-1': [
    h('Potências'),
    p(String.raw`Mesma base na multiplicação: somam-se os expoentes ($a^m\cdot a^n = a^{m+n}$). Na divisão, subtraem-se. Em $(a^m)^n$, multiplicam-se. Lembre que $a^0=1$ e $a^{-n}=\dfrac{1}{a^n}$. Em $(2^3\cdot 2^{-1})^2$: primeiro $2^{3-1}=2^2$, depois $(2^2)^2=2^4=16$.`),
    h('Porcentagem, inclusive o caminho de volta'),
    p(String.raw`Aumento de $i\%$ multiplica por $1+i$; desconto multiplica por $1-i$. Para achar o valor **antes** do aumento ou do desconto, **divida** pelo fator: se após um aumento de 25% o preço é R$ 150, o original é $150 \div 1{,}25 = 120$.`),
    h('Razão, proporção e regra de três'),
    p(String.raw`Simplifique a razão dividindo pelos fatores comuns ($\dfrac{12}{18}=\dfrac{2}{3}$). Na regra de três direta, as duas grandezas crescem juntas (km × horas, com a mesma velocidade). Na inversa, uma cresce e a outra diminui (operários × dias).`),
    h('Trabalho em conjunto (torneiras, máquinas, pessoas)'),
    p(String.raw`Cada um faz $\dfrac{1}{t}$ do serviço por hora. Some as frações e inverta o resultado para achar o tempo juntos.`),
    call('exemplo', String.raw`Uma torneira enche um tanque em 4 h e outra em 12 h. Juntas: $\dfrac14+\dfrac1{12}=\dfrac{4}{12}=\dfrac13$ do tanque por hora, então levam 3 h.`),
    h('Equação exponencial'),
    p(String.raw`Quando os dois lados puderem ser escritos com a mesma base, iguale os expoentes: $a^x = a^y \Rightarrow x = y$. Fatore os números para achar a base comum.`),
    call('exemplo', String.raw`$10\cdot 2^{t-1}=160 \Rightarrow 2^{t-1}=16=2^4 \Rightarrow t-1=4 \Rightarrow t=5$.`),
    h('Cilindro'),
    math(String.raw`V = \pi r^2 h \qquad A_{total} = 2\pi r^2 + 2\pi r h = 2\pi r\,(r+h)`),
    p('Um cilindro **equilátero** tem a altura igual ao diâmetro da base: $h = 2r$ (a secção feita pelo eixo é um quadrado).'),
    call('exemplo', String.raw`Cilindro equilátero de raio 3: $h=6$, $V=\pi\cdot 9\cdot 6 = 54\pi$ e $A_{total}=2\pi\cdot 3\cdot(3+6)=54\pi$.`),
    h('Fatoração para simplificar expressões'),
    p(String.raw`$x^2-y^2=(x-y)(x+y)$ e $x^3-y^3=(x-y)(x^2+xy+y^2)$. Fatore, cancele os fatores iguais e só então calcule. Um expoente $-1$ **inverte** a fração: $\left(\dfrac{a}{b}\right)^{-1}=\dfrac{b}{a}$.`),
    call('exemplo', String.raw`$\dfrac{x^3-1}{x^2-1}=\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)}=\dfrac{x^2+x+1}{x+1}$.`),
  ],

  'matematica-3': [
    h('4. Complementos para os problemas de prova'),
    p('**Sistema com coeficientes diferentes:** multiplique uma das equações (ou as duas) para igualar ou opor os coeficientes de uma incógnita, e depois some ou subtraia.'),
    call('exemplo', String.raw`$\begin{cases} 2x + y = 11 \\ x + 3y = 18 \end{cases}$ Multiplique a 1ª por 3: $6x+3y=33$. Subtraia a 2ª: $5x=15$, então $x=3$ e $y=5$.`),
    p('**Raízes com uma relação entre elas:** chame as raízes de $r$ e $2r$ (ou $r$ e $3r$), use a soma $-\\dfrac{b}{a}$ para achar $r$ e depois o produto $\\dfrac{c}{a}$.'),
    call('exemplo', String.raw`Em $x^2-6x+k=0$, uma raiz é o triplo da outra: raízes $r$ e $3r$. Soma: $4r=6$, então $r=1{,}5$. Produto: $k=r\cdot 3r=3r^2=6{,}75$.`),
    p(String.raw`**Soma dos quadrados:** $x^2+y^2=(x+y)^2-2xy$. Se $x+y=5$ e $xy=6$, então $x^2+y^2=25-12=13$.`),
  ],

  'portugues-2': [
    h('4. Recursos sonoros (função poética)'),
    p('**Aliteração** é a repetição de sons consonantais ("o rato roeu a roupa do rei de Roma"). **Assonância** é a repetição de sons vocálicos. Esses recursos chamam a atenção para a forma da mensagem, por isso marcam a função **poética**.'),
  ],

  'fisica-2': [
    h('4. Aplicações que mais caem'),
    p('**Elevador:** quando acelera para cima, o piso (ou o cabo) precisa vencer o peso e ainda acelerar. Para a pessoa, $N - P = m\\,a$, então $N = m(g+a)$: ela se sente mais pesada. O cabo, que sustenta o elevador, segue a mesma ideia: $T = m(g+a)$. Acelerando para baixo, $P - N = m\\,a$. Em repouso ou em MRU, $N = P$.'),
    call('exemplo', String.raw`Pessoa de 50 kg em elevador que sobe com $a=1\ \text{m/s}^2$ ($g=10$): $N = 50\cdot 11 = 550$ N.`),
    p(String.raw`**Atrito para começar a mover:** o atrito máximo é $f_{at}=\mu N$. Para o corpo sair do repouso, a força aplicada precisa superar esse valor.`),
    call('exemplo', String.raw`Bloco de 5 kg sobre piso horizontal com $\mu=0{,}4$: $N=50$ N e $f_{at}=0{,}4\cdot 50 = 20$ N. É preciso empurrar com mais de 20 N.`),
    p('**Blocos encostados ou ligados por um fio:** movem-se juntos, com a mesma aceleração: $a = \\dfrac{F_R}{m_1+m_2}$. Para achar a força entre eles, isole um dos blocos e aplique $F_R = m\\,a$ só nele.'),
    call('exemplo', String.raw`Blocos de 1 kg e 4 kg encostados, empurrados por 10 N: $a=\dfrac{10}{5}=2$ m/s². A força que o 1º faz sobre o 2º é $4\cdot 2=8$ N.`),
    p('**Dois blocos ligados por fio que passa por uma polia (máquina de Atwood):** o que acelera o conjunto é a diferença entre os pesos, e a massa que acelera é a soma das massas.'),
    math(String.raw`a = \dfrac{(m_1 - m_2)\,g}{m_1 + m_2}`),
    call('exemplo', String.raw`Blocos de 4 kg e 1 kg: $a = \dfrac{3\cdot 10}{5} = 6$ m/s².`),
    p(String.raw`**Plano inclinado sem atrito:** só a componente do peso ao longo do plano acelera o bloco: $P_x = m\,g\,\text{sen}\,\theta$, então $a = g\,\text{sen}\,\theta$ (a massa não importa). A componente perpendicular, $P_y = m\,g\cos\theta$, é equilibrada pela normal.`),
    call('exemplo', String.raw`Plano de 30° ($\text{sen}\,30^\circ=0{,}5$): $a = 10\cdot 0{,}5 = 5$ m/s².`),
  ],

  'biologia-2': [
    h('6. Complementos: enzimas e gametas'),
    p('**Frio × calor nas enzimas:** em temperatura baixa, a atividade só **diminui** (a enzima volta a funcionar ao ser aquecida). Em temperatura muito alta, a enzima **desnatura** e perde a função de forma irreversível.'),
    p('**Tipos de gametas:** genes em cromossomos diferentes se separam de forma **independente** na meiose. Um indivíduo com $n$ pares de genes heterozigotos forma $2^n$ tipos de gametas. **AaBb** forma 4 tipos: AB, Ab, aB e ab. Já uma única célula, em uma meiose, forma só 2 tipos distintos (a segregação é feita ao acaso).'),
  ],

  'quimica-2': [
    h('4. Mais detalhes que as questões cobram'),
    p('**Distribuição eletrônica e posição na tabela:** o número de camadas é o **período**, e o número de elétrons da última camada dá o **grupo** (nos grupos 1 e 2). Na distribuição 2-8-8-1 há 4 camadas e 1 elétron de valência: 4º período, grupo 1 (é o potássio).'),
    p('**Fórmula de um composto iônico:** as cargas precisam se anular. Grupo 1 forma íon +1; grupo 2, +2; grupo 13, +3. Ametal do grupo 17 forma íon −1; do grupo 16, −2. Exemplos: Mg²⁺ e Cl⁻ formam MgCl₂; Na⁺ e O²⁻ formam Na₂O; Al³⁺ e Cl⁻ formam AlCl₃.'),
    p('**Mols de íons:** o índice da fórmula dá a proporção. Em 1 mol de CaCl₂ há 1 mol de Ca²⁺ e 2 mol de Cl⁻; em 2 mol de CaCl₂, 4 mol de Cl⁻.'),
    p('**Polaridade:** a ligação é polar quando há diferença de eletronegatividade. Já a **molécula** é polar ou apolar conforme a geometria: se os dipolos se anulam por simetria, é apolar (CO₂ linear, CH₄ tetraédrico); se não se anulam, é polar (H₂O angular, NH₃ piramidal). Regra de solubilidade: semelhante dissolve semelhante.'),
    p('**Energia de ionização** é a energia necessária para arrancar um elétron. Ela cresce para a direita no período e diminui para baixo no grupo. No 2º período, o maior valor é o do gás nobre **neônio (Ne)**, que tem a camada completa.'),
  ],

  'geografia-2': [
    h('6. Complementos'),
    p('**Tipos de limite entre placas:** *convergente* (choque: cordilheiras, vulcões e fossas), *divergente* (afastamento: dorsais oceânicas, como no Atlântico) e *transformante* (as placas deslizam lado a lado, e os terremotos são frequentes: Falha de San Andreas, na Califórnia).'),
    p('**Metamorfismo (uma rocha vira outra):** calcário → mármore; arenito → quartzito; granito → gnaisse; folhelho (argila) → ardósia.'),
    p('**Bacia do Paraná:** camadas sedimentares foram cobertas por grandes derrames de lava (basalto). A decomposição desse basalto formou a **terra roxa**, solo fértil usado em café, soja e cana.'),
  ],

  'matematica-4': [
    h('4. Mais aplicações'),
    p(String.raw`**Simplificar frações algébricas:** fatore o numerador e o denominador e cancele os fatores iguais. $\dfrac{x^2-25}{x-5}=\dfrac{(x+5)(x-5)}{x-5}=x+5$, para $x\neq 5$.`),
    p(String.raw`**Soma dos quadrados a partir da diferença:** $x^2+y^2=(x-y)^2+2xy$. Se $x-y=3$ e $xy=4$, então $x^2+y^2=9+8=17$.`),
    p(String.raw`**Truque do inverso:** $\left(a+\dfrac1a\right)^2=a^2+2+\dfrac{1}{a^2}$. Se $a+\dfrac1a=4$, então $a^2+\dfrac1{a^2}=16-2=14$.`),
  ],

  'historia-2': [
    h('5. Pontos que costumam cair'),
    list([
      '**Calvinismo:** João Calvino (Genebra) pregava a predestinação e valorizava o trabalho, a poupança e o lucro como sinais da graça divina. Por isso, atraiu muito a burguesia comercial.',
      '**Hobbes:** no "estado de natureza" haveria uma "guerra de todos contra todos". Para garantir a ordem, as pessoas aceitam um soberano de poder absoluto. Já **Bossuet** defendia que o poder do rei vem diretamente de Deus.',
      '**Pacto colonial:** a colônia fornece matérias-primas e compra produtos manufaturados da metrópole, em regime de **monopólio**, o que garante a balança comercial favorável.',
      '**Peste negra (séc. XIV):** matou cerca de um terço dos europeus. Com a escassez de mão de obra, os servos conseguiram melhores condições ou fugiram para as cidades, o que abalou o feudalismo.',
    ]),
  ],
}
