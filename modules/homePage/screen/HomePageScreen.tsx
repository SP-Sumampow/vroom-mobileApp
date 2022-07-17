import {SafeAreaView, View} from 'react-native';
import React, {useCallback} from 'react';
import Menu from '../components/Menu/Menu';
import SearchDestination from '../components/SearchDestination/SearchDestination';
import HomePageButtonTakeSubscription from '../Buttons/HomePageButton-takeSubscription';

// @ts-ignore

//{navigation}: {navigation: any}
export default function HomePageScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);

  console.log('test');
  return (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Menu />
      <SearchDestination
        placeholder={'Adresse de votre course'}
        label={'Où allons-nous ?'}
      />
      {/*<Buttons onPress={() => navigation.navigate('Settings')}>coucou</Buttons> */}
      <HomePageButtonTakeSubscription onPress={handleOnClick} />
    </SafeAreaView>
  );
}
