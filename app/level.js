import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';

export default class Level extends React.Component {
  render() {
    return (
        <View>
          {this.props.levelObj.contents.map(content => <Text key={content.id}>{'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/' + content.image_path}</Text>)}
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
  }
});