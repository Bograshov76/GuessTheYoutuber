import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LevelTitle from './level_title';


export default class LevelsList extends React.Component {
  constructor() {
    super();
    this.levels = [
      {
        "name": "Level 1",
        "id": "1"
      },
      {
        "name": "Level 2",
        "id": "2"
      },
      {
        "name": "Level 3",
        "id": "3"
      }
    ]
  }

  render() {
    return (
        <View>
          {this.levels.map(level => <LevelTitle key={level.id } id={level.id} name={level.name}></LevelTitle>)}    
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