import React from 'react';
import { StyleSheet, Text, Alert } from 'react-native';

export default class Letter extends React.Component {
  onPress(key, value) {
    this.props.letterPressed(key, value);
  }

  render() {
    return (
      <Text style={styles.letter} onPress={this.onPress.bind(this, this.props.id, this.props.value)}>{this.props.value}</Text>
    );
  }
}

const styles = StyleSheet.create({
  letter: {
    padding: 12,
    backgroundColor: '#eeeeee',
    width: 50,
    height: 50
  }
});