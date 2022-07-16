import {View, Input} from 'native-base';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {connectionFormStyles} from './ConnectionForm.styles';
import {ConnectionFormProps} from './ConnectionForm.type';

const ConnectionForm = ({label, name, placeholder}: ConnectionFormProps) => {
  // @ts-ignore
  // @ts-ignore
  return (
    <View>
      <VroomText
        style={{marginTop: 20}}
        styleText={styles.titleH3}
        title={label}
      />
      <Input
        variant={'underlined'}
        style={connectionFormStyles.formInput}
        name={name}
        placeholder={placeholder}
      />
    </View>
  );
};

export default ConnectionForm;
