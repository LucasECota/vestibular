import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { AppRoot } from '../AppRoot'
import { emptyProgress, type ExerciseAttempt } from '../domain/types'
import { STORAGE_KEY } from '../storage/progressStorage'
import { DOUBTS_KEY } from '../storage/doubtsStorage'
import { createFakeApi, DANI, LUCAS } from './fakeApi'
import { setCloudStatus } from './status'
import type { CloudState } from './types'
import { flushActiveUploader } from './uploader'

const att = (id: string, correct = true): ExerciseAttempt => ({ exerciseId: id, taskId: 'banco', subject: 'matematica', correct })
const stateWith = (attempts: ExerciseAttempt[], extra: Partial<CloudState> = {}): CloudState => ({
  progress: { ...emptyProgress(), attempts },
  doubts: [],
  updatedAt: '2026-11-17T12:00:00.000Z',
  ...extra,
})

const renderRoot = (api: ReturnType<typeof createFakeApi>['api'], route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoot api={api} />
    </MemoryRouter>,
  )

const login = async (user: ReturnType<typeof userEvent.setup>, name: string, password: string) => {
  await user.type(await screen.findByLabelText('Usuário'), name)
  await user.type(screen.getByLabelText('Senha'), password)
  await user.click(screen.getByRole('button', { name: 'Entrar' }))
}

const nav = () => within(screen.getByRole('navigation'))

beforeEach(() => setCloudStatus('idle'))
afterEach(() => vi.useRealTimers())

describe('login', () => {
  it('sem sessão mostra a tela de login; senha errada mostra erro; a certa entra e usa o nome da pessoa', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi()
    renderRoot(api)

    expect(await screen.findByRole('heading', { name: /vestibular uemg/i })).toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument() // o site fica escondido

    await login(user, 'dani', 'errada')
    expect(await screen.findByRole('alert')).toHaveTextContent('Usuário ou senha incorretos.')
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()

    await user.clear(screen.getByLabelText('Senha'))
    await user.type(screen.getByLabelText('Senha'), 'senha-dani')
    await user.click(screen.getByRole('button', { name: 'Entrar' }))
    expect(await screen.findByRole('heading', { name: /daniela/i })).toBeInTheDocument()
    expect(nav().getByRole('link', { name: 'Hoje' })).toBeInTheDocument()
  })

  it('o usuário não diferencia maiúsculas e o Lucas é recebido pelo próprio nome', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi()
    renderRoot(api)
    await login(user, ' Lucas ', 'senha-lucas')
    expect(await screen.findByRole('heading', { name: /lucas/i })).toBeInTheDocument()
  })

  it('com sessão já guardada, entra direto', async () => {
    const { api } = createFakeApi({ session: DANI })
    renderRoot(api)
    expect(await screen.findByRole('heading', { name: /daniela/i })).toBeInTheDocument()
  })

  it('sair volta para a tela de login', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi({ session: DANI })
    renderRoot(api, '/guia')
    await user.click(await screen.findByRole('button', { name: 'Sair' }))
    expect(await screen.findByLabelText('Usuário')).toBeInTheDocument()
    expect(api.signOut).toHaveBeenCalled()
  })
})

describe('dados na nuvem', () => {
  it('carrega o progresso salvo na nuvem ao entrar', async () => {
    const { api } = createFakeApi({ session: DANI, states: { [DANI.id]: stateWith([att('a'), att('b'), att('c'), att('d'), att('e')]) } })
    renderRoot(api)
    expect(await screen.findByText('50 XP')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument() // entrar com nível já alto não comemora
  })

  it('cada pessoa enxerga só o próprio progresso no mesmo aparelho', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi({ session: DANI, states: { [DANI.id]: stateWith([att('a'), att('b')]) } })
    renderRoot(api, '/guia')
    await screen.findByRole('button', { name: 'Sair' })
    await user.click(nav().getByRole('link', { name: 'Hoje' }))
    expect(screen.getByText('20 XP')).toBeInTheDocument()

    await user.click(nav().getByRole('link', { name: 'Guia' }))
    await user.click(screen.getByRole('button', { name: 'Sair' }))
    await login(user, 'lucas', 'senha-lucas')
    await user.click(await within(await screen.findByRole('navigation')).findByRole('link', { name: 'Hoje' }))
    expect(await screen.findByText('0 XP')).toBeInTheDocument() // o do Lucas é outro
  })

  it('envia o que a pessoa faz para a nuvem', async () => {
    const user = userEvent.setup()
    const { api, states } = createFakeApi({ session: DANI })
    renderRoot(api, '/questoes')
    await screen.findByText(/você já fez 0 de/i)
    await user.selectOptions(screen.getByLabelText(/disciplina/i), 'matematica')
    await user.selectOptions(screen.getByLabelText(/^ano/i), '2024')
    const card = screen.getAllByRole('article')[0]
    await user.click(within(card).getByRole('button', { name: /^D\s*25\./ }))
    await user.click(within(card).getByRole('button', { name: /confirmar resposta/i }))

    await act(async () => {
      await flushActiveUploader()
    })
    const saved = states.get(DANI.id)!
    expect(saved.progress.attempts).toHaveLength(1)
    expect(saved.progress.attempts[0]).toMatchObject({ exerciseId: 'uemg-2024-q43', correct: true, chosen: 3 })
  })

  it('sem conexão para carregar, usa o que está no aparelho e avisa', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi({ session: DANI, loadStateFails: true })
    renderRoot(api, '/guia')
    await screen.findByRole('button', { name: 'Sair' })
    expect(screen.getByText(/sem conexão/i)).toBeInTheDocument()
    await user.click(nav().getByRole('link', { name: 'Hoje' }))
    expect(screen.getByRole('heading', { name: /daniela/i })).toBeInTheDocument()
  })
})

describe('progresso antigo (de antes do login) neste aparelho', () => {
  const putLegacy = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...emptyProgress(), attempts: [att('x1'), att('x2'), att('x3')], completedTaskIds: ['t1'] }))
    localStorage.setItem(DOUBTS_KEY, JSON.stringify([]))
  }

  it('pergunta se deve importar; "Começar do zero" não mistura testes com a conta', async () => {
    const user = userEvent.setup()
    putLegacy()
    const { api, states } = createFakeApi({ session: DANI })
    renderRoot(api)
    const dialog = await screen.findByRole('dialog', { name: /progresso encontrado/i })
    expect(dialog).toHaveTextContent('80 XP') // 3 acertos + 1 tarefa
    expect(dialog).toHaveTextContent('Daniela')

    await user.click(within(dialog).getByRole('button', { name: /começar do zero/i }))
    expect(await screen.findByText('0 XP')).toBeInTheDocument()
    expect(states.get(DANI.id)!.progress.attempts).toHaveLength(0)
  })

  it('"Importar" leva o progresso antigo para a conta e para a nuvem', async () => {
    const user = userEvent.setup()
    putLegacy()
    const { api, states } = createFakeApi({ session: DANI })
    renderRoot(api)
    await user.click(await screen.findByRole('button', { name: /importar para esta conta/i }))
    expect(await screen.findByText(/^80 XP$/)).toBeInTheDocument() // 3 acertos (30) + 1 tarefa (50)
    expect(states.get(DANI.id)!.progress.attempts).toHaveLength(3)
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull() // o antigo foi movido
  })

  it('não pergunta quando a conta já tem dados na nuvem', async () => {
    putLegacy()
    const { api } = createFakeApi({ session: DANI, states: { [DANI.id]: stateWith([att('a')]) } })
    renderRoot(api)
    expect(await screen.findByText('10 XP')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

describe('acompanhamento (só o administrador)', () => {
  const daniState = stateWith([att('a'), att('b'), att('c'), { exerciseId: 'uemg-2024-q43', taskId: 'banco', subject: 'matematica', correct: false, chosen: 0 }], {
    progress: {
      ...emptyProgress(),
      attempts: [att('a'), att('b'), att('c'), { exerciseId: 'uemg-2024-q43', taskId: 'banco', subject: 'matematica', correct: false, chosen: 0 }],
      completedTaskIds: ['t-2026-11-17-matematica'],
      activeDates: ['2026-11-17'],
    },
    doubts: [
      { id: 'd1', text: 'Não entendi MRUV', subject: 'fisica', createdAt: '2026-11-18T10:00:00Z', resolved: false },
      { id: 'd2', text: 'Já resolvida', subject: null, createdAt: '2026-11-18T10:00:00Z', resolved: true },
    ],
  })

  it('o Lucas vê o card, abre a página e enxerga o desempenho da Daniela', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi({ session: LUCAS, states: { [DANI.id]: daniState } })
    renderRoot(api, '/guia')
    await user.click(await screen.findByRole('link', { name: /acompanhamento/i }))

    const report = await screen.findByRole('region', { name: /acompanhamento de daniela/i })
    expect(within(report).getByText('Acertos')).toBeInTheDocument()
    expect(within(report).getByText('75%')).toBeInTheDocument() // 3 de 4
    expect(within(report).getByText('3 de 4 questões')).toBeInTheDocument()
    expect(within(report).getByText(/marcou a\. certa: d\./i)).toBeInTheDocument()
    expect(within(report).getByText(/quadrilátero/i)).toBeInTheDocument()
    expect(within(report).getByText('Não entendi MRUV')).toBeInTheDocument()
    expect(within(report).queryByText('Já resolvida')).not.toBeInTheDocument()
    expect(within(report).getByText(/última atualização/i)).toBeInTheDocument()
    expect(api.loadStudents).toHaveBeenCalled()
  })

  it('aluna sem dados ainda aparece como "ainda não usou o site"', async () => {
    const { api } = createFakeApi({ session: LUCAS })
    renderRoot(api, '/acompanhamento')
    expect(await screen.findByText(/ainda não usou o site/i)).toBeInTheDocument()
  })

  it('a Daniela não vê o card nem consegue abrir a página', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi({ session: DANI, states: { [DANI.id]: daniState } })
    renderRoot(api, '/guia')
    await screen.findByRole('button', { name: 'Sair' })
    expect(screen.queryByRole('link', { name: /acompanhamento/i })).not.toBeInTheDocument()

    await user.click(nav().getByRole('link', { name: 'Hoje' }))
    // digitar o endereço direto: volta para a Home
    const direct = createFakeApi({ session: DANI })
    renderRoot(direct.api, '/acompanhamento')
    expect((await screen.findAllByRole('heading', { name: /daniela/i })).length).toBeGreaterThan(0)
    expect(direct.api.loadStudents).not.toHaveBeenCalled()
  })

  it('erro de rede mostra aviso e dá para atualizar', async () => {
    const user = userEvent.setup()
    const { api } = createFakeApi({ session: LUCAS })
    api.loadStudents.mockRejectedValueOnce(new Error('sem rede'))
    renderRoot(api, '/acompanhamento')
    expect(await screen.findByRole('alert')).toHaveTextContent(/não foi possível carregar/i)
    await user.click(screen.getByRole('button', { name: 'Atualizar' }))
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument())
  })
})
