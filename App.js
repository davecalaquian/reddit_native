import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Home from './src/components/Home';
import Welcome from './src/components/Welcome';
import Login from './src/components/Login';
import Register from './src/components/Register';


export default class App extends React.Component {
  render() {
    return (

      <NativeRouter>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            {/* <Home /> */}
          </Switch>
        </View>
      </NativeRouter>

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
