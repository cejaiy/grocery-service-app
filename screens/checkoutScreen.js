import React, {useState}from 'react';
import {CheckBox} from 'react-native-elements';
import{
  Animated,
  StyleSheet,
  SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import stylesheet from '../styles/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from "../assets/colors/colors";

const CheckoutScreen = ({navigation}) => {
    const [cash, setCash] = useState(false);
    const [momo, setMomo] = useState(false);
    const [paypal, setPaypal] = useState(false);
    const [visa, setVisa] = useState(false);

    const payCash = () => {
        setCash(true);
        setMomo(false);
        setPaypal(false);
        setVisa(false);
    }
    const payMomo = () => {
        setCash(false);
        setMomo(true);
        setPaypal(false);
        setVisa(false);
    }
    const payPaypal = () => {
        setCash(false);
        setMomo(false);
        setPaypal(true);
        setVisa(false);
    }
    const payVisa = () => {
        setCash(false);
        setMomo(false);
        setPaypal(false);
        setVisa(true);
    }
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
           
          <View style = {stylesheet.userInfo}>
            <Text style = {{ paddingRight: 200, fontSize: 15, fontWeight: 'bold'}}>Payment Method</Text>
              <View style = {{marginRight: 100}}>
                <CheckBox
                    title = "Cash On Delivery"
                    checkedIcon = "dot-circle-o"
                    uncheckedIcon = "circle-o"
                    checked={cash}
                    onPress={payCash}
                    checkedColor = {COLORS.cadmiumGreen} 
                /> 
                <CheckBox
                    title = "Pay with Mobile Money"
                    checkedIcon = "dot-circle-o"
                    uncheckedIcon = "circle-o"
                    checked={momo}
                    onPress={payMomo}
                    checkedColor = {COLORS.cadmiumGreen} 
                />
                <CheckBox
                    title = "Pay With Paypal"
                    checkedIcon = "dot-circle-o"
                    uncheckedIcon = "circle-o"
                    checked={paypal}
                    onPress={payPaypal}
                    checkedColor = {COLORS.cadmiumGreen} 
                />
                <CheckBox
                    title = "Pay with Visa Card"
                    checkedIcon = "dot-circle-o"
                    uncheckedIcon = "circle-o"
                    checked={visa}
                    onPress={payVisa}
                    checkedColor = {COLORS.cadmiumGreen}  
                /> 
              </View>    
                <View style = {{paddingTop:300}}>  
                  <TouchableOpacity style ={stylesheet.addCartButton}>
                      <Text style = {{fontWeight:'bold'}}>Pay Now</Text>
                  </TouchableOpacity>
                </View>
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default CheckoutScreen
