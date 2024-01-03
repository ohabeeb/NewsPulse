/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {COLOR, SIZES} from '../constants/themes';

export default function Splash({navigation}) {
    React.useEffect(() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 5000);
    }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: SIZES.h1 * 2,
          color: COLOR.white,
          fontWeight: 'bold',
        }}>
        News Pulse
      </Text>
      <View style={{position: 'absolute', bottom: 20}}>
        <Text style={{fontSize: SIZES.h3, color: COLOR.lightgray}}>Power By</Text>
        <Text style={{fontSize: SIZES.h4, color: COLOR.lightgray}}>DEVOLAH</Text>
      </View>
    </View>
  );
}
