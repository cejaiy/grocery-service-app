import React, { useState, useEffect, useRef } from 'react';
import {View,
 SafeAreaView,
 Text,
 StyleSheet,
 FlatList, 
 Image, 
 Dimensions,
 Animated,
 ScrollView,
 ImageBackground}from 'react-native';
import {TextInput, TouchableOpacity, } from 'react-native-gesture-handler';
import COLORS from "../assets/colors/colors";
import {Divider} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";
import Hyperlink from 'react-native-hyperlink'

import stylesheet from '../styles/stylesheet';
import categories from '../components/data';
import items from '../components/foodItems';
import { cartTotalSelector } from "../redux/store/selectors";
import fag from '../assets/icons/fag.png';
import about from '../assets/icons/about.png';
import instagram from '../assets/icons/instagram.png';
import home from '../assets/icons/home-icon.png';
import history from '../assets/icons/history.png';
import card from '../assets/icons/credit-card.png';

import{
  Title,
  Caption,
  Avatar,
} from 'react-native-paper';



export default function Home({navigation}) {
  const total = useSelector(cartTotalSelector);

const [currentTab, setCurrentTab] = useState("Home");
// To get the curretn Status of menu ...
const [showMenu, setShowMenu] = useState(false);



const offsetValue = useRef(new Animated.Value(0)).current;
// Scale Intially must be One...
const scaleValue = useRef(new Animated.Value(1)).current;
const closeButtonOffset = useRef(new Animated.Value(0)).current;

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        navigation.navigate("Welcome");        
      } else  if (title == "My Payments") {
        navigation.navigate("PaymentScreen"); 
      }else  if (title == "My History") {
        navigation.navigate("HistoryScreen"); 
      }else  if (title == "FAQ") {
        navigation.navigate("FaqScreen"); 
      }else  if (title == "About") {
        navigation.navigate("AboutScreen"); 
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? COLORS.secondary : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25, 
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "black" : "black"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const [data, setData] = useState(items) 

 const searchGrocery = (input)=>{
    let item = items 
    let searchData = item.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    });
    setData(searchData)
  } 
  function renderSearch() {
    return(

        <View style = {stylesheet.searchBarStyle}>

            {/*Search Icon*/}
            <Image
                style = {stylesheet.searchIcon}
                source = {require ("../assets/icons/search.png")}
            />
            {/* Text Input */}
            <TextInput
                style = {stylesheet.searchInput}
                placeholder = "search grocery"
                  onChangeText = {(input) => {
                    searchGrocery(input)
                  }}
            />
        </View>
  )}
  
     {/*Category Section*/}
  const CategoryList = () => {
      return (
      <View>  
            <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                {categories.map((item, index) =>(
                    <View key = {index} style = {stylesheet.categoryContainer}>
                      
                            <Text style = {stylesheet.listStyle}>{item.text}</Text>
                    </View>
                  ))}
            </ScrollView>
      </View>
      );
  };

  

  

       {/*Food Items Section*/}
          
  const FoodCard = () => {
      return (
        <View>
          <View style = {{flex: 1,  flexWrap: "wrap", justifyContent: "center", flexDirection: 'row'}}>
                <FlatList
                  contentContainerStyle = {{
                    marginTop: 10,
                    marginBottom: 320,
                    paddingBottom: 350,
                  }}
                  data={data}
                  vertical
                  showsVerticalScrollIndicator={false}
                  keyExtractor = {(item, index) => index.toString()}
                  renderItem = {({item})=>(
                    <View  style = {stylesheet.tileStyle}>
                      <TouchableOpacity
                            onPress={() => {
                              navigation.navigate("DetailScreen", item);
                            }}>
                          <Image
                              source = {item.image} style = {stylesheet.itemStyle} 
                          />
                          <Text style = {stylesheet.itemNameStyle}>
                              {item.name}
                          </Text>
                          <Text style = {stylesheet.priceStyle}>
                            GH₵{item.price}
                          </Text>
                      </TouchableOpacity>    
                    </View>
                  )}
                  numColumns={2}
                />
              
          </View>
          
    </View>  

      );
  };

  return (
    
    <View style={stylesheet.container}>

    <View style={{flex:1, justifyContent: 'flex-end', padding: 15,  paddingLeft: 170,backgroundColor:'#ffff',   }}>
        
        <View style ={{flexDirection:'row', marginTop: 50,}}>
               <Avatar.Image source ={require('../assets/icons/user.png')} size = {70} style = {{backgroundColor:"#f2f5f3"}}/>
          <View>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 20
              }}> Googoba</Text>
              <TouchableOpacity
                onPress={() => {
                            navigation.navigate("UserScreen");
                          }}>
                <Text style={{
                  marginTop: 6,
                  color: 'black'
                }}> View Profile</Text>
              </TouchableOpacity>
          </View>
        </View> 
        
        

        <View style={{ flexGrow: 1, marginTop: 20,  }}>
          {
            // Tab Bar Buttons....
          }
          <Divider width ={1}/>
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "My Payments", card)}
          {TabButton(currentTab, setCurrentTab, "My History", history)}
          {TabButton(currentTab, setCurrentTab, "FAQ", fag)}
          {TabButton(currentTab, setCurrentTab, "About", about)}

          <View>
              <Hyperlink
                linkDefault ={true} 
                linkStyle = {{color:'black', fontSize: 14, fontWeight:'bold'}}
                linkText = {(url)=> url === 'https://www.instagram.com' ? 'Our Social Media': url}
              >
                <View style = {{flexDirection:'row', margin:15}}>
                  <Image source = {instagram}
                      style = {{height:25, width:25}}
                  /> 
                  <Text> https://www.instagram.com</Text>
                </View>
              </Hyperlink>
          </View> 


        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut")}
        </View>
      </View>
        {
          
        }
        <Animated.View style={{
        flexGrow: 1,
        backgroundColor: COLORS.secondary,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          


        <View style = {stylesheet.subContainer}>
            <View style = {stylesheet.header}>
                <View >
                    <Text style = {stylesheet.welcomeStyle}>Welcome</Text>
                    <Text>Googoba</Text>
                </View>
                <Image
                    source = {require('../assets/icons/logo1.png')}
                          style= {stylesheet.logoResize}
                />
            </View>
            <View>
              {renderSearch()}
                    <ScrollView vertical showsVerticalScrollIndicator = {false}>
                      <CategoryList /> 
                      <FoodCard />
                    </ScrollView>  
            </View>
            
           
         
        </View>

        </Animated.View>
        

        <View style = {stylesheet.bottomWrap}>
            <Divider width = {1}/>

            {/* Bottom Tab Navigator */}
          <View style= {stylesheet.bottombar}>
             <TouchableOpacity
                  onPress={() => {
                  navigation.navigate("Home");
                }}>
              <Icon name = "home" size={30} style = {{ color : COLORS.cadmiumGreen}}/></TouchableOpacity>
              <TouchableOpacity
                  style ={{flexDirection:'row'}}
                  onPress={() => {
                      navigation.navigate("CartScreen");
                    }}>
              <Icon name = "cart-outline" size={30}/>
                  <Text style={{ color: "black", fontSize: 12,  }}>{total}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                  navigation.navigate("UserScreen");
                }}>
              <Icon name = "person-outline" size={30}/></TouchableOpacity>
               <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 1.0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : -250,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? 0 : -1,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Icon name = "menu-outline" size={30}/>

          </TouchableOpacity>
              
          </View>
       </View>
      </Animated.View>
       
 </View>
 
  );
}
{
 //
}




  