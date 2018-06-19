import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import { Header } from './common';

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

        <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginBottom: 20, marginTop: 30 }}>
            Log in to Reddit
          </Text>

          <FormInput placeholder="Username" placeholderTextColor="gray" />
          <FormInput placeholder="Password" placeholderTextColor="gray" />

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => this.props.history.push('/register')}
            >
              <Text style={{ fontSize: 12, color: '#0074CD' }}> SIGN UP </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1, alignItems: 'flex-end' }}
              onPress={() => this.props.history.push('/register')}
            >
              <Text style={{ fontSize: 12, color: '#0074CD' }}> FORGOT PASSWORD </Text>
            </TouchableOpacity>
          </View>
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
          <Text style={{ color: '#ffffff' }}> LOG IN </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
