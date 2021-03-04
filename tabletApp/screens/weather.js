import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WeatherStatus from '../components/WeatherStatus'
import { weather_api_key } from '../secrets'

export default Weather = () => {
  const [currentWeather, setCurrentWeather] = useState({ loading: true })

  const getCurrent = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=hiekkaharju&appid=${weather_api_key}&units=metric`
    )
      .then((res) => {
        if (res.ok === 200) {
          return res.json()
        } else {
          return
        }
      })
      .then((result) => {
        if (result) {
          setCurrentWeather(result)
        }
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    getCurrent()
    setTimeout(() => {
      getCurrent()
      console.log('Hello interval')
    }, 1800000)
  }, [])



  return (
    <View style={style.container}>
      {currentWeather.loading ? (
        <Text>Weather is loading</Text>
      ) : (
        <WeatherStatus temp={currentWeather.main.temp} icon={currentWeather.weather[0].icon} />
      )}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
