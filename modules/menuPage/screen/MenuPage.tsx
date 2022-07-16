import {SafeAreaView, View} from 'react-native';
import React, {useCallback} from 'react';
import MenuList from '../components/MenuList/MenuList';
import DriverButton from '../components/Button/DriverButton';

// @ts-ignore
import ClosedButton from '../../../assets/svg/closedButton.svg';

export default function MenuPageScreen({navigation}: {navigation: any}) {
  // @ts-ignore
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 40,
      }}>
      <View
        style={{
          flex: 2,
        }}>
        <View style={{marginBottom: 30}}>
          <ClosedButton />
        </View>
        <MenuList />
      </View>
      <View>
        <DriverButton onPress={handleOnClick} title={'Je suis un chauffeur'} />
      </View>
    </SafeAreaView>
  );
}
