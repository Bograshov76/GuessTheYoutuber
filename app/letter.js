import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';


export default class Letter extends React.Component {
  onPress(key, value) {
    this.props.letterPressed(key, value);
  }

  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
        <Button borded dark style={styles.letter}
              onPress={this.onPress.bind(this, this.props.id, this.props.value)}>
          <Text>{this.props.value}</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  letter: {
    margin: 2,
    padding: 12,
    backgroundColor: '#eeeeee',
    width: 50,
    height: 50
  }
});