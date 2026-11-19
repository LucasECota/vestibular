import type { Block } from '../../../domain/lesson'
import { call, h, list, p, table } from './b'

/** Complementos das tarefas de 21 a 24/12. */
export const ADD_WEEK6: Record<string, Block[]> = {
  'ingles-5': [
    h('5. Verbos de variação em textos científicos'),
    p('Para dados e tendências: **rise / rose / risen** = subir, aumentar; **fall / fell / fallen** = cair, diminuir; **increase** = aumentar; **decrease** = diminuir. "Has risen by 1.1 °C since the 19th century" = "subiu 1,1 °C desde o século XIX" (*by* indica quanto, *since* indica desde quando).'),
  ],

  'portugues-pratica-1': [
    p('**Sujeito:** pergunte "quem?" ao verbo. Em "Os meninos chegaram cedo", quem chegou? Os meninos.'),
    p('**Tipos de frase:** declarativa (informa), interrogativa (pergunta), imperativa (ordem ou pedido) e exclamativa (emoção: "Que dia lindo!").'),
    table(['Oração coordenada', 'Conjunções', 'Ideia'], [
      ['Assindética', '(nenhuma, só vírgulas)', 'Cheguei, vi, venci.'],
      ['Sindética aditiva', 'e, nem, não só... mas também', 'soma de ideias'],
      ['Sindética adversativa', 'mas, porém, contudo, todavia', 'oposição'],
      ['Sindética alternativa', 'ou, ora... ora', 'escolha'],
      ['Sindética conclusiva', 'logo, portanto, por isso', 'conclusão'],
      ['Sindética explicativa', 'pois, porque', 'explicação'],
    ]),
    p('**Gênero de substantivos que confundem:** são masculinos **o** champanhe, **o** formicida, **o** dó e **o** guaraná; são femininos **a** mascote, **a** alface, **a** dengue e **a** omoplata (e não "o amoplata").'),
    p('**Plural dos substantivos em -ão:** cidadão → cidadãos; mão → mãos; pão → pães; alemão → alemães; coração → corações.'),
    p('**Acentuação:** acentuam-se os ditongos abertos **éi, éu, ói** quando são tônicos no fim da palavra (papéis, troféu, **herói**). Em palavras paroxítonas, o acento deixou de existir (ideia, jiboia).'),
    table(['Escola', 'Traços principais', 'Nomes'], [
      ['Barroco (séc. XVII)', 'Conflito fé × prazer, antíteses', 'Gregório de Matos'],
      ['Arcadismo (séc. XVIII)', 'Bucolismo, simplicidade', 'Tomás Antônio Gonzaga'],
      ['Romantismo (séc. XIX)', 'Emoção, nacionalismo; 3ª geração: poesia social e abolicionista (Castro Alves)', 'Alencar, Gonçalves Dias, Álvares de Azevedo'],
      ['Realismo e Naturalismo', 'Objetividade, crítica social ("Dom Casmurro", 1899)', 'Machado de Assis, Aluísio Azevedo'],
      ['Parnasianismo', 'Arte pela arte, rigor formal', 'Olavo Bilac'],
      ['Simbolismo', 'Musicalidade, subjetividade, misticismo, sinestesia, aliteração e assonância; oposição ao racionalismo', 'Cruz e Sousa'],
      ['Modernismo (1922)', 'Ruptura, verso livre, linguagem coloquial', 'Mário e Oswald de Andrade, Graciliano Ramos'],
    ]),
    p('**Gêneros literários:** o **lírico** exprime emoções; o **narrativo (épico)** conta fatos; o **dramático** é escrito para ser encenado por atores e se organiza em atos, cenas, falas e **rubricas** (instruções do autor). Seus subgêneros são a **tragédia** (tema funesto, de origem grega) e a **comédia** (humor e sátira dos costumes e das instituições).'),
    p('**Variação regional:** gírias e expressões de cada região (oxente, mainha, da hora, cacetinho) são exemplos de variação diatópica, e todas são legítimas.'),
    p('**Questões "alternativa incorreta" sobre um texto:** compare cada alternativa com o texto. A errada costuma trocar conceitos (por exemplo, inverter as definições de dois termos) ou acrescentar algo que o texto não diz.'),
  ],

  'matematica-11': [
    h('5. Mais duas ferramentas'),
    p(String.raw`**Distância de um ponto a uma reta** $ax+by+c=0$: $d = \dfrac{|a\,x_0 + b\,y_0 + c|}{\sqrt{a^2+b^2}}$.`),
    call('exemplo', String.raw`Ponto $(2,1)$ e reta $3x+4y-5=0$: $d=\dfrac{|6+4-5|}{\sqrt{9+16}}=\dfrac{5}{5}=1$.`),
    p(String.raw`**Onde a reta corta os eixos:** faça $x=0$ para achar o ponto no eixo $y$ e $y=0$ para o ponto no eixo $x$. Em $3x+2y-12=0$: $x=0\Rightarrow y=6$, ponto $(0,6)$; $y=0\Rightarrow x=4$, ponto $(4,0)$.`),
  ],

  'biologia-6': [
    h('6. Vacina e diabetes'),
    list([
      '**Vacina:** contém o agente enfraquecido, morto ou partes dele. Estimula o sistema imune a produzir **anticorpos** e **células de memória**, que protegem em uma infecção futura. O **soro** já traz anticorpos prontos: ação rápida, mas de curta duração.',
      '**Diabetes tipo 1:** doença **autoimune**: o sistema imune destrói as células beta do pâncreas, e falta insulina. No **tipo 2**, as células respondem mal à insulina (resistência), com ligação à obesidade e ao sedentarismo.',
    ]),
  ],

  'geografia-6': [
    h('5. Pontos que costumam cair'),
    list([
      '**Soja:** a principal região produtora é o **Centro-Oeste** (Mato Grosso, Goiás), com expansão sobre o Cerrado e a Amazônia.',
      '**Indústria:** historicamente concentrada no **Sudeste**, sobretudo em São Paulo (capital do café, mercado consumidor, infraestrutura e mão de obra). Hoje há **desconcentração**: fábricas migram da Grande São Paulo para o interior e para outras regiões, atraídas por incentivos fiscais, terrenos e mão de obra mais baratos e menos congestionamento.',
      '**Zona Franca de Manaus (1967):** conjunto de incentivos fiscais para atrair indústrias (eletroeletrônicos, motocicletas) e gerar empregos na Amazônia.',
      '**Reforma agrária:** redistribuição de terras para reduzir a concentração fundiária e assentar famílias; ligada a movimentos como o MST.',
      '**Revolução Verde (a partir dos anos 1960):** modernização do campo, com sementes melhoradas, adubos químicos, agrotóxicos, mecanização e irrigação. Aumentou a produtividade, mas também a concentração de terras e os impactos ambientais.',
    ]),
  ],
}
