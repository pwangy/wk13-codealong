import React from 'react';
import styled from 'styled-components/native'

import { Houses } from './components/Houses'

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

export default function App() {
  return (
    <Container>
      <Houses />
    </Container>
  )
}