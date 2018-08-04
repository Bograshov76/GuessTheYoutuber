import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, Text, Icon } from 'native-base';

export default class LevelsList extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true, levels: []}
  }

  pickLevel(id) {
    this.setState({
      isLoading: true
    });

    var url = 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/level/' + id.toString()

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const { navigate } = this.props.navigation;
        navigate('Level', { levelObj: responseJson });
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
          levels: responseJson.levels
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
          <ScrollView contentContainerStyle={{ flex: 0 }}>
            {this.state.levels.map(level =>
              <Button key={level.id} iconLeft rounded success style={styles.btn}
                      onPress={() => this.pickLevel(level.id)}>
                <Icon name='star' />
                <Text>{level.name}</Text>
              </Button>
            )}
          </ScrollView>
        </View>
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