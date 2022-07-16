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

import {NativeBaseProvider} from 'native-base';
import Navigation from './Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation></Navigation>
    </NativeBaseProvider>
  );
};

export default App;
