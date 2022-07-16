import React from 'react';
import {View, ImageBackground} from 'react-native';
import FavoriteType from './FavoriteType';

const AllFavoriteType = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <FavoriteType
        title={'Eéole'}
        image={require('../../../../../../assets/png/favoriteType-school.png')}
      />
      <FavoriteType
        title={'Théatre'}
        image={require('../../../../../../assets/png/favoriteType-school.png')}
      />
      <FavoriteType
        title={'Sport'}
        image={require('../../../../../../assets/png/favoriteType-school.png')}
      />
    </View>
  );
};

export default AllFavoriteType;
