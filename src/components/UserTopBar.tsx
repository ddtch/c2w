import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import daddyAvatar from '../assets/imgs/avatars/daddy.png';
import coinIcon from '../assets/imgs/coin.png';
import TopUpIcon from '../assets/svg/top-up.svg';

export type UserTopBarProps = {
  fullName?: string;
  onTopUp?: (amount: number) => void;
  balance: number
}

const UserTopBar: React.FC<UserTopBarProps> = ({fullName = 'David Tcholariya', onTopUp, balance}) => {
  return (
    <View style={styles.mainHolder}>
      
      <View style={styles.mainInfo}>
        <View style={styles.avatarHolder}>
          <Image source={daddyAvatar} resizeMode='contain' style={styles.avatarHolder} />
        </View>

        <View style={styles.textsHolder}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.name}>{fullName}</Text>
        </View>
      </View>

      <View style={styles.balanceHolder}>
        
        <View style={styles.amountHolder}>
          <Text style={styles.tip}>
            Your balance 
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
        <View style={styles.topUpBtn}>
          <TopUpIcon width={26} height={26} />
          <Text style={{fontSize: 10, opacity: .6, lineHeight: 0}}>Top up</Text>
        </View>

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
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4,
    paddingLeft: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    borderRadius: 8,
  }
})