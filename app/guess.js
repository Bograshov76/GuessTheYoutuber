import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Guess extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://yt3.ggpht.com/-rJq9gk1QIis/AAAAAAAAAAI/AAAAAAAAAAA/Kx4wkvKOfxY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'}}
        />
      </View>
    );
  }
}