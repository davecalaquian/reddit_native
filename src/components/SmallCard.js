import React, { Component } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

class SmallCard extends Component {

  constructor() {
    super();
    this.state = {
      sub_description: '',
      sub_image: 'http://i.imgur.com/3NtinwD.png',
      sub_subscribers: 0,
      loading: true
    };
  }

  componentWillMount() {
    axios.get(`https://api.reddit.com/r/${this.props.subreddit}/about`)
    .then(res => {
        const imgSrc = res.data.data.icon_img;
        if (imgSrc !== '') {
          this.setState({
          sub_description: res.data.data.public_description,
          sub_image: res.data.data.icon_img,
          sub_subscribers: res.data.data.subscribers
          });
        } else {
          this.setState({
          sub_description: res.data.data.public_description,
          sub_subscribers: res.data.data.subscribers
          });
        }
    });
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }


  render() {
    if (this.state.loading) {
      return (<ActivityIndicator size="small" color="#00ff00" hidesWhenStopped={this.state.loading} />);
    } else {
    if (this.props.style === 1) {
      return (
          <View style={styles.viewStyle1}>
            <TouchableOpacity style={{ flex: 2 }}>
              <Text style={styles.subStyle1}>+ SUBSCRIBE</Text>
            </TouchableOpacity>
            <Text
              style={styles.textStyle1}
              numberOfLines={2}
              ellipsizeMode='tail'
            >
            {this.state.sub_description}
            </Text>
            <View style={{ flex: 2, flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: this.state.sub_image }}
                />
              </View>
              <View style={{ flex: 2 }}>
                  <Text style={{ flex: 2, color: '#fff' }}>r/{this.props.subreddit}</Text>
                  <Text style={styles.countStyle1}>
                    {numeral(this.state.sub_subscribers).format('0.0a')} subscribers
                  </Text>
                </View>
              </View>
          </View>
      );
    }
      return (
        <View style={styles.viewStyle2}>
          <TouchableOpacity style={{ flex: 2 }}>
            <Text style={styles.subStyle2}>+ SUBSCRIBE</Text>
          </TouchableOpacity>
          <Text
            style={styles.textStyle2}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
          {this.state.sub_description}
          </Text>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Image
                style={styles.imageStyle}
                source={{ uri: this.state.sub_image }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ flex: 2 }}>r/{this.props.subreddit}</Text>
              <Text style={styles.countStyle2}>
                {numeral(this.state.sub_subscribers).format('0.0a')} subscribers
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }

}


// const SmallCard = (props) => {
//   const {
//     viewStyle1,
//     textStyle1,
//     viewStyle2,
//     textStyle2,
//     subStyle1,
//     subStyle2 } = styles;
//
//   if (props.style === 1) {
//     return (
//         <View style={viewStyle1}>
//           <TouchableOpacity>
//             <Text style={subStyle1}>+ SUBSCRIBE</Text>
//           </TouchableOpacity>
//           <Text style={textStyle1}>/r/{props.data.data.subreddit}</Text>
//         </View>
//     );
//   }
//     return (
//       <View style={viewStyle2}>
//         <TouchableOpacity>
//           <Text style={subStyle2}>+ SUBSCRIBE</Text>
//         </TouchableOpacity>
//         <Text style={textStyle2}>/r/{props.data.data.subreddit}</Text>
//       </View>
//     );
// };

const styles = {
  imageStyle: {
    height: 28,
    width: 28,
    borderRadius: 50
  },
  viewStyle1: {
    height: 148,
    width: 176,
    padding: 20,
    backgroundColor: '#0074CD',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  subStyle1: {
    color: '#fff',
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 18
  },
  textStyle1: {
    color: '#fff',
    letterSpacing: 0,
    lineHeight: 22,
    flex: 3
  },
  countStyle1: {
    color: '#fff',
    fontSize: 9,
    opacity: 0.5,
    flex: 1
  },
  countStyle2: {
    color: '#000',
    fontSize: 9,
    opacity: 0.5,
    flex: 1
  },
  viewStyle2: {
    height: 148,
    width: 176,
    padding: 20,
    backgroundColor: '#FFD93E',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  subStyle2: {
    color: '#000',
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 18
  },
  textStyle2: {
    color: '#000',
    letterSpacing: 0,
    lineHeight: 22,
    flex: 3
  }
};

export default SmallCard;
