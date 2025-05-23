import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../constants/globalStyles';
import InputComponent from '../../components/InputComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextComponent from '../../components/TextComponent';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={[globalStyles.container]}>
      <ImageBackground
        source={require('../../assets/images/Splash.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: 20,
          }}>
          <View style={[globalStyles.section]}>
            <Image
              source={require('../../assets/images/LoginLogo.png')}
              style={{
                width: 162,
                height: 114,
              }}
              resizeMode="contain"
            />
          </View>

          <View style={[globalStyles.section]}>
            <TextComponent
              text="Sign In"
              color="black"
              fontWeight="400"
              fontSize={24}
              styles={{marginRight: 300}}></TextComponent>
          </View>

          <View style={[globalStyles.section, {width: '100%'}]}>
            <InputComponent
              placeholder="abc@gmail.com"
              keyboardType="email-address"
              secureTextEntry={false}
              value={email}
              onChangeText={text => setEmail(text)}
              icon={
                <MaterialCommunityIcons
                  name="email-outline"
                  size={22}
                  color="#807a7a"
                />
              }
            />
          </View>

          <View style={[globalStyles.section, {width: '100%'}]}>
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
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={22}
                  color="#807a7a"
                />
              }
              onRightIconPress={() => setShowPassword(!showPassword)}
            />
          </View>

          <View
            style={[
              {
                flexDirection: 'row',
                gap: 95,
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                <MaterialCommunityIcons
                  name={rememberMe ? 'toggle-switch' : 'toggle-switch-off'}
                  size={60}
                  color={rememberMe ? '#5669ff' : '#e4dfdf'}
                />
              </TouchableOpacity>

              <Text style={{marginLeft: 6, fontSize: 15}}>Remember Me</Text>
            </View>

            <Text style={{marginRight: 5, fontSize: 15}}>Forgot Password?</Text>
          </View>

          <View
            style={[
              globalStyles.section,
              {
                width: '100%',
                alignItems: 'center',
              },
            ]}>
            <TouchableOpacity
              onPress={() => console.log('Login')}
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
                SIGN IN
              </Text>

              <MaterialIcons
                name="arrow-circle-right"
                size={30}
                style={{left: 75}}
                color="#ffff"
              />
            </TouchableOpacity>
          </View>

          <View style={[globalStyles.section]}>
            <TextComponent
              text="OR"
              color="#807a7a"
              fontSize={16}
              fontWeight="500"
            />
          </View>

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
              style={{flexDirection: 'row', gap: 20}}>
              <Image
                source={require('../../assets/images/LogoGoogle.png')}
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />

              <TextComponent
                text="Login with Google"
                color="#00000"
                fontSize={16}
                fontWeight="400"
              />
            </TouchableOpacity>
          </View>

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
              style={{flexDirection: 'row', gap: 20}}>
              <Image
                source={require('../../assets/images/LogoFacebook.png')}
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />

              <TextComponent
                text="Login with Facebook"
                color="#00000"
                fontSize={16}
                fontWeight="400"
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              globalStyles.section,
              {flexDirection: 'row', gap: 10, marginTop: 10},
            ]}>
            <Text style={{fontSize: 16}}>Don't have an account? </Text>

            <Pressable onPress={() => navigation.navigate('SignupScreen')}>
              {({pressed}) => (
                <Text
                  style={{
                    fontSize: 16,
                    color: pressed ? '#3346ff' : '#5669ff',
                    fontWeight: '400',
                  }}>
                  Sign up
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
