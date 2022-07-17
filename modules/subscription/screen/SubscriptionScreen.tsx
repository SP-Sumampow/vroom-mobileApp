import {SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {useCallback} from 'react';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';
import VroomText from '../../global/Components/Text/VroomText';
import {styles} from '../../global/Components/Text/VroomText.styles';
import SendSubscriptionButton from '../components/Button/sendSubscriptionButton/sendSubscriptionButton';

// @ts-ignore
import LogoPurple from '../../../assets/svg/logo-vroomPurple.svg';

export default function SubscriptionScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <KeyboardAwareScrollView style={styles.keyboardScroll}>
        <LogoPurple style={{marginTop: 40, marginBottom: 40}} />
        <VroomText title={"S'inscrire"} styleText={styles.header} />
        <SubscriptionForm />
        {/*<Buttons onPress={() => navigation.navigate('Settings')}>coucou</Buttons> */}
        <SendSubscriptionButton onPress={handleOnClick} title={'S’inscrire'} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
