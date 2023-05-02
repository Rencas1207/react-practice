import { useState } from 'react'

export default function FormEdit({ todo, onUpdate, setIsEdit }) {
   const [newValue, setNewValue] = useState('');

   function handleSubmit(e) {
      e.preventDefault();
      onUpdate(todo.id, newValue);
      setIsEdit(false);
   }

   function handleChange(e) {
      setNewValue(e.target.value)
   }


   return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
         <input className='todoInput' value={newValue} onChange={handleChange} />
         <button className="button" type="submit">Update</button>
      </form>
   )
}
