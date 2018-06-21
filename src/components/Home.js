import React from 'react';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, Footer, Spinner } from './common';
import CardSection from './CardSection';
import SmallCard from './SmallCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      redditPost: [],
      redditUser: '',
      loading: true,
      popularSubs: []
    };
  }


  componentWillMount() {
    axios.get('https://reddit.com/r/all.json').then(res => {
      this.setState({
        redditPost: res.data.data.children
      });
    }
    );

    axios.get('https://www.reddit.com/subreddits.json').then(res => {
      this.setState({
        popularSubs: res.data.data.children,
        loading: false
      });
    });
  }


  renderSmallCard() {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 10
          }}
        >
          <View style={{ flex: 1, flexDirection: 'column', marginRight: 10 }}>
            <View style={{ flex: 1, marginBottom: 10 }}>
              <SmallCard
                publicDescription={this.state.popularSubs[0].data.public_description}
                subreddit={this.state.popularSubs[0].data.url}
                imageSource={this.state.popularSubs[0].data.icon_img}
                subscribers={this.state.popularSubs[0].data.subscribers}
                viewStyle={{
                  height: 148,
                  backgroundColor: '#0074CD',
                  borderRadius: 8,
                  padding: 20
                 }}
                 imageStyle={{
                   height: 28,
                   width: 28,
                   overflow: 'hidden',
                   borderRadius: 50
                 }}
                 subStyle={{
                   color: '#fff',
                   fontSize: 12,
                   letterSpacing: 0.5,
                   lineHeight: 18
                 }}
                 textStyle={{
                   color: '#fff',
                   letterSpacing: 0,
                   fontSize: 12
                 }}
                 urlStyle={{
                   color: '#fff',
                   letterSpacing: 0,
                   lineHeight: 22,
                   fontSize: 12,
                   flex: 1
                 }}
                 countStyle={{
                   color: '#fff',
                   fontSize: 9,
                   opacity: 0.5,
                   flex: 1
                 }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <SmallCard
                publicDescription={this.state.popularSubs[1].data.public_description}
                subreddit={this.state.popularSubs[1].data.url}
                imageSource={this.state.popularSubs[1].data.icon_img}
                subscribers={this.state.popularSubs[1].data.subscribers}
                viewStyle={{
                  height: 148,
                  backgroundColor: '#FFD93E',
                  borderRadius: 8,
                  padding: 20
                 }}
                 imageStyle={{
                   height: 28,
                   width: 28,
                   overflow: 'hidden',
                   borderRadius: 50
                 }}
                 subStyle={{
                   color: '#000',
                   fontSize: 12,
                   letterSpacing: 0.5,
                   lineHeight: 18
                 }}
                 textStyle={{
                   color: '#000',
                   letterSpacing: 0,
                   fontSize: 12
                 }}
                 urlStyle={{
                   color: '#000',
                   letterSpacing: 0,
                   lineHeight: 22,
                   fontSize: 12,
                   flex: 1
                 }}
                 countStyle={{
                   color: '#000',
                   fontSize: 9,
                   opacity: 0.5,
                   flex: 1
                 }}
              />
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1 }}>
              <View>
                <Image
                  style={{
                    height: 153,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                }}
                  source={{ uri: this.state.popularSubs[2].data.icon_img }}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <SmallCard
                publicDescription={this.state.popularSubs[2].data.public_description}
                subreddit={this.state.popularSubs[2].data.url}
                imageSource={this.state.popularSubs[2].data.icon_img}
                subscribers={this.state.popularSubs[2].data.subscribers}
                viewStyle={{
                  height: 155,
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  padding: 20
                 }}
                 imageStyle={{
                   height: 28,
                   width: 28,
                   overflow: 'hidden',
                   borderRadius: 50
                 }}
                 subStyle={{
                   color: '#000',
                   fontSize: 12,
                   letterSpacing: 0.5,
                   lineHeight: 18
                 }}
                 textStyle={{
                   color: '#000',
                   letterSpacing: 0,
                   fontSize: 12
                 }}
                 urlStyle={{
                   color: '#000',
                   letterSpacing: 0,
                   lineHeight: 22,
                   fontSize: 12,
                   flex: 1
                 }}
                 countStyle={{
                   color: '#000',
                   fontSize: 9,
                   opacity: 0.5,
                   flex: 1
                 }}
              />
            </View>
          </View>

        </View>
          );
    }


  renderContent() {
    let count = 0;
    return this.state.redditPost.map(redditPost => {
      count++;
      if (count <= 5) {
        switch (count) {
          case 1:
            return <CardSection key={redditPost.data.name} data={redditPost} styleType={1} />;

          case 2:
            return <CardSection key={redditPost.data.name} data={redditPost} styleType={2} />;

          case 3:

            return (
              <View key={redditPost.data.name}>
                {this.renderSmallCard()}
              </View>);

          case 5:
            return <CardSection key={redditPost.data.name} data={redditPost} styleType={5} />;

          default:
            break;
        }
      }
      // else {
      //   count = 0;
      // }
    }
  );
}


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header style={{ height: 72 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Icon name="menu" color="#ffffff" />
            </TouchableOpacity>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <Image
                source={require('./../assets/image/reddit_logo.png')}
                style={{ height: 20, width: 60 }}
              />
            </View>
            <TouchableOpacity style={{ flex: 1 }}>
              <Icon name="search" color="#ffffff" />
            </TouchableOpacity>
          </Header>
        </View>

        {this.state.loading ? (
          <View style={{ justifyContent: 'center', flex: 2 }}>
            <Spinner size="large" spinnerActivity={this.state.loading} />
          </View>
        ) : (
          <ScrollView>
            {this.renderContent()}
            <View style={{ height: 100 }} />
          </ScrollView>
        )}

        <TouchableOpacity style={styles.addWidgetStyle}>
          <Image
            source={require('../assets/image/addButton.png')}
            style={{ width: 54, height: 54 }}
          />
        </TouchableOpacity>

        <View>
          <Footer>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./../assets/icons/home_icons/34103.png')}
                style={{ width: 28, height: 24 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./../assets/icons/home_icons/747327.png')}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./../assets/icons/home_icons/Message.png')}
                style={{ width: 20, height: 18 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./../assets/icons/home_icons/Email.png')}
                style={{ width: 24, height: 16 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('./../assets/icons/home_icons/Person.png')}
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
  addWidgetStyle: {
    position: 'absolute',
    right: 20,
    bottom: 75
  }
};

export default Home;
