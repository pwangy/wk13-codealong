import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'

import backgroundImage from '../assets/background.jpg'

const HomeContainer = styled.ImageBackground`
flex: 1;
padding: 18px;
justify-content: center;
align-items: center;
`

const HomeText = styled.Text`
font-size: 48px;
`

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  })

  const navigateToInfo = () => {
    navigation.navigate("Info", {name: "Peggy" })
  }

  return (
    <HomeContainer source={backgroundImage}>
      <HomeText>Welcome to this multi-page app</HomeText>
      <Button title="Info" onPress={navigateToInfo}></Button>
    </HomeContainer>
  )
}

export default HomeScreen