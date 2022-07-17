import {ImageSourcePropType, ViewProps} from 'react-native';

export type FavoriteTypeProps = {
  image: ImageSourcePropType;
  title: string;
} & ViewProps;

export type FavoriteItemType = {
  key: string;
  title: string;
  url: ImageSourcePropType;
};
