import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity , Image} from 'react-native';

// import { Icon } from 'react-native-elements';
// import CardSection from './src/components/CardSection';
import Welcome from './src/components/Welcome';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="blue"
           barStyle="default"
        />

        <Welcome />

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
  },
  addWidgetStyle: {
    position: 'absolute',
    right: 20,
    bottom: 75
  }
});

// <Header />
// <ScrollView>
//   <CardSection/>
//   <CardSection/>
//   <CardSection/>
// </ScrollView>
// <TouchableOpacity style={styles.addWidgetStyle}>
// <Image
//     source={require('./src/assets/image/addButton.png')}
//     style={{ width: 54, height: 54 }}
//     />
// </TouchableOpacity>
