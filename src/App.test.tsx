import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { PLAN } from './data/plan'
import { ProgressProvider } from './state/ProgressProvider'

const renderApp = (route = '/', today = '2026-11-16') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <ProgressProvider today={today}>
        <App />
      </ProgressProvider>
    </MemoryRouter>,
  )

const mathTasks = PLAN.filter((t) => t.subject === 'matematica').length

const goHome = () => within(screen.getByRole('navigation')).getByRole('link', { name: 'Hoje' })

describe('fluxo principal', () => {
  it('mostra nível, sequência e as tarefas de hoje', () => {
    renderApp()
    expect(screen.getByText('Nível 1')).toBeInTheDocument()
    expect(screen.getByText(/operações, potências e porcentagem/i)).toBeInTheDocument()
    expect(screen.getByText(/classes de palavras|interpretação de texto e gêneros/i)).toBeInTheDocument()
    expect(screen.queryByText(/cinemática/i)).not.toBeInTheDocument()
  })

  it('mostra a contagem regressiva e o plano completo', async () => {
    const user = userEvent.setup()
    renderApp()
    expect(screen.getByText(/faltam 62 dias para a prova/i)).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: /plano de estudo completo/i }))
    expect(screen.getByRole('heading', { name: 'Plano de estudo' })).toBeInTheDocument()
    expect(screen.getAllByRole('region', { name: /semana/i })).toHaveLength(9)
    expect(screen.getByText('Revisão final')).toBeInTheDocument()
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
    renderApp('/tarefa/t-2026-11-16-matematica')
    await user.click(screen.getByRole('link', { name: /anotar uma dúvida/i }))
    expect(screen.getByLabelText(/disciplina/i)).toHaveValue('matematica')
  })

  it('banco de questões: filtra por disciplina, responde e mostra o gabarito oficial', async () => {
    const user = userEvent.setup()
    renderApp('/questoes')
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'matematica')
    await user.selectOptions(screen.getByLabelText(/^ano/i), '2024')
    expect(screen.getByText(/5 questões|\d+ questões/)).toBeInTheDocument()
    const first = screen.getAllByRole('article')[0]
    expect(within(first).getByText(/UEMG 2024, questão 43/)).toBeInTheDocument()
    await user.click(within(first).getByRole('button', { name: /^D\s*25\./ })) // gabarito oficial: D
    expect(within(first).getByText('Correto!')).toBeInTheDocument()
  })

  it('tarefa de prática traz questões de provas anteriores', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-20-matematica')
    expect(screen.getByRole('heading', { name: /questões de provas anteriores/i })).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(3)
    await user.click(screen.getAllByRole('button', { name: /ver a questão como na prova/i })[0])
    expect(screen.getAllByAltText(/como aparece na prova/i)[0]).toBeInTheDocument()
  })

  it('questão errada volta para revisão nos dias seguintes, e acertar rende XP', async () => {
    const user = userEvent.setup()
    // dia 1: erra a questão 1 da tarefa de Matemática (certa: C = 17)
    const day1 = renderApp('/tarefa/t-2026-11-16-matematica', '2026-11-16')
    const card = screen.getAllByRole('article')[0]
    await user.click(within(card).getByRole('button', { name: /^A\s*11/ }))
    expect(within(card).getByText(/resposta certa: C/i)).toBeInTheDocument()
    day1.unmount()

    // mesmo dia: ainda não vence
    const same = renderApp('/revisao', '2026-11-16')
    expect(screen.getByText(/nada para revisar hoje/i)).toBeInTheDocument()
    same.unmount()

    // dia 2: aparece na Home e em /revisao
    const day2 = renderApp('/', '2026-11-17')
    expect(screen.getByText(/1 questão para revisar/i)).toBeInTheDocument()
    day2.unmount()

    renderApp('/revisao', '2026-11-17')
    const review = screen.getAllByRole('article')[0]
    await user.click(within(review).getByRole('button', { name: /^C\s*17/ }))
    expect(within(review).getByText('Correto!')).toBeInTheDocument()
    // continua visível depois de responder
    expect(screen.getAllByRole('article')).toHaveLength(1)
  })

  it('tarefa mostra a revisão de erros vencidos', async () => {
    const user = userEvent.setup()
    const day1 = renderApp('/tarefa/t-2026-11-16-matematica', '2026-11-16')
    await user.click(within(screen.getAllByRole('article')[0]).getByRole('button', { name: /^A\s*11/ }))
    day1.unmount()
    renderApp('/tarefa/t-2026-11-17-fisica', '2026-11-17')
    expect(screen.getByRole('region', { name: /revisão de erros/i })).toBeInTheDocument()
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

  it('responde exercícios, vê o feedback, conclui a tarefa e ganha XP', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-16-matematica')

    const finish = screen.getByRole('button', { name: /concluir tarefa/i })
    expect(finish).toBeDisabled()

    const cards = screen.getAllByRole('article')
    await user.click(within(cards[0]).getByRole('button', { name: /17/ })) // certa
    expect(within(cards[0]).getByText('Correto!')).toBeInTheDocument()
    await user.click(within(cards[1]).getByRole('button', { name: /^B\s*120$/ })) // errada
    expect(within(cards[1]).getByText(/resposta certa: C/i)).toBeInTheDocument()

    await user.click(finish)
    expect(screen.getByRole('button', { name: /tarefa concluída/i })).toBeDisabled()

    await user.click(goHome())
    expect(screen.getByText('62 XP')).toBeInTheDocument()
  })

  it('mostra o progresso por disciplina depois de concluir tarefas', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-16-matematica')
    const cards = screen.getAllByRole('article')
    await user.click(within(cards[0]).getByRole('button', { name: /17/ }))
    await user.click(within(cards[1]).getByRole('button', { name: /150/ }))
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    await user.click(goHome())
    await user.click(screen.getByRole('link', { name: 'Disciplinas' }))
    expect(screen.getByRole('progressbar', { name: /matemática/i })).toHaveAttribute('aria-valuenow', String(Math.round(100 / mathTasks)))
  })
})
