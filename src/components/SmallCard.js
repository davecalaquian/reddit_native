import React from 'react';
import numeral from 'numeral';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground } from 'react-native';

const SmallCard = (props) => (

        <View style={props.viewStyle}>
           <TouchableOpacity style={{ flex: 1 }}>
             <Text style={props.subStyle}>+ SUBSCRIBE</Text>
           </TouchableOpacity>
           <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
             <Text
               numberOfLines={3}
               ellipsizeMode="tail"
               style={props.textStyle}
             >
               {props.publicDescription}
             </Text>
           </View>
           <View style={{ flex: 2, flexDirection: 'row' }}>
             <View
              style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center' }}
             >
               <ImageBackground
                 style={props.imageStyle}
                 source={{ uri: props.imageSource }}
               />
             </View>
             <View style={{ flex: 2, flexDirection: 'column' }}>
               <Text style={props.urlStyle}>{props.subreddit}</Text>
               <Text style={props.countStyle}>
                 {numeral(props.subscribers).format('0.0a')} subscribers
               </Text>
             </View>
           </View>
         </View>
      );

export default SmallCard;
