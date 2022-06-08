import {Button, View} from 'react-native';
import React from 'react';
import {Box} from 'native-base';

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Box>Hello world</Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
