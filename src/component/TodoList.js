import React from 'react'

const TodoList = ({todo,deleteTodo,doneTodo}) => {
  return todo.length > 0 ?
   (<ul className='todoList'>
    {
        todo.map(item=>(
            <li key={item.id} className="todo_item">
            <span className={item.status ? "todo_text todo_done":"todo_text"}>{item.name}</span>
            <div className="todo_btns">
                <button onClick={()=>deleteTodo(item.id)}>❌</button>
                <button onClick={()=>doneTodo(item.id)} disabled={item.status}>✅</button>
            </div>
        </li>
        ))}
</ul>) : null;
}

export default TodoList