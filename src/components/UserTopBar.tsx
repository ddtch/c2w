import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import coinIcon from '../assets/imgs/coin.png';
import TopUpIcon from '../assets/svg/top-up.svg';

export type UserTopBarProps = {
  fullName?: string;
  topUp?: () => void;
  balance: number;
  hideBtn?: boolean;
  userAva: any;
  kidMode?: boolean;
}

const UserTopBar: React.FC<UserTopBarProps> = ({fullName = 'Katelyn Hertel', topUp, balance, hideBtn, userAva, kidMode}) => {
  return (
    <View style={styles.mainHolder}>
      
      <View style={styles.mainInfo}>
        <View style={styles.avatarHolder}>
          <Image source={userAva} resizeMode='contain' style={styles.avatarHolder} />
        </View>

        <View style={styles.textsHolder}>
          {!kidMode && <Text style={styles.welcome}>Welcome!</Text>}
          <Text style={styles.name}>{fullName}</Text>
        </View>
      </View>

      <View style={styles.balanceHolder}>
        
        <View style={styles.amountHolder}>
          <Text style={styles.tip}>
            {!kidMode && 'Your balance'}
            {kidMode && 'Balance'}
          </Text>
          <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            
            <Text style={styles.amount}>
              <Text style={{opacity: .6}}>TKN</Text> {balance}
            </Text>
          </View>
        </View>
        {
          !hideBtn && <View style={styles.topUpBtn}>
            <Pressable onPress={() => topUp && topUp()}>
              <TopUpIcon width={40} height={52} />
            </Pressable>
          </View>
        }

      </View>
    </View>
  )
}

export default UserTopBar

const styles = StyleSheet.create({
  mainHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mainInfo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarHolder: {
    width: 56,
    height: 56,
    overflow: 'hidden',
    marginRight: 10,
    borderRadius: 56,
    display: 'flex',
  },
  textsHolder: {
    display: 'flex',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 12,
    fontWeight: '500',
  },
  name: {
    fontSize: 18,
    fontWeight: '500'
  },
  balanceHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coin: {
    width: 18,
    height: 18,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 6,
  },
  amountHolder: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  tip: {
    fontSize: 12,
    marginBottom: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4
  },
  topUpBtn: {
    marginLeft: 6,
  }
})