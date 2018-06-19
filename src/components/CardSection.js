import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

class CardSection extends Component {
  constructor(props) {
    super();
    this.conditionalStyle = this.conditionalStyle.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  conditionalStyle() {
    const { TileStyleYellow, TileStyleBlue, TileStyle } = dynamicStyle;
    const { title, author, subreddit_name_prefixed, thumbnail } = this.props.data.data;

    switch (this.props.styleType) {
      case 1:
        return (
          <View style={TileStyleYellow}>
            <View style={{ position: 'absolute', right: 10, top: 10 }}>
              <Icon name="dots-three-vertical" type="entypo" color="#111111" />
            </View>
            <CardHeader
              namePrefix={subreddit_name_prefixed}
              title={title}
              user={author}
              styleType={this.props.styleType}
            />
            <CardBody title={title} thumbnail={thumbnail} styleType={this.props.styleType} />
          </View>
        );
      case 2:
        return (
          <View style={TileStyleBlue}>
            <View style={{ position: 'absolute', right: 10, top: 10 }}>
              <Icon name="dots-three-vertical" type="entypo" color="#FFFFFF" />
            </View>
            <CardHeader
              namePrefix={subreddit_name_prefixed}
              title={title}
              user={author}
              styleType={this.props.styleType}
            />
            <CardBody title={title} thumbnail={thumbnail} styleType={this.props.styleType} />
          </View>
        );
      case 5:
        return (
          <View style={TileStyle}>
            <ImageBackground
              source={{ uri: this.props.data.data.preview.images[0].source.url }}
              style={{ height: 180, borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
              imageStyle={{ borderTopLeftRadius: 9, borderTopRightRadius: 9, opacity: 0.5 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  paddingTop: 30,
                  paddingLeft: 20,
                  paddingRight: 25
                }}
              >
                {title}
              </Text>
            </ImageBackground>

            <View style={{ position: 'absolute', right: 10, top: 10 }}>
              <Icon name="dots-three-vertical" type="entypo" color="#FFFFFF" />
            </View>
          </View>
        );
      default:
    }
  }

  renderFooter() {
    const { title, author, subreddit_name_prefixed } = this.props.data.data;

    switch (this.props.styleType) {
      case 5:
        return (
          <CardFooter styleType={this.props.styleType}>
            <CardHeader
              namePrefix={subreddit_name_prefixed}
              title={title}
              user={author}
              styleType={this.props.styleType}
            />
          </CardFooter>
        );
      default:
        return <CardFooter styleType={this.props.styleType} />;
    }
  }

  render() {
    const { leftbtn, rightbtn, cardContainStyle } = styles;
    return (
      <View>
        {this.conditionalStyle()}

        <View>{this.renderFooter()}</View>

        <View style={cardContainStyle}>
          <View style={leftbtn}>
            <TouchableOpacity>
              <Image
                source={require('../assets/image/up-button.png')}
                style={{ width: 54, height: 54, marginRight: 5 }}
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
                style={{ width: 54, height: 54, marginRight: 5 }}
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
    height: 247
  },
  TileStyleBlue: {
    backgroundColor: '#0074CD',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    height: 247
  },
  TileStyle: {
    backgroundColor: '#999999',
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    height: 180
  }
};

const styles = {
  cardContainStyle: {
    flexDirection: 'row'
  },
  leftbtn: {
    position: 'absolute',
    left: 30,
    bottom: 35,
    flexDirection: 'row'
  },
  rightbtn: {
    position: 'absolute',
    right: 30,
    bottom: 35,
    flexDirection: 'row'
  }
};

export default CardSection;
