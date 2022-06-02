import React, { useState } from 'react';
import {View, SafeAreaView, Text, StyleSheet,FlatList, Image, Dimensions,ImageBackground}from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from "../assets/colors/colors";
import Icon from 'react-native-vector-icons/FontAwesome';



import stylesheet from '../styles/stylesheet';

const Welcome = ({navigation}) => {

    
  return (
    <SafeAreaView style={stylesheet.container}>
          <ImageBackground  
              source= {require("../assets/images/back.jpg")} 
              resizeMode='cover' 
              style= {stylesheet.backgroundImage}>

              <View style = {stylesheet.centerContent}>
                  <View>
                
                    <Image
                      style = {stylesheet.imageResizeStyle}
                      source = {require("../assets/images/groc.png")}
                      
                    />
                  </View>
                <TouchableOpacity style ={stylesheet.buttonStyle1}
                onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Icon name = "envelope" size = {17}/>
                  <Text> Login with Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={stylesheet.buttonStyle2}
                onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Image
                  style = {stylesheet.iconStyle}
                  source = {require("../assets/images/google.png")}
                  />
                  <Text> Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={stylesheet.buttonStyle2}
                onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                <Image
                  style = {stylesheet.iconStyle}
                  source = {require("../assets/icons/apple.png")}
                  />
                <Text> Login with Apple </Text>
                </TouchableOpacity>
                
                <View style = { stylesheet.textStyle1}>
                  <Text> Not a member? </Text>
                    <TouchableOpacity
                        onPress={() => {
                        navigation.navigate("SignUp");
                      }}>
                        <Text style = {stylesheet.signUpStyle}>
                          SignUp
                        </Text>
                    </TouchableOpacity>
                </View>    

              </View>

          </ImageBackground>
    </SafeAreaView>
  );
};


export default Welcome;
