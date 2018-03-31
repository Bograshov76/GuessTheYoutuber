import React from 'react';
import { StyleSheet, View } from 'react-native';
import Letter from './letter.js';

export default class AnswerBox extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Letter value={'L'} />
        <Letter value={'A'} />
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row'
  }
});