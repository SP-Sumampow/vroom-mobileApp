import {View} from 'react-native';
import React, {useCallback} from 'react';
import {Box} from 'native-base';
import SendConnectionButton from '../components/SendConnectionButton/SendConnectionButton';
import ConnectionForm from '../components/Form/ConnectionForm';
import VroomText from '../../global/Components/Text/VroomText';
import {styles} from '../../global/Components/Text/VroomText.styles';

export default function ConnectionScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <VroomText styleText={styles.header} title={'Se connecter'} />
      <Box>
        <Box>
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
        </Box>
        {/* <Buttons onPress={() => navigation.navigate('Settings')}>coucou</Buttons> */}
        <SendConnectionButton onPress={handleOnClick} title={'Se connecter'} />
      </Box>
    </View>
  );
}
