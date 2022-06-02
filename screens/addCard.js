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
{/*import {SwipeListView} from 'react-native-swipe-list-view';*/}
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Divider} from "react-native-elements";

import categories from '../components/data';
import items from '../components/foodItems';


const CardScreen = ({navigation}) => {

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
                  <Text style = {{paddingTop: 30, paddingRight: 115, fontSize: 22, fontWeight: 'bold'}}>New Card</Text>
           </View>

           <View style = {stylesheet.userInfo}>
                             
                  <View style= {stylesheet.cardInput}>
                      <Icon name = "card" size={24}/>
                      <View style = {{paddingRight:90}}>
                          <TextInput
                          placeholder = "Card Number"
                          keyboardType='number-pad'
                          autoCorrect={false}
                          />
                      </View>
                  </View>
                  <View style = {{flexDirection:'row', justifyContent: 'space-between'}}>
                      <View style= {stylesheet.cardInput2}>
                          <TextInput
                          placeholder = "Expiry Date"
                          keyboardType='number-pad'
                          autoCorrect={false}
                          />
                  </View>
                  <View style= {stylesheet.cardInput2}>
                     
                          <TextInput
                          placeholder = "Security Code"
                          keyboardType='number-pad'
                          autoCorrect={false}
                          />
                  </View>
                  </View>
                  <TouchableOpacity style ={stylesheet.addbutton}>
                      <Text style = {{fontWeight:'bold'}}>Add Card</Text>
                  </TouchableOpacity>
             
              
              
            
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default CardScreen

{/*
    import React, {Component} from 'react';
import {
  View,
  UIManager,
  StyleSheet,
} from 'react-native';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

UIManager.setLayoutAnimationEnabledExperimental(true);

import{ CreditCardInput } from 'react-native-credit-card-input';

export default class App extends Component {
  _onFocus = field => console.log('focusing', field)

  _onChange = formData => console.log(JSON.stringify(formData, null , ' '))
  render() {
    return (
      <View style={styles.container}>
        <CreditCardInput
          autoFocus
          requireName={true}
          requireCVC={true}
          requirePostalCode={true}
          validColor="black"
          invalidColor="red"
          placeholderColor="darkgray"
          labelStyle={{color: 'black', fontSize: 12}}
          inputStyle={{color: 'black', fontSize: 16}}
          onFocus={this._onFocus}
          onChange={this._onChange}
        />
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
});

*/} 
