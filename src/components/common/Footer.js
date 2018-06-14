import React from 'react';
import { View } from 'react-native';


const Footer = (props) => {

  const { footerStyle } = styles;

return (
    <View style={footerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  footerStyle: {
    backgroundColor: '#fff',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  }
};


export { Footer };
