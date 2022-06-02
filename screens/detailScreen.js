import React, { useEffect, useState } from 'react';
import {View,
 SafeAreaView,
 Text,
 StyleSheet,
 FlatList, 
 Image, 
 Dimensions,
 ScrollView,
 ImageBackground}from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from "../assets/colors/colors";
import stylesheet from '../styles/stylesheet';
import categories from '../components/data';
import items from '../components/foodItems';
import Icon from 'react-native-vector-icons/Ionicons';
import {Divider} from "react-native-elements";
import StepperInput from '../components/stepperInput';
import CartScreen from './cartScreen';

import {connect} from 'react-redux';
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Data from "../components/foodItems";
import { cartTotalSelector } from "../redux/store/selectors";


const DetailScreen = ({navigation, route}) => {
    const total = useSelector(cartTotalSelector);
    const item = route.params;
    const [qty, setQty] = React.useState(1)

    const dispatch = useDispatch();
    const [Data, setData] = useState();

    useEffect(() => {
      // console.log("cart", cart);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    }, []);

    console.log(Data);

    

          return(
            <SafeAreaView style = {stylesheet.detailContainer}>
              <View>
                 <ScrollView>
                          <View style = {stylesheet.detailsHeader}>
                              <TouchableOpacity style ={stylesheet.backStyle2}
                                    onPress={() => {
                                        navigation.goBack();
                                      }}
                                    >
                                  
                                    <Icon name = "chevron-back-sharp" size = {24}/>
                                      
                              </TouchableOpacity>
                                  <TouchableOpacity style ={stylesheet.cartStyle}
                                          onPress={() => {
                                              navigation.navigate("CartScreen");
                                            }}
                                          >
                                          <Icon name = "cart-outline" size = {24}/>
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


                          <View style ={stylesheet.secondaryColorResize}>
                                
                                        <View>
                                            <Image
                                                source = {item.image}
                                                style = {stylesheet.imageContainer}
                                            />
                                        </View>
                          </View> 
                                  {/*Image Name and Description */}

                          
                          <View>
                                        <View style = {{marginBottom: 20}}>
                                                <Text style ={{fontSize: 30, marginTop: 90, paddingLeft:20, paddingBottom:20, marginBottom: -40}}>
                                                {item.name}
                                                </Text>
                                        </View>
                                        <View style = {{justifyContent: 'space-between', padding: 20, flexDirection:'row' }}>
                                                <Text style = {{color: COLORS.grey, fontWeight:'bold'}}>Quantity </Text><Text style ={{marginLeft:10, fontWeight:'bold'}}>1</Text>
                                                
                                              {/* Stepper Input 
                                                <StepperInput
                                                  value = {qty}
                                                  onAdd= {() => setQty(qty+1)}
                                                  onSubtract= {() => {
                                                    if (qty > 1) {
                                                      setQty(qty-1)
                                                    }
                                                  }}
                                                /> */}
                                        </View>

                                        <View style = {{ marginTop:-10, marginLeft:20}}>
                                                <Text style = {{color: COLORS.grey, fontWeight:'bold', paddingBottom: 10}}>
                                                Description : 
                                                <Text style = {{color: COLORS.black}} > {item.description}</Text>
                                                </Text>
                                        </View>
                            </View>
                            <View>
                                      <Divider/>
                            </View>
                            <View style = {{paddingLeft: 20, paddingRight:20, }}>
                                      <Text style = {{color: COLORS.grey}}>Price</Text>
                                      <View style = {{justifyContent: "space-between", flexDirection:'row', marginBottom: '100%'}}>
                                              <Text style = {stylesheet.priceTagStyle}>GH₵{item.price}</Text>
                                            
                                            {/* Add to Cart button */}
                                              <View>
                                                <View style = {stylesheet.addCartButton}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                        dispatch(addToCart(item));
                                                      }}
                                                        >
                                                          <Text style = {{color: COLORS.cadmiumGreen, fontWeight:'bold' }}>Add to Cart</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                              </View>
                                      </View>       
                            </View>        
                  </ScrollView>  
              </View>    
            
            </SafeAreaView> 

          );
};
export default  (DetailScreen)