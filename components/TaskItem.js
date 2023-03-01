import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const TaskItem = ({task, handleDelete}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', {id: task.id})}>
        <Text style={styles.itemTitle}>title: {task.title}</Text>
        <Text style={styles.itemDescription}>description: {task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDelete(task.id)}
      >
        <Text style={styles.itemButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    itemTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white'
    },
    itemDescription: {
      color: 'gray'
    },
    itemButton: {
      color: 'red',
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 5,
      margin: 5,
      padding: 5

    }
})

export default TaskItem