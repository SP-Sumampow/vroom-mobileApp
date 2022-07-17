import {View, Input} from 'native-base';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {subscriptionFormStyles} from './SubscriptionForm.styles';

// @ts-ignore
import NameIcon from '../../../../assets/svg/name-icon.svg';
// @ts-ignore
import EmailIcon from '../../../../assets/svg/email-icon.svg';
// @ts-ignore
import PhoneNumberIncon from '../../../../assets/svg/phoneNumber-icon.svg';

const SubscriptionForm = () => {
  return (
    <View style={subscriptionFormStyles.allInput}>
      <View style={subscriptionFormStyles.formInput}>
        <VroomText
          style={{marginTop: 20}}
          styleText={styles.titleH3}
          title={'Nom'}
        />
        <View>
          <NameIcon />
          <Input variant={'underlined'} placeholder={'Votre nom ici'} />
        </View>
      </View>
      <View style={subscriptionFormStyles.formInput}>
        <VroomText
          style={{marginTop: 20}}
          styleText={styles.titleH3}
          title={'Prénom'}
        />
        <View>
          <NameIcon />
          <Input variant={'underlined'} placeholder={'Votre preénom ici'} />
        </View>
      </View>
      <View style={subscriptionFormStyles.formInput}>
        <VroomText
          style={{marginTop: 20}}
          styleText={styles.titleH3}
          title={'Password'}
        />
        <View style={subscriptionFormStyles.formInput}>
          <NameIcon />
          <Input variant={'underlined'} placeholder={'Votre mot de passe'} />
        </View>
      </View>
      <View style={subscriptionFormStyles.formInput}>
        <VroomText
          style={{marginTop: 20}}
          styleText={styles.titleH3}
          title={'Email'}
        />
        <View style={subscriptionFormStyles.formInput}>
          <EmailIcon />
          <Input variant={'underlined'} placeholder={'Votre e-mail ici'} />
        </View>
      </View>
      <View style={subscriptionFormStyles.formInput}>
        <VroomText
          style={{marginTop: 20}}
          styleText={styles.titleH3}
          title={'Numéro de téléphone'}
        />
        <View>
          <PhoneNumberIncon />
          <Input variant={'underlined'} placeholder={'Votre numéro ici'} />
        </View>
      </View>
    </View>
  );
};

export default SubscriptionForm;
