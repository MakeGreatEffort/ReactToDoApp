import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Title from '../components/Title'
import Input from '../containers/InputContainer'
import List  from '../containers/ToDoListContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View>
        <Title title={'ToDo-List'} />
        <Input
          placeholder={'Type a todo, then hit enter'}
        />
        <List />
      </View>
    )
  }
}

export default App
