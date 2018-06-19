import React from 'react';
import { View,StatusBar } from 'react-native';
import Home from './src/components/Home';
import Welcome from './src/components/Welcome';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
         backgroundColor="blue"
         barStyle="default"
      />

    <Home />

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
  },
};
