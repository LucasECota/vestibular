import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ExamPage } from './pages/ExamPage'
import { DoubtsPage } from './pages/DoubtsPage'
import { EssayPage } from './pages/EssayPage'
import { HomePage } from './pages/HomePage'
import { ReviewPage } from './pages/ReviewPage'
import { GuidePage } from './pages/GuidePage'
import { QuestionBankPage } from './pages/QuestionBankPage'
import { PlanPage } from './pages/PlanPage'
import { SubjectsPage } from './pages/SubjectsPage'
import { TaskPage } from './pages/TaskPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="disciplinas" element={<SubjectsPage />} />
        <Route path="revisao" element={<ReviewPage />} />
        <Route path="questoes" element={<QuestionBankPage />} />
        <Route path="guia" element={<GuidePage />} />
        <Route path="plano" element={<PlanPage />} />
        <Route path="duvidas" element={<DoubtsPage />} />
        <Route path="prova" element={<ExamPage />} />
        <Route path="redacao" element={<EssayPage />} />
        <Route path="tarefa/:taskId" element={<TaskPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
