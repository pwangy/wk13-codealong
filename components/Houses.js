import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { Container } from './Container'

const Title = styled.Text`
  font-size 24px;
  color: palevioletred;
`

const LottieButton = styled.TouchableOpacity`
  background: blue;
  color: white;
`

export const Houses = () => {
  const [houses, setHouses] = useState([])
  const housesApi = 'https://www.anapioficeandfire.com/api/houses'

  useEffect(() => {
    fetch(housesApi)
      .then((res) => res.json())
      .then((json) => setHouses(json))
  }, [])

  return (
    <Container>
      {/* <LottieButton onPress={(navigation.navigate('Lottie'))}><Title>ANIMATION</Title></LottieButton> */}
      <Title>Houses</Title>
      {houses.map((house) => (
        <Title key={house.id}>{house.name}</Title>
      ))}
    </Container>
  )
}