import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const dispath = useDispatch();

  const auth = useSelector(authSelector);

  const handleLogout = async () => {
    await AsyncStorage.setItem('auth', auth.email);
    dispath(removeAuth());
  };
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
}

export default HomeScreen