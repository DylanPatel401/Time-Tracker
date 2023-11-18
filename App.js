import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Dimensions} from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import MainScreen from './screens/main';
import NewTaskScreen from './screens/new_task';
import NewActivityScreen from './screens/new_activity';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen}   options={{headerShown: false}}/>
        <Stack.Screen name="NewTaskScreen" component={NewTaskScreen}   options={{headerShown: false}}/>

        <Stack.Screen name="NewActivityScreen" component={NewActivityScreen}   options={{headerShown: true}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}