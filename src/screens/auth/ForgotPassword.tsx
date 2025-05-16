import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../constants/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextComponent from '../../components/TextComponent';
import InputComponent from '../../components/InputComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  return (
    <View style={[globalStyles.container]}>
      <View style={[globalStyles.section]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 50,
            left: 15,
            zIndex: 10,
          }}>
          <MaterialIcons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        <TextComponent
          text="Resset Password"
          fontSize={20}
          color="black"
          fontWeight="500"
          styles={{top: 90}}
        />

        <TextComponent
          text={'Please enter your email address to \nrequest a password reset'}
          fontSize={16}
          color="black"
          fontWeight="400"
          styles={{top: 110, lineHeight: 25}}
        />

        <View style={{top: 140}}>
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

        <View
          style={[globalStyles.section, {width: '100%', alignItems: 'center', top: 170}]}>
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
              SEND
            </Text>

            <MaterialIcons
              name="arrow-circle-right"
              size={30}
              style={{left: 75}}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
