import type { Block } from '../../../domain/lesson'
import { call, h, list, math, p, table } from './b'

/** Complementos das tarefas de 7 a 11/12. */
export const ADD_WEEK4: Record<string, Block[]> = {
  'ingles-3': [
    h('5. Pronomes relativos'),
    p('Os pronomes relativos ligam uma informação extra a um substantivo que veio antes.'),
    table(['Pronome', 'Usa-se para', 'Exemplo'], [
      ['who', 'pessoas (sujeito)', 'The girl **who** lives next door is my friend.'],
      ['whom', 'pessoas (objeto, mais formal)', 'The man **whom** I met was kind.'],
      ['which', 'coisas e animais', 'The book **which** I bought is good.'],
      ['that', 'pessoas ou coisas (uso geral)', 'The movie **that** we saw was long.'],
      ['whose', 'posse (de quem)', 'He is the man **whose** car was stolen.'],
    ]),
  ],

  'quimica-pratica-1': [
    p('**Estados físicos em nível molecular:** no sólido, as partículas estão próximas e organizadas, quase sem se mover. No líquido, continuam próximas, mas menos organizadas, e as forças intermoleculares as mantêm atraídas (por isso o líquido escoa). No gasoso, estão muito afastadas e agitadas, com forças fracas. Mudar a temperatura e a pressão muda esse arranjo.'),
    p(String.raw`**Caráter ácido ou básico de uma espécie:** o que libera $H^+$ em água tem caráter **ácido**, e o que libera $OH^-$ tem caráter **básico**. Em $HClO \rightleftharpoons ClO^- + H^+$, a espécie $HClO$ libera $H^+$: caráter ácido.`),
    p('**Ordem dos modelos atômicos:** Dalton (1808), Thomson (1904), Rutherford (1911) e Bohr (1913). Em uma lista com esses nomes, o modelo mais recente é o de **Bohr**.'),
    p('**Rótulos e regra de três:** descubra quanto soluto há por litro de solução e depois ajuste ao volume pedido.'),
    call('exemplo', 'Uma porção de 10 g do pó tem 4 g de açúcar. Um pacote de 50 g é dissolvido em 1 L: tem $50 \\cdot \\dfrac{4}{10} = 20$ g de açúcar por litro. Em um copo de 250 mL: $20 \\cdot 0{,}25 = 5$ g.'),
    table(['Função orgânica', 'Grupo característico', 'Exemplo'], [
      ['Álcool', '−OH ligado a carbono saturado', 'etanol'],
      ['Fenol', '−OH ligado direto a um anel aromático', 'fenol'],
      ['Aldeído', '−CHO (carbonila na ponta da cadeia)', 'formaldeído'],
      ['Cetona', 'C=O entre dois carbonos', 'acetona'],
      ['Éter', '−O− entre dois carbonos (C−O−C)', 'éter etílico'],
      ['Ácido carboxílico', '−COOH', 'ácido acético'],
      ['Éster', '−COO− entre carbonos', 'acetato de etila'],
      ['Amina', '−NH₂', 'metilamina'],
    ]),
    p('Para identificar funções em uma fórmula estrutural, procure esses grupos um a um. A vanilina, por exemplo, tem −OH preso ao anel (**fenol**), −CHO (**aldeído**) e −O−CH₃ (**éter**).'),
    p(String.raw`**Estequiometria e pH:** use $n=\dfrac{m}{M}$ e a proporção dos coeficientes. Para pH, $pH=-\log[H^+]$. Diluir um ácido forte 10 vezes aumenta o pH em 1 unidade (100 vezes, em 2), mas o pH nunca passa de 7 por diluição: ácido pH 2 diluído 100 vezes vai a pH 4.`),
  ],

  'matematica-7': [
    h('5. Mais duas técnicas'),
    p(String.raw`**Briot-Ruffini (divisão por $x-a$):** copie o primeiro coeficiente, multiplique por $a$ e some ao próximo, repetindo. O último número é o resto, e os anteriores são os coeficientes do quociente.`),
    call('exemplo', String.raw`Dividir $x^2-7x+10$ por $x-2$ (a = 2). Coeficientes: 1, −7, 10. Baixe o 1; $1\cdot 2 + (-7) = -5$; $-5\cdot 2 + 10 = 0$. Resto 0 e quociente $x-5$.`),
    p(String.raw`**Divisível por $x+1$:** escreva $x+1 = x-(-1)$. Então $P$ é divisível por $x+1$ se $P(-1)=0$. Do mesmo modo, para $x+3$ use $P(-3)=0$.`),
  ],

  'portugues-4': [
    h('5. Mais três casos que caem'),
    p('**Haver impessoal com verbo auxiliar:** o auxiliar também fica no **singular**, concordando com o impessoal: "Deve **haver** soluções", "Pode **haver** problemas" (e não "Devem haver"). Já o verbo **existir** tem sujeito e concorda com ele: "Devem **existir** soluções".'),
    p('**Crase com pronomes demonstrativos:** antes de **aquele, aquela, aquilo** há crase se o verbo pede preposição **a**: a + aquela = **àquela**. "Entreguei o prêmio **àquela** aluna."'),
    p('**Crase antes de palavra feminina com artigo:** "Entreguei o livro **à** diretora" (entregar pede a; "a diretora" tem artigo). Antes de verbo ou de palavra masculina, não há crase.'),
  ],

  'fisica-4': [
    h('4. Complementos'),
    p('**Massa × peso:** a massa (kg) não muda de lugar para lugar, mas o peso ($P=m\\,g$) depende da gravidade local. Na Lua, $g \\approx 1{,}6$ m/s²: um objeto de 10 kg pesa 16 N (na Terra, 100 N).'),
    p('**Fração submersa de um corpo que flutua:** em equilíbrio, empuxo = peso, e a fração do volume que fica dentro do líquido é a razão entre as densidades.'),
    math(String.raw`\dfrac{V_{\text{submerso}}}{V_{\text{corpo}}} = \dfrac{d_{\text{corpo}}}{d_{\text{líquido}}}`),
    call('exemplo', String.raw`Gelo ($d = 900$ kg/m³) na água ($1\,000$ kg/m³): $\dfrac{900}{1000} = 90\%$ do volume fica submerso.`),
  ],

  'geografia-4': [
    h('6. Pré-sal'),
    p('O **pré-sal** é uma grande reserva de petróleo e gás localizada em camadas muito profundas, **abaixo de uma espessa camada de sal**, no fundo do oceano, no litoral do Sudeste (bacias de Santos e Campos). Exige tecnologia avançada, e o Brasil é hoje um grande produtor de petróleo graças a ele.'),
  ],

  'matematica-8': [
    h('3. Mais dois recursos'),
    p(String.raw`**Termos quaisquer de uma PA:** $a_n = a_k + (n-k)\,r$. Se $a_3=10$ e $a_7=22$, entre o 3º e o 7º termo há 4 passos: $22-10=4r$, então $r=3$.`),
    p(String.raw`**Três números em PA:** chame-os de $x-r$, $x$ e $x+r$. A soma é $3x$ e fica fácil achar $x$.`),
    call('exemplo', String.raw`Três números em PA têm soma 18 e produto 162. Soma: $3x=18$, então $x=6$. Produto: $6(36-r^2)=162$, então $r^2=9$ e $r=3$. Os números são 3, 6 e 9.`),
  ],

  'historia-4': [
    h('6. Pontos que costumam cair'),
    list([
      '**Inglaterra e o tráfico de escravos:** a pressão inglesa pelo fim do tráfico no século XIX (como o Bill Aberdeen, de 1845) ligava-se, sobretudo, à necessidade de ampliar o **mercado consumidor** para os produtos industrializados, o que exigia trabalhadores assalariados, e não escravizados.',
      '**A corte portuguesa no Brasil (1808):** Napoleão decretou o **Bloqueio Continental** contra a Inglaterra. Portugal, aliado dos ingleses, não aderiu e foi invadido. D. João VI fugiu para o Brasil, sob proteção da frota inglesa.',
    ]),
  ],
}
