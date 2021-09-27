import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import { MainStackNavigator,AuthenticationStackNavigator } from './stackNavigator';
import { ProfileScreen } from '../screens/ProfileScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();

const PersonIcon = (props) => (
    <Icon {...props} name='person-outline'/>
  );
  
  const BellIcon = (props) => (
    <Icon {...props} name='bell-outline'/>
  );
  
  
  const BottomTabBar = ({ navigation, state }) => (
     <BottomNavigation
          selectedIndex={state.index}
          onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={BellIcon} title='NOTICES' />
        <BottomNavigationTab icon={PersonIcon} title='PROFILE'/>
      </BottomNavigation>
    );
  
    const TabNavigator = () => (
      <Stack.Navigator>
        <Screen name='LoginTab' component={AuthenticationStackNavigator} options={{headerShown :false}} />
      </Stack.Navigator>
      // <Navigator tabBar={props => <BottomTabBar {...props} />}>
      //   <Screen name='HomeTab' component={MainStackNavigator} options={{ headerShown: false }}/>
      //   <Screen name='Profile' component={ProfileScreen}/>
      // </Navigator>
    );
    
   export  {TabNavigator};