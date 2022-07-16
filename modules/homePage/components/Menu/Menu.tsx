import {View} from 'react-native';
import React from 'react';
// @ts-ignore
import MenuIcon from '../../../../assets/svg/menu.svg';
// @ts-ignore
import MessageIcon from '../../../../assets/svg/message-icon.svg';

const HomeMenu = () => {
  return (
    <View
      style={{
        width: '90%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <MenuIcon />
      <MessageIcon />
    </View>
  );
};

export default HomeMenu;
