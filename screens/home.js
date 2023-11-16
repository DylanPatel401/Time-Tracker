import { TextInput, Text, View, StyleSheet, TouchableHighlight, Dimensions, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import normalStyle from '../styles/style';
import TasksScreen from './tasks';
import QuickStartScreen from './quick_start';
import SettingsScreen from './settings';
import MainScreen from './main';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


const Tab = createBottomTabNavigator();


const Settings = () => { return(<SettingsScreen/>) }
const QuickStart = () => { return(<QuickStartScreen/>) }
const Tasks = () => { return(<TasksScreen/>) }
const Main = () => { return(<MainScreen/>)}

export default function HomeScreen({navigation}) {

    return (
        <Tab.Navigator
          activeColor="red"
          inactiveColor="orange"
          barStyle = {{backgroundColor: 'black'}}
        >      
    
          <Tab.Screen name="Main" component={MainScreen}       
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="star-circle" color={color} size={deviceHeight/30} />
              ), 
              headerShown: false
            }}
          />
          <Tab.Screen name="Quick Start" component={QuickStart} 
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="clock-check-outline" color={color} size={deviceHeight/30} />
              ), 
              headerShown: false
            }}
          />      
          
          <Tab.Screen name="Settings" component={Settings} 
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="cog" color={color} size={deviceHeight/30} />
              ), 
            }}
          />      
          
    
        </Tab.Navigator>  
    );
}
  
