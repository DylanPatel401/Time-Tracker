import { Button, TextInput, Text, View, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React, { Component, useState, useEffect } from 'react';

import {normalStyle, barHeight} from '../styles/style';
import { CustomHeader } from '../styles/custom';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
 
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default function NewTaskScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const TimeComponent = () => {
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date().toLocaleTimeString());
  
    const handleConfirm = (time) => {
      setSelectedTime(time.toLocaleTimeString());
      setTimePickerVisibility(false);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={() => setTimePickerVisibility(true)}>
          <View>
            <Text style={[normalStyle.buttonText, { borderBottomWidth: 3 }]}>
              {selectedTime}
            </Text>
          </View>
        </TouchableOpacity>
  
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={() => setTimePickerVisibility(false)}
        />
      </View>
    );
  };
  
  const DateComponent = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' }));
    const handleConfirm = (date) => {
      setSelectedDate(
        date.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        })
      );
      setDatePickerVisibility(false);
    };
  
    return (
      <View>
        <TouchableOpacity
          onPress={() => setDatePickerVisibility(true)}
        >
          <View>
            <Text style={[normalStyle.buttonText, {borderBottomWidth: 3}]}>
              {selectedDate}
            </Text>
          </View>
        </TouchableOpacity>       
 
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={()=> setDatePickerVisibility(false)}
        />
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center', padding: barHeight/2}}
        behavior="padding"
        keyboardVerticalOffset={100}
      >

        <CustomHeader 
          title = "New Task" 
          icon_name = "calendar"
          onPress = {() => {console.log("Does something?")}}
        />
   

        <View style={{flex:6}}>
          <View style={{flex:1}}>
            <Text style={normalStyle.mediumTitle}>
              Title:
            </Text>

            <TextInput
              style={normalStyle.mediumText}
              placeholder='Type here..'
              value={title}
              onChangeText={(txt) => {setTitle(txt)}}        
            />
          </View>

          <View style={{flex:1}}>
            <Text style={normalStyle.mediumTitle}>
              Description:
            </Text>

            <TextInput
              style={normalStyle.mediumText}
              value={description}
              placeholder='Type here..'
              onChangeText={(txt) => {setDescription(txt)}}          
            />
          </View>

          <View style={{flex:1}}>
            <Text style={normalStyle.mediumTitle}>
              Date:
            </Text>

            <DateComponent/>
          </View>

          <View style={{flex:1}}>
            <Text style={normalStyle.mediumTitle}>
              Time:  
            </Text>

            <TimeComponent/>

          </View>
      </View>

      <View style={{flex:1}}>
        <TouchableHighlight
            style={normalStyle.button}
            onPress={() => { navigation.navigate('Home')}}
            underlayColor="transparent" // Change this to the desired underlay color        
        >
          <Text style={normalStyle.buttonText}>
            Create Task
          </Text>
        </TouchableHighlight>
      </View>
    
      </KeyboardAvoidingView>
    </ScrollView>
    );
  }
  