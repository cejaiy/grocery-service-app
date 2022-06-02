import React from 'react';
import{
    View,
    Text,
} from 'react-native';
import COLORS from "../assets/colors/colors";
import stylesheet from '../styles/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';


const StepperInput = ({
      value = 0,
      onAdd,
      onSubtract
}) => {
      return(
          <View style = {{flexDirection: 'row'}} >
              <TouchableOpacity onPress = {onSubtract}>
                    <View style = {stylesheet.alterCartButtom}>
                          <Text>-</Text>
                    </View>
              </TouchableOpacity>
                    <View style ={{marginLeft:10, marginRight:10}}>
                          <Text style = {{fontWeight: 'bold'}}>{value}</Text>
                    </View>
                <TouchableOpacity onPress = {onAdd}>
                    <View style = {stylesheet.alterCartButtom}>
                          <Text>+</Text>
                    </View>
              </TouchableOpacity>
          </View>
      )
  }

export default StepperInput;