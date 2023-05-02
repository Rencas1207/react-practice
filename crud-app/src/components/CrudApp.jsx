import { useState } from "react";
import CrudForm from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
   {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
   },
   {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
   },
   {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
   },
   {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
   },
   {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
   },
];

function CrudApp() {
   const [db, setDb] = useState(initialDb);
   const [dataToEdit, setDataToEdit] = useState(null);

   const createData = (data) => {
      data.id = Date.now();
      setDb([...db, data]);
   }

   const updateData = (data) => {
      const newData = db.map(el => el.id === data.id ? data : el);
      setDb(newData);
   }

   const deleteData = (id) => {
      const isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id ${id}?`)
      if (isDelete) {
         const newData = db.filter(el => el.id !== id);
         setDb(newData);
      } else {
         return;
      }
   }

   return (
      <div>
         <h2>CRUD APP</h2>
         <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
         />
         <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
         />
      </div>
   )
}

export default CrudApp