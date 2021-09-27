import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from './navigation/TabNavigator';
import {LoginScreen} from './screens/LoginScreen';


export default () => (
  <>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva}  theme={eva.light}>
      <StatusBar backgroundColor="#61dafb" />
      <NavigationContainer>
          <TabNavigator />
      </NavigationContainer>
  </ApplicationProvider>
  </>
);