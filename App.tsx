import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/home/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigators from './src/navigators/AuthNavigators';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppRouters from './src/navigators/AppRouters';

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
    <Provider store={store}>
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AppRouters/>
        </NavigationContainer>
      )}
    </Provider>
      
    </>
  );
};

export default App;
