import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import CharactesListCell from './CharactersListCell.js';


export default class CharactersListComponent extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return(
            <View style={styles.cellView}>
            <FlatList
              data={this.props.dataSource}
              renderItem={({item}) =>
                <CharactesListCell item={item}  onPress={this.props.onPress} />
              }
              onEndReached= {this.props.onPageEnd }
              keyExtractor= {(item, index) => item + index }
            />
          </View>
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