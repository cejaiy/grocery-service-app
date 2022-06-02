import React from 'react';
import{
  
  SafeAreaView,
    View,
    Text,
    
} from 'react-native';
import COLORS from "../assets/colors/colors";
import stylesheet from '../styles/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Divider} from "react-native-elements";



const FaqScreen = ({navigation}) => {

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
                  <Text style = {{paddingTop: 30, paddingRight: 115, fontSize: 12, fontWeight: 'bold'}}>Frequently asked questions</Text>
           </View>

           <View>
              <Text style = {{margin:20}}> 1.    Q: How can I order </Text>
              <Text style = {{margin:20}}> 2.    Q: Why should I buy online?</Text>
              <Text style = {{margin:20}}> 3.    Q: What information should I input when ordering? </Text> 
              <Text style = {{margin:20}}> 4.    Q: What payment methods can I use? </Text> 
              <Text style = {{margin:20}}> 5.    Q: Is VAT charged? </Text>
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default FaqScreen