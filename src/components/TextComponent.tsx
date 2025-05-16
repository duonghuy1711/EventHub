import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';

interface Props {
  styles?: StyleProp<TextStyle>;
  text: string;
  color?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
}

const TextComponent = (prop: Props) => {
  const {text, color, fontSize, styles, fontWeight} = prop;
  return (
    <Text
      style={[
        {
          color: color || 'white',
          fontSize: fontSize || 16,
          fontWeight: fontWeight || 'bold',
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
