import React, { useState } from 'react';
import {View,  
 SafeAreaView, 
 Text, 
 StyleSheet,
 FlatList, 
 Image, 
 Dimensions,
 ImageBackground}from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from "../assets/colors/colors";



import stylesheet from '../styles/stylesheet';

const Login = ({navigation}) => {

  
  return (
    <SafeAreaView style={stylesheet.container}>
      <ImageBackground  
      source= {require("../assets/images/back2.jpg")} 
      resizeMode='cover' 
      style= {stylesheet.backgroundImage}>
      
            <TouchableOpacity style ={stylesheet.backStyle}
              onPress={() => {
                  navigation.navigate("Welcome");
                }}
              >
              <Icon name = "chevron-left" size = {24}/>
                
            </TouchableOpacity>

            <View style = {stylesheet.wrapper1}>
              <View style = {stylesheet.loginCard}>
                  <View style = {stylesheet.centerContent}>
                    <Image
                      style ={stylesheet.userImage1}
                      source = {require ("../assets/icons/image-icon.png")}
                    />
                  </View>  
                  <Text style={stylesheet.textInputName} >
                  Email address</Text>
                  <View style={stylesheet.centerContent}>
                      <TextInput style={stylesheet.textInput} 
                        placeholder = "Email"
                        placeholderTextColor = {COLORS.cadmiumGreen}/>
                  </View>
                      
                  <Text style={stylesheet.textInputName}>
                  Password</Text>

                  <View style={stylesheet.centerContent}> 
                    <TextInput style={stylesheet.textInput}
                      placeholder = "Password"
                      placeholderTextColor = {COLORS.cadmiumGreen}
                      secureTextEntry
                      />
                  </View>

                  <View style = {stylesheet.rightContent}>
                    <TouchableOpacity>
                      <Text style = {{color : COLORS.cadmiumGreen, 
                      fontSize: 12}}> Forgot Password? </Text>
                    </TouchableOpacity>
                  </View>  

                </View>

                <View style = {stylesheet.loginButton}>
                  <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Home");
                        }}>
                    <Text> Login </Text>
                  </TouchableOpacity>
                </View>

                <View style = { stylesheet.textStyle2}>
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


export default Login;
