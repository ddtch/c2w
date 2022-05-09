import {DefaultTheme, Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    padding: 0,
    margin: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingBottom: 0,
    position: 'relative',
  },
});
