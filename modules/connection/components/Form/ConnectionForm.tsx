import {View, Input} from 'native-base';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {connectionFormStyles} from './ConnectionForm.styles';
import {ConnectionFormProps} from './ConnectionForm.type';

const ConnectionForm = ({label, name, placeholder}: ConnectionFormProps) => {
  return (
    <View>
      <VroomText styleText={styles.titleH3} title={label} />
      <Input
        variant={'underlined'}
        style={connectionFormStyles.formInput}
        name={name}
        placeholder={placeholder}></Input>
    </View>
  );
};

export default ConnectionForm;
