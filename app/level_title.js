import React from 'react';
import { StyleSheet, Alert, Text, Button, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';

export default class LevelTitle extends React.Component {
  pickLevel(id) {
    this.props.pickLevel(id)
  }

  render() {
    return (
      <TouchableHighlight onPress={this.pickLevel.bind(this, this.props.id)} style={{height: 100, width: 190}}>
      <Card>
        <CardItem>
          <Body>
            <Text>
               {this.props.name}
            </Text>
          </Body>
        </CardItem>
      </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    flex: 1
  }
});