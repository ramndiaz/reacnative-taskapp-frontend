import React, {useState, useEffect} from 'react'
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Layout from '../components/Layout';
import {saveTask, getTask} from '../api';


const TaskFormScreen = ({navigation, route}) => {

  

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    if(route.params && route.params.id){
      navigation.setOptions({ headerTitle: 'Updating a Task'});
      (async() => {
        const task = await getTask(route.params.id);
        setTask({title: task.title, description: task.description});
        console.log(task);
      }) ();
    }
  }, []);

  
  const handleSubmit = () => {
    saveTask(task);
    navigation.navigate('HomeScreen');
  }

  const handleChange = (name, value) => setTask({...task, [name]: value});

  

  return (
    <Layout>
      <TextInput
      style={styles.input}
      placeholder='write a title'
      placeholderTextColor='gray'
      onChangeText={(text) => handleChange('title', text)}
      value={task.title}
      />
      <TextInput
      style={styles.input}
      placeholder='write a description'
      placeholderTextColor='gray'
      onChangeText={(text) => handleChange('description', text)}
      value={task.description}
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>save</Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
  
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '90%',
    color: 'white',
    height: 35,
    borderRadius: 10
    
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    margin: 15,
    backgroundColor: 'green',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  buttonText:{
    color: 'white',
    color: 'gray'
  }
})

export default TaskFormScreen