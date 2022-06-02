import React from 'react';
import{
  Animated,
  StyleSheet,
  SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
} from 'react-native';
import COLORS from "../assets/colors/colors";
import stylesheet from '../styles/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Divider} from "react-native-elements";



const AddressScreen = ({navigation}) => {

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
                  <Text style = {{paddingTop: 30, paddingRight: 115, fontSize: 22, fontWeight: 'bold'}}>Address</Text>
           </View>

           <View style = {stylesheet.userInfo}>
             
                  <View style= {stylesheet.cardInput}>
                      <Icon name = "search" size={24}/>
                      <View style = {{paddingRight:90}}>
                          <TextInput
                          placeholder = "Search location"
                          />
                      </View>
                  </View>
                  <TouchableOpacity style ={stylesheet.addbutton}>
                      <Text style = {{fontWeight:'bold'}}>Add Address</Text>
                  </TouchableOpacity>
             
              
              
            
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default AddressScreen