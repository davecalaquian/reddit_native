import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = () => {

  const { footerStyle } = styles;

return (
    <View style={footerStyle}>
      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name='reddit-alien'
          type='font-awesome'
          color='#FF473D'
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name='grid'
          type='entypo'
          color='#FF473D'
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name='ios-text'
          type='ionicon'
          color='#FF473D'
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name='mail'
          type='entypo'
          color='#FF473D'
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name='user'
          type='font-awesome'
          color='#FF473D'
          size={28}
        />
      </TouchableOpacity>

    </View>
  );
};

const styles = {
  footerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    height: 76,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
};


export { Footer };
