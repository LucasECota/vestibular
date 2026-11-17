import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { PLAN } from './data/plan'
import { ProgressProvider } from './state/ProgressProvider'

const renderApp = (route = '/', today = '2026-11-17') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <ProgressProvider today={today}>
        <App />
      </ProgressProvider>
    </MemoryRouter>,
  )

const mathTasks = PLAN.filter((t) => t.subject === 'matematica').length

type User = ReturnType<typeof userEvent.setup>

/** Respostas da aula de Matemática 1: [errada, certa, certa, certa, certa]. */
const MAT1_PICKS = [/^A\s*11/, /^B\s*2$/, /^C\s*R\$ 220/, /^B\s*4% menor/, /^B\s*2$/]

const answerMat1 = async (user: User) => {
  const cards = screen.getAllByRole('article').slice(0, 5)
  for (let i = 0; i < 5; i++) await user.click(within(cards[i]).getByRole('button', { name: MAT1_PICKS[i] }))
}

const goHome = () => within(screen.getByRole('navigation')).getByRole('link', { name: 'Hoje' })

describe('fluxo principal', () => {
  it('mostra nível, sequência e as tarefas de hoje', () => {
    renderApp()
    expect(screen.getByText('Nível 1')).toBeInTheDocument()
    expect(screen.getByText(/operações, potências e porcentagem/i)).toBeInTheDocument()
    expect(screen.getByText(/classes de palavras|interpretação de texto e gêneros/i)).toBeInTheDocument()
    expect(screen.queryByText(/cinemática/i)).not.toBeInTheDocument()
  })

  it('o plano só começa amanhã: hoje (16/11) não tem tarefas', () => {
    renderApp('/', '2026-11-16')
    expect(screen.getByText(/sem tarefas hoje/i)).toBeInTheDocument()
    expect(screen.queryByText(/operações, potências e porcentagem/i)).not.toBeInTheDocument()
  })

  it('mostra a contagem regressiva e o plano completo', async () => {
    const user = userEvent.setup()
    renderApp()
    expect(screen.getByText(/faltam 61 dias para a prova/i)).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: /plano de estudo completo/i }))
    expect(screen.getByRole('heading', { name: 'Plano de estudo' })).toBeInTheDocument()
    expect(screen.getAllByRole('region', { name: /semana/i })).toHaveLength(9)
    expect(screen.getByText('Revisão final')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Semana 1' })).toHaveTextContent('17/11')
  })

  it('explica a pontuação, e questão de provas anteriores acertada rende pontos', async () => {
    const user = userEvent.setup()
    renderApp()
    const rules = screen.getByText(/como ganho pontos/i).closest('details')!
    expect(rules).toHaveTextContent('+10 XP')
    expect(rules).toHaveTextContent('+2 XP')
    expect(rules).toHaveTextContent('+50 XP')
    expect(rules).toHaveTextContent('+5 XP')
    expect(rules).toHaveTextContent(/provas anteriores/i)

    // o que o texto promete confere: acertar uma questão de prova anterior dá +10 XP
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Questões' }))
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'matematica')
    await user.selectOptions(screen.getByLabelText(/^ano/i), '2024')
    const first = screen.getAllByRole('article')[0]
    await user.click(within(first).getByRole('button', { name: /^D\s*25\./ })) // gabarito oficial
    await user.click(within(first).getByRole('button', { name: /confirmar resposta/i }))
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Hoje' }))
    expect(screen.getByText('10 XP')).toBeInTheDocument()
  })

  it('subir de nível mostra o card "Você subiu de nível!" uma única vez', async () => {
    const user = userEvent.setup()
    // 9 acertos já feitos = 90 XP (nível 1, faltam 10 para o nível 2)
    const attempts = Array.from({ length: 9 }, (_, i) => ({ exerciseId: `seed-${i}`, taskId: 'banco', subject: 'matematica', correct: true }))
    localStorage.setItem('vestibular-uemg:progress:v1', JSON.stringify({ completedTaskIds: [], activeDates: [], attempts }))

    const first = renderApp('/questoes')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument() // abrir o site não comemora
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'matematica')
    await user.selectOptions(screen.getByLabelText(/^ano/i), '2024')
    const card = screen.getAllByRole('article')[0]
    await user.click(within(card).getByRole('button', { name: /^D\s*25\./ })) // certa: +10 XP = 100 XP
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument() // só marcou, ainda não confirmou
    await user.click(within(card).getByRole('button', { name: /confirmar resposta/i }))

    const dialog = screen.getByRole('dialog', { name: /você subiu de nível!/i })
    expect(within(dialog).getByText('2')).toBeInTheDocument() // novo nível
    expect(dialog).toHaveTextContent('Total: 100 XP')
    expect(dialog).toHaveTextContent('Daniela')

    await user.click(within(dialog).getByRole('button', { name: /continuar/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    first.unmount()

    // recarregar não repete a comemoração
    renderApp('/')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByText('Nível 2')).toBeInTheDocument()
  })

  it('quem já tinha nível alto ao abrir pela primeira vez não vê comemoração', () => {
    const attempts = Array.from({ length: 50 }, (_, i) => ({ exerciseId: `seed-${i}`, taskId: 'banco', subject: 'matematica', correct: true }))
    localStorage.setItem('vestibular-uemg:progress:v1', JSON.stringify({ completedTaskIds: [], activeDates: [], attempts }))
    renderApp('/')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(localStorage.getItem('vestibular-uemg:seen-level:v1')).not.toBeNull()
  })

  it('abrir uma tarefa sempre começa no topo da página', async () => {
    const user = userEvent.setup()
    renderApp('/plano') // lista longa: a pessoa costuma estar rolada para baixo
    const scrollTo = vi.mocked(window.scrollTo)
    scrollTo.mockClear()

    await user.click(screen.getAllByRole('link', { name: /operações, potências e porcentagem/i })[0])
    expect(screen.getByRole('heading', { name: 'Operações, potências e porcentagem' })).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)

    // também ao ir de uma tarefa para outra aba e voltar
    scrollTo.mockClear()
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Disciplinas' }))
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('tarefas da semana 8 mostram o roteiro do simulado e as questões; as da semana 9, o resumão', async () => {
    const week8 = renderApp('/tarefa/t-2027-01-11-quimica')
    expect(screen.getByRole('region', { name: 'Simulado' })).toBeInTheDocument()
    expect(screen.getByText(/como usar esta hora/i)).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(8) // oficiais + 5 extras
    week8.unmount()

    renderApp('/tarefa/t-2027-01-15-biologia')
    expect(screen.getByRole('region', { name: 'Resumão' })).toBeInTheDocument()
    expect(screen.getByText('Véspera e dia da prova')).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(5)
  })

  it('cumprimenta a Daniela', () => {
    renderApp()
    expect(screen.getByRole('heading', { name: /daniela/i })).toBeInTheDocument()
  })

  it('navega entre as abas', async () => {
    const user = userEvent.setup()
    renderApp()
    await user.click(screen.getByRole('link', { name: 'Disciplinas' }))
    expect(screen.getByRole('heading', { name: 'Disciplinas' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'Guia' }))
    await user.click(screen.getByRole('link', { name: /redação/i }))
    expect(screen.getByRole('heading', { name: 'Redação' })).toBeInTheDocument()
  })

  it('anota, resolve e apaga dúvidas, e copia as abertas', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
    renderApp('/duvidas')

    const add = screen.getByRole('button', { name: /anotar dúvida/i })
    expect(add).toBeDisabled()
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'fisica')
    await user.type(screen.getByLabelText(/qual é a sua dúvida/i), 'O que é MRUV?')
    await user.click(add)
    expect(screen.getByText('O que é MRUV?')).toBeInTheDocument()
    expect(screen.getByText(/abertas \(1\)/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /copiar para enviar/i }))
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('Física: O que é MRUV?'))

    await user.click(screen.getByRole('button', { name: /marcar como resolvida/i }))
    expect(screen.getByText(/resolvidas \(1\)/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /apagar/i }))
    expect(screen.queryByText('O que é MRUV?')).not.toBeInTheDocument()
  })

  it('o atalho da tarefa abre as dúvidas já com a disciplina escolhida', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-17-matematica')
    await user.click(screen.getByRole('link', { name: /anotar uma dúvida/i }))
    expect(screen.getByLabelText(/disciplina/i)).toHaveValue('matematica')
  })

  it('banco de questões: marcar não corrige; só ao confirmar o envio aparece o feedback', async () => {
    const user = userEvent.setup()
    renderApp('/questoes')
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'matematica')
    await user.selectOptions(screen.getByLabelText(/^ano/i), '2024')
    const first = screen.getAllByRole('article')[0]
    expect(within(first).getByText(/UEMG 2024, questão 43/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /ver a questão como na prova/i })).not.toBeInTheDocument()

    const confirm = within(first).getByRole('button', { name: /confirmar resposta/i })
    expect(confirm).toBeDisabled() // nada marcado
    await user.click(within(first).getByRole('button', { name: /^A\s*16\./ })) // errada
    expect(within(first).queryByText(/resposta certa/i)).not.toBeInTheDocument()
    expect(within(first).queryByText('Correto!')).not.toBeInTheDocument()
    await user.click(within(first).getByRole('button', { name: /^D\s*25\./ })) // troca para a certa (gabarito: D)
    expect(within(first).queryByText('Correto!')).not.toBeInTheDocument() // ainda sem correção
    expect(confirm).toBeEnabled()

    await user.click(confirm)
    expect(within(first).getByText('Correto!')).toBeInTheDocument()
    expect(within(first).getByText(/laço de Gauss/i)).toBeInTheDocument() // explicação
    expect(within(first).queryByRole('button', { name: /confirmar resposta/i })).not.toBeInTheDocument()
  })

  it('banco de questões: filtra por já feitas e ainda não feitas', async () => {
    const user = userEvent.setup()
    renderApp('/questoes')
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'matematica')
    await user.selectOptions(screen.getByLabelText(/^ano/i), '2024')
    const total = Number(screen.getByText(/^\d+ questões$/).textContent!.split(' ')[0])

    await user.selectOptions(screen.getByLabelText(/mostrar/i), 'feitas')
    expect(screen.getByText(/nenhuma questão encontrada/i)).toBeInTheDocument()

    await user.selectOptions(screen.getByLabelText(/mostrar/i), 'todas')
    const first = screen.getAllByRole('article')[0]
    await user.click(within(first).getByRole('button', { name: /^D\s*25\./ }))
    await user.click(within(first).getByRole('button', { name: /confirmar resposta/i }))
    expect(screen.getAllByRole('article')[0]).toBe(first) // continua na lista depois de confirmar

    await user.selectOptions(screen.getByLabelText(/mostrar/i), 'feitas')
    expect(screen.getByText('1 questões')).toBeInTheDocument()
    const done = screen.getAllByRole('article')[0]
    expect(within(done).getByText('Correto!')).toBeInTheDocument() // volta corrigida, com a escolha dela
    expect(within(done).getByRole('button', { name: /^D\s*25\./ })).toHaveAttribute('aria-pressed', 'true')

    await user.selectOptions(screen.getByLabelText(/mostrar/i), 'novas')
    expect(screen.getByText(`${total - 1} questões`)).toBeInTheDocument()
    expect(screen.queryByText(/UEMG 2024, questão 43/)).not.toBeInTheDocument()
  })

  it('tarefa de prática traz questões de provas anteriores', () => {
    renderApp('/tarefa/t-2026-11-23-matematica')
    expect(screen.getByRole('heading', { name: /questões de provas anteriores/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(3)
    // a opção "ver a questão como na prova" não existe mais
    expect(screen.queryByRole('button', { name: /como na prova/i })).not.toBeInTheDocument()
    expect(screen.queryByAltText(/como aparece na prova/i)).not.toBeInTheDocument()
  })

  it('na tarefa, o botão do topo volta para o plano (e não para a página Hoje)', async () => {
    const user = userEvent.setup()
    renderApp('/plano')
    await user.click(screen.getAllByRole('link', { name: /operações, potências e porcentagem/i })[0])
    expect(screen.getByRole('heading', { name: 'Operações, potências e porcentagem' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /‹ hoje/i })).not.toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /voltar ao plano/i }))
    expect(screen.getByRole('heading', { name: 'Plano de estudo' })).toBeInTheDocument()
  })

  it('abrir uma tarefa pela tela Hoje também mostra "Voltar ao plano"', async () => {
    const user = userEvent.setup()
    renderApp('/')
    await user.click(screen.getByRole('link', { name: /operações, potências e porcentagem/i }))
    await user.click(screen.getByRole('link', { name: /voltar ao plano/i }))
    expect(screen.getByRole('heading', { name: 'Plano de estudo' })).toBeInTheDocument()
  })

  it('questão errada volta para revisão nos dias seguintes, e acertar rende XP', async () => {
    const user = userEvent.setup()
    // dia 1 (17/11): erra a questão 1 da aula de Matemática (certa: C = 15)
    const day1 = renderApp('/tarefa/t-2026-11-17-matematica', '2026-11-17')
    await answerMat1(user) // a 1ª alternativa marcada (A = 11) está errada
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    expect(within(screen.getAllByRole('article')[0]).getByText(/resposta certa: C/i)).toBeInTheDocument()
    day1.unmount()

    // mesmo dia: ainda não vence
    const same = renderApp('/revisao', '2026-11-17')
    expect(screen.getByText(/nada para revisar hoje/i)).toBeInTheDocument()
    same.unmount()

    // dia 2 (18/11): aparece na Home e em /revisao
    const day2 = renderApp('/', '2026-11-18')
    expect(screen.getByText(/1 questão para revisar/i)).toBeInTheDocument()
    day2.unmount()

    renderApp('/revisao', '2026-11-18')
    const review = screen.getAllByRole('article')[0]
    await user.click(within(review).getByRole('button', { name: /^C\s*15/ }))
    expect(within(review).getByText('Correto!')).toBeInTheDocument()
    // continua visível depois de responder
    expect(screen.getAllByRole('article')).toHaveLength(1)
  })

  it('tarefa mostra a revisão de erros vencidos', async () => {
    const user = userEvent.setup()
    const day1 = renderApp('/tarefa/t-2026-11-17-matematica', '2026-11-17')
    await answerMat1(user)
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    day1.unmount()
    renderApp('/tarefa/t-2026-11-18-fisica', '2026-11-18')
    expect(screen.getByRole('region', { name: /revisão de erros/i })).toBeInTheDocument()
  })

  it('a revisão dentro da tarefa também só é corrigida ao concluir', async () => {
    const user = userEvent.setup()
    const day1 = renderApp('/tarefa/t-2026-11-17-matematica', '2026-11-17')
    await answerMat1(user) // erra a 1ª
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    day1.unmount()

    renderApp('/tarefa/t-2026-11-18-fisica', '2026-11-18')
    const review = within(screen.getByRole('region', { name: /revisão de erros/i }))
    await user.click(review.getByRole('button', { name: /^C\s*15/ })) // acerta a questão errada de ontem
    expect(review.queryByText('Correto!')).not.toBeInTheDocument() // ainda sem correção

    // responde todos os exercícios de Física (sempre a alternativa A) e conclui
    const cards = within(screen.getByRole('region', { name: 'Exercícios' })).getAllByRole('article')
    expect(cards).toHaveLength(12)
    for (const c of cards) await user.click(within(c).getAllByRole('button')[0]) // alternativa A
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    expect(review.getByText('Correto!')).toBeInTheDocument()
  })

  it('botão para voltar à tarefa aberta e ainda não concluída', async () => {
    const user = userEvent.setup()
    const nav = () => within(screen.getByRole('navigation'))
    renderApp('/tarefa/t-2026-11-17-matematica')

    // na própria tarefa o botão não aparece
    expect(nav().queryByRole('link', { name: /tarefa em andamento/i })).not.toBeInTheDocument()
    await user.click(within(screen.getAllByRole('article')[0]).getByRole('button', { name: MAT1_PICKS[0] })) // marca uma resposta

    // ao ir para outra aba, aparece o botão com o nome da tarefa
    await user.click(nav().getByRole('link', { name: 'Disciplinas' }))
    const resume = nav().getByRole('link', { name: /tarefa em andamento.*operações, potências e porcentagem/i })
    expect(screen.getByRole('heading', { name: 'Disciplinas' })).toBeInTheDocument()

    // continua em qualquer aba
    await user.click(nav().getByRole('link', { name: 'Questões' }))
    expect(nav().getByRole('link', { name: /tarefa em andamento/i })).toBeInTheDocument()

    // voltar retoma a tarefa com a resposta que ela já tinha marcado
    await user.click(nav().getByRole('link', { name: /tarefa em andamento/i }))
    expect(resume).not.toBeInTheDocument() // o botão some na própria tarefa
    expect(screen.getByRole('heading', { name: 'Operações, potências e porcentagem' })).toBeInTheDocument()
    expect(within(screen.getAllByRole('article')[0]).getByRole('button', { name: MAT1_PICKS[0] })).toHaveAttribute('aria-pressed', 'true')

    // concluindo a tarefa, o botão não volta mais
    for (let i = 1; i < 5; i++) await user.click(within(screen.getAllByRole('article')[i]).getByRole('button', { name: MAT1_PICKS[i] }))
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    await user.click(nav().getByRole('link', { name: 'Disciplinas' }))
    expect(nav().queryByRole('link', { name: /tarefa em andamento/i })).not.toBeInTheDocument()
  })

  it('o X fecha a faixa de tarefa em andamento, e ela volta ao abrir uma tarefa de novo', async () => {
    const user = userEvent.setup()
    const nav = () => within(screen.getByRole('navigation'))
    const first = renderApp('/tarefa/t-2026-11-17-matematica')
    await user.click(within(screen.getAllByRole('article')[0]).getByRole('button', { name: MAT1_PICKS[0] }))
    await user.click(nav().getByRole('link', { name: 'Disciplinas' }))
    expect(nav().getByRole('link', { name: /tarefa em andamento/i })).toBeInTheDocument()

    await user.click(nav().getByRole('button', { name: /fechar tarefa em andamento/i }))
    expect(nav().queryByRole('link', { name: /tarefa em andamento/i })).not.toBeInTheDocument()
    expect(nav().queryByRole('button', { name: /fechar tarefa em andamento/i })).not.toBeInTheDocument()
    await user.click(nav().getByRole('link', { name: 'Questões' }))
    expect(nav().queryByRole('link', { name: /tarefa em andamento/i })).not.toBeInTheDocument()
    first.unmount()

    // continua fechada ao recarregar, e a resposta marcada não se perde
    const second = renderApp('/guia')
    expect(within(screen.getByRole('navigation')).queryByRole('link', { name: /tarefa em andamento/i })).not.toBeInTheDocument()
    second.unmount()

    // abrir a tarefa de novo e sair faz a faixa voltar
    renderApp('/tarefa/t-2026-11-17-matematica')
    expect(within(screen.getAllByRole('article')[0]).getByRole('button', { name: MAT1_PICKS[0] })).toHaveAttribute('aria-pressed', 'true')
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Disciplinas' }))
    expect(within(screen.getByRole('navigation')).getByRole('link', { name: /tarefa em andamento/i })).toBeInTheDocument()
  })

  it('o botão de voltar sobrevive a recarregar a página e só aparece se houve tarefa aberta', () => {
    const first = renderApp('/')
    expect(within(screen.getByRole('navigation')).queryByRole('link', { name: /tarefa em andamento/i })).not.toBeInTheDocument()
    first.unmount()
    const open = renderApp('/tarefa/t-2026-11-18-fisica', '2026-11-18')
    open.unmount()
    renderApp('/guia', '2026-11-18') // "recarregou" em outra página
    expect(within(screen.getByRole('navigation')).getByRole('link', { name: /tarefa em andamento.*cinemática/i })).toBeInTheDocument()
  })

  it('páginas do guia têm botão Voltar: volta para onde ela estava, ou para o Guia se abriu direto', async () => {
    const user = userEvent.setup()
    // veio do Guia -> Redação -> Voltar
    const first = renderApp('/guia')
    await user.click(screen.getByRole('link', { name: /redação/i }))
    expect(screen.getByRole('heading', { name: 'Redação' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /voltar/i }))
    expect(screen.getByRole('heading', { name: 'Guia' })).toBeInTheDocument()

    // Guia -> A prova -> Voltar
    await user.click(screen.getByRole('link', { name: /^A prova/ }))
    expect(screen.getByRole('heading', { name: 'A prova' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /voltar/i }))
    expect(screen.getByRole('heading', { name: 'Guia' })).toBeInTheDocument()
    first.unmount()

    // Home -> Plano -> Voltar: volta para a Home (a página anterior), não para o Guia
    const second = renderApp('/')
    await user.click(screen.getByRole('link', { name: /plano de estudo completo/i }))
    expect(screen.getByRole('heading', { name: 'Plano de estudo' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /voltar/i }))
    expect(screen.getByRole('heading', { name: /daniela/i })).toBeInTheDocument()
    second.unmount()

    // abriu a Redação direto (sem página anterior) -> Voltar leva ao Guia
    renderApp('/redacao')
    await user.click(screen.getByRole('button', { name: /voltar/i }))
    expect(screen.getByRole('heading', { name: 'Guia' })).toBeInTheDocument()
  })

  it('mostra a estrutura da prova', async () => {
    const user = userEvent.setup()
    renderApp()
    await user.click(screen.getByRole('link', { name: 'Guia' }))
    await user.click(screen.getByRole('link', { name: /^A prova/ }))
    expect(screen.getByRole('heading', { name: 'A prova' })).toBeInTheDocument()
    expect(screen.getByText('4h')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('96 (2 por questão)')).toBeInTheDocument()
    expect(screen.getByText('156 pontos')).toBeInTheDocument()
    expect(screen.getByText('Matemática')).toBeInTheDocument()
  })

  it('mostra a aula da tarefa, com fórmulas e tabelas', () => {
    renderApp('/tarefa/t-2026-11-17-matematica')
    expect(screen.getByRole('region', { name: 'Aula' })).toBeInTheDocument()
    expect(screen.getByText('1. Ordem das operações')).toBeInTheDocument()
    expect(document.querySelector('.katex')).not.toBeNull()
    expect(screen.getByText('Mesma base, multiplicação')).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(5)
  })

  it('não mostra resultado antes de concluir', () => {
    renderApp('/tarefa/t-2026-11-17-matematica')
    expect(screen.queryByRole('status', { name: 'Resultado da tarefa' })).not.toBeInTheDocument()
  })

  it('o gabarito e a explicação só aparecem depois de concluir a tarefa', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-17-matematica')

    const finish = screen.getByRole('button', { name: /concluir tarefa/i })
    expect(finish).toBeDisabled()

    const cards = screen.getAllByRole('article')
    await user.click(within(cards[0]).getByRole('button', { name: MAT1_PICKS[0] })) // errada
    // marcar não corrige: nada de gabarito ainda
    expect(screen.queryByText(/resposta certa/i)).not.toBeInTheDocument()
    expect(screen.queryByText('Correto!')).not.toBeInTheDocument()
    expect(screen.queryByText(/primeiro a potência/i)).not.toBeInTheDocument()
    expect(within(cards[0]).getByRole('button', { name: MAT1_PICKS[0] })).toHaveAttribute('aria-pressed', 'true')
    expect(finish).toBeDisabled() // faltam 4

    // dá para trocar a resposta antes de concluir
    await user.click(within(cards[0]).getByRole('button', { name: /^C\s*15/ }))
    expect(within(cards[0]).getByRole('button', { name: /^C\s*15/ })).toHaveAttribute('aria-pressed', 'true')
    await user.click(within(cards[0]).getByRole('button', { name: MAT1_PICKS[0] }))

    for (let i = 1; i < 5; i++) await user.click(within(cards[i]).getByRole('button', { name: MAT1_PICKS[i] }))
    expect(finish).toBeEnabled()
    expect(screen.queryByText('Correto!')).not.toBeInTheDocument()

    await user.click(finish)
    expect(screen.getByRole('button', { name: /tarefa concluída/i })).toBeDisabled()
    expect(within(cards[0]).getByText(/resposta certa: C/i)).toBeInTheDocument()
    expect(within(cards[0]).getByText(/primeiro a potência/i)).toBeInTheDocument()
    expect(within(cards[1]).getByText('Correto!')).toBeInTheDocument()
    expect(screen.getByRole('status', { name: 'Resultado da tarefa' })).toHaveTextContent('Você acertou 4/5')

    await user.click(goHome())
    expect(screen.getByText('92 XP')).toBeInTheDocument() // 2 + 4×10 + 50
  })

  it('ao concluir a tarefa, a tela vai direto para o resultado; ao reabrir uma concluída, não rola', async () => {
    const user = userEvent.setup()
    const scrollIntoView = vi.mocked(Element.prototype.scrollIntoView)
    const first = renderApp('/tarefa/t-2026-11-17-matematica')
    await answerMat1(user)
    scrollIntoView.mockClear()
    expect(scrollIntoView).not.toHaveBeenCalled() // marcar respostas não rola a página

    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    const result = screen.getByRole('status', { name: 'Resultado da tarefa' })
    expect(scrollIntoView).toHaveBeenCalledTimes(1)
    expect(scrollIntoView.mock.contexts[0]).toBe(result) // rolou até o cartão do resultado
    expect(result).toHaveTextContent('Você acertou 4/5')
    first.unmount()

    scrollIntoView.mockClear()
    renderApp('/tarefa/t-2026-11-17-matematica') // tarefa já concluída
    expect(screen.getByRole('status', { name: 'Resultado da tarefa' })).toBeInTheDocument()
    expect(scrollIntoView).not.toHaveBeenCalled()
  })

  it('as respostas marcadas sobrevivem a recarregar a página e a correção volta com a escolha dela', async () => {
    const user = userEvent.setup()
    const first = renderApp('/tarefa/t-2026-11-17-matematica')
    await user.click(within(screen.getAllByRole('article')[0]).getByRole('button', { name: MAT1_PICKS[0] }))
    first.unmount()

    const again = renderApp('/tarefa/t-2026-11-17-matematica') // rascunho recuperado
    expect(within(screen.getAllByRole('article')[0]).getByRole('button', { name: MAT1_PICKS[0] })).toHaveAttribute('aria-pressed', 'true')
    for (let i = 1; i < 5; i++) await user.click(within(screen.getAllByRole('article')[i]).getByRole('button', { name: MAT1_PICKS[i] }))
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    again.unmount()

    renderApp('/tarefa/t-2026-11-17-matematica') // reabre depois de concluída
    const card0 = screen.getAllByRole('article')[0]
    expect(within(card0).getByText(/resposta certa: C/i)).toBeInTheDocument()
    expect(within(card0).getByRole('button', { name: MAT1_PICKS[0] })).toHaveAttribute('aria-pressed', 'true') // o que ela marcou
    expect(screen.getByRole('button', { name: /tarefa concluída/i })).toBeDisabled()
    expect(screen.getByRole('status', { name: 'Resultado da tarefa' })).toHaveTextContent('Você acertou 4/5') // também ao reabrir
    expect(localStorage.getItem('vestibular-uemg:draft:t-2026-11-17-matematica')).toBeNull()
  })

  it('mostra o progresso por disciplina depois de concluir tarefas', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-17-matematica')
    await answerMat1(user)
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    await user.click(goHome())
    await user.click(screen.getByRole('link', { name: 'Disciplinas' }))
    expect(screen.getByRole('progressbar', { name: /matemática/i })).toHaveAttribute('aria-valuenow', String(Math.round(100 / mathTasks)))
  })
})
