import { Text, StyleSheet, Pressable } from 'react-native';
import React, {Component, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import ChildrenScreen from './ChildrenScreen';
import TopUpBalanceScreen from './TopUpBalanceScreen';
import { WalletProvider } from '../contexts/WalletProvider';
import { WalletContext } from '../contexts/WalletContext';
import Marketplace from './Marketplace';

const MainScreenStack = createStackNavigator();

export const MainScreenNavigator = () => {

    return (
      <WalletProvider value={WalletContext}>
        <MainScreenStack.Navigator initialRouteName='Home'
          screenOptions={() => ({
            headerTintColor: '#3C90F4',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}>
          <MainScreenStack.Screen name='Home' component={MainScreen}
            options={{
              headerShown: false,
            }}/>
          <MainScreenStack.Screen name='Child' component={ChildrenScreen}
            options={{
              presentation: 'modal',
              headerBackTitleVisible: false,
            }}
          />
          <MainScreenStack.Screen name='Market' component={Marketplace}
            options={{
              presentation: 'modal',
              headerBackTitleVisible: false,
            }}
          />
          <MainScreenStack.Screen
            options={{
              presentation: 'modal',
              headerBackTitleVisible: false,
              headerTitle: 'Payment data'
            }}
            name='TopUp' component={TopUpBalanceScreen}/>
        </MainScreenStack.Navigator>
      </WalletProvider>
    ); 
  
}

const mainScreenNavigatorStyles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(240,120,120,0)',
  },
});
