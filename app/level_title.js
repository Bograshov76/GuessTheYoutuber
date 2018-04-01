import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';

export default class LevelTitle extends React.Component {
  pickLevel(id) {
    this.props.pickLevel(id)
  }

  render() {
    return (
      <Card style={{height: 100, width: 190}}>
        <CardItem>
          <Body>
            <Text>
               {this.props.name}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Button
              onPress={this.pickLevel.bind(this, this.props.id)}
              title="Start Level"
              color="#ee0f0f"
              accessibilityLabel="Start the level!"
              style={styles.btn}
            />
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    flex: 1
  }
});