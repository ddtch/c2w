import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import kid1Pict from '../assets/imgs/avatars/kid-ali.png';
import kid2Pict from '../assets/imgs/avatars/kid-sai.png';
import kid3Pict from '../assets/imgs/avatars/kid-dd.png';
import BaseCard from './BaseCard';
import fr1Pict from '../assets/imgs/avatars/fr-1.png';
import fr2Pict from '../assets/imgs/avatars/fr-2.png';
import fr3Pict from '../assets/imgs/avatars/fr-3.png';
import fr4Pict from '../assets/imgs/avatars/fr-4.png';
import { ScrollView } from 'react-native-gesture-handler';

export const famFolks = [
  {
    id: 'ALI',
    title: 'Ali',
    tasks: 3,
    img: kid1Pict,
  },
  {
    id: 'SAI',
    title: 'Sai',
    tasks: 2,
    img: kid2Pict,
  },
  {
    id: 'DD',
    title: 'David',
    tasks: 2,
    img: kid3Pict,
  },
];

export const friends = [
  {
    id: '2f424f',
    tasks: 3,
    img: fr1Pict,
  },
  {
    id: 'SAasdf2I',
    tasks: 2,
    img: fr2Pict,
  },
  {
    id: 'D23f23D',
    tasks: 2,
    img: fr3Pict,
  },
  {
    id: 'D23f212123D',
    tasks: 0,
    img: fr4Pict,
  },
]

const FamilyList: React.FC<any> = ({onUserClick, kidMode}) => {
  return (
    <BaseCard>
      <View style={styles.folksHolder}>
      {
        !kidMode && famFolks.map(el => <View key={el.id} style={styles.avHolder}>
          <Pressable onPress={() => onUserClick && onUserClick(el)}>
            <Image source={el.img} resizeMode={'cover'} style={styles.ava}/>
            <View style={styles.badgeHolder}>
              <Text style={styles.badge}>{el.tasks}</Text>
            </View>
          </Pressable>
        </View>)
      }
      {
        kidMode && <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {friends.map(el => <View key={el.id} style={styles.avHolder}>
          <Pressable onPress={() => null}>
            <Image source={el.img} resizeMode={'cover'} style={styles.ava}/>
            {
              el.tasks > 0 && <View style={styles.badgeHolder}>
                <Text style={styles.badge}>{el.tasks}</Text>
              </View>
            }
          </Pressable>
        </View>)}</ScrollView>
      }
        <View style={styles.btnHolder}>
          <Text style={styles.btnTxt}>+</Text>
        </View>
      </View>
    </BaseCard>
  )
}

export default FamilyList

const styles = StyleSheet.create({
  avHolder: {
    width: 56,
    height: 56,
    display: 'flex',
    position: 'relative',
    marginRight: 20,
    overflow: 'visible',
  },
  ava: {
    width: 56,
    height: 56,
    borderRadius: 56,
    overflow: 'hidden',
  },
  badgeHolder: {
    position: 'absolute',
    top: -2,
    right: -4,
    backgroundColor: '#3C90F4',
    borderRadius: 20,
    width: 20,
    height: 20,
    zIndex: 2,
  },
  badge: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 12,
  },
  folksHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  btnHolder: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F2FE',
    width: 56,
    height: 56,
    borderRadius: 56,
    marginLeft: 'auto',
  },
  btnTxt: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 56,
    fontWeight: '500',
    color: '#3C90F4',
  },
})