import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Footer } from './src/components/common';
import Card from './src/components/Card';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
});
