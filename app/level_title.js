import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LevelTitle extends React.Component {

  render() {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row'
  }
});