import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import {appInfo} from '../../constants/appInfo';
import {globalStyles} from '../../constants/globalStyles';
import TextComponent from '../../components/TextComponent';

const OnbroadingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        activeDotColor={'white'}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/images/Onboarding1.png')}
            style={{
              flex: 1,
              width: appInfo.sizes.WIDTH,
              height: appInfo.sizes.HEIGHT,
              resizeMode: 'contain',
            }}
          />
        </View>

        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/images/Onboarding2.png')}
            style={{
              flex: 1,
              width: appInfo.sizes.WIDTH,
              height: appInfo.sizes.HEIGHT,
              resizeMode: 'contain',
            }}
          />
        </View>

        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/images/Onboarding3.png')}
            style={{
              flex: 1,
              width: appInfo.sizes.WIDTH,
              height: appInfo.sizes.HEIGHT,
              resizeMode: 'contain',
            }}
          />
        </View>
      </Swiper>

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: 16,
          paddingVertical: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <TextComponent text="Skip" color="#aab4ff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <TextComponent text="Next" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;
