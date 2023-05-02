import { useState } from "react";
import FormEdit from "./FormEdit";

export default function TodoElement({ todo, onUpdate, onDelete }) {
   const [isEdit, setIsEdit] = useState(false);

   return <>
      {isEdit ?
         <FormEdit todo={todo} onUpdate={onUpdate} setIsEdit={setIsEdit} /> :
         <div className="todoInfo" key={todo.id}>
            {todo.title}
            <button className="button" onClick={() => setIsEdit(true)} type="button">Editar</button>
            <button className="buttonDelete" onClick={() => onDelete(todo.id)} type="button">Eliminar</button>
         </div>
      }
   </>

}
