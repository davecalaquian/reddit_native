import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
import { Tile, Card } from 'react-native-elements';
import CardHeader  from './CardHeader';
import CardFooter from './CardFooter';

class CardSection extends Component {
  constructor(props){
    super();
    // console.log(props.data.data.title);
    this.conditionalStyle = this.conditionalStyle.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  conditionalStyle(){
    const { TileStyleYellow, TileStyleBlue } = dynamicStyle;
    switch (this.props.styleProps) {
      case 1:
        // console.log("1");
        return TileStyleYellow;
      break;
      case 2:
        return TileStyleBlue;
        // console.log("2");
      break;
      default:
    }

  }

  renderContent(){

  }

  render() {
    const  { leftbtn, rightbtn, cardContainStyle, imageStyle } = styles;
    const { title, author, subreddit_name_prefixed, thumbnail } = this.props.data.data;
    return (
      <View>
          <View style={this.conditionalStyle()} >
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
                        style={{ width: 54, height: 54, borderRadius: 9 }}
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

const dynamicStyle = {
  TileStyleYellow: {
    backgroundColor: '#FFD93E',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    height: 250,
  },
  TileStyleBlue: {
    backgroundColor: '#0074CD',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    height: 250,
  },
}

const styles = {

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
