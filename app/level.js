import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';
import Guess from './guess';

export default class Level extends React.Component {
  render() {
    return (
        <View style={styles.view}>
          {this.props.levelObj.contents.map(content => 
            <Image style={styles.img} key={content.id} source={{uri: 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/' + content.image_path}}/>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    flex: 1
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  img: {
    width: 70,
    height: 70,
    margin: 1
  }
});