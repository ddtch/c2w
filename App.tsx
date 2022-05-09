import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {MainScreen, MainScreenNavigator, ProfileScreen, SettengsScreen, TokensScreen} from './src/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import KidProvider from './src/contexts/KidProvider';

import MainIcon from './src/assets/svg/tab-home.svg';
import MainIconInactive from './src/assets/svg/tab-home-inactive.svg';
import CupIcon from './src/assets/svg/tab-cup.svg';
import CupIconInactive from './src/assets/svg/tab-cup-inactive.svg';
import SettingsIcon from './src/assets/svg/tab-settings.svg';
import SettingsIconInactive from './src/assets/svg/tab-settings-inactive.svg';
import TknsIcon from './src/assets/svg/tab-tkn.svg';
import TknsIconInactive from './src/assets/svg/tab-tkn-inactive.svg';

const MainTabsNavigator = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#F8FAFC', //'transparent',
      primary: '#3C90F4',
      text: '#020538',
    },
  };

  return (
      <NavigationContainer theme={navTheme}>
        <MainTabsNavigator.Navigator
          screenOptions={({route}) => ({
            headerTintColor: '#646396',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // bottom bar start
            tabBarStyle: {
              paddingTop: 10,
              backgroundColor: '#F8FAFC',
              // backgroundColor: '#2c2497',
              borderTopWidth: 1,
              borderColor: '#9b9baa',
            },
            tabBarActiveBackgroundColor: 'rgba(0,0,0,0)',
            tabBarInActiveBackgroundColor: 'rgba(0,0,0,0)',
            tabBarIcon: ({focused, color, size}) => {
              let iconName: string;
              const iconSize = 20;

              if (route.name === 'Main') {
                return focused ? <MainIcon width={iconSize} height={iconSize} /> : <MainIconInactive width={iconSize} height={iconSize} /> 
              } else if (route.name === 'Settings') {
                return focused ? <SettingsIcon width={iconSize} height={iconSize} /> : <SettingsIconInactive width={iconSize} height={iconSize} /> 
              } else if (route.name === 'Leaderboard') {
                return focused ? <CupIcon width={iconSize} height={iconSize} /> : <CupIconInactive width={iconSize} height={iconSize} /> 
              } else if (route.name === 'Tokens') {
                return focused ? <TknsIcon width={iconSize} height={iconSize} /> : <TknsIconInactive width={iconSize} height={iconSize} /> 
              }

              // @ts-ignore
              // return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: '#3C90F4',
            tabBarInactiveTintColor: 'rgba(0,0,0,.3)',
          })}
        >
          <MainTabsNavigator.Screen
            options={{
              headerShown: false,
            }}
            name={'Main'}
            component={MainScreenNavigator}/>
          <MainTabsNavigator.Screen
            name={'Leaderboard'}
            component={LeaderboardScreen}
          />
          <MainTabsNavigator.Screen
            name={'Tokens'}
            component={TokensScreen}/>

          <MainTabsNavigator.Screen
            name={'Settings'}
            component={SettengsScreen}/>
        </MainTabsNavigator.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
