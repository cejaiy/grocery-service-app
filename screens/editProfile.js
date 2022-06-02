import React from 'react';
import{
  Animated,
  StyleSheet,
  SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
    ImageBackground,
    ToastAndroid,
    Alert,
   
} from 'react-native';
import{
  Title,
  Caption,
  Avatar,
  Button,
} from 'react-native-paper';

import COLORS from "../assets/colors/colors";
import stylesheet from '../styles/stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
{/*import {SwipeListView} from 'react-native-swipe-list-view';*/}
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Divider} from "react-native-elements";
import {launchImageLibrary} from "react-native-image-picker";

import categories from '../components/data';
import items from '../components/foodItems';


const EditProfileScreen = ({navigation}) => {

  const [Picture, SetPicture] = React.useState('');

  //Toast message
  const setToastMsg = msg =>{
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  
  const uploadImage = () =>{
      let options = {
        mediaType: 'photo',
        quality: 1,
        includeBase64:true,
      };

      launchImageLibrary(options, response => {
          if (response.didCancel){
            setToastMsg('Image Selection Cancelled');
          }else if (response.errorCode == 'permission') {
            setToastMsg('Permission not satisfied');
          }else if (response.errorCode == 'permission') {
            setToastMsg(response.errorMessage);
          }else if (response.assets[0].fileSize > 2097152){
            Alert.alert(
              'Maximum Image Size is exceeded',
              'please choose an image under 2MB',
              [{text: 'OK'}]
            );
          } else {
            SetPicture(response.assets[0].base64)
          }
      });
  };
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
                  <Text style = {{paddingTop: 30, paddingRight: 115, fontSize: 22, fontWeight: 'bold'}}>Edit Profile</Text>
           </View>

           <View style = {stylesheet.userInfo}>
                <View style = {{justifyContent:'center', alignItems:'center' }}>
                  <ImageBackground source ={require('../assets/icons/user.png') + Picture} size = {80} style = {{backgroundColor:"#f2f5f3", height:100, width: 100}}>
                  <View style={{flex:1, marginTop:70, marginLeft:67}}>
                    <TouchableOpacity onPress ={() => uploadImage()} >
                      <Icon name = "camera" size={34} color ='grey' style = {{
                          alignItems:'center',
                          borderwidth:1,
                          justifyContent:'center',
                          borderRadius:10,
                          opacity:0.7,

                      }}/>
                    </TouchableOpacity>
                  </View>

                  </ImageBackground>
                    <View style= {stylesheet.cardInput}>
                      <View style = {{paddingRight:90}}>
                          <TextInput
                          placeholder = "First name"
                          autoCorrect={false}
                          />
                  </View>
                  </View>
                  
                   <View style= {stylesheet.cardInput}>
                      <View style = {{paddingRight:90}}>
                          <TextInput
                          placeholder = "Last name"
                          autoCorrect={false}
                          />
                      </View>
                  </View>
                   <View style= {stylesheet.cardInput}>
                      <View style = {{paddingRight:90}}>
                          <TextInput
                          placeholder = "Phone number"
                          keyboardType='number-pad'
                          autoCorrect={false}
                          />
                      </View>
                  </View>
                  <TouchableOpacity style ={stylesheet.addbutton}>
                      <Text style = {{fontWeight:'bold'}}>Change</Text>
                  </TouchableOpacity>
             
              
              </View>
            
           </View>
      
    </SafeAreaView>
     
  )
  
  }
export default EditProfileScreen