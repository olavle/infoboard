import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WeatherIcons } from '../utils/icons'

const WeatherStatus = ({ temp, icon }) => {
  const iconElement = WeatherIcons.find((item) => item.codes.includes(icon))
    .element

  return (
    <View style={style.container}>
      <View style={style.icon}>{iconElement}</View>
      <Text style={style.temperature}>{temp.toFixed(0)}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    paddingTop: 80,
  },
  temperature: {
    flex: 0.9,
    color: '#8c8364',
    fontSize: 130,
  },
})

export default WeatherStatus
