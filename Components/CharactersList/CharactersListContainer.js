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

export default class CharactersListContainer extends Component {

  static navigationOptions = {
    title: 'Characters',
  };

  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: [],
      nextPagePage: 'https://swapi.co/api/people/?page=1',
    }
  }

  downloadData() {
    if(this.state.nextPagePage != null) {
      fetch(this.state.nextPagePage)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: [...this.state.dataSource , ...responseJson.results],
          nextPagePage: responseJson.next
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
  
  onPageEnd = () => {
    //this.downloadData(this.state.page + 1);
    this.downloadData()
  }

  onPress = () => {
    Alert.alert("press")
  }

  componentDidMount() {
    this.downloadData();
  }

  render() {

    if(this.state.isLoading) {
      return(
        <View style={styles.mainView}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
            <View style= {styles.cellView}>
              <Text>{item.name}, {item.mass}</Text>
            </View>      
          }
          onEndReached={this.onPageEnd}

          keyExtractor={(item, index) => item + index }
        />
          <ActivityIndicator/>
        </View>
      )
    }

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
    );
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
