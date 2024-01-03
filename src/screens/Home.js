/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLOR, SIZES} from '../constants/themes';
import {Header, LineDivider} from '../components';
import {icons, images} from '../constants';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
export default function Home({navigation}) {
  const [categories, setCategories] = React.useState([
    {
      id: 1,
      title: 'Latest',
    },
    {
      id: 2,
      title: 'World',
    },
    {
      id: 3,
      title: 'Sports',
    },
    {
      id: 4,
      title: 'Business',
    },
    {
      id: 5,
      title: 'Life',
    },
    {
      id: 6,
      title: 'Movies',
    },
  ]);
  const [loading, setLoading] = React.useState(true);
  const [selectedCategories, setSelectedCategories] = React.useState('');
  const [headlines, setHeadlines] = React.useState('');
  const [localNews, setLocalNews] = React.useState('');
  React.useEffect(() => {
    getTopHeadLines('us');
    getLocalNes();
  }, []);

  async function getTopHeadLines(countryCode) {
    setLoading(true);
    const result = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=ebaa5f9cb7f64e77ad87678edf131b0a`,
    ).then(res => res.json());
    // return result;
    setHeadlines(result);
    setLoading(false);
    // const result = (await NewsAPI.getTopHeadLines).data;
    // console.log(result);
  }
  async function getLocalNes(categories = 'Latest') {
    setLoading(true);

    const result = await fetch(
      `https://newsapi.org/v2/everything?q=${categories}&apiKey=ebaa5f9cb7f64e77ad87678edf131b0a`,
      // 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=ebaa5f9cb7f64e77ad87678edf131b0a',
    ).then(res => res.json());
    setLocalNews(result);
    setLoading(false);
  }
  function renderHeader() {
    return (
      <View style={{marginTop: SIZES.marging}}>
        {/* Bar  */}
        <Header
          label={'News Pulse'}
          lableStyle={{
            color: COLOR.primary,
            fontSize: responsiveScreenFontSize(4),
          }}
          icon={icons.notificatons}
        />
        {/* Scroll Text  */}
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategories(item);
                  getLocalNes(item.title);
                }}
                style={{
                  marginLeft: index === 0 ? 0 : SIZES.marging,
                  marginTop: SIZES.marging,
                }}>
                <Text
                  style={{
                    fontSize: SIZES.h2,
                    fontWeight: 'bold',
                    color:
                      selectedCategories.id === item.id
                        ? COLOR.primary
                        : COLOR.black,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
  function renderTopHeadline() {
    return (
      <FlatList
        data={headlines?.articles}
        keyExtractor={item => item.id}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewsDetail', {item: item})}
              key={index}
              activeOpacity={0.8}
              style={{
                width: SIZES.width / 1.17,
                marginRight: SIZES.marging,
                paddingVertical: SIZES.padding,
              }}>
              <Image
                source={{uri: item?.urlToImage}}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: responsiveScreenHeight(22),
                  borderRadius: SIZES.radius,
                }}
              />
              <Text
                numberOfLines={3}
                style={{
                  fontSize: SIZES.h1,
                  fontWeight: 'bold',
                  color: COLOR.black,
                  marginTop: SIZES.base,
                }}>
                {item?.title}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base * 1.5,
                  color: COLOR.primary,
                  fontSize: SIZES.h3,
                }}>
                {item?.source.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
  function renderVerticalNewsList() {
    return (
      <View>
        <FlatList
          data={localNews?.articles}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('NewsDetail', {item: item})}
                activeOpacity={0.8}
                key={index}
                style={{
                  width: SIZES.width,
                  height: responsiveScreenHeight(18),
                }}>
                <LineDivider />

                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.5,
                      marginTop: SIZES.base,
                      justifyContent: 'center',
                    }}>
                    {item?.urlToImage === null && (
                      <Image
                        source={images.noimage}
                        resizeMode="contain"
                        style={{
                          width: SIZES.width / 3,
                          height: responsiveScreenHeight(15),
                          marginBottom: SIZES.marging,
                          borderRadius: SIZES.radius,
                        }}
                      />
                    )}
                    {item?.urlToImage !== null && (
                      <Image
                        source={{uri: item?.urlToImage}}
                        resizeMode="cover"
                        style={{
                          width: SIZES.width / 3,
                          height: '90%',
                          marginBottom: SIZES.marging,
                          borderRadius: SIZES.radius,
                        }}
                      />
                    )}
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingHorizontal: SIZES.padding * 2,
                      justifyContent: 'space-around',
                      paddingBottom: SIZES.base,
                    }}>
                    <Text
                      numberOfLines={4}
                      style={{
                        fontSize: SIZES.b2,
                        fontWeight: 'bold',
                        color: COLOR.black,
                        marginVertical: SIZES.radius,
                      }}>
                      {item?.title}
                    </Text>
                    <Text style={{color: COLOR.primary}}>{item?.author}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: SIZES.radius,
      }}>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={COLOR.primary}
          style={{
            height: SIZES.height / 1.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Section  */}
          {renderHeader()}
          <View>
            {renderTopHeadline()}
            {renderVerticalNewsList()}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
