import React, {useEffect, useState} from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native'

const MoneyPopup: React.FC<any> = ({show, onClose, cryptoAsset, closeSuccess}) => {

  const [amount, setAmount] = useState(1);
  const [crypto, setCrypto] = useState(amount * 1.18);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    onClose(crypto);
    setTimeout(() => {
      setSuccess(true);
    }, 300);

  }

  const handleAmountChange = (e: any) => {
    const val = e.target.value;
    setAmount(val);
    setCrypto(val * 1.18);
  }

  useEffect(() => {
    console.log(show)
  }, [show])

  return (
    <View style={styles.mainWrapper}>

      <View style={styles.cardWrapper}>
        
        <Pressable style={styles.submitBtn} onPress={() => handlePayment()}>TOP UP</Pressable>
      </View>

      <View style={styles.successPopup}>
        <Text>Payment successful!</Text>
        {/* {checkbox icon} */}
        <Pressable style={styles.submitBtn} onPress={() => setSuccess(false)}>OK</Pressable>
      </View>

    </View>
  )
}

export default MoneyPopup

const styles = StyleSheet.create({
  mainWrapper: {},

cardWrapper: {
position: 'absolute',
top: 68,
left: '2%',
zIndex: 6,
width: '96%',
height: '100%',
},

mainLineHolder: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
},

submitBtn: {
width: 120,
height: 50,
borderRadius: 6,
overflow: 'hidden',
color: 'rgb(255, 255, 255)',
fontWeight: 'bold',
textAlign: 'center',
lineHeight: 50,
marginTop: 10,
marginBottom: 10,
zIndex: 10,
position: 'relative',
},
successPopup: {
display: 'flex',
position: 'absolute',
width: '64%',
height: 240,
top: 40,
left: '18%',
// boxShadow: '0 0 12px 120px rgb(0 0 0 / 80%)',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#1a1b41',
borderRadius: 6,
}
})