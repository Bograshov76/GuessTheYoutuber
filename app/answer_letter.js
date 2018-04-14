import React from 'react';
import { StyleSheet, Text, Alert, View } from 'react-native';

export default class AnswerLetter extends React.Component {
  onPress(key, value, letterKey) {
    this.props.letterPressed(key, value, letterKey);
  }

  render() {
    return (
      <Text style={styles.letter} onPress={this.onPress.bind(this, this.props.id, this.props.value, this.props.letterKey)}>{this.props.value}</Text>
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