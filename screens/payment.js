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



const PaymentScreen = ({navigation}) => {

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
                  <Text style = {{paddingTop: 30, paddingRight: 115, fontSize: 22, fontWeight: 'bold'}}>Payment</Text>
           </View>

           <View style = {stylesheet.userInfo}>
              <View style ={{flexDirection: 'row', marginRight: 220}}>
                  <Image style = {{height: 30, width:35}} source = {require('../assets/icons/money.png')}/>
                  <Text style = {{marginLeft:10, paddingTop:5,fontWeight:'bold' }}>Cash</Text>
              </View>
              <TouchableOpacity
              onPress = {() => {navigation.navigate("CardScreen")}}>
                  <Divider width = {1}/>
                  <View style = {stylesheet.paymentInput}>
                      <Icon name = "add" size={24}/>
                      <Text> Add debit/credit card </Text>
                      <Icon name = "chevron-forward-sharp" size={24}/>
                  </View>
                  <Divider width = {1}/>
              </TouchableOpacity>
              
            
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default PaymentScreen