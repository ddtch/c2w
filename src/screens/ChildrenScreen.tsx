import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { mainStyles } from '../styles/main.styles';
import UserTopBar from '../components/UserTopBar';
import { ScrollView } from 'react-native-gesture-handler';

import app1 from '../assets/imgs/app-1.png';
import app2 from '../assets/imgs/app-2.png';
import app3 from '../assets/imgs/app-3.png';
import app4 from '../assets/imgs/app-4.png';
import app5 from '../assets/imgs/app-5.png';
import app6 from '../assets/imgs/app-6.png';

import ed1 from '../assets/imgs/ed-11.png';
import ed2 from '../assets/imgs/ed-22.png';

import logo1 from '../assets/imgs/logo-1.png';
import logo2 from '../assets/imgs/logo-2.png';

export const appsAndMarketplace = [
  {
    id: '23f',
    img: app1,
  },
  {
    id: '12423f',
    img: app2,
  },
  {
    id: '2123f',
    img: app3,
  },
  {
    id: '23fa1',
    img: app4,
  },
  {
    id: '9j23f',
    img: app5,
  },
  {
    id: '122311f',
    img: app6,
  },
];

export const educationalApps = [
  {
    id: 'bsdu8f',
    img: ed1,
  },
  {
    id: 'bsdsqu8f',
    img: ed2,
  }
]

export const kidsTransactions = [
  {
    id: 'sdj89nh',
    logo: logo1,
    price: 124,
    title: 'Roblox'
  },
  {
    id: 'sdh98gvs',
    logo: logo2,
    price: 64,
    title: 'Lego'
  }
]

const ChildrenScreen: React.FC<any> = ({route, navigation}) => {
  const {id, title, img} = route.params;
  
  useEffect(() => {
    navigation.setOptions({title})
  }, []);

  return (
    <View style={mainStyles.content}>
      <UserTopBar
        hideBtn
        balance={23.5}
        kidMode
        fullName={title + ' Halter'}
        userAva={img}/>
      <Text style={styles.subheader}>Available apps</Text>
      <View style={{marginBottom: 20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.appsHolder}>
          {
            appsAndMarketplace.slice(0,1).map(el => <View key={el.id}>
              <Image source={el.img} resizeMode={'cover'} style={styles.appImage}/>
            </View>)
          }
          <Pressable onPress={() => navigation.navigate('Market')}
            style={styles.addAppBtn}>
              <Text style={styles.addAppBtnText}>+ {'\n'} more</Text>
          </Pressable>
        </ScrollView>
      </View>

      <Text style={styles.subheader}>Educational apps</Text>
      <View style={{marginBottom: 20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            educationalApps.map(el => <View key={el.id}>
              <Image source={el.img} resizeMode={'cover'} style={styles.appImage}/>
            </View>)
          }
          <View style={styles.addAppBtn}><Text style={styles.addAppBtnText}>+ {'\n'} more</Text></View>
        </ScrollView>
      </View>

      <Text style={styles.subheader}>Purchase history</Text>
      <View style={{marginBottom: 20}}>
        {
          kidsTransactions.map(el => <View key={el.id} style={styles.transaction}>
            <Image source={el.logo} resizeMode={'cover'} style={styles.transactionImage}/>
            <View>
              <Text style={{fontWeight: '600', fontSize: 18}}>{el.title}</Text>
              <Text style={{opacity: .6, fontSize: 12, fontWeight: '500'}}>gift card redeem</Text>
            </View>

            <View style={{marginLeft: 'auto', opacity: .6}}>
              <Text style={{fontWeight: '600'}}>${el.price}</Text>
            </View>
          </View>)
        }
      </View>
    </View>
  )
}

export default ChildrenScreen

const styles = StyleSheet.create({
  subheader: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 10,
    color: '#4a4a4a',
  },
  appsHolder: {
    height: 110,
  },
  appImage: {
    width: 106,
    height: 106,
    marginRight: 10,
  },
  addAppBtn: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F2FE',
    width: 106,
    height: 106,
    borderRadius: 10,
    marginLeft: 'auto',
  },
  addAppBtnText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: '#3C90F4',
  },
  transaction: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    alignContent: 'center',
  },
  transactionImage: {
    width: 40,
    height: 40,
    marginRight: 20
  }
})