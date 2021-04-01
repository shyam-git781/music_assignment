import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
    )
  }
}