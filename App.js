import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RootNavigator from "./Navigation/RootNavigator";
import DrawerNavigator from "./Navigation/Drawer"

//Redux
import { Provider } from "react-redux";
import store from "./redux/store/index";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});