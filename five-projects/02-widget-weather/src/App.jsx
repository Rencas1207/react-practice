import { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherMainInfo from './components/WeatherMainInfo';
import Loading from './components/Loading';

import styles from "./components/weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])


  async function loadInfo(city = 'London') {
    const url = `${import.meta.env.VITE_APP_URL}?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`;
    try {
      const request = await fetch(url)
      const data = await request.json();
      setTimeout(() => {
        setWeather({ ...data });
      }, 2000);
    } catch (error) {
      throw new Error('Error en el fetch');
    }
  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  )
}
