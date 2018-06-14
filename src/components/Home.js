import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity , Image } from 'react-native';
import { Header, Footer } from './common';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import CardSection from './CardSection';


class Home extends React.Component {
  state = {
      redditPost: [],
  }

  componentWillMount(){
    axios.get('https://api.reddit.com/')
    .then(res => this.setState({ redditPost: res.data.data.children }));
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
      <Header />

      <ScrollView >
        {this.renderContent()}
      </ScrollView>

      <TouchableOpacity style={styles.addWidgetStyle}>

      <Image
          source={require('../assets/image/addButton.png')}
          style={{ width: 54, height: 54 }}
          />
      </TouchableOpacity>
      <Footer />
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
