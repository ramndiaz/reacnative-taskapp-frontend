import React, {useState, useEffect} from 'react'
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Layout from '../components/Layout';
import {saveTask, getTask, updateTask} from '../api';


const TaskFormScreen = ({navigation, route}) => {

  

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

const [editing, setEditing] = useState(false);
  
  const handleSubmit = async () => {
    try{
      if (!editing) {
        await saveTask(task);
        } else {
        await updateTask(route.params.id, task);
        }
        navigation.navigate('HomeScreen');
    } catch (err) {
      console.log(err);
    }
  };

  

  const handleChange = (name, value) => setTask({...task, [name]: value});

  useEffect(() => {
    if(route.params && route.params.id){
      navigation.setOptions({ headerTitle: 'Updating a Task'});
      setEditing(true);
      (async() => {
        const task = await getTask(route.params.id);
        setTask({title: task.title, description: task.description});
      }) ();
    }
  }, []);

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
      {
        !editing ? (
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>save</Text>
          </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
            <Text style={styles.buttonText}>update</Text>
          </TouchableOpacity>
        )
      }
      
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
    backgroundColor: 'blue',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    margin: 15,
    backgroundColor: 'yellow',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  buttonText:{
    color: 'white',
    color: 'gray'
  }
})

export default TaskFormScreen