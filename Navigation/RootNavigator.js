import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaqScreen from '../screens/FaqScreen'


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
import CheckoutScreen from '../screens/checkoutScreen';
import AboutScreen from '../screens/aboutScreen';


 

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
        <Stack.Screen name = "AboutScreen" component = {AboutScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
  
}