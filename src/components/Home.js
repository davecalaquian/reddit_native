import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity , Image } from 'react-native';
import { Header, Footer, Spinner } from './common';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import CardSection from './CardSection';


class Home extends React.Component {
  state = {
      redditPost: [],
      loading: true,
  }

  componentWillMount(){
    axios.get('https://api.reddit.com/')
    .then(res => this.setState({ redditPost: res.data.data.children, loading: false }));
  }

  renderContent(){
    return this.state.redditPost.map( redditPost =>
      <CardSection
          key={ redditPost.data.subreddit_id }
          data={ redditPost } />
    );
  }

  render(){
    return(
      <View style={{ flex: 1 }}>
      <View>
        <Header style={{ height: 72 }}>
        <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='menu'
                color='#ffffff'
              />
        </TouchableOpacity>
        <View style={{ flex: 3, alignItems: 'center' }}>
            <Image
                source={require('./../assets/image/reddit_logo.png')}
                style={{ height: 20, width: 60 }}
            />
        </View>
        <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='search'
                color='#ffffff'
              />
        </TouchableOpacity>
        </Header>
      </View>

      {
        this.state.loading ?
        <View style={{ justifyContent: 'center', flex: 2}}>
          <Spinner size="large" />
        </View> :
        <ScrollView>
          {this.renderContent()}
        </ScrollView>
      }


      <TouchableOpacity style={styles.addWidgetStyle}>

      <Image
          source={require('../assets/image/addButton.png')}
          style={{ width: 54, height: 54 }}
          />
      </TouchableOpacity>

        <View>
          <Footer>
            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='reddit-alien'
                type='font-awesome'
                color='#5f6063'
                size={28}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}>
              <Icon
                name='grid'
                type='simple-line-icon'
                color='#FF473D'
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


const styles= {
  addWidgetStyle: {
    position: 'absolute',
    right: 20,
    bottom: 75
  }
}

export default Home;
