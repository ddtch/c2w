import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { IChore } from '../models/IChore';
import { mainStyles } from '../styles/main.styles';
import TasksFeed from '../components/TasksFeed';

import ch1Img from '../assets/imgs/chore-1.png';
import ch2Img from '../assets/imgs/chore-2.png';
import ch3Img from '../assets/imgs/chore-3.png';
import ch4Img from '../assets/imgs/chore-4.png';

import kid1 from '../assets/imgs/avatars/kid-ali.png';
import kid2 from '../assets/imgs/avatars/kid-sai.png';
import kid3 from '../assets/imgs/avatars/kid-dd.png';

import momAvatar from '../assets/imgs/avatars/moms.png';

import UserTopBar from '../components/UserTopBar';
import { WalletContext } from '../contexts/WalletContext';
import BaseCard from '../components/BaseCard';
import FamilyList, { famFolks } from '../components/FamilyList';
import Calendar from '../components/Calendar';
import { ScrollView } from 'react-native-gesture-handler';

export const choirsList: IChore[] = [
  {
    id: 1,
    title: 'Vacuum',
    description: 'Lorem ipsum est dollar more dollar',
    done: false,
    image: ch1Img,
    price: 21,
    kids: [famFolks[0]]
  },
  {
    id: 2,
    title: 'Clean dishes',
    description: 'Lorem ipsum est dollar more dollar',
    done: true,
    image: ch2Img,
    price: 18,
    kids: [famFolks[0], famFolks[1]]
  },
  {
    id: 3,
    title: 'Home work',
    description: 'Lorem ipsum est dollar more dollar',
    done: false,
    image: ch3Img,
    price: 25,
    kids: [famFolks[1], famFolks[0], famFolks[2]]
  },
  {
    id: 4,
    title: 'Walk with pet',
    description: 'Lorem ipsum est dollar more dollar',
    done: false,
    image: ch4Img,
    price: 15,
    kids: [famFolks[2]]
  },
];

const KidsView = () => {
  return (
    <View style={{...mainStyles.content, backgroundColor: '#F8FAFC'}}>
      <UserTopBar fullName='Ali Hertel' balance={32} hideBtn userAva={kid1}/>
      <Text style={styles.mainHeader}>Chores for the day</Text>

    </View>
  )
}

const ParentView: React.FC<any> = ({navigateFn}) => {
  const [balance, setBalance] = useState(12.5);
  const walletDetails = useContext(WalletContext);

  return (
    <View style={{...mainStyles.content, backgroundColor: '#F8FAFC'}}>
      <UserTopBar topUp={() => navigateFn('TopUp')} balance={walletDetails.summ} userAva={momAvatar}/>
      <Text style={styles.mainHeader}>My Family</Text>
      <FamilyList onUserClick={(params: any) => navigateFn('Child', params)}/>
      <Text style={styles.mainHeader}>Chores for the day</Text>
      <Calendar/>
      <ScrollView style={{minHeight: 420, flex: 1}}>
        {/* <Pressable onPress={() => navigateFn('Child')}>
          <Text>Go to children</Text>
        </Pressable>
        
        <Pressable onPress={() => navigateFn('TopUp')}>
          <Text>Top Up my Balance</Text>
        </Pressable> */}
        
        <TasksFeed tasks={choirsList} />
      </ScrollView>
    </View>
  )
}

const MainScreen: React.FC<any> = ({navigation}) => {
  const [kidMode, setKidMode] = useState(false);
  const goToPage = (link: string, params?: any) => {
    console.log(link, params);
    return navigation.navigate(link, params)
  };

  return (
    <SafeAreaView style={{...mainStyles.container}}>
      <Pressable style={styles.switcher}
        onPress={() => setKidMode(!kidMode)}>
        <Text style={styles.switcherText}>KM</Text>
      </Pressable>
      {
        kidMode ? 
          <KidsView/> :
          <ParentView navigateFn={(link: string, params?: any) => goToPage(link, params)}/>
      }
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  switcher: {
    position: 'absolute',
    top: 40,
    right: 6,
    width: 22,
    height: 22,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 6,
    zIndex: 20,
  },
  switcherText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 22,
  },
  mainHeader: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 14,
    color: '#020538',
  },
})