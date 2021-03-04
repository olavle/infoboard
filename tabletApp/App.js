import * as React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import WeatherScreen from './screens/weather'
import FlowersScreen from './screens/flowers'
import { TabIcons } from './utils/icons'

const TabNavigator = createBottomTabNavigator(
  {
    Weather: { screen: WeatherScreen },
    Flowers: { screen: FlowersScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        return TabIcons[routeName]
      },
    }),
  }
)

const TabContainer = createAppContainer(TabNavigator)

const App = () => {
  return <TabContainer />
}

export default App
