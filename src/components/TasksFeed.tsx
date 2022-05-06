import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IChore } from '../models/IChore'

export type TasksFeedProps = {
  tasks: IChore[]
}

const TasksFeed: React.FC<TasksFeedProps> = ({tasks}) => {
  return (
    <View>
      {
        tasks.map(el => <Text key={el.id}>{el.title}</Text>)
      }
    </View>
  )
}

export default TasksFeed

const styles = StyleSheet.create({})