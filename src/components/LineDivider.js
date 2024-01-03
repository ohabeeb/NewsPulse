/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {COLOR, SIZES} from '../constants/themes';

export default function LineDivider() {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: COLOR.lightgray,
        paddingHorizontal: SIZES.padding,
      }}
    />
  );
}
