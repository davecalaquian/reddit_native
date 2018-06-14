import React from 'react';
import { View } from 'react-native';

const Header = (props) => {
  const { viewStyle } = styles;
  return (
  <View style={viewStyle}>
    {props.children}
  </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  }
};

export { Header };
