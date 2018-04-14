import React from 'react';
import { StyleSheet, View, Text, Button, Image, BackHandler, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header  } from 'native-base';
import Guess from './guess';
import _ from 'lodash'

export default class Level extends React.Component {
  imagePicked(id) {
    var guessObj = _.find(this.props.route.params.levelObj.contents, {'id': id});
    this.props.navigator.push('guess', {guessObj: guessObj});
  }

  render() {
    return (
        <View style={styles.imagesView}>
          {this.props.route.params.levelObj.contents.map(content => 
            <TouchableHighlight key={content.id} onPress={this.imagePicked.bind(this, content.id)}>
              <Image style={styles.img} 
                source={{uri: 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/' + content.image_path}}
              />
            </TouchableHighlight>
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
  imagesView: {
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