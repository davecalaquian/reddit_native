import React from "react";
import { View, Text } from 'react-native';

class CardFooter extends React.Component{
  constructor(props){
    super();
    this.renderStyle = this.renderStyle.bind(this);
  }

  renderStyle(){
    const { containerStyle, containerStyleTwo } = styles;

    switch (this.props.styleType) {
      case 3:
        return <View style={containerStyleTwo}>{this.props.children}</View>;
      break;
      default:
      return <View style={containerStyle}/>  ;

    }
  }

  render(){
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
    marginBottom: 5,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  containerStyleTwo: {
    height: 145,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 100,
    backgroundColor: '#fff',
  }

}



export default CardFooter;
