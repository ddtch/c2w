import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { IChore } from '../models/IChore';
import { mainStyles } from '../styles/main.styles';
import TasksFeed from '../components/TasksFeed';
//@ts-ignore
import ch1Img from '../assets/imgs/chore-1.png';
//@ts-ignore
import ch2Img from '../assets/imgs/chore-2.png';
//@ts-ignore
import ch3Img from '../assets/imgs/chore-3.png';
import UserTopBar from '../components/UserTopBar';

export const choirsList: IChore[] = [
  {
    id: 1,
    title: 'Chore 1',
    description: 'Lorem ipsum est dollar more dollar',
    done: false,
    image: ch1Img,
  },
  {
    id: 2,
    title: 'Chore 3',
    description: 'Lorem ipsum est dollar more dollar',
    done: true,
    image: ch2Img,
  },
  {
    id: 3,
    title: 'Chore 3',
    description: 'Lorem ipsum est dollar more dollar',
    done: false,
    image: ch3Img,
  },
];

const KidsView = () => {
  return (
    <View>
      <Text>Ama kid</Text>
    </View>
  )
}

const ParentView: React.FC<any> = ({navigateFn}) => {
  const [balance, setBalance] = useState(12.5)
  return (
    <View style={mainStyles.content}>
      <UserTopBar onTopUp={() => navigateFn('TopUp')} balance={balance}/>
      <View>
        <Text>Ama Parent</Text>
        <Pressable onPress={() => navigateFn('Child')}>
          <Text>Go to children</Text>
        </Pressable>
        
        <Pressable onPress={() => navigateFn('TopUp')}>
          <Text>Top Up my Balance</Text>
        </Pressable>

        <Text>MainScreen</Text>
        <TasksFeed tasks={choirsList} />
      </View>
    </View>
  )
}

const MainScreen: React.FC<any> = ({navigation}) => {
  const [kidMode, setKidMode] = useState(false);
  const goToPage = (link: string) => navigation.navigate(link);

  return (
    <SafeAreaView style={mainStyles.container}>
      <Pressable style={styles.switcher}
        onPress={() => setKidMode(!kidMode)}>
        <Text style={styles.switcherText}>KM</Text>
      </Pressable>
      {
        kidMode ? 
          <KidsView/> :
          <ParentView navigateFn={(link: string) => goToPage(link)}/>
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
  }
})