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
  };

  componentWillMount() {
    axios.get('https://reddit.com/r/all.json').then(res =>
      this.setState({
        redditPost: res.data.data.children,
        loading: false
      })
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
          //
          // case 3:
          //   return (
          //     <View key={redditPost.data.name} style={{ flexDirection: 'column', width: 176 }}>
          //       <SmallCard
          //       data={redditPost}
          //       style={3}
          //       subreddit={redditPost.data.subreddit}
          //       />
          //     </View>
          //   );

          case 4:
            return (
              //Container
              <View
                key={redditPost.data.name}
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1, marginBottom: 10, marginRight: 10 }}>
                    <SmallCard data={redditPost} style={1} subreddit={redditPost.data.subreddit} />
                  </View>

                  <View style={{ flex: 1, marginRight: 10 }}>
                    <SmallCard data={redditPost} style={2} subreddit={redditPost.data.subreddit} />
                  </View>
                </View>

                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}>
                    <SmallCard data={redditPost} style={4} subreddit={redditPost.data.subreddit} />
                  </View>

                  <View style={{ flex: 1 }}>
                    <SmallCard data={redditPost} style={3} subreddit={redditPost.data.subreddit} />
                  </View>
                </View>
              </View>
            );

          case 5:
            return <CardSection key={redditPost.data.name} data={redditPost} styleType={5} />;

          default:
            break;
        }
      }
    });
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
