import React from "react";
import { View, Text } from 'react-native';

const CardFooter = () => {
  const { containerStyle } = styles;
  return(
    <View style={containerStyle}>


    </View>

  );
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  }

}



export default CardFooter;
