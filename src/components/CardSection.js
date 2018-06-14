import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tile, Card } from 'react-native-elements';
import CardHeader  from './CardHeader'

class CardSection extends Component {
  render() {
    const  { TileStyle } = styles;

    return (
      <View style={TileStyle}>
          <CardHeader />
      </View>
    );
  }
}

const styles = {
    TileStyle: {
      backgroundColor: '#fff',
      padding: 5,
      marginLeft: 10,
      marginBottom: 10,
      marginRight: 10,
      borderRadius: 9,
      height: 337,
    },
};


export default CardSection;
