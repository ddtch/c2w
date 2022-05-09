import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BaseCard = (props: any) => {
  return (
    <View style={{...styles.holder, ...props.style}}>
      {props.children}
    </View>
  )
}

export default BaseCard

const styles = StyleSheet.create({
  holder: {
    width: '100%',
    marginBottom: 16,
    height: 76,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10.0,
    elevation: 10,
    paddingLeft: 12,
    paddingRight: 12,
  }
})