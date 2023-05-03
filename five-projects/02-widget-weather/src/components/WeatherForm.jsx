import { useState } from 'react'
import styles from "./weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
   const [city, setCity] = useState('');

   function handleChange(e) {
      setCity(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();

      if (!city || city !== "") {
         onChangeCity(city);
      }
   }

   return (
      <form className={styles.container} onSubmit={handleSubmit}>
         <input className={styles.input} value={city} type="text" onChange={handleChange} />
      </form>
   )
}
