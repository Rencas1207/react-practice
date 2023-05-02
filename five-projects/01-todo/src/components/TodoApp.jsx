import { useState } from "react";
import { Form } from "./Form";
import { Todos } from "./Todos";

import './TodoStyles.css'

export function TodoApp() {
   const [todos, setTodos] = useState([]);

   function handleUpdate(id, value) {
      const temp = [...todos];
      const todo = temp.find(todo => todo.id === id);
      todo.title = value;
      setTodos(temp)
   }

   function handleDelete(id) {
      const temp = todos.filter(todo => todo.id !== id);
      setTodos(temp);
   }

   return (
      <div className="todoContainer">
         <Form todos={todos} setTodos={setTodos} />
         <Todos todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
   )
}
