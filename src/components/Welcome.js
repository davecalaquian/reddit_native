import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Header, Footer, SButton } from './common';

class Welcome extends Component {

  render() {
    console.log(this.props);
    return (

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Header style={{ height: 72 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('./../assets/image/reddit_logo.png')}
                    style={{ height: 20, width: 60 }}
                />
            </View>
          </Header>
        </View>

        <View style={styles.contentStyle}>
          <Icon
            name='reddit-alien'
            type='font-awesome'
            color='#FF473D'
            size={63}
          />
          <Text style={styles.textTitleStyle}>  Welcome! </Text>
          <Text style={styles.textContentStyle}>  There's a Reddit community for every topic imaginable </Text>

          <Text style={styles.textTitleStyle}>  Vote! </Text>
          <Text style={styles.textContentStyle}>  on posts and help communities lift the best content to the top </Text>

          <Text style={styles.textTitleStyle}>  Subscribe! </Text>
          <Text style={styles.textContentStyle}>  to communities to fill this home feed with fresh posts </Text>
        </View>

        <View style={styles.buttonGroup}>
          <SButton style={{ flex: 1 }} onPress={() => this.props.history.push('/login')} title="LOG IN" />
          <SButton style={{ flex: 1 }} onPress={() => this.props.history.push('/register')} title="REGISTER" />
        </View>

        <View style={{ flex: 1 }}>
          <Footer>
            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='reddit-alien'
                type='font-awesome'
                color='#FF473D'
                size={28}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='grid'
                type='simple-line-icon'
                color='#5f6063'
                size={28}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='bubble'
                type='simple-line-icon'
                color='#5f6063'
                size={28}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='mail'
                type='feather'
                color='#5f6063'
                size={28}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='user-o'
                type='font-awesome'
                color='#5f6063'
                size={28}
              />
            </TouchableOpacity>
          </Footer>
        </View>

      </View>

    );
  }
}

const styles = {
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 45,
    flex: 4,
    marginTop: 40
  },
  textTitleStyle: {
    textAlign: 'center',
    color: '#DFDFDF',
    paddingTop: 40,
    fontSize: 18
  },
  textContentStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#DFDFDF',
    lineHeight: 22
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    paddingTop: 17,
    paddingBottom: 17,
    paddingRight: 27,
    paddingLeft: 27
  }
};

export default Welcome;
