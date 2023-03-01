import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';


const Stack = createStackNavigator();

const App=() => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={({navigation})=>({
                      title: 'Task App',
                      headerStyle:{ backgroundColor: '#222f3e'}, 
                      headerTitleStyle:{color: 'red', fontSize: 30},
                      headerRight: () => (
                        <TouchableOpacity onPress={()=> navigation.navigate('TaskFormScreen')}>
                          <Text style={{color: 'white', marginRight: 20, fontStyle: 'italic'}}>New</Text>
                        </TouchableOpacity>
                      )
                    })}
          />
          <Stack.Screen 
            name="TaskFormScreen" 
            component={TaskFormScreen} 
            options={{
              title: 'Create a new task',
              headerStyle:{ backgroundColor: '#222f3e'}, 
              headerTitleStyle:{color: 'red', fontSize: 20},
              headerTintColor: 'white'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;
