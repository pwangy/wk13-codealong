import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size 24px;
  color: palevioletred;
`

export const Houses = () => {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const housesApi = 'https://www.anapioficeandfire.com/api/houses'
    fetch(housesApi)
      .then((res) => res.json())
      .then((json) => setHouses(json))
  }, [])

  return (
    <Container>
      <Title>Houses</Title>
      {houses.map((house) => (
        <Title>{house.name}</Title>
      ))}
    </Container>
  )
}