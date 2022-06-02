import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import stylesheet from '../styles/stylesheet';


const BottomTabs = ({navigation}) =>
{
  return (
   <View style= {stylesheet.bottombar}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CartScreen");
        }}>
         
      <Icon name = "home-outline" size ={24}/></TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
          navigation.navigate("");
        }}
      ><Icon name = "cart-outline" size={24}/></TouchableOpacity>
      <TouchableOpacity><Icon name = "person-outline" size={24}/></TouchableOpacity>
    </View>
)}

export default BottomTabs;