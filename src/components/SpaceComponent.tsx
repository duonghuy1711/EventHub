import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
}

const SpaceComponent = (prop: Props) => {
  const {width, height} = prop;
  return (
    <View
      style={{
        width,
        height,
      }}></View>
  );
};

export default SpaceComponent;
