
import { useEffect, useState } from 'react'
import './App.css'
import AddTasks from './AddTasks'
import Listiteams from "./Listiteams"
function App() {
  const [newtask, setNewTask] = useState('')
  const [todos, setTodos] = useState(
    () => {
      if (localStorage.getItem('tasks') == null) return []
      return JSON.parse(localStorage.getItem('tasks'))
    }

  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  }
    , [todos])
  const handleCompleted = (id) => {
    const todss = [...todos]
    console.log(id)
    todss.forEach((tod) => {
      if (tod.id === id)
      tod.completed=!tod.completed
    })
    setTodos(todss)
  }
  const handleAdd = (e) => {
    e.preventDefault();
    if(newtask.trim()!==''){
      setTodos([...todos, {
      id: crypto.randomUUID(),
      title: newtask,
      completed: false
    }])
    }
    
    setNewTask('')
  }
  const handleDelete = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id))
  }
  return (
    <>
      <form >
        <AddTasks newtask={newtask} setNewTask={setNewTask} handleAdd={handleAdd} />
        <h2>list tasks</h2>
        {(todos.length > 0) ? <Listiteams todos={todos} handleDelete={handleDelete} handleCompleted={handleCompleted} />
          : <span>no iteams</span>}
      </form>
    </>
  )
}

export default App
