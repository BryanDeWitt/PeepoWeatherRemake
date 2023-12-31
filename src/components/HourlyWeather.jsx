import uuid from 'react-uuid'
import './HourlyWeather.css'
import { useHourlyWeather } from '../hooks/useHourlyWeather.jsx'
import { useContext } from 'react'
import { CityContext } from '../context/CityContext'

export function HourlyWeather ({ error, time }) {
  const { cityName } = useContext(CityContext)
  if (error) {
    return <h2>{error}</h2>
  }

  if (!cityName) {
    return <h2 style={{ color: 'White' }}>City not found</h2>
  }

  const { hours, hourlyLoad } = useHourlyWeather({ time })

  if (hourlyLoad) {
    return <h2 style={{ color: 'White' }}>Loading...</h2>
  }
  return (
    <ul className='hourly-weather-list'>
      {
          hours.map((hour) => {
            return (
              <li key={uuid()}>
                <div>
                  <p style={{ width: '100%' }}>{hour.time.split(' ')[1]}</p>
                  <img src={hour.condition.icon} alt={hour.condition.text} />
                </div>
                <div>
                  <p>{hour.temp_c}°C</p>
                  <p>{hour.condition.text}</p>
                </div>
              </li>
            )
          })
        }
    </ul>
  )
}
