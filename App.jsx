import React,{useEffect, useState } from 'react'
import './App.css'
import AddTasks from './AddTasks'
import UpdateTask from './UpdateTask'
import Listiteams from "./Listiteams"

export const themeDark =React.createContext()
function App() {
  const [todos, setTodos] = useState(
    () => {
      if (localStorage.getItem('tasks') == null) return []
      return JSON.parse(localStorage.getItem('tasks'))
    }
  )
  const [update,setUpdate]=useState(true)
  const[valUpdate,setValUpdate]=useState('')
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  }
    , [todos])
  const handleCompleted = (id) => {
    const todss = [...todos]
    todss.forEach((tod) => {
      if (tod.id === id)
      tod.completed=!tod.completed
    })
    setTodos(todss)
  }
  const handleAdd = (task) => {
    if(task.value.trim()!==''){
      setTodos([...todos, {
      id: crypto.randomUUID(),
      title: task.value,
      completed: false
    }])
    }
    task.value=''
  }
  const handleDelete = (id) => {
    todos.map((item)=>{
     if(item.id === id){
      if(item.completed===true){
        setTodos(
          todos.filter(todo => todo.id !== id))
      }
      else{
        const userResponse = confirm("Do you want to proceed?");
        if(userResponse){
           setTodos(
          todos.filter(todo => todo.id !== id))
        }
      }
     }
    } )
    
  }
  const handleUpdate=(id)=>{
    let itemToBeUpdated=todos.find(item=>item.id===id);
    setUpdate(false);
    setValUpdate({val:`${itemToBeUpdated.title}`,id:itemToBeUpdated.id});
  }
  const handleUpdateitem=(valupdate)=>{
    if(valupdate.value.trim()!==''){
      let updatedItems=[...todos];
      updatedItems.map(item=>{
        if(item.id===valUpdate.id)
        item.title=valupdate.value;
        item.completed=false;
      })
      setTodos(updatedItems)
  }
  setValUpdate('')
  setUpdate(true)
}

  const [darkTheme,setDarkTheme]=useState(false)
  const styledark={
    color:darkTheme?'#fff':'#242424',
    backgroundColor:darkTheme?'#242424':'#fff'
  }
  const styles={
    svg:{
     cursor:"pointer"
    },
    content:{
      ...styledark,
      fontFamily:"poppins",
      minHeight: "100vh",
      overflow: "hidden"
    },
    button:{
      backgroundColor:!darkTheme?'#242424':'#fff',
      color:darkTheme?'#242424':'#fff',
      borderRadius: "8px",
      border: "1px solid transparent",
      padding: "0.6em 1.2em",
      fontSize: "1em",
      fontWeight:" 500",
      fontFamily: "inherit",
      cursor: "pointer",
      transition: "all .25s"
  }
  }
  return (
    <>
  <div className='content' style={styles.content}>
    <div className="container-fluide">
        <div className="row rownav">
          {darkTheme?<svg style={styles.svg} onClick={() => setDarkTheme(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>
          :<svg style={styles.svg} onClick={() => setDarkTheme(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"/>
        </svg>
          } 
        </div>
    </div>
    <div className="container">
      <themeDark.Provider value={darkTheme}>
        {update?<AddTasks handleAdd={handleAdd}/>:<UpdateTask valUpdate={valUpdate} handleUpdateitem={handleUpdateitem}/>}
        
        
        <h2>lists tasks</h2>
        {(todos.length > 0) ? <Listiteams todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCompleted={handleCompleted} />
          : <span>no iteams</span>}
      </themeDark.Provider>
    </div>
    </div>
    </>
    )
}

export default App
