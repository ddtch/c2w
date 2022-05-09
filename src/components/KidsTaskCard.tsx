import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CalIcon from '../assets/svg/icon-cal.svg';
import TknIcon from '../assets/svg/icon-tkt.svg';
import TasksFeed from './TasksFeed';
import { choirsList } from '../screens/MainScreen';
import done1 from '../assets/imgs/done-1.png';
import BaseCard from './BaseCard';
import IconDone from '../assets/svg/icon-done.svg';
import doneBg from '../assets/imgs/done-bg.png';
import IconWip from '../assets/svg/icon-wip.svg';
import FastImage from 'react-native-fast-image';


export type KidsTaskCardProps = {
  task?: any;
  addPicture: () => void;
  doneImg?: string;
  taskComplete?: boolean;
}

const KidsTaskCard: React.FC<KidsTaskCardProps> = ({doneImg, taskComplete, task, addPicture}) => {

  return (
    <>
    {
      choirsList.slice(0,2).map((el, i) => <BaseCard key={el.id} style={styles.container}>
        <View style={styles.leftSide}>
          {i === 0 && <Image source={done1} resizeMode={'cover'} style={{width: 64, height: 64}}/>}
          {
            i === 1 && <Pressable onPress={() => addPicture()}
              style={styles.addAppBtn}>
                {!doneImg && <Text style={styles.addAppBtnText}>+</Text>}
                {doneImg && <FastImage
                  style={{width: 64, height: 64, borderRadius: 5}}
                  resizeMode={'cover'}
                  source={{uri: doneImg}}
                />}
            </Pressable>
          }
          <View style={styles.choreText}>
            <Text style={styles.taskText}>{el.title}</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <CalIcon width={14} height={14} style={{marginRight: 2}} />
              <Text style={styles.dueText}>Today</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TknIcon width={14} height={16} style={{marginRight: 2}} />
              <Text style={styles.tokenText}>{el.price} tokens</Text>
            </View>
          </View>
        </View>
        <View style={styles.progress}>
          {i === 0 && <Image source={doneBg} resizeMode={'cover'} style={styles.bgImg}/>}
          {i === 0 && <IconDone width={35} height={47}/>}
          {i === 1 && (!taskComplete ? <IconWip width={35} height={47} /> : <IconDone width={35} height={47}/>)}
          {i === 1 && taskComplete && <Image source={doneBg} resizeMode={'cover'} style={styles.bgImg}/>}
        </View>
      </BaseCard>)
    }
    { 
      (doneImg && !taskComplete) && 
        <View style={{position: 'absolute', width: '120%', height: '120%',top: 0, left: 0, backgroundColor: 'rgba(255,255,255,.7)', zIndex: 20}}>
          <ActivityIndicator size="large" color="#00ff00" style={{display: 'flex', marginTop: '60%'}} />
          <Text style={{fontSize: 22, fontWeight: '600', textAlign: 'center', marginLeft: -30}}>Waiting for aprovement</Text>
        </View>
    }
    </>
  )
}

export default KidsTaskCard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display:'flex',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection:'row',
    backgroundColor:'#fff',
    justifyContent:"space-between",
    borderRadius: 10,
    height: 'auto'
  },
  taskImage:{
    width: 56,
    height: 56,
    backgroundColor: "#000000",
    borderRadius: 5,
  },
  leftSide:{
    flexDirection:'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  taskText: {
    fontStyle: "normal",
    fontSize: 16,
    letterSpacing: -0.023,
    marginBottom:8,
  },
  tokenText:{
    fontSize: 14,
  },
  dueText:{
    fontSize: 14,
    marginBottom: 4,
    opacity: .7
  },
  choreText:{
    // backgroundColor:'#a394e7',
    marginLeft:24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  progress:{
    // justifySelf:'flex-end',
    // backgroundColor:'#239487'
    marginRight: 20
  },
  taskContainer:{
    alignItems: 'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between"
  },
  statusContainer:{
  width: 80,
  //  backgroundColor: '#419283',
  justifyContent: "center",
  alignItems: 'center',

  //  flex:1,
  //  flexDirection: "column",
  },
  divisionLine:{
    height: 62,
    width: 1,
    backgroundColor: '#63C567',
  }, 
  statusImage:{
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: '#fec435',
    marginBottom: 10,
  },
  statusText: {

  },
  bgImg: {
    width: 88,
    height: 57,
    position: 'absolute',
    top: 0,
    left: -104
  },
  addAppBtn: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F2FE',
    width: 64,
    height: 64,
    borderRadius: 10,
    marginLeft: 'auto',
  },
  addAppBtnText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: '#3C90F4',
  },
})