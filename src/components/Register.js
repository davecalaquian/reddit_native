import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, FormInput } from 'react-native-elements';
import { Header } from './common';

const styles = {
  textTitleStyle: {
    color: 'blue',
    paddingTop: 40,
    fontSize: 18
  },
  text: {
    color: 'white',
    paddingTop: 40,
    fontSize: 18
  },
};

class Register extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header style={{ height: 72 }}>
            <TouchableOpacity style={{ flex: 1 }} >
              <Icon
                type='feather'
                name='arrow-left'
                color='#ffffff'
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
          <Text style={styles.textTitleStyle}> Create an account </Text>
          <FormInput
            placeholder='Email'
            placeholderTextColor='gray'
          />
          <FormInput
            placeholder='Username'
            placeholderTextColor='gray'
          />
          <FormInput
            placeholder='Password'
            placeholderTextColor='gray'
          />
          <TouchableOpacity onPress={() => this.props.history.push('/login')}>
            <Text style={styles.textTitleStyle}> LOG IN INSTEAD </Text>
          </TouchableOpacity>
          <Text style={styles.text}> By signing up you agree to Terms and that you have read your Privacy Policy and Consent Policy </Text>
        </View>
        <View>
          <Button style={{ width: 345 }} onPress={() => this.props.history.push('/home')} title="CREATE AN ACCOUNT" />
        </View>
      </View>
    );
  }
}

export default Register;
