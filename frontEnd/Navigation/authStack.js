import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "../Screens/LogIn";
import Register from "../Screens/Register";

const authStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default authStack;
