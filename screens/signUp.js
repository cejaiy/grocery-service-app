import React, { useState } from 'react';
import {
 View, 
 SafeAreaView, 
 Text, 
 StyleSheet,
 FlatList, 
 Image, 
 Dimensions,
 ImageBackground,
}from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from "../assets/colors/colors";



import stylesheet from '../styles/stylesheet';

const SignUp = ({navigation}) => {

    
  

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
        <View style = {stylesheet.centerContent}>
            <View style ={{marginTop: 100}}>
              <View style = {stylesheet.centerContent}>
                    <Image
                      style ={stylesheet.userImage1}
                      source = {require ("../assets/icons/image-icon.png")}
                    />
              </View>  

              <View style={stylesheet.spaceOut}>
                <View style={stylesheet.centerContent}>
                    <TextInput style={stylesheet.textInput} 
                      placeholder = "First Name:"
                      placeholderTextColor = {COLORS.cadmiumGreen}/>
                </View>
              </View>

              <View style={stylesheet.spaceOut}>
                <View style={stylesheet.centerContent}>
                    <TextInput style={stylesheet.textInput} 
                      placeholder = "Last Name:"
                      placeholderTextColor = {COLORS.cadmiumGreen}/>
                </View>
              </View>
              
              <View style={stylesheet.spaceOut}>
                <View style={stylesheet.centerContent}>
                    <TextInput style={stylesheet.textInput} 
                      placeholder = "Phone Number:"
                      placeholderTextColor = {COLORS.cadmiumGreen}/>
                </View>
              </View>

              <View style={stylesheet.spaceOut}>
                <View style={stylesheet.centerContent}>
                    <TextInput style={stylesheet.textInput} 
                      placeholder = "Email:"
                      placeholderTextColor = {COLORS.cadmiumGreen}/>
                </View>
              </View>
                              
              <View style={stylesheet.spaceOut}>

              <View style={stylesheet.centerContent}> 
                  <TextInput style={stylesheet.textInput}
                    placeholder = "Password:"
                    placeholderTextColor = {COLORS.cadmiumGreen}
                    secureTextEntry
                    />
              </View> 
              </View>
            </View>             
              <View style = {stylesheet.loginButton}>
                  <TouchableOpacity>
                    <Text> Sign Up </Text>
                  </TouchableOpacity>
              </View>
           

              <Text style = {{fontWeight: "bold", marginTop: 7}}> OR </Text>

              <View style = {{flexDirection: "row", marginTop: 10}}>
                <TouchableOpacity>
                  <Image
                      style = {stylesheet.iconStyle}
                      source = {require ("../assets/images/google.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                      style = {stylesheet.iconStyle}
                      source = {require ("../assets/icons/apple.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                      style = {stylesheet.iconStyle}
                      source = {require ("../assets/icons/facebook.png")}
                    />
                </TouchableOpacity>
              </View>

        </View>     

      </ImageBackground>
    </SafeAreaView>
  );
};


export default SignUp;