import React, { useState} from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const TopContainer = styled(Container)`
width: 100%;
background-color: #222222;
`

const TopHeader = styled.Text`
  font-size: 48px;
  color: #efefef;
`

const BottomContainer = styled.View`
  flex: 3;
  width: 100%;
  background-color: #fff; 
  justify-content: center;
  align-items: center;
`

const BottomText = styled.Text`
  font-size: 32px;
  color: #1f1f1f;
`

const App = () => {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
          // something is wrong
          throw `Got error: ${response.status}`
      }
      return response.json()
    })
    .then((json) => {
      // do something interesting with data
    })
    .catch((error) => {
      console.log(error)
    })

    const [count, setCount] = useState(0)
    const onIncrement = () => {
      setCount(count + 1)
      console.log('I has incremented!')
    }

  return (
    <Container>
      <TopContainer>
        <TopHeader>imma counter!</TopHeader>
      </TopContainer>

      <BottomContainer>
        <BottomText>{count}</BottomText>
        <TouchableOpacity onPress={onIncrement}>
          <Text>Add +1</Text>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  )
}

export default App