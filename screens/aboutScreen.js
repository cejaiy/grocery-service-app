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



const AboutScreen = ({navigation}) => {

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
                  <Text style = {{paddingTop: 30, paddingRight: 115, fontSize: 14, fontWeight: 'bold'}}>About The App</Text>
           </View>

           <View>
              <Text style = {{margin:20, fontSize: 15}}> The app includes virtually all kinds of grocery items and offers the facility of choosing certain filters in order to make searching easier. After searching their items, the users can add to their cart, and continue to search for other items; and then when finishing their list, they can do the final checkout.</Text>
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default AboutScreen