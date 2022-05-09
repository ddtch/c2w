import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseCard from './BaseCard'

const week = [
  {
    id: 'f32',
    title: 'Sun',
    num: 8,
  },
  {
    id: 'f321',
    title: 'Mon',
    num: 9,
    selected: true,
  },
  {
    id: 'f32a1',
    title: 'Tue',
    num: 10,
  },
  {
    id: 'fsjd9832',
    title: 'Wed',
    num: 11,
  },
  {
    id: 'f322d',
    title: 'Thu',
    num: 12,
  },
  {
    id: 'f3j92',
    title: 'Fri',
    num: 13,
  },
  {
    id: 'f3122',
    title: 'Sat',
    num: 14,
  },
]

const Calendar = () => {
  return (
    <BaseCard style={{marginBottom: 20}}>
      <View style={styles.calHolder}>
        {
          week.map(el => <View key={el.id} style={(el.selected ? styles.selectedDate : styles.date)}>
            <Text style={{...styles.dateTitle, color: el.selected ? '#fff' : '#878D94'}}>
              {el.title}
            </Text>
            <Text style={{...styles.dateNumber, color: el.selected ? '#fff' : 'rgba(0,0,0,.8)'}}>
              {el.num}
            </Text>
          </View>)
        }
      </View>
    </BaseCard>
  )
}

export default Calendar

const styles = StyleSheet.create({
  calHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    width: 40,
    height: 60,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  selectedDate: {
    display: 'flex',
    flexDirection: 'column',
    width: 40,
    height: 60,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C90F4',
    borderRadius: 8,
  },
  dateTitle: {
    fontWeight: '600',
  },
  dateNumber: {
    fontWeight: '600',
  },
})