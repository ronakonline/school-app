
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {HomeScreen} from "../screens/HomeScreen";
import {NoticeScreen} from "../screens/NoticeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { OtpScreen } from "../screens/OtpScreen";

const Stack = createStackNavigator();



const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Notice" component={NoticeScreen} />
    </Stack.Navigator>
  );
}

const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Otp" component={OtpScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}


export { MainStackNavigator,AuthenticationStackNavigator  };