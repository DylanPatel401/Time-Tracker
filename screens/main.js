import { TouchableOpacity, Text, View, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import React, { useState } from 'react';

import {normalStyle, barHeight} from '../styles/style';
import { CustomHeader } from '../styles/custom';

export default function MainScreen({navigation}) {
  
  const [dayIndex, setDayIndex] = useState(0);

  const onDayPress = (num) => {
    setDayIndex(num)
  }

  const DaysRow = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDayIndex =  new Date().getDay();

    const futureDays = [];
    for (let i = currentDayIndex ; i <= currentDayIndex + 6; i++) {
      const dayIndex = i > 6 ? i - 7 : i;
      futureDays.push(days[dayIndex]);
    }

    return(
    <View style={stylesDay.container}>
      {futureDays.map((day, index) => (
        <TouchableOpacity 
          style={index != dayIndex ? stylesDay.dayContainer : [stylesDay.dayContainer, {backgroundColor:'white', borderRadius: 100}] } 
          key={index} 
          onPress={() => onDayPress(index)}
        >
          <View style={{alignItems: 'center'}}>
            <Text numberOfLines={1} style={stylesDay.day}> {day} </Text>
            <Text style={stylesDay.num}>{new Date().getDate() + (index + 1)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    );
  }

  return (
    
    <View style={{ flex:1 }}>
      <StatusBar hidden />

      <CustomHeader 
        title = "November" 
        icon_name = "calendar"
        onPress = {() => {console.log("click")}}
      />        

      <DaysRow/>

      <View style={[normalStyle.mediumTitle, {flex:6, borderWidth:2, margin: barHeight}]}>
        <Text style={{fontSize: barHeight*1.25, fontWeight: 'bold', }}>
          Tasks:
        </Text>
      </View>

      <View style={{flex:1, flexDirection: 'row', margin: barHeight}}>
        <TouchableHighlight
          style={[normalStyle.button, {flex:1}]}
          onPress={() => {navigation.navigate('Quick_Start')}}
          underlayColor="transparent"
        >
          <Text style={normalStyle.buttonText}>
              Create Task 
          </Text>
        </TouchableHighlight>       
      </View>


    </View>
  );
}
  
const stylesDay = StyleSheet.create({
  container: { borderWidth:3, flexDirection: 'row', alignItems: 'center', backgroundColor: 'royalblue', margin:barHeight/2, borderRadius: 25},
  dayContainer: { flex:1,alignItems: 'center', justifyContent: 'space-between', paddingTop: barHeight, paddingBottom: barHeight},
  day: {fontSize:20, color:'white', color:'#a9a9a9', fontWeight: 'bold'},
  num: {fontSize:15, color: 'white', marginTop:barHeight, color:'#a9a9a9', fontWeight: 'bold'},
  
})
