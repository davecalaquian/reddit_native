import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Header, Footer, SButton } from './common';

class Welcome extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <View >
          <Header style={{ height: 72 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('./../assets/image/reddit_logo.png')}
                    style={{ height: 20, width: 60 }}
                />
            </View>
          </Header>
        </View>


        <View style={{ flex: 1 }}>
          <View style={styles.contentStyle}>
            <Icon
              name='reddit-alien'
              type='font-awesome'
              color='#FF473D'
              size={63}
            />
            <Text style={styles.textTitleStyle}>  Welcome!  </Text>
            <Text style={styles.textContentStyle}>  There's a Reddit community for every topic imaginable  </Text>

            <Text style={styles.textTitleStyle}>  Vote!  </Text>
            <Text style={styles.textContentStyle}>  on posts and help communities lift the best content to the top  </Text>

            <Text style={styles.textTitleStyle}>  Subscribe!  </Text>
            <Text style={styles.textContentStyle}>  to communities to fill this home feed with fresh posts  </Text>
          </View>

          <View style={styles.buttonGroup}>
            <Button style={{ flex: 1 }}>
              LOG IN
            </Button>
            <Button style={{ flex: 1 }}>
              SIGN UP
            </Button>
          </View>
        </View>



        <View >
          <Footer>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                  source={require('./../assets/icons/home_icons/34103.png')}
                  style={{ width: 28, height: 24 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                  source={require('./../assets/icons/Welcome_icons/747327.png')}
                  style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                  source={require('./../assets/icons/Welcome_icons/Message.png')}
                  style={{ width: 20, height: 18 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                  source={require('./../assets/icons/Welcome_icons/Email.png')}
                  style={{ width: 24, height: 16 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                  source={require('./../assets/icons/Welcome_icons/Person.png')}
                  style={{ width: 22, height: 23 }}
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
    paddingRight: 27,
    paddingLeft: 27,
  }
};

export default Welcome;
