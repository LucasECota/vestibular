import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { ProgressProvider } from './state/ProgressProvider'

const renderApp = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <ProgressProvider today="2026-11-16">
        <App />
      </ProgressProvider>
    </MemoryRouter>,
  )

const goHome = () => within(screen.getByRole('navigation')).getByRole('link', { name: 'Hoje' })

describe('fluxo principal', () => {
  it('mostra nível, sequência e as tarefas de hoje', () => {
    renderApp()
    expect(screen.getByText('Nível 1')).toBeInTheDocument()
    expect(screen.getByText(/potenciação e porcentagem/i)).toBeInTheDocument()
    expect(screen.queryByText(/cinemática/i)).not.toBeInTheDocument()
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
    await user.click(screen.getByRole('link', { name: 'Redação' }))
    expect(screen.getByRole('heading', { name: 'Redação' })).toBeInTheDocument()
  })

  it('mostra a estrutura da prova', async () => {
    const user = userEvent.setup()
    renderApp()
    await user.click(screen.getByRole('link', { name: 'Prova' }))
    expect(screen.getByRole('heading', { name: 'A prova' })).toBeInTheDocument()
    expect(screen.getByText('4h')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('96 (2 por questão)')).toBeInTheDocument()
    expect(screen.getByText('156 pontos')).toBeInTheDocument()
    expect(screen.getByText('Matemática')).toBeInTheDocument()
  })

  it('responde exercícios, vê o feedback, conclui a tarefa e ganha XP', async () => {
    const user = userEvent.setup()
    renderApp('/tarefa/t-2026-11-16-mat')

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
    renderApp('/tarefa/t-2026-11-16-mat')
    const cards = screen.getAllByRole('article')
    await user.click(within(cards[0]).getByRole('button', { name: /17/ }))
    await user.click(within(cards[1]).getByRole('button', { name: /150/ }))
    await user.click(screen.getByRole('button', { name: /concluir tarefa/i }))
    await user.click(goHome())
    await user.click(screen.getByRole('link', { name: 'Disciplinas' }))
    expect(screen.getByRole('progressbar', { name: /matemática/i })).toHaveAttribute('aria-valuenow', '100')
  })
})
