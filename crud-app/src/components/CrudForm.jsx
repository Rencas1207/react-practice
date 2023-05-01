import { useState } from 'react';

const initialForm = {
   name: '',
   constellation: '',
   id: null
}

function CrudForm() {

   const [form, setForm] = useState(initialForm);

   const handleChange = (e) => {

   }

   const handleSubmit = (e) => {
      e.preventDefault();
   }

   const handleReset = (e) => {

   }

   return (
      <div>
         <h3>Agregar</h3>
         <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={form.name} name="name" id="name" placeholder="Nombre" />
            <input type="text" onChange={handleChange} value={form.constellation} name="constellation" id="constellation" placeholder="Constelación" />
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset} />
         </form>
      </div>
   )
}

export default CrudForm