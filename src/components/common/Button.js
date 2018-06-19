import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#0074CD',
    borderRadius: 3,
    height: 40,
    width: 146,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '100',
    textAlign: 'center'
  }
};

export { Button };
