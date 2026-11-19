import type { Block } from '../../../domain/lesson'
import { call, list, p, table } from './b'

/** Complementos das tarefas de 6 a 8/01 (simulados com questões de provas anteriores). */
export const ADD_WEEK9: Record<string, Block[]> = {
  'ingles-pratica-2': [
    table(['Palavra', 'Pergunta sobre', 'Exemplo'], [
      ['Who', 'quem (pessoa)', 'Who is Mary?'],
      ['Where', 'onde (lugar)', 'Where was she born?'],
      ['When', 'quando (tempo)', 'When was she born?'],
      ['Whose', 'de quem (posse)', 'Whose sister is she?'],
      ['How old', 'idade', 'How old is she?'],
      ['What / Why / How much (many)', 'o quê / por quê / quanto', 'What is her favorite actor?'],
    ]),
    list([
      '**Pronomes em um texto:** *it* = ele/ela (coisa, país, cidade) como sujeito; *its* = dele/dela (posse, sem apóstrofo); *their* = deles; *it\'s* = *it is* ("unless **it\'s** from a doctor" = a menos que seja de um médico). Procure o substantivo a que o pronome se refere.',
      '**some × any:** *some* aparece em frases afirmativas e em ofertas ("Would you like some cake?"). *Any* aparece em frases negativas e perguntas ("Daniel hasn\'t got **any** stamps"; "She doesn\'t have **any** time"). "hasn\'t got some" está errado.',
      '**Auxiliar com he/she/it:** em perguntas no presente simples usa-se *does* e o verbo fica na forma base: "**Does** Samantha usually **have** dinner...?".',
      '**Expressões idiomáticas** não se traduzem palavra por palavra: *once in a blue moon* = muito raramente; *piece of cake* = moleza; *break a leg* = boa sorte.',
      '**Passado simples:** go → went, borrow → borrowed. Em *If I had studied, I would have passed* (terceiro condicional: *if* + passado perfeito, *would have* + particípio), a situação é **irreal no passado**: a pessoa não estudou e não passou.',
      '**Pronomes relativos:** *who* (pessoas), *which* (coisas), *whose* (posse). "attend" é falso cognato: significa assistir/comparecer, e não "atender".',
    ]),
  ],

  'fisica-pratica-2': [
    list([
      String.raw`**Velocidade média:** $v=\dfrac{\Delta s}{\Delta t}$, com o tempo em horas decimais (2 h 30 min = 2,5 h).`,
      String.raw`**Efeito fotoelétrico:** um fóton só arranca elétrons de um metal se $h\,f \ge W$ (função trabalho). A frequência mínima é $f_{\min}=\dfrac{W}{h}$. Para o relé que deve reagir à luz azul e violeta (acima de ~606 THz) mas **não** a frequências menores (como o verde), o metal precisa ter $f_{\min}$ dentro da faixa do azul. Sódio e lítio ($f_{\min}\approx 556$ e $561$ THz) também reagiriam ao verde; o bário ($\approx 610$ THz) não.`,
      '**Eclipses:** o eclipse **solar** ocorre na Lua nova (a Lua fica entre o Sol e a Terra, e sua sombra cai sobre a Terra). O eclipse **lunar** ocorre na **Lua cheia**: a Terra fica entre o Sol e a Lua, e a Lua entra na sombra da Terra. Se só **parte** da Lua entra na umbra (sombra total) da Terra, o eclipse lunar é **parcial**; se a Lua toda entra, é total.',
      String.raw`**Eco e ecolocalização:** o som vai e volta, então $d = \dfrac{v\cdot t}{2}$. Com $v=330$ m/s e $t=0{,}08$ s: $d=\dfrac{330\cdot 0{,}08}{2}=13{,}2$ m.`,
      '**Kepler:** no **periélio** (ponto mais próximo do Sol) o planeta é mais rápido, então sua energia cinética é **máxima**; no **afélio**, a velocidade e a energia cinética são mínimas. Na 3ª lei, $T^2/R^3$ é constante: com $R$ em unidades astronômicas e $T$ em anos, $T^2=R^3$.',
      String.raw`**Freada:** o trabalho da força de frenagem é igual à variação da energia cinética: $F\cdot d=\dfrac{m\,v^2}{2}$. **Empuxo:** $E=\rho\,g\,V$. **Pressão hidrostática:** $p=\rho\,g\,h$.`,
    ]),
  ],

  'matematica-pratica-3': [
    list([
      String.raw`**Área de um polígono por coordenadas:** liste os vértices em ordem, calcule $\sum (x_i\,y_{i+1}-x_{i+1}\,y_i)$ voltando ao primeiro vértice no fim, e divida o módulo por 2.`,
      String.raw`**Cubos:** $a^3+b^3=(a+b)^3-3ab\,(a+b)$. E $ab=\dfrac{(a+b)^2-(a^2+b^2)}{2}$. Com $a+b=5$ e $a^2+b^2=13$: $ab=6$ e $a^3+b^3=125-90=35$.`,
      '**Comparar frações:** converta para decimais ou use o mesmo denominador. A diferença entre a maior e a menor é feita com o mmc dos denominadores.',
      String.raw`**Porcentagens sucessivas:** multiplique os fatores. Aumento de 10% e desconto de 10%: $1{,}1\cdot 0{,}9=0{,}99$ (ficou 1% menor).`,
      String.raw`**Probabilidade sem reposição:** multiplique as probabilidades de cada retirada, atualizando o total. Duas vermelhas em uma urna com 3 vermelhas e 2 azuis: $\dfrac35\cdot\dfrac24=\dfrac{3}{10}$.`,
      String.raw`**Circunferência tangente ao eixo $x$:** o raio é a distância do centro ao eixo, ou seja, o módulo da ordenada do centro. Centro $(1,2)$: $r=2$.`,
    ]),
    call('exemplo', String.raw`Triângulo $(0,0)$, $(4,0)$, $(0,3)$: $(0\cdot 0-4\cdot 0)+(4\cdot 3-0\cdot 0)+(0\cdot 0-0\cdot 3)=12$, e a área é $\dfrac{12}{2}=6$.`),
    call('exemplo', String.raw`Frações $\dfrac59,\ \dfrac7{12},\ \dfrac9{16},\ \dfrac{19}{34},\ \dfrac{55}{100}$ em decimais: 0,556; 0,583; 0,563; 0,559; 0,55. Maior $\dfrac7{12}$, menor $\dfrac{11}{20}$: diferença $\dfrac{35-33}{60}=\dfrac1{30}$.`),
  ],

  'portugues-pratica-2': [
    list([
      '**Conectivos de adição:** *além disso*, *também*, *ademais*, *e* somam ideias. Diferem de consequência (*portanto*), oposição (*porém*) e explicação (*pois*).',
      '**A palavra "se":** é **conjunção condicional** quando equivale a "caso" ("Melhor não tocar nele **se** está machucado"). Como pronome, pode ser reflexivo ("ele **se** feriu"), apassivador ("vendem-**se** casas") ou índice de indeterminação do sujeito.',
      '**Tipos de narrador:** em 1ª pessoa, **narrador-personagem**. Em 3ª pessoa, o **observador** apenas descreve o que vê; o **onisciente** conhece pensamentos e sentimentos ("Fabiano esqueceu a fome", "sentiu desejo de cantar"). Em trechos que descrevem ações e também o interior do personagem, há observador e onisciente.',
      '**Modernismo:** rompe com o academicismo e o tradicionalismo, defende a liberdade estética e a experimentação (vanguardas europeias). Na 2ª geração (1930–45), aparecem Murilo Mendes, Graciliano Ramos e outros.',
      '**Concordância:** *haver* (existir) e *fazer* (tempo decorrido) são impessoais e ficam no singular: "**Há** muitos anos", "**Faz** dois meses". Errado: "Haviam anos", "Fazem dois séculos".',
      '**Interpretação:** a ideia central do texto de "saúde e bem-estar" é que ambos importam para a qualidade de vida. Elimine alternativas que fogem do tema ou usam exageros ("apenas por meio de medicamentos", "ninguém gosta").',
    ]),
  ],

  'fisica-pratica-3': [
    list([
      String.raw`**Conservação da energia (montanha-russa):** sem perdas, $m\,g\,h=\dfrac{m\,v^2}{2}$, então $v=\sqrt{2\,g\,h}$. Com $h=8{,}5$ m e $g=10$: $v=\sqrt{170}\approx 13$ m/s (o rato está na base, onde $h=0$ e a energia é toda cinética).`,
      '**Fissão nuclear:** um **nêutron** colide com um núcleo grande (como o de urânio) e o divide em núcleos menores, com grande liberação de energia, mais nêutrons que mantêm a reação em cadeia. Há emissão de **radiação gama** (onda eletromagnética de alta frequência e **alto poder de penetração**), além de partículas. Por isso as afirmativas que falam em "próton", "só alfa e beta" ou "baixo poder de penetração" estão erradas.',
      String.raw`**Circuitos:** lâmpadas são **receptores** (transformam energia elétrica em luz e calor). Em **série**, a corrente é a mesma e $R_{eq}=R_1+R_2+\dots$. Em **paralelo**, a tensão é a mesma em todas as lâmpadas e $\dfrac{1}{R_{eq}}=\dfrac{1}{R_1}+\dfrac{1}{R_2}+\dots$ (para $n$ lâmpadas iguais, $R_{eq}=R/n$). A corrente total é $i=\dfrac{U}{R_{eq}}$. Lembre-se: 1 µA = $10^{-6}$ A.`,
      String.raw`**Lei de Ohm e potência:** $U=R\,i$ e $P=U\,i$. Uma bateria de 12 V com resistores de 2 Ω e 4 Ω em série: $i=\dfrac{12}{6}=2$ A, e a tensão nos 4 Ω é $4\cdot 2=8$ V.`,
      String.raw`**Calorimetria:** $Q=m\,c\,\Delta T$. **Energia elétrica:** $E=P\cdot\Delta t$ (em kWh, use kW e horas).`,
      '**Espelho plano:** a imagem fica à mesma distância do espelho que o objeto, então a distância entre a pessoa e a imagem é o **dobro** da distância até o espelho.',
      String.raw`**Gravitação:** $F\propto \dfrac{1}{d^2}$. Triplicando a distância, a força fica dividida por 9. **Lente:** vergência $V=\dfrac{1}{f}$ (em metros), em dioptrias (di).`,
    ]),
  ],

  'biologia-pratica-2': [
    table(['Grupo', 'Folhetos embrionários', 'Celoma', 'Simetria', 'Boca'], [
      ['Poríferos (esponjas)', 'Ausentes (não têm tecidos verdadeiros)', 'Ausente', 'Sem simetria (assimétricos)', '—'],
      ['Moluscos', 'Triblásticos', 'Celomados', 'Bilateral', 'Protostômios'],
      ['Cordados', 'Triblásticos', 'Celomados', 'Bilateral', 'Deuterostômios'],
    ]),
    p('**Protostômios:** a boca se forma antes (moluscos, anelídeos, artrópodes). **Deuterostômios:** o ânus se forma primeiro e a boca depois (equinodermos e cordados). Os **diblásticos** são os cnidários.'),
    list([
      '**Células-tronco:** as **embrionárias** são pluripotentes (dão origem a praticamente todos os tipos de célula); as **adultas** são multipotentes (mais limitadas). Multiplicam-se por **mitose**, e, se fugirem do controle, podem formar **tumores**.',
      '**Fungos:** o champignon é comestível (os alucinógenos são outros cogumelos). Em **micorrizas**, o fungo se associa às raízes e **ambos se beneficiam** (mutualismo). Há fungos usados em queijos (como o roquefort), e leveduras fazem **fermentação**, que ocorre **sem oxigênio** (anaeróbia). Muitos fungos causam micoses.',
      '**Enzimas:** cada enzima tem um **pH ótimo** (pepsina ≈ 2, amilase ≈ 7, tripsina ≈ 8) e uma temperatura ótima; fora desses valores a atividade cai. O **calor excessivo desnatura**; a diminuição da temperatura apenas reduz a atividade. Não existe um pH ótimo único para a maioria das enzimas.',
      '**Cadeia alimentar do ser humano:** ao comer vegetais (mandioca, arroz), é **consumidor primário**; ao comer carne de herbívoros (como o boi), é **secundário**.',
      '**Fases da meiose:** na **metáfase I**, os cromossomos homólogos estão pareados e alinhados na placa equatorial. Na **anáfase I**, os homólogos se separam (o centrômero não se divide). Na **telófase I**, os cromossomos continuam duplos. Na **metáfase II**, os cromossomos duplos se alinham um a um, e na anáfase II separam-se as cromátides.',
      '**Genética com dois genes:** em AaBb × AaBb, a chance de aabb é $\\frac14\\cdot\\frac14=\\frac1{16}$. **Parasitismo:** o carrapato se alimenta do sangue do boi sem matá-lo. **Seleção natural:** o inseticida elimina os sensíveis, e os resistentes se reproduzem.',
    ]),
  ],
}
