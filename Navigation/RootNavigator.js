import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaqScreen from '../screens/FaqScreen'

import Tabs from "../Navigation/bottomTab"
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import Home from '../screens/home';
import DetailScreen from '../screens/detailScreen';
import CartScreen from '../screens/cartScreen';
import BottomTabs from './bottomTab';
import UserScreen from '../screens/userScreen';
import EditProfileScreen from '../screens/editProfile';
import AddressScreen from '../screens/address';
import CardScreen from '../screens/addCard';
import PaymentScreen from '../screens/payment';
import HistoryScreen from '../screens/history';
import CheckoutScreen from '../screens/checkoutScreen'


 

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName = {'Home'}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="FaqScreen" component={FaqScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name = "BottomTabs" component = {BottomTabs}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name = "UserScreen" component = {UserScreen}/>
        <Stack.Screen name = "EditProfileScreen" component = {EditProfileScreen}/>
        <Stack.Screen name = "AddressScreen" component = {AddressScreen}/>
        <Stack.Screen name = "CardScreen" component = {CardScreen}/>
        <Stack.Screen name = "PaymentScreen" component = {PaymentScreen}/>
        <Stack.Screen name = "HistoryScreen" component = {HistoryScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
  
}