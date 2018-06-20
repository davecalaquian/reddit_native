import React from 'react';
import { View, Platform } from 'react-native';

const Header = props => {
  const { viewStyleAndroid, viewStyleIOS } = styles;
  if (Platform.OS == 'ios'){
    return <View style={viewStyleIOS}>{props.children}</View>;
  }else{
    return <View style={viewStyleAndroid}>{props.children}</View>;

  }
};

const styles = {
  viewStyleAndroid: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row'
  },
  viewStyleIOS: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
  }
};

export { Header };
