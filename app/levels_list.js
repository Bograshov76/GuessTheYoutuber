import React from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native';
import { List, ListItem, Button, Text, Icon } from 'native-base';
import BgCard from './bg_card';
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
        <BgCard>
          <View>
            <ScrollView contentContainerStyle={{ flex: 0 }}>
              {this.state.levels.map(level =>
                <Button key={level.id} iconLeft rounded success style={styles.btn}>
                  <Icon name='star' />
                  <Text>{level.name}</Text>
                </Button>
              )}
            </ScrollView>
          </View>
        </BgCard>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 10
  }
});