import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IChore } from '../models/IChore'
import BaseCard from './BaseCard'
import CalIcon from '../assets/svg/icon-cal.svg';
import TknIcon from '../assets/svg/icon-tkt.svg';

export type TasksFeedProps = {
  tasks: IChore[]
}

const TasksFeed: React.FC<TasksFeedProps> = ({tasks}) => {
  return (
    <View>
      {
        tasks.map(el => <BaseCard key={el.id}>
            <View style={styles.choreHolder}>
              <View style={styles.choreAvHolder}>
                <Image source={el.image} style={styles.image} resizeMode={'cover'}/>
              </View>

              <View style={styles.choreInfo}>
                <Text style={styles.choreTitle}>{el.title}</Text>
                <View style={styles.due}>
                  <CalIcon width={14} height={14} />
                  <Text style={styles.dueText}>Due today</Text>
                </View>
                <View style={styles.price}>
                  <TknIcon width={14} height={14} />
                  <Text style={styles.priceText}>{el.price} C2W</Text>
                </View>
              </View>

              <View style={styles.executors}>
                {
                  el.kids.length > 0 && el.kids?.map(kid => <View key={kid.id} style={styles.ex}>
                    <Image source={kid.img} style={styles.exAva} resizeMode={'cover'} />
                  </View>)
                }
              </View>
            </View>
          </BaseCard>
        )
      }
    </View>
  )
}

export default TasksFeed

const styles = StyleSheet.create({
  choreHolder: {
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
  },
  choreAvHolder: {
    marginRight: 18,
  },
  image: {
    width: 64,
    height: 64,

  },
  choreInfo: {

  },
  choreTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 6,
  },
  due: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
  },
  dueText: {
    paddingLeft: 4,
    fontSize: 12,
    color: '#878D94',
    fontWeight: '500'
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
  },
  priceText: {
    paddingLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#3C90F4',
  },
  executors: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  ex: {
    width: 48,
    height: 48,
    borderRadius: 48,
    overflow: 'hidden',
    display: 'flex',
    marginLeft: -20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exAva: {
    width: 48,
    height: 48,
  }
})