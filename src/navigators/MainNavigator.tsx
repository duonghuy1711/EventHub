import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('auth');
    dispatch(removeAuth());
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
