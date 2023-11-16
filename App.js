import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Dimensions} from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import MainScreen from './screens/main';
import QuickStartScreen from './screens/tasks';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen}   options={{headerShown: false}}/>
        <Stack.Screen name="Quick_Start" component={QuickStartScreen}   options={{headerShown: false}}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}