import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../constants/globalStyles';
import InputComponent from '../../components/InputComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextComponent from '../../components/TextComponent';
import {validate} from '../../utils/validate';
import Loading from '../../components/IsLoadingComponent';
import authenticationAPI from '../../apis/authApi';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cfpassword, setCfpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setShowCfPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    const trimedEmail = email.trim();
    const trimedPassword = password.trim();
    const trimedCfPassword = cfpassword.trim();
    const trimedFullName = fullName.trim();

    if (
      !trimedEmail ||
      !trimedPassword ||
      !trimedCfPassword ||
      !trimedFullName
    ) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (!validate.email(trimedEmail)) {
      Alert.alert('Email không hợp lệ');
      return;
    }

    if (trimedPassword !== trimedCfPassword) {
      Alert.alert('Mật khẩu không trùng khớp');
      return;
    }

    if (trimedPassword.length < 6) {
      Alert.alert('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    const updatedValues = {
      fullname: trimedFullName,
      email: trimedEmail,
      password: trimedPassword,
      // confirmPassword: trimedCfPassword,
    };

    setIsLoading(true);
    try {
      const res = await authenticationAPI.HandleAuthentication(
        '/register',
          updatedValues,
        'post',
      );
      console.log(res);
      Alert.alert('Đăng ký thành công!');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Đăng ký thất bại');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={require('../../assets/images/Splash.png')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', top: 65, left: 20, zIndex: 10}}>
          <MaterialIcons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={globalStyles.section}>
            <TextComponent
              text="Sign up"
              color="black"
              fontWeight="400"
              fontSize={21}
              styles={{marginRight: 290}}
            />
          </View>

          <View style={[globalStyles.section, {width: '100%'}]}>
            <InputComponent
              placeholder="Full name"
              value={fullName}
              onChangeText={setFullName}
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

          <View style={[globalStyles.section, {width: '100%'}]}>
            <InputComponent
              placeholder="abc@gmail.com"
              value={email}
              onChangeText={setEmail}
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

          <View style={[globalStyles.section, {width: '100%'}]}>
            <InputComponent
              placeholder="Your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
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
                  style={{right: 5}}
                />
              }
              onRightIconPress={() => setShowPassword(!showPassword)}
            />
          </View>

          <View style={[globalStyles.section, {width: '100%'}]}>
            <InputComponent
              placeholder="Confirm password"
              secureTextEntry={!showCfPassword}
              value={cfpassword}
              onChangeText={setCfpassword}
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
                  style={{right: 5}}
                />
              }
              onRightIconPress={() => setShowCfPassword(!showCfPassword)}
            />
          </View>

          <View
            style={[
              globalStyles.section,
              {width: '100%', alignItems: 'center'},
            ]}>
            <TouchableOpacity
              onPress={handleRegister}
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
                style={{left: 75}}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <View style={globalStyles.section}>
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
                color="#000"
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
                color="#000"
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
            <Text style={{fontSize: 16}}>Already have an account?</Text>
            <Pressable onPress={() => navigation.goBack()}>
              {({pressed}) => (
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
      <Loading visible={isLoading} onDismiss={() => setIsLoading(false)} />
    </View>
  );
};

export default SignupScreen;
