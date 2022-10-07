import { useState } from "react"
import Todo from "./todo";

import "./todoApp.css"

export default function TodoApp() {

  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title : title,
      completed: false
    }

    const temp = [...todos];
    temp.unshift(newTodo)

    setTodos(temp)

    setTitle("")

  }

  function handleUpdate(id, value) {
    const temp = [... todos];
    const item = temp.find(item => item.id === id)
    item.title = value;
    setTodos(temp)
  }

  function handleDelete (id) {
    const temp = todos.filter(item => item.id !== id);

    setTodos(temp)
  }

  return (
    <div className="todoContainer">
      
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />
        <input type="submit" value="Create todo" className="buttonCreate" onClick={handleSubmit} />
      </form>

      <div className="todosContainer">
        {
          todos.map((todo)=> (
            <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>
          ))
        }
      </div>

    </div>
  )
}
