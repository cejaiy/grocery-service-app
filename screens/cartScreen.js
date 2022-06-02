import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import{
  Title,
  Caption,
  Avatar
} from 'react-native-paper';
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cartSlice";
import { cartTotalPriceSelector } from "../redux/store/selectors";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import COLORS from "../assets/colors/colors";
import Header from "../components/Header";
import Data from "../components/foodItems";
import { Ionicons } from "@expo/vector-icons";
import stylesheet from '../styles/stylesheet';
import {Divider} from "react-native-elements";

const amount = 0;

// import CartContainer from "../components/CartContainer";

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  const renderStoreItems = ({ item }) => {
    return (
      <View>
      <View style={stylesheet.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={stylesheet.cartItemRemoveButton}
              >
                <Text style ={{color:'red'}}>Remove product</Text>
              </TouchableOpacity>
      </View>
      <View style={stylesheet.storeItem}>
        <View style={stylesheet.storeItemImg}>
          <Image style={stylesheet.storeItemImage} source={ item.image } />
        </View>
        <View style={stylesheet.storeItemInfo}>
          <Text style={stylesheet.storeItemTitle}>{item.name}</Text>
          <View style = {{flexDirection:'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={stylesheet.storeItemTitle}>GH₵{item.price}</Text>
              <Caption style={stylesheet.storeItemPrice}>
                NetPrice: GH₵{item.quantity * item.price}
              </Caption>
            </View>
          <View style={stylesheet.addToCart}>
            <View style={stylesheet.cartItemAmount}>
              <TouchableOpacity
                style = {stylesheet.decreaseCartButtom}
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={stylesheet.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                style = {stylesheet.increaseCartButtom}
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
               <Text>+</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    );
  };

  return (
    
    <View style= {{backgroundColor:'white', paddingTop:25}}>
    <Header headerIcon="ios-chevron-back" onPressMenu={() => {navigation.goBack()}}  />
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text style={stylesheet.storeItemTitle}>My Cart</Text>
            <TouchableOpacity onPress={AlertItem}>
              <Text style={stylesheet.storeItemPrice}>Clear cart</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={stylesheet.cartFooter}>
              <View style={stylesheet.checkout}>
                {cart.length === 0 ? (
                  <Text style={stylesheet.checkoutText}>Your cart is empty</Text>
                ) : (
                  
                  <View style={stylesheet.checkoutFull}>
                   <Divider/>
                      <View style = {{flexDirection: 'row', justifyContent:'space-between', margin: 10}}>
                        <Caption style = {{fontSize:20}}>
                          SubTotal:
                        </Caption>
                        <Title> GH₵{totalPrice}</Title>
                      </View>
                       <View style = {{flexDirection: 'row', justifyContent:'space-between', margin: 10}}>
                        <Caption style = {{fontSize:20}}>
                          Pay:
                        </Caption>
                        <Title> GH₵{totalPrice}</Title>
                      </View>
                    <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                       style = {stylesheet.addCartButton}
                        onPress={() => {
                      navigation.navigate("CheckoutScreen");}}>                
                      <Text style = {{color: COLORS.cadmiumGreen, fontWeight:'bold'}}>Checkout</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
              <View style={{ height: 200 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

 
export default CartScreen;


