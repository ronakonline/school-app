
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {HomeScreen} from "../screens/HomeScreen";
import {NoticeScreen} from "../screens/NoticeScreen";

const Stack = createStackNavigator();



const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Notice" component={NoticeScreen} />
    </Stack.Navigator>
  );
}


export { MainStackNavigator  };