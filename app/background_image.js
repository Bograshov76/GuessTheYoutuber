import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default class BackgroundImage extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/img/background.png')} style={styles.backgroundImage}>
        {this.props.children}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});