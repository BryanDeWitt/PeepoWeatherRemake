import { useContext } from 'react'
import { CityContext } from '../context/CityContext'
import feelsLikeIcon from '../icons/feelsLike.png'
import windIcon from '../icons/wind.png'
import humidityIcon from '../icons/humidity.png'
import visibilityIcon from '../icons/visibility.png'
import './CurrentWeather.css'

export function CurrentWeather ({ weather, error, loading }) {
  const { cityName } = useContext(CityContext)

  if (error) {
    return <h2>{error}</h2>
  }

  if (!cityName) {
    return (
      <div className='current-weather'>
        <h2>City not found</h2>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='current-weather'>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (weather) {
    return (
      <div className='current-weather'>
        <h2>
          {weather.location.name}, {weather.location.country}
          <br />
          {weather.location.localtime.split(' ')[1]}, {weather.current.temp_c}°C
        </h2>
        <div className='current-weather-condition'>
          <h3>{weather.current.condition.text}</h3>
          <img src={weather.current.condition.icon} width={100} height={100} alt='' />
        </div>
        <div className='current-weather-details'>
          <div className='details-cards'>
            <img src={feelsLikeIcon} alt='Feels like Icon' />
            <p>Feels like: {weather.current.feelslike_c}°C</p>
          </div>
          <div className='details-cards'>
            <img src={windIcon} alt='Wind velocity icon' />
            <p>Wind: {weather.current.wind_kph}km/h</p>
          </div>
          <div className='details-cards'>
            <img src={humidityIcon} alt='Humidity icon' />
            <p>Humidity: {weather.current.humidity}%</p>
          </div>
          <div className='details-cards'>
            <img src={visibilityIcon} alt='Visibility icon' />
            <p>Visibility: {weather.current.vis_km}km</p>
          </div>
        </div>
      </div>
    )
  }
}
