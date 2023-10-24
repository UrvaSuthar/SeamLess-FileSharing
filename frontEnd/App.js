import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./Navigation/authStack";
import AppStack from "./Navigation/appStack";

const App = () => {
  const Stack = createStackNavigator();
  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default App;
