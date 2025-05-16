import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  icon?: ReactNode;
  secureTextEntry: boolean;
  keyboardType?: any;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
}

const InputComponent = (prop: Props) => {
  const {
    icon,
    value,
    placeholder,
    onChangeText,
    secureTextEntry,
    keyboardType,
    rightIcon,
    onRightIconPress,
  } = prop;
  return (
    <View style = {[styles.container]}>
      {icon && <View style={styles.leftIcon}>{icon}</View>}
      <TextInput
      style={{width: 300}}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
       {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 50,
    paddingHorizontal: 10,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  

  leftIcon: {
    marginRight: 8,
    marginTop: 11,
  },

  rightIcon: {
    marginTop: 11,
  }
})

export default InputComponent

