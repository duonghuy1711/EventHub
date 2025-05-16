import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Pressable,
  } from 'react-native';
  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { globalStyles } from '../../constants/globalStyles';
  import InputComponent from '../../components/InputComponent';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import TextComponent from '../../components/TextComponent';
  
  const SignupScreen = () => {
    const navigation = useNavigation();
  
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setCfpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCfPassword, setShowCfPassword] = useState(false);
  
    return (
      <View style={[globalStyles.container]}>
        <ImageBackground
          source={require('../../assets/images/Splash.png')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
  
          {/* Nút quay lại */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              zIndex: 10,
            }}>
            <MaterialIcons name="arrow-back" size={28} color="#000" />
          </TouchableOpacity>
  
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginBottom: 20,
            }}>
  
            <View style={[globalStyles.section]}>
              <TextComponent
                text="Sign up"
                color="black"
                fontWeight="400"
                fontSize={24}
                styles={{ marginRight: 300 }}
              />
            </View>
  
            {/* Full name */}
            <View style={[globalStyles.section, { width: '100%' }]}>
              <InputComponent
                placeholder="Full name"
                value={fullName}
                onChangeText={text => setFullName(text)}
                keyboardType="default"
                secureTextEntry={false}
                icon={
                  <MaterialIcons
                    name="person-outline"
                    size={22}
                    color="#807a7a"
                  />
                }
              />
            </View>
  
            {/* Email */}
            <View style={[globalStyles.section, { width: '100%' }]}>
              <InputComponent
                placeholder="abc@gmail.com"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                secureTextEntry={false}
                icon={
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={22}
                    color="#807a7a"
                  />
                }
              />
            </View>
  
            {/* Password */}
            <View style={[globalStyles.section, { width: '100%' }]}>
              <InputComponent
                placeholder="Your password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={pass => setPassword(pass)}
                icon={
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={22}
                    color="#807a7a"
                  />
                }
                rightIcon={
                  <MaterialCommunityIcons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={22}
                    color="#807a7a"
                  />
                }
                onRightIconPress={() => setShowPassword(!showPassword)}
              />
            </View>
  
            {/* Confirm Password */}
            <View style={[globalStyles.section, { width: '100%' }]}>
              <InputComponent
                placeholder="Confirm password"
                secureTextEntry={!showCfPassword}
                value={cfpassword}
                onChangeText={cfpass => setCfpassword(cfpass)}
                icon={
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={22}
                    color="#807a7a"
                  />
                }
                rightIcon={
                  <MaterialCommunityIcons
                    name={showCfPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={22}
                    color="#807a7a"
                  />
                }
                onRightIconPress={() => setShowCfPassword(!showCfPassword)}
              />
            </View>
  
            {/* Sign up button */}
            <View
              style={[
                globalStyles.section,
                { width: '100%', alignItems: 'center' },
              ]}>
              <TouchableOpacity
                onPress={() => console.log('Signup')}
                activeOpacity={0.8}
                style={{
                  width: '70%',
                  backgroundColor: '#5669ff',
                  height: 55,
                  borderRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '500',
                    left: 12,
                  }}>
                  SIGN UP
                </Text>
  
                <MaterialIcons
                  name="arrow-circle-right"
                  size={30}
                  style={{ left: 75 }}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
  
            {/* OR */}
            <View style={[globalStyles.section]}>
              <TextComponent
                text="OR"
                color="#807a7a"
                fontSize={16}
                fontWeight="500"
              />
            </View>
  
            {/* Login with Google */}
            <View
              style={[
                globalStyles.section,
                {
                  flexDirection: 'row',
                  width: 265,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ flexDirection: 'row', gap: 20 }}>
                <Image
                  source={require('../../assets/images/LogoGoogle.png')}
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                />
                <TextComponent
                  text="Login with Google"
                  color="#000"
                  fontSize={16}
                  fontWeight="400"
                />
              </TouchableOpacity>
            </View>
  
            {/* Login with Facebook */}
            <View
              style={[
                globalStyles.section,
                {
                  flexDirection: 'row',
                  width: 265,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                },
              ]}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ flexDirection: 'row', gap: 20 }}>
                <Image
                  source={require('../../assets/images/LogoFacebook.png')}
                  style={{ width: 25, height: 25 }}
                  resizeMode="contain"
                />
                <TextComponent
                  text="Login with Facebook"
                  color="#000"
                  fontSize={16}
                  fontWeight="400"
                />
              </TouchableOpacity>
            </View>
  
            {/* Link to Sign in */}
            <View
              style={[
                globalStyles.section,
                { flexDirection: 'row', gap: 10, marginTop: 10 },
              ]}>
              <Text style={{ fontSize: 16 }}>Already have an account?</Text>
  
              <Pressable onPress={() => navigation.goBack()}>
                {({ pressed }) => (
                  <Text
                    style={{
                      fontSize: 16,
                      color: pressed ? '#3346ff' : '#5669ff',
                      fontWeight: '400',
                    }}>
                    Sign in
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default SignupScreen;
  