import {Text} from 'native-base';
import {View} from 'react-native';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';

// @ts-ignore
// import ClosedButton from '../../../../assets/svg/closedButton.svg';

const MenuList = () => {
  return (
    <View>
      {/*<ClosedButton />*/}
      <View>
        <VroomText
          style={{marginVertical: 20}}
          styleText={styles.titleH2}
          title={'Mon Compte'}
        />
        <VroomText
          style={{marginVertical: 20}}
          styleText={styles.titleH2}
          title={'Enfant(s)'}
        />
        <VroomText
          style={{marginVertical: 20}}
          styleText={styles.titleH2}
          title={'Paiement'}
        />
        <VroomText
          style={{marginVertical: 20}}
          styleText={styles.titleH2}
          title={'Besoin d’aide ?'}
        />
      </View>
    </View>
  );
};

export default MenuList;
