import {SafeAreaView, View} from 'react-native';
import React, {useCallback} from 'react';
import SendConnectionButton from '../components/SendConnectionButton/SendConnectionButton';
import ConnectionForm from '../components/Form/ConnectionForm';
import VroomText from '../../global/Components/Text/VroomText';
import {styles} from '../../global/Components/Text/VroomText.styles';

// @ts-ignore
import LogoPurple from '../../../assets/svg/logo-vroomPurple.svg';

export default function ConnectionScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <LogoPurple style={{marginTop: 40, marginBottom: 40}} />
      <View style={{height: '60%'}}>
        <VroomText
          style={{textAlign: 'center', marginVertical: 20}}
          styleText={styles.header}
          title={'Se connecter'}
        />
        <View>
          <ConnectionForm
            placeholder={'E-mail'}
            label={'E-mail'}
            name={'E-mail'}
          />
          <ConnectionForm
            placeholder={'Mot de passe'}
            label={'Mot de passe'}
            name={'Mot de passe'}
          />
        </View>
        {/* <Buttons onPress={() => navigation.navigate('Settings')}>coucou</Buttons> */}
        <SendConnectionButton onPress={handleOnClick} title={'Se connecter'} />
      </View>
    </SafeAreaView>
  );
}
