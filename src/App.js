import React,{useState} from "react";
import './index.css';
import TodoField from "./component/TodoField";
import TodoList from "./component/TodoList";

function App() {
  const [todo,setTodo]=useState([
    {
      id:1,
      name:"GYM",
      status:false,
    },
    {
      id:2,
      name:"Course",
      status:true,
    },
  ]);
  const addTodo=(item)=>{
    if(item.name){
      setTodo([...todo,item]);
    }
  }
  const deleteTodo=(id)=>{
    let newTodo=todo.filter(t=>t.id!==id)
    setTodo(newTodo);
  }
  const doneTodo=(id)=>{
    let currentTodo=todo.find(t=>t.id===id);
    currentTodo.status=true;
    setTodo([...todo]);
  }
  return (
    <div className="App">
      <h1>TODO List</h1>
      <TodoField addTodo={addTodo}/>
      <TodoList doneTodo={doneTodo} deleteTodo={deleteTodo} todo={todo}/>
    </div>
  );
}

export default App;
