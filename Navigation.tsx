/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectionScreen from './modules/connection/screen/ConnectionScreen';
import SettingsScreen from './modules/settings/screens/SettingsScreen';
import PictureTestScreen from './modules/test/screen/PictureTestScreen';
import SubscriptionScreen from './modules/subscription/screen/SubscriptionScreen';
import HomePageScreen from './modules/homePage/screen/HomePageScreen';
<<<<<<< HEAD
import InscriptionSuccedScreen from './modules/inscriptionSucced/screen/InscriptionSucced';
=======
import {createNavigationContainerRef} from '@react-navigation/native';
import useUserStore from './stores/User/UserStore';
>>>>>>> 130113f08459b0db66dc4646353df145a10fde99

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

const Navigation = () => {
  const id = useUserStore(state => state.id);

  useEffect(() => {
    if (id) {
      if (navigationRef.isReady()) {
        navigationRef.reset({
          index: 0,
          routes: [{name: 'HomePage'}],
        });
      }
    }
  }, [id]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Subscription">
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
