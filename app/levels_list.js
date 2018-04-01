import React from 'react';
import { StyleSheet, View } from 'react-native';
import LevelTitle from './level_title';
import Level from './level';

export default class LevelsList extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true, levels: [], levelSelected: false, levelObj: null}
  }

  pickLevel(id) {
    this.setState({
      isLoading: true
    });

    var url = 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/level/' + id.toString()

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          levels: this.state.levels,
          levelSelected: true,
          levelObj: responseJson
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

  }

  componentDidMount(){
    return fetch('http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/levels')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          levels: responseJson.levels,
          levelSelected: false,
          levelObj: null
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if (this.state.levelObj) {
      return <Level levelObj={this.state.levelObj} />;
    }
    return (
        <View style={{flex: 1}}>
          {this.state.levels.map(level => <LevelTitle key={level.id} id={level.id} name={level.name} pickLevel={this.pickLevel.bind(this)}></LevelTitle>)}
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