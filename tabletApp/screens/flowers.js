import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default Flowers = () => {
  const [isWateringDay, setIsWateringDay] = useState(false)
  const [message, setMessage] = useState('message')

  const getWateringDay = () => {
    fetch('http://192.168.1.149:4001/wateringday')
      .then((res) => res.json())
      .then((json) => setIsWateringDay(json))
      .catch((error) => console.error(error))
  }

  const getMessage = () => {
    fetch('http://192.168.1.149:4001/message')
      .then((res) => res.json())
      .then((json) => {
        setMessage(json.message)
        console.log(json.i)
        getMessage()
      })
  }

  useEffect(() => {
    getWateringDay()
  }, [])

  return (
    <View style={style.container}>
      <Text>This is Flowers</Text>
      {isWateringDay ? (
        <Text>Water plants!!</Text>
      ) : (
        <Text>No need to water</Text>
      )}
      <Text>{message}</Text>
      <Button onPress={getMessage} title="Get message" />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
