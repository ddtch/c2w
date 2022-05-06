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
import {MainScreen, MainScreenNavigator, ProfileScreen} from './src/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import KidProvider from './src/contexts/KidProvider';

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
      background: '#fff', //'transparent',
    },
  };

  return (
      <NavigationContainer theme={navTheme}>
        <MainTabsNavigator.Navigator
          screenOptions={({route}) => ({
            headerStyle: {
              // backgroundColor: 'rgba(0,0,0,0)',
              // display: 'none'
            },
            headerTintColor: '#646396',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // bottom bar start
            tabBarStyle: {
              paddingTop: 10,
              backgroundColor: '#fff',
              // backgroundColor: '#2c2497',
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: '#9b9baa',
              borderRadius: 20,
            },
            tabBarActiveBackgroundColor: 'rgba(0,0,0,0)',
            tabBarInActiveBackgroundColor: 'rgba(0,0,0,0)',
            tabBarIcon: ({focused, color, size}) => {
              let iconName: string;

              if (route.name === 'Main') {
                iconName = 'ios-home-outline';
              } else if (route.name === 'Profile') {
                iconName = 'person-circle-outline';
              } else if (route.name === 'Leaderboard') {
                iconName = 'list-circle-outline';
              }

              // @ts-ignore
              return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: '#646396',
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
            name={'Profile'}
            component={ProfileScreen}/>
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
