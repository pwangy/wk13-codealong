import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { Container } from './Container'

const Title = styled.Text`
  font-size 24px;
  color: palevioletred;
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
      <Title>Houses</Title>
      {houses.map((house) => (
        <Title key={house.id}>{house.name}</Title>
      ))}
    </Container>
  )
}