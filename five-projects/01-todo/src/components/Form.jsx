import { useState } from "react";

export function Form({ todos, setTodos }) {
   const [title, setTitle] = useState('');


   const handleChange = (e) => {
      setTitle(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const newTodo = {
         id: crypto.randomUUID(),
         title,
         completed: false
      }
      setTodos([...todos, newTodo]);
      setTitle('');
   }

   return (
      <form className="todoCreateForm" onSubmit={handleSubmit}>
         <input type="text" className="todoInput" value={title} onChange={handleChange} />
         <input type="submit" value="Create todo" className="buttonCreate" />
      </form>
   )
}
