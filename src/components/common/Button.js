import React from 'react';
import { TouchableOpacity, Button } from 'react-native';

const SButton = props => {
  const { buttonStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Button style={props.style} title={props.title} onPress={props.onPress} />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    // backgroundColor: '#0074CD',
    // borderRadius: 3,
    // height: 40,
    width: 146
    // margin: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textStyle: {
    // fontSize: 14,
    // color: '#fff',
    // fontWeight: '100',
    // textAlign: 'center'
  }
};

export { SButton };
