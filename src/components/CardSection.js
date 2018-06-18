import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
import { Tile, Card } from 'react-native-elements';
import CardHeader  from './CardHeader';
import CardFooter from './CardFooter';

class CardSection extends Component {
  constructor(props){
    super();
    // console.log(props.data.data.title);
  }

  render() {
    const  { TileStyle, leftbtn, rightbtn, cardContainStyle, imageStyle } = styles;
    const { title, author, subreddit_name_prefixed, thumbnail } = this.props.data.data;
    return (
      <View>
          <View style={TileStyle} >
              <CardHeader namePrefix={subreddit_name_prefixed} title={title} user={author}/>
          </View>

          <View>
            <CardFooter />
          </View>

          <View style={imageStyle}>
              <Image
                  source={{uri: thumbnail }}
                  style={{ width: 100, height: 100 }}
                  />
          </View>

          <View style={cardContainStyle}>
            <View style={leftbtn}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/image/up-button.png')}
                        style={{ width: 54, height: 54, marginRight: 5}}
                        />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/image/down-button.png')}
                        style={{ width: 54, height: 54 }}
                        />
                </TouchableOpacity>
            </View>

            <View style={rightbtn}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/image/comment-button.png')}
                        style={{ width: 54, height: 54, marginRight: 5}}
                        />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/image/share-button.png')}
                        style={{ width: 54, height: 54 }}
                        />
                </TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
}

const styles = {
    TileStyle: {
      backgroundColor: '#FFD93E',
      padding: 5,
      marginLeft: 10,
      marginRight: 10,
      borderTopLeftRadius: 9,
      borderTopRightRadius: 9,
      height: 250,
    },
    imageStyle: {
      left: 30,
      top: 65,
      position: 'absolute',
    },
    cardContainStyle:{
      flexDirection: "row",
    },
    leftbtn: {
      position: 'absolute',
      left: 30,
      bottom: 25,
      flexDirection: 'row',
    },
    rightbtn: {
      position: 'absolute',
      right: 30,
      bottom: 25,
      flexDirection: 'row',
    }
};


export default CardSection;
