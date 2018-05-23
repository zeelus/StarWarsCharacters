import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';
import CharactersListContainer from './Components/CharactersList/CharactersListContainer';
import CharacterDetailsContainer from './Components/CharacterDetails/CharacterDetailsContainer.js';

export default StackNavigator({
  Home: { screen: CharactersListContainer },
  Detail: { screen: CharacterDetailsContainer}
});