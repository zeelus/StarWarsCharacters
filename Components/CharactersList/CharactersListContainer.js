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
import CharactersListComponent from './CharactersListComponent.js';

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
    this.downloadData()
  }
  
  componentDidMount() {
    this.downloadData();
  }

  openWith = (item) => {
    const { navigate } = this.props.navigation;
    navigate("Detail", {item: item});
  }

  render() {

    if(this.state.isLoading) {
      return(
          <View>
            <CharactersListComponent dataSource={this.state.dataSource}  onPageEnd={this.onPageEnd} onPress={this.openWith}/>  
            <ActivityIndicator/>
          </View>
      )
    }

    return(
      <CharactersListComponent dataSource={this.state.dataSource} onPageEnd={this.onPageEnd} onPress={this.openWith}/>
    )
  }
}