import { StyleSheet, Text, View, Image, Keyboard, Pressable, TextInputProps, Button, Alert } from 'react-native'
import React, { useState, useRef, useEffect, forwardRef, useContext } from 'react'
import { mainStyles } from '../styles/main.styles'
import topupBg from '../assets/imgs/add-balance.png';
import { TextInput } from 'react-native-gesture-handler';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WalletContext } from '../contexts/WalletContext';

export const paymentMethods = [
  {
    id: 1,
    title: 'PayPal',
  },
  {
    id: 2,
    title: 'Credit',
    selected: true,
  },
  {
    id: 3,
    title: 'Wallet',
  }
]

export const MainInput: React.FC<TextInputProps> = ({...props}) => {
  return (
    <View style={styles.mainInputHolder}>
      <TextInput style={styles.mainInput}
        {...props}
      />
    </View>
  )
}

const TopUpBalanceScreen: React.FC<any> = (props) => {
  
  const [tknSum, setTknSum] = useState<string>('');
  const [usd, setUsd] = useState<string>('');
  const walletDetails = useContext(WalletContext);

  const updateBalance = (value: string) => {
    console.log(value)
  }

  const topUpBalance = () => {
    //@ts-ignore
    walletDetails.topUp(+tknSum);
    console.log(walletDetails.summ);
    Alert.alert('Success', 'Your balance updated!', [
      {
        text: 'ok',
        style: 'default',
        onPress: () => props.navigation.goBack()
      }
    ])
  }

  const updatePrice = (v: string) => {
    setTknSum(v);
    const perc = +v/100*8;
    const summ = +v - perc;
    setUsd(!v ? '' : summ.toFixed(2));
  }

  return (
    <KeyboardWrapper>
      <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={{...mainStyles.content, ...styles.topupBg}}>
          <View style={styles.cardHolder}>
            <View style={styles.fieldsHolder}>
              <Text style={styles.subheader}>Total tokens</Text>
              <TextInput
                style={styles.tknInput}
                keyboardType={'numeric'}
                onChangeText={updatePrice}
                placeholder={'25'}
                placeholderTextColor={'rgba(0,0,0,.2)'}
              />
            </View>
            <View style={styles.fieldsHolder}>
              <Text style={styles.subheader}>Total dollors</Text>
              <TextInput
                style={styles.tknInput}
                value={usd + '$'}
                placeholder={'0.00$'}
                placeholderTextColor={'rgba(0,0,0,.2)'}
              />
            </View>
          </View>
          <Text style={styles.subheader}>Payment methods</Text>
          <View style={styles.paymentMethods}>
            {
              paymentMethods.map((el, i) => <View key={el.id} style={{...styles.pmCard, ...{opacity: el.selected ? 1 : .6}}}>
                <Text style={styles.pmCardText}>{el.title} <Ionicons size={20} name='checkmark-circle-outline'/></Text>
              </View>)
            }
          </View>
          <Text style={styles.subheader}>Card number</Text>
          <MainInput
            onChangeText={updateBalance}
            keyboardType={'numeric'}
            placeholder={'**** **** **** 4232'}
            placeholderTextColor={'rgba(0,0,0,.65)'}
          />
          <View style={styles.cardHolder}>
            <View style={styles.fieldsHolder}>
              <Text style={styles.subheader}>Valid</Text>
              <MainInput
                onChangeText={updateBalance}
                keyboardType={'numeric'}
                placeholder={'02/26'}
                placeholderTextColor={'rgba(0,0,0,.65)'}
              />
            </View>
            <View style={styles.fieldsHolder}>
              <Text style={styles.subheader}>CVV</Text>
              <MainInput
                onChangeText={updateBalance}
                keyboardType={'numeric'}
                placeholder={'***'}
                placeholderTextColor={'rgba(0,0,0,.65)'}
              />
            </View>
          </View>
          <Text style={styles.subheader}>Cardholder name</Text>
          <MainInput
            onChangeText={updateBalance}
            placeholder={'David Goldshekelmanshviliberg'}
            placeholderTextColor={'rgba(0,0,0,.65)'}
          />
          <Pressable style={styles.mainBtn} onPress={() => topUpBalance()}>
            <Text style={styles.mainBtnTxt}>Proceed to confirm</Text>
          </Pressable>
        </View>
      </Pressable>
    </KeyboardWrapper>
  )
}

export default TopUpBalanceScreen

const styles = StyleSheet.create({
  topupBg: {
    backgroundColor: '#F8FAFC'
  },
  mainInputHolder: {
    marginBottom: 16,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 2,
  },
  mainInput: {
    borderWidth: 1,
    fontSize: 18,
    height: 48,
    borderRadius: 8,
    paddingLeft: 12,
    fontWeight: '600',
    borderColor: '#e4e7ea',
    color: '#a3aec9',
  },
  subheader: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 10,
    color: '#565a5c',
  },
  tknInput: {
    fontSize: 32,
    color: '#3C90F4',
    fontWeight: '600',
    marginBottom: 10,
  },
  paymentMethods: {
    display: 'flex',
    flexDirection: 'row',
  },
  pmCard: {
    borderRadius: 8,
    width: 110,
    height: 42,
    marginRight: 12,
    backgroundColor: '#3C90F4',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginBottom: 14,
  },
  pmCardText: {
    color: '#fff',
    fontSize: 16,
  },
  cardHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fieldsHolder: {
    display: 'flex',
    flexDirection: 'column',
    width: '48%',
  },
  card: {

  },
  mainBtn: {
    marginTop: 20,
    height: 48,
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#3C90F4',

  },
  mainBtnTxt: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 48,
    textAlign: 'center'
  }
})