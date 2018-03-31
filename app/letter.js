import React from 'react';
import { StyleSheet, Text, Alert } from 'react-native';

export default class Letter extends React.Component {
  onPress() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <Text style={styles.letter} onPress={this.onPress}>{this.props.value}</Text>
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