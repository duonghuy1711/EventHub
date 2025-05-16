import {ImageBackground, Image, StatusBar} from 'react-native';
import React from 'react';
import {appInfo} from '../../constants/appInfo';

const SplashScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ImageBackground
        source={require('../../assets/images/Splash.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageStyle={{flex: 1}}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{
            width: appInfo.sizes.WIDTH * 0.7,
            resizeMode: 'contain',
          }}></Image>
      </ImageBackground>
    </>
  );
};

export default SplashScreen;
