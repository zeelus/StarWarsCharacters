import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet
} from 'react-native';

export default class CharacterDetailsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      imageURL: null
    }
  }

  downloadData(characterName) {
    var character = characterName.replace(" ", "+")
    fetch("https://pixabay.com/api/?key=9113100-86a0a2a07a5b5aba38634925c&q=" + character + "&image_type=photo")
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.total > 0 ) {
        var url = responseJson.hits[0].largeImageURL
        this.setState({
          imageURL: url
        })
      }
    });
  }

  componentDidMount() {
    const {item} = this.props.navigation.state.params
    this.downloadData(item.name)
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? `${navigation.state.params.title}` : ''
  })

  render() {
    const {item} = this.props.navigation.state.params

    if(this.state.imageURL == null) {
      return(
        <View>
        <View style={styles.imageViewEmpty} />
        <Text style={styles.titleText} >{item.name}</Text>
        <Text state={styles.contetText}>Height: {item.height}</Text>
        <Text state={styles.contetText}>Mass: {item.mass}</Text>
        <Text state={styles.contetText}>Eye color: {item.eye_color}</Text>
        <Text state={styles.contetText}>Birth year: {item.birth_year}</Text>
        <Text state={styles.contetText}>Gender: {item.gender}</Text>
        </View>
      )
    }

    return(
      <View>
        <Image style={styles.imageView} source={{uri: this.state.imageURL}} />
        <Text style={styles.titleText} >{item.name}</Text>
        <Text state={styles.contetText}>Height: {item.height}</Text>
        <Text state={styles.contetText}>Mass: {item.mass}</Text>
        <Text state={styles.contetText}>Eye color: {item.eye_color}</Text>
        <Text state={styles.contetText}>Birth year: {item.birth_year}</Text>
        <Text state={styles.contetText}>Gender: {item.gender}</Text>

      </View>
    )
  }

}

const styles = StyleSheet.create({

  imageView: {
    height: "70%"
  },

  imageViewEmpty: {
    height: "70%",
    backgroundColor: 'powderblue'
  },

  titleText: {
    fontSize: 30,
    textAlign: "center",
    color: 'green'
  },

  contetText: {
    fontSize: 15,
  }

})