import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";
import Loading from "./Loading";

import styles from './WeatherApp.module.css'

const {VITE_REACT_APP_URL, VITE_REACT_APP_KEY } = import.meta.env

const WeatherApp = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`
  }, [weather])
  

  async function loadInfo(city="london") {
    try {
      const request = await fetch(`${VITE_REACT_APP_URL}&key=${VITE_REACT_APP_KEY}&q=${city}`)
      const json = await request.json()
      setWeather(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city)
  }


  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity}/>
      { weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  )
}

export default WeatherApp;