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
import {NativeBaseProvider} from 'native-base';
import PictureTestScreen from './modules/test/screen/PictureTestScreen';
import SubscriptionForm from './modules/subscription/components/SubscriptionForm/SubscriptionForm';
import SubscriptionScreen from './modules/subscription/screen/SubscriptionScreen';
import HomePageScreen from './modules/homePage/screen/HomePageScreen';
import MenuPageScreen from './modules/menuPage/screen/MenuPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePageScreen} />
          <Stack.Screen name="HomePage" component={HomePageScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen
            name="PictureTestScreen"
            component={PictureTestScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
