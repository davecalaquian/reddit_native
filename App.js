import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="blue"
           barStyle="default"
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
  }
});
