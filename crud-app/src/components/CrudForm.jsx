import { useState, useEffect } from 'react';

const initialForm = {
   name: '',
   constellation: '',
   id: null
}


function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {

   const [form, setForm] = useState(initialForm);

   useEffect(() => {
      if (dataToEdit) {
         setForm(dataToEdit)
      }
   }, [dataToEdit])

   const handleChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!form.name || !form.constellation) {
         alert('Datos incompletos')
         return;
      }

      if (form.id === null) {
         createData(form);
      } else {
         updateData(form);
      }

      handleReset();
   }

   const handleReset = (e) => {
      setForm(initialForm);
      setDataToEdit(null);
   }

   return (
      <div>
         <h3>{dataToEdit ? 'Editar' : 'Agregar'} </h3>
         <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={form.name} name="name" id="name" placeholder="Nombre" />
            <input type="text" onChange={handleChange} value={form.constellation} name="constellation" id="constellation" placeholder="Constelación" />
            <input type="submit" value={dataToEdit ? 'Guardar cambios' : 'Enviar'} />
            <input type="reset" value="Limpiar" onClick={handleReset} />
         </form>
      </div>
   )
}

export default CrudForm