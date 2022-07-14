import {Text} from 'native-base';
import React from 'react';
import {VroomTextProps} from './VroomText.type';
// import {styles} from './Buttons.styles';
// import {ButtonProps} from './Buttons.type';

//import {StyleSheet, Text, useColorScheme, View} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

const VroomText = ({styleText, title}: VroomTextProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return <Text style={styleText}>{title}</Text>;
};

export default VroomText;
