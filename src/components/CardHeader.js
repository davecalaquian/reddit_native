import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

class CardHeader extends React.Component {
  constructor(props) {
    super();
    this.renderStyle = this.renderStyle.bind(this);
  }

  renderStyle() {
    const { namePrefix, user } = this.props;
    switch (this.props.styleType) {
      case 1:
        return (
          <View style={{ flex: 5 }}>
            <Text style={{ color: '#111111', fontSize: 15 }}> {namePrefix} </Text>
            <Text style={{ color: '#4A4A4A', fontSize: 12 }}> u/{user} </Text>
          </View>
        );
      case 2:
        return (
          <View style={{ flex: 5 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 15 }}> {namePrefix} </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 12 }}> u/{user} </Text>
          </View>
        );
      case 5:
        return (
          <View style={{ flex: 5 }}>
            <Text style={{ color: '#111111', fontSize: 15 }}> {namePrefix} </Text>
            <Text style={{ color: '#4A4A4A', fontSize: 12 }}> u/{user} </Text>
          </View>
        );
      default:
    }
  }

  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={{ flex: 1 }}>
          <Avatar
            size="small"
            rounded
            source={{
              uri: this.props.userIcon ? (this.props.userIcon) : ("https://pre00.deviantart.net/2e02/th/pre/f/2016/349/3/1/grey_background_related_keywords_suggestions_grey__by_anupammajhi-darqb5u.jpg")  
            }}
            activeOpacity={0.7}
          />
        </View>

        {this.renderStyle()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5
  }
};

export default CardHeader;
