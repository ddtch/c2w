import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const BaseScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContent}>
        {props.children}
      </View>
    </SafeAreaView>
  )
}

export default BaseScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  }
})