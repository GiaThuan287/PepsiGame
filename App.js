import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OTPRegister from './src/component/OTPRegister';
import Register from './src/component/Register';
import Login from './src/component/Login';
import HomePage from './src/component/HomePage';
import GamePlay from './src/component/GamePlay';
import GiftScreen from './src/component/GiftScreen';
import Introduce from './src/component/Introduce';

const Stack= createNativeStackNavigator()

const App = () => {
  return (
   
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OTPRegister" component={OTPRegister} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="GamePlay" component={GamePlay} />
      <Stack.Screen name="Gift" component={GiftScreen} />
      <Stack.Screen name="Intro" component={Introduce} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

})