import React from 'react';
import { View } from 'react-native';

class CardFooter extends React.Component {
  constructor() {
    super();
    this.renderStyle = this.renderStyle.bind(this);
  }

  renderStyle() {
    const { containerStyle, containerStyleTwo } = styles;

    switch (this.props.styleType) {
      case 5:
        return <View style={containerStyleTwo}>{this.props.children}</View>;
      default:
        return <View style={containerStyle} />;
    }
  }

  render() {
    return this.renderStyle();
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: 10,
    marginBottom: 13,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff'
  },
  containerStyleTwo: {
    height: 145,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: 10,
    marginBottom: 13,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 100,
    backgroundColor: '#fff'
  }
};

export default CardFooter;
