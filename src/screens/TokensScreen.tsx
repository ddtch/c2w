import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainStyles } from '../styles/main.styles'
import IconSend from '../assets/svg/icon-send.svg';
import IconBuy from '../assets/svg/icon-buy.svg';
import IconStatus from '../assets/svg/icon-status.svg';
import IconReceive from '../assets/svg/icon-receive.svg';
import IconAddWallet from '../assets/svg/add-to-wallet.svg';
import debit from '../assets/imgs/debit.png';
import { ScrollView } from 'react-native-gesture-handler';
import IconExch from '../assets/svg/icon-exch.svg';
import IconCredit from '../assets/svg/icon-credit.svg';
import IconDeposit from '../assets/svg/icon-deposit.svg';
import LinearGradient from 'react-native-linear-gradient';

const options = [
  {
    id: '389h8f',
    title: 'Deposit',
    icon: <IconDeposit width={42} height={42}/>,
  },
  {
    id: 'f32f3',
    title: 'Exchange',
    icon: <IconExch width={42} height={42}/>,
  },
  {
    id: 'h27f83',
    title: 'Credit',
    icon: <IconCredit width={42} height={42}/>,
  }
]

const TokensScreen = ({navigation}: any) => {
  return (
    <View style={mainStyles.content}>
      <Text style={styles.subheader}>Current Wallet Balance</Text>
      <Text style={styles.tknAmount}>1,318 <Text style={{opacity: .6}}>C2W</Text></Text>
      <Text style={styles.money}>≈ $1,287</Text>

      <View style={styles.chainDropdown}>
        <IconStatus width={22} height={22} style={{marginRight: 4}}/>
        <Text style={styles.chainText}>Smart Chain SOL-20</Text>
      </View>

      <View style={styles.actionsHolder}>
        <View style={styles.btnHolder}>
          <Pressable style={styles.actionBtn} onPress={() => null}>
            <IconSend width={24} height={24} style={{opacity: .8}}/>
          </Pressable>
          <Text style={styles.btnHolderText}>Send</Text>
        </View>
        <View style={styles.btnHolder}>
          <Pressable style={styles.actionBtn} onPress={() => null}>
            <IconBuy width={32} height={32} />
          </Pressable>
          <Text style={styles.btnHolderText}>Buy</Text>
        </View>
        <View style={styles.btnHolder}>
          <Pressable style={styles.actionBtn} onPress={() => null}>
            <IconReceive width={24} height={24} style={{opacity: .8}}/>
          </Pressable>
          <Text style={styles.btnHolderText}>Receive</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{position: 'relative', height: '38%'}}>
          <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10, opacity: .8}}>Withdrawal</Text>
          <Image source={debit} resizeMode={'contain'} style={styles.debitCard}/>
          <IconAddWallet height={42} style={styles.walletBtn}/>
        </View>
        <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10, opacity: .8}}>For you</Text>
        <View style={styles.bankOptions}>
          {
            options.map(el => <LinearGradient
                start={{x: -0.865, y: 0.21432}}
                end={{x: .4, y: .8}}
                colors={['#03effe', '#24d2fe', '#4facfe']} key={el.id} style={styles.option}>
                {el.icon}
                <Text style={styles.optionText}>{el.title}</Text>
              </LinearGradient>
            )
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default TokensScreen

const styles = StyleSheet.create({
  subheader: {
    fontSize: 12,
    fontWeight: '500',
    opacity: .8,
    textAlign: 'center',
    marginBottom: 6,
  },
  tknAmount: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center'
  },
  money: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    opacity: .35,
    marginBottom: 20,
  },
  chainDropdown: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 22,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10.0,
    elevation: 10,
    margin: 'auto',
    marginBottom: 20,
  },
  chainText: {
    fontWeight: '600',
    fontSize: 14,
    opacity: .6,
  },
  actionsHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: '14%',
    paddingRight: '14%',
  },
  actionBtn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    borderWidth: 1,
    padding: 12,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,.04)',
  },
  btnHolder: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 82,
    marginBottom: 10,
  },
  btnHolderText: {
    fontWeight: '500',
    color: '#0a0f17'
  },
  debitCard: {
    width: '100%',
    marginTop: '-72%',
  },
  walletBtn: {
    position: 'absolute',
    top: 220,
    left: 0,
    zIndex: 20,
    width: '100%',
  },
  bankOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  option: {
    width: 110,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
    // backgroundColor: '#3C90F4',
    padding: 12,
    overflow: 'hidden',
  },
  optionText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    marginTop: 26,
  }
})