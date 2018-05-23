import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


export default class CharacterDetailsContainer extends Component {

  constructor(props){
    super(props)
  }

  // static navigationOptions = {
  //   title: this.props.item.name,
  // };

  render() {
    const {item} = this.props.navigation.state.params
    return(
      <View>
        <Text>{item.name}</Text>
      </View>
    )
  }

}