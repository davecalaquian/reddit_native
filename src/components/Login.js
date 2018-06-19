import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, FormInput } from 'react-native-elements';
import { Header } from './common';

const styles = {
  textTitleStyle: {
    color: 'blue',
    paddingTop: 40,
    fontSize: 18
  }
};

class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header style={{ height: 72 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                type="feather"
                name="arrow-left"
                color="#ffffff"
                onPress={() => this.props.history.push('/')}
              />
            </TouchableOpacity>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <Image
                source={require('./../assets/image/reddit_logo.png')}
                style={{ height: 20, width: 60 }}
              />
            </View>
            <View style={{ flex: 1 }} />
          </Header>
        </View>
        <View>
          <Text style={styles.textTitleStyle}> Log in to Reddit </Text>
          <FormInput placeholder="Username" placeholderTextColor="gray" />
          <FormInput placeholder="Password" placeholderTextColor="gray" />
          <TouchableOpacity onPress={() => this.props.history.push('/register')}>
            <Text style={styles.textTitleStyle}> SIGN UP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.history.push('/register')}>
            <Text style={styles.textTitleStyle}> FORGOT PASSWORD </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button
            style={{ width: 345 }}
            onPress={() => this.props.history.push('/home')}
            title="LOG IN"
          />
        </View>
      </View>
    );
  }
}

export default Login;
