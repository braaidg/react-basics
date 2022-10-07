import { useState } from "react";

export default function Todo({ todo, onUpdate, onDelete}) {
  const [isEdit, setIsEdit] = useState(false);


  function FormEdit() {
    const [newValue, setNewValue] = useState(todo.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(todo.id, newValue)
      setIsEdit(false)
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange}value={newValue} />
        <button onClick={handleClickUpdateTodo}>Update</button>
      </form>
    );
  }


  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{todo.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
        <button className="buttonDelete" onClick={(e) => onDelete(todo.id) }>Delete</button>
      </div>
    );
  }


  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
