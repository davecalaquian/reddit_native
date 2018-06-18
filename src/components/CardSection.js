import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
import { Icon } from 'react-native-elements';
import CardHeader  from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

class CardSection extends Component {
  constructor(props){
      super();
      this.state = {
        // bar: ''
      }
      this.conditionalStyle = this.conditionalStyle.bind(this);
  }

  conditionalStyle(){
    const { TileStyleYellow, TileStyleBlue } = dynamicStyle;
    const { title, author, subreddit_name_prefixed, thumbnail } = this.props.data.data;

      switch (this.props.styleType) {
        case 1:
        return (
            <View style={TileStyleYellow} >
                <View style={{ position: 'absolute', right: 10, top: 10}}>
                  <Icon
                    name='dots-three-vertical'
                    type='entypo'
                    color='#111111'
                     />
                </View>
                <CardHeader namePrefix={subreddit_name_prefixed} title={title} user={author} styleType={this.props.styleType} />
                <CardBody title={title} thumbnail={thumbnail} styleType={this.props.styleType} />
            </View>);
        break;
        case 2:
        return (
          <View style={TileStyleBlue} >
              <View style={{ position: 'absolute', right: 10, top: 10}}>
                <Icon
                  name='dots-three-vertical'
                  type='entypo'
                  color='#FFFFFF'
                   />
              </View>
              <CardHeader namePrefix={subreddit_name_prefixed} title={title} user={author} styleType={this.props.styleType} />
              <CardBody title={title} thumbnail={thumbnail} styleType={this.props.styleType} />
          </View>);
        break;
        case 3:
        return (
          <View style={TileStyleBlue} >
              <View style={{ position: 'absolute', right: 10, top: 10}}>
                <Icon
                  name='dots-three-vertical'
                  type='entypo'
                  color='#FFFFFF'
                   />
              </View>
              <CardBody title={title} thumbnail={thumbnail} styleType={this.props.styleType} />
              <CardHeader namePrefix={subreddit_name_prefixed} title={title} user={author} styleType={this.props.styleType} />
          </View>);
        break;
        default:
      }
  }

  render() {
    const  { leftbtn, rightbtn, cardContainStyle } = styles;
    return (
      <View >

            {this.conditionalStyle()}

            <View>
              <CardFooter />
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

const dynamicStyle = {
  TileStyleYellow: {
    backgroundColor: '#FFD93E',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    height: 247,
  },
  TileStyleBlue: {
    backgroundColor: '#0074CD',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    height: 247,
  },
}

const styles = {
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
