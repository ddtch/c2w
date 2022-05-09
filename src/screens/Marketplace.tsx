import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { mainStyles } from '../styles/main.styles'
import { appsAndMarketplace, educationalApps } from './ChildrenScreen'
import ent from '../assets/imgs/entertainment.png';

const Marketplace = () => {
  return (
    <View style={mainStyles.content}>
      <View style={styles.container}>
        {
          [...educationalApps, ...appsAndMarketplace.slice(1, appsAndMarketplace.length - 1)].map(el => <View key={el.id}>
            <Image source={el.img} resizeMode={'cover'} style={styles.appImage}/>
          </View>)
        }
        <Image source={ent} resizeMode={'stretch'} style={{height: 340, width: '100%'}}/>
      </View>
    </View>
  )
}

export default Marketplace

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  appImage: {
    width: 106,
    height: 106,
    marginBottom: 20,
  }
})