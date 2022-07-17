import {SafeAreaView, ImageBackground} from 'react-native';
import React, {useCallback} from 'react';
import InscriptionSuccedButton from '../components/InscriptionSuccedButtonPart/InscriptionSuccedButtonPart';
import {styles} from '../components/InscriptionSuccedButtonPart/ InscriptionSuccedButtonPart.styles';
import InscriptionSuccedText from '../components/InscriptionSuccedTextPart/InscriptionSuccedTextPart';

export default function InscriptionSuccedScreen({
  navigation,
}: {
  navigation: any;
}) {
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
        backgroundColor: '#da84fa',
      }}>
      <InscriptionSuccedText />
      <ImageBackground
        style={styles.InscriptionSuccedButtonImage}
        source={require('../../../assets/png/inscriptionSucced-boy.png')}>
        <InscriptionSuccedButton
          onPress={handleOnClick}
          title={'Revenir à l’accueil'}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
