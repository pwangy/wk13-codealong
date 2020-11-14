import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Houses } from './components/Houses'
// import { Lottie } from './components/Lottie'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Game of Thrones' component={Houses} />
        {/* <Stack.Screen name='Lottie' component={Lottie} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App