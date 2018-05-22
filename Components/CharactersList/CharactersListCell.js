import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

export default class CharactesListCell extends Component {

    constructor(props) {
        super(props);
    }

    // onPress = () => {
    //     this.props.onPress(this.props.item);
    // }

    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress}>
            <View style= {styles.cellView}>
              <Text>{this.props.item.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    cellView: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10
    }

})