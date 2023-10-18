import { useState, useEffect, useContext } from 'react'
import { CityContext } from '../context/CityContext.jsx'

export function useCurrentWeather () {
  const { cityName } = useContext(CityContext)
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    if (cityName) {
      fetch(`https://api.weatherapi.com/v1/current.json?key=29c1986c4b4549d7b3502419231010&q=${cityName}&aqi=no`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then((data) => {
          setWeather(data)
          setError(null)
        })
        .catch((err) => {
          console.error(err)
          setError('Error fetching weather data')
        })
    }
  }, [cityName])

  return {
    weather,
    error
  }
}