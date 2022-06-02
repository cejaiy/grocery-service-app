import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
//import Ionicon
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../redux/store/selectors";
import stylesheet from '../styles/stylesheet';

const Header = (props) => {
  const total = useSelector(cartTotalSelector);
  return (
    <View>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: 'red',
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={props.onPressMenu}
          >
            
            <View>
              <Ionicons name={props.headerIcon} size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      

        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={props.onPressCart}
        >
          <Ionicons name="cart-outline" size={30} color="black" />
          <View
            style={{
              flexDirection: "column",
              height: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 12 }}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});