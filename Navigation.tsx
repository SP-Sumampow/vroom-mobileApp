/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectionScreen from './modules/connection/screen/ConnectionScreen';
import SettingsScreen from './modules/settings/screens/SettingsScreen';
import PictureTestScreen from './modules/test/screen/PictureTestScreen';
import SubscriptionScreen from './modules/subscription/screen/SubscriptionScreen';
import HomePageScreen from './modules/homePage/screen/HomePageScreen';
import InscriptionSuccedScreen from './modules/inscriptionSucced/screen/InscriptionSucced';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="Connection" component={ConnectionScreen} />
        <Stack.Screen name="HomePage" component={InscriptionSuccedScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="PictureTestScreen" component={PictureTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
