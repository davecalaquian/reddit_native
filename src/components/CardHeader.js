import React from "react";
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';


class CardHeader extends React.Component {
  constructor(props){
    super();
    this.renderStyle = this.renderStyle.bind(this);
  }

  renderStyle(){
    const { namePrefix, title, user } = this.props;
    switch (this.props.styleType) {
      case 1:
      return (
          <View style={{ flex: 5 }} >
          <Text style={{ color: '#111111', fontSize: 15 }}>  { namePrefix } </Text>
          <Text style={{color: '#4A4A4A', fontSize: 12}}>  u/{ user }  </Text>
        </View>
      );
      break;
      case 2:
      return (
          <View style={{ flex: 5 }} >
            <Text style={{ color: '#FFFFFF', fontSize: 15 }}>  { namePrefix } </Text>
            <Text style={{color: '#FFFFFF', fontSize: 12}}>  u/{ user }  </Text>
          </View>
      );
      break;
      case 5:
      return (
          <View style={{ flex: 5 }} >
            <Text style={{ color: '#111111', fontSize: 15 }}>  { namePrefix } </Text>
            <Text style={{color: '#4A4A4A', fontSize: 12}}>  u/{ user }  </Text>
          </View>
      );
      break;
      default:

    }
  }

  render(){
    const { containerStyle } = styles;

    return(
      <View style={containerStyle}>
        <View style={{ flex: 1 }}>
          <Avatar
            size="small"
            rounded
            source={{uri: "https://image.winudf.com/v2/image/Y29tLmhhc2Jyby5FbG1vTG92ZTJMZWFybl9pY29uXzBfYjFiOWNlOQ/icon.png?w=170&fakeurl=1&type=.png"}}
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
    paddingRight: 5,
  }
}



export default CardHeader;
