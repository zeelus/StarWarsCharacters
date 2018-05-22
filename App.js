import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';
import CharactersListContainer from './Components/CharactersList/CharactersListContainer';

export default StackNavigator({
  Home: { screen: CharactersListContainer },
});