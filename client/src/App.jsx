import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './compoments/taskList/TaskList'
import TaskForm from './compoments/taskForm/TaskForm'
import NavBar from './compoments/navBar/NavBar'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/:id/edit' element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
