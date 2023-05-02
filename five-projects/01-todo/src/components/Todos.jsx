import TodoElement from "./TodoElement";

export function Todos({ todos, onUpdate, onDelete }) {

   return (
      <div className="todosContainer">
         <div className="todo">
            {todos?.length > 0 && (
               todos?.map(todo => (
                  <TodoElement
                     key={todo.id}
                     todo={todo}
                     onUpdate={onUpdate}
                     onDelete={onDelete}
                  />
               ))
            )}
         </div>
      </div>
   )
}
