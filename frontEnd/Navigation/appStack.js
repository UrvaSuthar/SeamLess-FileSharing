import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";

export default function appStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}


