import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { mainStyles } from '../styles/main.styles'
import topupBg from '../assets/imgs/add-balance.png';
import { TextInput } from 'react-native-gesture-handler';

const TopUpBalanceScreen = () => {
  const [formData, setFormData] = useState({
    cardNumber: null,
    expiration: null,
    name: null,
    cvv: null,
  })
  return (
    <View style={{...mainStyles.content, ...styles.topupBg}}>
      <Text style={styles.subHeader}>Payment</Text>
      <View style={styles.cardHolder}>
        <View style={styles.card}>
          <TextInput />
        </View>
      </View>
      <Image source={topupBg} style={styles.topupImg} resizeMode={'contain'}/>
    </View>
  )
}

export default TopUpBalanceScreen

const styles = StyleSheet.create({
  topupBg: {
    
  },
  topupImg: {
    position: 'absolute',
    top: 0,
    left: 30,
    width: '100%',
    height: '100%',
    opacity: .8
  },
  subHeader: {

  },
  cardHolder: {

  },
  card: {
    
  }
})