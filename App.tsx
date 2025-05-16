import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/home/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigators from './src/navigators/AuthNavigators';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigators />
        </NavigationContainer>
      )}
      :
    </>
  );
};

export default App;
