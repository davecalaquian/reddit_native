import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = () => {
  const { headerTextStyle, viewStyle } = styles;
  return (
  <View style={viewStyle}>
    <TouchableOpacity style={{ flex: 1 }}>
      <Icon
        name='menu'
        color='#fff'
      />
    </TouchableOpacity>

    <View style={{ flex: 3 }}>
      <Text style={headerTextStyle}>reddit</Text>
    </View>

    <TouchableOpacity style={{ flex: 1 }}>
      <Icon
        name='search'
        color='#fff'
      />
    </TouchableOpacity>
  </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 92,
    flexDirection: 'row'
  },
  headerTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 0,
    fontFamily: 'System'
  }
};

export { Header };
