import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { EssayPage } from './pages/EssayPage'
import { HomePage } from './pages/HomePage'
import { SubjectsPage } from './pages/SubjectsPage'
import { TaskPage } from './pages/TaskPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="disciplinas" element={<SubjectsPage />} />
        <Route path="redacao" element={<EssayPage />} />
        <Route path="tarefa/:taskId" element={<TaskPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
