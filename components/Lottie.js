import React from 'react'
import LottieView from 'lottie-react-native'

import { Container } from './Container'

export const Lottie = ({ route }) => {
    return (
      <Container>
        {loading ? 
          <LottieView source={require('../assets/animation.json')} autoPlay  
        /> : <Text>something else</Text>
        }
             
      </Container>
    )
}