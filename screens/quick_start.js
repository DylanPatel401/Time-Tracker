import { TextInput, Text, View, StyleSheet, TouchableHighlight, Dimensions, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {normalStyle, barHeight} from '../styles/style';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


const activityList = ["Homework", "Workout", "Shopping", "READING!"];

let activityElement = [];



export default function QuickStartScreen({navigation}) {
    const navigator = useNavigation();

    const start_timer = () => {
        //navigator.navigate('Timer'); Need to create another screen for timer
    }

    
    activityList.forEach((act, index) => {
        activityElement.push(
            <TouchableHighlight onPress={start_timer} key={index}>
                <View style={[normalStyle.button, {margin: 5}]} key={index}>
                    <Text style={normalStyle.text} key={index}>
                        {act}
                    </Text>            
                </View>
            </TouchableHighlight>
        );
    });

    return (
      <View style={{ margin: deviceWidth/50, marginTop: 40 }}>

        <Text style={normalStyle.title}>
            Work In Progress
        </Text>

        <View style={{flexDirection:'column',}}>
            {activityElement}            
        </View>


      </View>

    );
  }
  
