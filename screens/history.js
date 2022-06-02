import React from 'react';
import{
  Animated,
  StyleSheet,
  SafeAreaView,
    View,
    Text,
    Image,
} from 'react-native';
import COLORS from "../assets/colors/colors";
import stylesheet from '../styles/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
{/*import {SwipeListView} from 'react-native-swipe-list-view';*/}
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Divider} from "react-native-elements";

import categories from '../components/data';
import items from '../components/foodItems';


const HistoryScreen = ({navigation}) => {

  return (
    <SafeAreaView style = {stylesheet.cartContainer}>
           <View style = {stylesheet.cartHeader}>
                  <TouchableOpacity style ={stylesheet.backStyle2}
                        onPress={() => {
                            navigation.goBack();
                          }}
                        >
                      
                        <Icon name = "chevron-back-sharp" size = {24}/>
                          
                  </TouchableOpacity>
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default HistoryScreen