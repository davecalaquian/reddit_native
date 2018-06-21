import React from 'react';
import { View, Image, Text } from 'react-native';

class CardBody extends React.Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent() {
    const { title, thumbnail, styleType } = this.props;

    switch (styleType) {
      case 1:
        return (
          <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 20, paddingTop: 10, paddingRight: 10, textAlign: 'left' }}>
                {title}
              </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                source={{ uri: thumbnail }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            </View>
          </View>
        );

      case 2:
        return (
          <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                source={{ uri: thumbnail }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            </View>

            <View style={{ flex: 2, paddingLeft: 10 }}>
              <Text style={{ fontSize: 20, color: '#ffffff', paddingTop: 3, textAlign: 'justify' }}>
                {title}
              </Text>
            </View>
          </View>
        );
      case 5:
        return (
          <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                source={{ uri: thumbnail }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            </View>

            <View style={{ flex: 2, paddingLeft: 10 }}>
              <Text style={{ fontSize: 20, color: '#ffffff', paddingTop: 3, textAlign: 'justify' }}>
                {title}
              </Text>
            </View>
          </View>
        );
      default:
    }
  }
  render() {
    return this.renderContent();
  }
}

export default CardBody;
