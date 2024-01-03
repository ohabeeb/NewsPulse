/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Linking,
  Share,
} from 'react-native';
import React from 'react';
import {COLOR, SIZES} from '../constants/themes';
import {icons} from '../constants';

export default function NewDetails({navigation, route}) {
  const [newsDetial, setNewsDetail] = React.useState(null);

  React.useEffect(() => {
    const {item} = route.params;
    setNewsDetail(item);
  }, []);

  const shareNews = () => {
    Share.share({
      message: newsDetial?.title + '\nRead More' + newsDetial?.description,
    });
  };
  function renderHeader() {
    return (
      <View
        style={{
          height: 40,
          marginTop: SIZES.base,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 40,
            width: 40,
          }}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => shareNews()}
          style={{
            height: 40,
            width: 40,
          }}>
          <Image
            source={icons.share}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderNewsImage() {
    return (
      <Image
        source={{uri: newsDetial?.urlToImage}}
        resizeMode="stretch"
        style={{
          width: '100%',
          height: 250,
          borderRadius: SIZES.padding,
        }}
      />
    );
  }
  function renderBody() {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text
          style={{
            fontSize: SIZES.h1,
            fontWeight: 'bold',
            color: COLOR.black,
          }}>
          {newsDetial?.title}
        </Text>
        <Text
          style={{
            fontSize: SIZES.b2,
            lineHeight: 25,
            marginTop: SIZES.padding,
            textAlign: 'justify',
          }}>
          {newsDetial?.description}
        </Text>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL(newsDetial?.url)}>
          <Text
            style={{
              marginTop: SIZES.padding,
              fontSize: SIZES.b3,
              color: COLOR.primary,
              fontWeight: 'bold',
            }}>
            Read More
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: SIZES.padding,
      }}>
      {renderHeader()}
      <ScrollView>
        {renderNewsImage()}
        {renderBody()}
      </ScrollView>
    </SafeAreaView>
  );
}
