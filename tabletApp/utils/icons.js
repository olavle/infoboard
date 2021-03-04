import * as React from 'react'
import { Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'

export const TabIcons = {
  Flowers: <Ionicons name="flower-poppy" size={30} color="black" />,
  Weather: <Ionicons name="weather-cloudy" size={30} color="black" />
}

export const WeatherIcons = [
  {
    codes: ["01d"],
    element: <Ionicons name="weather-sunny" size={300} color="black" />
  },
  {
    codes: ["01n"],
    element: <Ionicons name="weather-night" size={300} color="black" />
  },
  {
    codes: ["02d"],
    element: <Ionicons name="weather-partly-cloudy" size={300} color="black" />
  },
  {
    codes: ["02n"],
    element: <Ionicons name="weather-night-partly-cloudy" size={300} color="black" />
  },
  {
    codes: ["04d", "04n", "03d", "03n"],
    element: <Ionicons name="weather-cloudy" size={300} color="black" />
  },
  {
    codes: ["09d", "09n", "10d", "10n"],
    element: <Ionicons name="weather-pouring" size={300} color="black" />
  },
  {
    codes: ["11d", "11n"],
    element: <Ionicons name="weather-lightning" size={300} color="black" />
  },
  {
    codes: ["13d", "13n"],
    element: <Ionicons name="weather-snowy" size={300} color="black" />
  },
  {
    codes: ["50d", "50n"],
    element: <Ionicons name="weather-fog" size={300} color="black" />
  },
]