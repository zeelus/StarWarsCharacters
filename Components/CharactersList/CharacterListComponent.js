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

export default class CharactersListComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount()
    {
      this.setState({
        dataSource: this.props.dataSource
      })
    }

    render() {
        return(
            <View style={styles.cellView}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) =>
                <TouchableOpacity onPress={this.onPress}>
                  <View style= {styles.cellView}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              }
              onEndReached= {this.onPageEnd}
              keyExtractor= {(item, index) => item + index }
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    paddingTop: 20
  },

  cellView: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }

})