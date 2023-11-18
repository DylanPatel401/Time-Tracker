import { TouchableOpacity, Text, View, StyleSheet, TouchableHighlight, StatusBar, ScrollView} from 'react-native';
import React, { useState } from 'react';

import {normalStyle, barHeight} from '../styles/style';
import { CustomHeader, SmallHeader} from '../styles/custom';

import { fetchData } from '../functions/api';

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

  const Activity = () => {
    const activityList = ["Homework", "Workout", "Shopping", "Reading"];

    let activityElement = [];
  
    activityList.forEach((act, index) => {
        activityElement.push(
            <TouchableHighlight onPress={() => {console.log("Activity Press")}} key={index}               underlayColor="transparent"            >
                <View style={[normalStyle.button, {margin: 5}]} key={index}>
                    <Text style={normalStyle.text} key={index}>
                        {act}
                    </Text>            
                </View>
            </TouchableHighlight>
        );
    });

    return(
      <View style={{flex:3, margin:barHeight/2}}>
        <View style={{flex:1}}>
          <SmallHeader
            title={'Activity'}
            icon_name={'plussquare'}
            onPress={() => {navigation.navigate('NewActivityScreen')}}
          />          
        </View>

        <View style={{flex:2}}>
          <ScrollView style={normalStyle.card} horizontal={true}>
            {activityElement}            
          </ScrollView>          
        </View>


      </View>

    );
  }

  const Tasks = () => {
    const tasksList = ["Webwork", "Chest & Tri", "Get Milk"];

    let tasksElement = [];
  
    tasksList.forEach((act, index) => {
      tasksElement.push(
            <TouchableHighlight 
              onPress={() => {console.log('Task Press')}} 
              key={index}             
              underlayColor="transparent"
            >
                <View style={[normalStyle.button, {margin: 5}]} key={index}>
                    <Text style={normalStyle.text} key={index}>
                        {act}
                    </Text>            
                </View>
            </TouchableHighlight>
        );
    });

    return(
      <View style={{flex:3,margin:barHeight/2}}>
        <View style={{flex:1}}>
          <SmallHeader
            title={'Tasks'}
            icon_name={'plussquare'}
            onPress={() => {navigation.navigate('NewTaskScreen')}}
          />          
        </View>

        <View style={{flex:2}}>
          <ScrollView style={normalStyle.card} horizontal={true}>
            {tasksElement}            
          </ScrollView>          
        </View>


      </View>

    );
  }

  return (
    
    <View style={{ flex:1 }}>
      <StatusBar hidden />

      <CustomHeader 
        title = "November" 
        icon_name = "calendar"
        onPress = {() => {console.log("click on calander")}}
      />        

      <DaysRow/>

      <Activity/>
      <Tasks/>


    </View>
  );
}
  
const stylesDay = StyleSheet.create({
  container: { borderWidth:3, flexDirection: 'row', alignItems: 'center', backgroundColor: 'royalblue', margin:barHeight/2, borderRadius: 25},
  dayContainer: { flex:1,alignItems: 'center', justifyContent: 'space-between', paddingTop: barHeight, paddingBottom: barHeight},
  day: {fontSize:20, color:'white', color:'#a9a9a9', fontWeight: 'bold'},
  num: {fontSize:15, color: 'white', marginTop:barHeight, color:'#a9a9a9', fontWeight: 'bold'},
  
})
