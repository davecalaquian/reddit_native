import React from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';

const Spinner = ({ size, spinnerActivity }) => {
  if (Platform.OS == 'android'){
    return (
      <View >
          <ActivityIndicator size={100} color="#FF473D"/>
      </View>
    );
  }else{
    return (
      <View >
          <ActivityIndicator color="#FF473D"/>
      </View>
    );
  }

}

export { Spinner };
