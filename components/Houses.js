import React, { useState, useEffect } from 'react'

import { Container } from './Container'

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
        <Title>{house.name}</Title>
      ))}
    </Container>
  )
}