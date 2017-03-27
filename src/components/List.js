import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  renderItem = (text, i) => {
    const {onPressItem} = this.props
    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={() => this.props.removeToDo(i)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }
  render () {
    let list = this.props.todos
    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15
  }
})
