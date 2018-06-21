import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
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
    fontSize: 12
  }
};

class Register extends Component {
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

        <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
          <Text style={{ fontSize: 20, color: '#ffffff', marginBottom: 25, marginTop: 40 }}>
            Create an account
          </Text>

          <FormInput placeholder="Email" placeholderTextColor="gray" />
          <FormInput placeholder="Username" placeholderTextColor="gray" />
          <FormInput placeholder="Password" placeholderTextColor="gray" />

          <TouchableOpacity onPress={() => this.props.history.push('/login')}>
            <Text style={{ fontSize: 12, color: '#0074CD', marginTop: 10 }}> LOG IN INSTEAD </Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            By signing up you agree to <Text style={{ color: '#0074CD' }}>Terms</Text> and that you
            have read your <Text style={{ color: '#0074CD' }}>Privacy Policy</Text> and
            <Text style={{ color: '#0074CD' }}> Consent Policy</Text>
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.history.push('/home')}
          style={{
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 3,
            backgroundColor: '#0074CD',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#ffffff' }}>   CREATE AN ACCOUNT   </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
