import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { mainStyles } from '../styles/main.styles'
import lbb from '../assets/imgs/lb.png';

const LeaderboardScreen = () => {
  return (
    <View style={{...mainStyles.content, padding: 0}}>
      <Image source={lbb}
        resizeMode={'cover'}
        style={{height: 670, width: '100%'}}
      />
    </View>
  )
}

export default LeaderboardScreen

const styles = StyleSheet.create({})