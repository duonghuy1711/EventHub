import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const MainNavigator = () => {
    const Stack = createStackNavigator();

  return (
    <View>
      <Text>MainNavigator</Text>
    </View>
  )
}

export default MainNavigator