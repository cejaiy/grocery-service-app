import{StyleSheet} from "react-native";
import COLORS from "../assets/colors/colors";

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage:{
    flex: 1,
  },
  subContainer:{
    padding: 15,
    backgroundColor: COLORS.secondary,
  },
  wrapper1: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  centerContent:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageResizeStyle:{
    width: 260,
    height: 250,
    marginTop: 160,
  },
  buttonStyle1:{
    marginTop: 20,
    backgroundColor: COLORS.white,
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    justifyContent: "center",
  },
  buttonStyle2:{
    marginTop: 10,
    backgroundColor:COLORS.white,
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    justifyContent: "center",
  },
  iconStyle:{
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  textStyle1:{
    color:'#fafafa',
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: "row",
  },
    textStyle2:{
    color:'#fafafa',
    marginTop: 50,
    flexDirection: "row",
    marginLeft: 150,
  },
  textInput: {
    borderRadius:25,
    backgroundColor: COLORS.secondary,
    width:200,
    height:40,
    paddingLeft:20,
    fontWeight:'bold'
  },
  backStyle: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: COLORS.lightGreen,
    padding: 3,
    marginRight: 295,
    marginLeft: 5,
  },
  backStyle2: {
    
    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 3,
    
  },
  cartStyle: {
    
    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 3,
    marginRight: 5,
    flexDirection:'row',
    
  },
  loginCard: {
    marginTop: 50,
    backgroundColor: COLORS.lightGreen,
    width: 230,
    height: 310,
    borderRadius:30,
    paddingTop:20,
   
  },
  userImage1: {
    height: 100,
    width: 100,
  },
  userImage2: {
    height: 60,
    width: 60,
  },
  userImage3: {
    height: 36,
    width: 36,
  },
  textInputName:{
    color: COLORS.burntOrange,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom:5,
  },
  rightContent: {
    marginLeft:100,
    marginTop:8,
  },
  loginButton: {
    justifyContent: "center",
    marginTop: 10,
    backgroundColor:COLORS.coralPink,
    paddingHorizontal: 5,
    paddingTop: 3,
    borderRadius: 15,
    width: 65,
    height: 30,
    flexDirection: "row"
  },
  spaceOut: {
    paddingTop: 8,
    paddingLeft: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    height: 30,
  },
  header: {
    marginTop: 20,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bottombar: {
    backgroundColor: 'white',
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
    margin: 10,
    paddingBottom: '-300%',   
  },

  bottomWrap: {
      backgroundColor: 'white',
      marginTop: -150,
      marginLeft: -15,
      marginRight: -15,
      paddingBottom: 80,

  },

   detailsHeader: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:30,
    padding: 20,
    backgroundColor: COLORS.secondary,
    spaceOut: 10,
  },
   cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:30,
    padding: 20,
    backgroundColor: COLORS.white
  },
  welcomeStyle:{
    color: COLORS.cadmiumGreen,
    fontSize: 12,
    fontWeight:"bold",

  },
  searchBarStyle:{
    flexDirection: "row",
    marginLeft: 1,
    height: 30,
    backgroundColor: "white",
    marginTop: 30,
    marginHorizontal: 10,
    marginVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchIcon:{
    height: 20,
    width: 20,
    marginLeft: 9,
    marginTop: 5,
    tintColor: 'grey',
  },
  searchInput:{
    flex: 1,
    marginLeft: 7,

  },
  signUpStyle:{
    color: COLORS.cadmiumGreen,
    fontWeight: "bold",
  },
  tileStyle:{
    height: 162,
    width: '45%',
    borderRadius: 20,
    backgroundColor: "white",
    margin: 8,

  },
  itemStyle:{
  height: 150,
  width: 110,
  borderRadius: 20,
  marginLeft: 8,
  flexWrap: 'wrap',
  marginBottom: -42,
  },
  itemNameStyle:{
    fontWeight: 'bold',
    marginLeft: 10,     
  },
  priceStyle: {
    marginLeft:10,
    color: COLORS.cadmiumGreen,
    fontWeight: 'bold',  
  },
  categoryContainer: {
    marginTop: 25,
  },
  groceryListStyle:{
    fontSize: 16,
    flexDirection: "row",
   
  },
  listStyle:{
    marginRight: 10,
    fontWeight: 'bold',
  },
  bottomTabStyle:{
    width: "100%",
    
    color: "grey",
  },
  logoResize:{
      width: '35%',
      height: 67, 
      marginTop: -20,   
  },
  detailContainer:{
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
    position: 'absolute',
  
  },
  imageContainer:{
    resizeMode : "contain",
    paddingTop: "60%",
    marginBottom: -180,
    marginTop: -30,
   
  },
  secondaryColorResize:{
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: 230,
    borderBottomRightRadius: 230,
    marginLeft: -50,
    marginRight: -50,
    marginBottom: -80,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  priceTagStyle:{
    color: COLORS.cadmiumGreen,
    fontSize: 35,
    fontWeight: 'bold', 
  },
  addCartButton:{
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor:COLORS.secondary,
    paddingHorizontal: 5,
    paddingTop: 3,
    borderRadius: 10,
    width: 100,
    height: 45,
    flexDirection: "row"
  },
  decreaseCartButtom:{
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    width: 20,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
},
increaseCartButtom:{
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    width: 20,
    backgroundColor: COLORS.cadmiumGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
},
logoContainer:{
    padding: 50,
    
},
cartContainer:{
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
},
userInfo:{
  justifyContent: 'center',
  alignItems:'center',
  margin: 10,
},
displayName:{
  fontSize: 25,
  fontWeight: 'bold',
},
textResize:{
  justifyContent: 'center',
  alignItems: 'center',
},
textInput2:{
  borderRadius:10,
  backgroundColor: COLORS.secondary,
  width:250,
  height:40,
  paddingLeft:20,
  fontWeight:'bold',
  marginTop: 20,
},
textInput3:{
  borderRadius:10,
  backgroundColor: "#f2f5f3",
  width:310,
  height:50,
  paddingLeft:20,
  fontWeight:'bold',
  marginTop: 20,
  flexDirection: 'row',
  alignItems: "center",
  
},
paymentInput:{
  width:310,
  height:40,
  paddingLeft:20,
  fontWeight:'bold',
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: "space-between",
},
cardInput:{
  borderRadius:10,
  backgroundColor: "#f2f5f3",
  width:310,
  height:55,
  paddingLeft:20,
  fontWeight:'bold',
  marginTop: 20,

  alignItems:'center',
  flexDirection: 'row',
  justifyContent: "space-between",
},
cardInput2:{
  borderRadius:10,
  backgroundColor: "#f2f5f3",
  width: 150,
  height:55,
  paddingLeft:20,
  fontWeight:'bold',
  margin: 10,
  marginTop: 30,
  alignItems:'center',
  flexDirection: 'row',
  justifyContent: "center",
},
addbutton:{
    width:150,
    height:40,
    backgroundColor: "#f2f5f3",
    marginTop:200,
    alignItems: "center",
    borderRadius:10,
    justifyContent: "center",
},
 userImage:{
   borderRadius: 100,
   height:80,
   width:120,
 },
 storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f2f5f3",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "30%",
    height: 115,
    borderRadius: 5,
    backgroundColor: "#ffff",
    marginTop: 10,
    
  },
  storeItemImage: {
    marginTop:20,
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    marginTop:23,
    marginBottom:-20,
    fontSize: 14,
    color: "black",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
    addToCart: {
    fontSize: 16,
    fontWeight: "bold",
    
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
   paddingTop:20,
   marginLeft:260,
   flexDirection: "row",
  },
  cartFooter: {
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    paddingTop: 507,
    backgroundColor: 'white',
  },


});

export default stylesheet