import { TextInput, Text, View, StyleSheet, TouchableHighlight, Dimensions, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {normalStyle, barHeight} from '../styles/style';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


export default function NewActivityScreen({navigation}) {


    return (
      <View style={{ margin: deviceWidth/50, }}>

        <Text style={normalStyle.title}>
            Work In Progress
        </Text>

      </View>

    );
  }
  
