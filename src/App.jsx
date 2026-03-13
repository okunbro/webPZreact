import { useState } from 'react'
import TodoList from './components/TodoList'

const initialTasks = [
  { id: 1, title: 'npm create vite@latest todo-app' },
  { id: 2, title: 'Framework: React' },
  { id: 3, title: 'Variant: Javascript + React compiler' },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const addTask = () => {
    const trimmedTitle = newTaskTitle.trim()

    if (!trimmedTitle) return

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo List</h1>

        <div className="form">
          <input
            type="text"
            className="input"
            placeholder="Enter a task"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <TodoList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  )
}

export default App