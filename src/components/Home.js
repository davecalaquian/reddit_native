import React from 'react';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, Footer, Spinner } from './common';
import CardSection from './CardSection';
import SmallCard from './SmallCard';


class Home extends React.Component {
  state = {
      redditPost: [],
      loading: true
  }

  componentWillMount() {
    axios.get('https://reddit.com/r/all.json')
    .then(res => this.setState({
      redditPost: res.data.data.children,
      loading: false }));
  }

  renderContent() {
    let count = 0;
    return this.state.redditPost.map((redditPost) => {
      count++;
      if (count <= 5) {
        switch (count) {
          case 1:
            return (
              <CardSection
              key={redditPost.data.name}
              data={redditPost}
              styleType={1}
              />
            );

          case 2:
            return (
              <CardSection
              key={redditPost.data.name}
              data={redditPost}
              styleType={2}
              />
            );

            case 3:
              return (
                <View style={{ flexDirection: 'column' }}>
                  <SmallCard
                  key={redditPost.data.name}
                  data={redditPost}
                  style={1}
                  subreddit={redditPost.data.subreddit}
                  />
                </View>
              );
            case 4:
              return (
                <View style={{ flexDirection: 'column' }}>
                  <SmallCard
                  key={redditPost.data.name}
                  data={redditPost}
                  style={2}
                  subreddit={redditPost.data.subreddit}
                  />
                </View>
              );

            case 5:
              return (
                <CardSection
                key={redditPost.data.name}
                data={redditPost}
                styleType={5}
                />
              );

            default:
              break;
        }
      } else {
        count = 0;
      }
    });
  }

  render() {
    return (
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
        <View style={{ justifyContent: 'center', flex: 2 }}>
          <Spinner size="large" />
        </View> :
        <ScrollView>
          {this.renderContent()}
          <View style={{ height: 100 }}/>
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


const styles = {
  addWidgetStyle: {
    position: 'absolute',
    right: 20,
    bottom: 75
  }
};

export default Home;
