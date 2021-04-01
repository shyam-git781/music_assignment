import React, { useState, useEffect } from 'react';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
          headerTitleStyle:{color:'white'},
          headerStyle: { backgroundColor: 'blue' }
      }}>
        <Stack.Screen name="Splash" component={Splash}  options={{ headerTitle:null,headerTransparent: true }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle:'SONGS' }}/>
        <Stack.Screen name="Details" component={Details} options={{headerTintColor:'#FFF',headerTitle:'DETAILS'}}/>

      </Stack.Navigator>
  );
}
  
  export default StackNavigator
