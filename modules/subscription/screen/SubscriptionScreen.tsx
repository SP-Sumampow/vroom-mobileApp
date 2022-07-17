import {SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {useCallback} from 'react';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';
import VroomText from '../../global/Components/Text/VroomText';
import {styles} from '../../global/Components/Text/VroomText.styles';

// @ts-ignore
import LogoPurple from '../../../assets/svg/logo-vroomPurple.svg';

export default function SubscriptionScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        style={styles.keyboardScroll}
        contentContainerStyle={styles.keyboardScrollContent}>
        <LogoPurple style={{marginTop: 40, marginBottom: 40}} />
        <VroomText title={"S'inscrire"} styleText={styles.header} />
        <SubscriptionForm />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
