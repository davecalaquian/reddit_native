import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={100} color="#FF473D" />
    </View>
  );
}

const styles = {
  spinnerStyle: {
    // justifyContent: 'center',
    // alignItems: 'center'
  }
}

export { Spinner };
