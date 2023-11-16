import { SafeAreaView, Text, View, StatusBar, TouchableHighlight, Dimensions, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {normalStyle, barHeight} from '../styles/style';
import { CustomHeader } from '../styles/custom';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


export default function MainScreen({navigation}) {


    return (
      <View style={{ flex:1 }}>

        <CustomHeader 
          title = "Novemeber" 
          icon_name = "calendar"
          onPress = {() => {console.log("click")}}
        />
   
          <TouchableHighlight
            style={normalStyle.button}
            onPress={() => {navigation.navigate('Quick_Start')}}
            underlayColor="transparent" // Change this to the desired underlay color
          >
            <Text style={normalStyle.buttonText}>
                Create Task 
            </Text>
          </TouchableHighlight>          
     
      </View>

    );
  }
  
