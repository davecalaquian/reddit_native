import React from "react";
import { View, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';


const CardHeader = () => {
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

      <View style={{ flex: 5 }} >
        <Text>  Ahdul the Best  </Text>
        <Text>  creed95  </Text>
      </View>

      <View style={{ flex: 1 }}>
      <Icon
        name='dots-three-vertical'
        type='entypo'
         />
      </View>
    </View>
  );
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
