import React from 'react';
import{
  Animated,
  StyleSheet,
  SafeAreaView,
    View,
    Text,
    Image,
} from 'react-native';
import{
  Title,
  Caption,
  Avatar,
} from 'react-native-paper';
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


const UserScreen = ({navigation}) => {

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
           
           <View style = {{margin:15}}>
           <View style = {{justifyContent:'center', alignItems:'center'}}>
                <Avatar.Image source ={require('../assets/icons/user.png')} size = {80} style = {{backgroundColor:"#f2f5f3"}}/>
                <Title style = {stylesheet.displayName}>Googoba Azonkoli</Title>
                <Caption>googobaazonkoli@hotmail.com</Caption>
                <Caption>0558290936</Caption>
           </View>
                <Divider/>
           </View>
           <View style = {stylesheet.userInfo}>
              <TouchableOpacity
              onPress = {() => {navigation.navigate("EditProfileScreen")}}>
                  <View style= {stylesheet.textInput3}>
                     <Icon name = "book-outline" size={24}/>
                      <Text> Edit Profile </Text>
                  </View>
              </TouchableOpacity>
               <TouchableOpacity
              onPress = {() => {navigation.navigate("AddressScreen")}}>
                  <View style= {stylesheet.textInput3}>
                      <Icon name = "location-outline" size={24}/>
                      <Text> My Address </Text>
                  </View>
              </TouchableOpacity>
               <TouchableOpacity
              onPress = {() => {navigation.navigate("PaymentScreen")}}>
                  <View style= {stylesheet.textInput3}>
                      <Icon name = "card-outline" size={24}/>
                      <Text> My Payments </Text>
                  </View>
              </TouchableOpacity>
               <TouchableOpacity
              onPress = {() => {navigation.navigate("HistoryScreen")}}>
                  <View style= {stylesheet.textInput3}>
                      <Icon name = "timer-outline" size={24}/>
                      <Text> My History </Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => {navigation.navigate("Login")}}>
                  <View style = {{paddingTop: 40}}>
                      <Text style = {{color: 'red'}}>
                        Logout
                      </Text>
                  </View>
              </TouchableOpacity>
            
           </View>
           

        
      
    </SafeAreaView>
     
  )
  
  }
export default UserScreen