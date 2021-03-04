import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CurrentWeather = () => {
  const [iconId, setIconId] = useState('')
  const weatherUri = `api.openweathermap.org/data/2.5/weather?q=hiekkaharju&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=fi`
  const iconUri = `http://openweathermap.org/img/wn/${iconId}@2x.png`

  const getWeather = () => {
    axios.get('http://localhost:4001/weather')
      .then(res => {
        console.log(res)
      })
  }

  useEffect(() => {
    getWeather()
  }, [])
  
  return (
    <div>
      <h1>Hello currentWeather</h1>
    </div>
  )
}

export default CurrentWeather