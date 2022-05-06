import { Text, StyleSheet, Pressable } from 'react-native';
import React, {Component, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import ChildrenScreen from './ChildrenScreen';
import KidProvider from '../contexts/KidProvider';

const MainScreenStack = createStackNavigator();

export const MainScreenNavigator = () => {

    return (
      <MainScreenStack.Navigator initialRouteName='Home'
        screenOptions={() => ({
          headerTintColor: '#646396',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <MainScreenStack.Screen name='Home' component={MainScreen} />
        <MainScreenStack.Screen name='Child' component={ChildrenScreen}/>
      </MainScreenStack.Navigator>
    ); 
  
}

const mainScreenNavigatorStyles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(240,120,120,0)',
  },
});
