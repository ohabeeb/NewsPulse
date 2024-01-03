/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const COLOR = {
  primary: '#141879',
  black: '#000',
  white: '#FFF',
  lightgray: '#F4F4F4',
};

export const SIZES = {
  padding: 15,
  marging: 15,
  radius: 12,
  base: 6,

  h1: responsiveScreenFontSize(2.6),
  h2: responsiveScreenFontSize(2.4),
  h3: responsiveScreenFontSize(2.2),
  h4: responsiveScreenFontSize(2),

  b1: responsiveScreenFontSize(2.2),
  b2: responsiveScreenFontSize(2.0),
  b3: responsiveScreenFontSize(1.8),
  b4: responsiveScreenFontSize(1.6),

  width,
  height,
};
