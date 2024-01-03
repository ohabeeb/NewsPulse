/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLOR, SIZES} from '../constants/themes';

export default function Header({label, icon, lableStyle, containerStyle}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...containerStyle,
      }}>
      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: 'bold',
          color: COLOR.black,
          ...lableStyle,
        }}>
        {label}
      </Text>
    </View>
  );
}
