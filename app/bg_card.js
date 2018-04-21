import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Card, CardItem, Body } from 'native-base';
import BackgroundImage from './background_image';
import { GetCoins, SubscribeToEvent, UnSubscribeFromEvent } from '../lib/coins'
import _ from 'lodash';

export default class BgCard extends React.Component {
  async coinsChanged() {
    var storageCoins = await GetCoins();
    this.setState({coins: storageCoins});
  }

  constructor() {
    super();
    this.state = {coins: '0'};
  }

  async componentDidMount() {
    var storageCoins = await GetCoins();
    this.setState({coins: storageCoins});
    SubscribeToEvent('change', this.coinsChanged.bind(this));
  }

  componentWillUnmount() {
    UnSubscribeFromEvent('change');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
        <Container style={{ padding: 20, flex: 1, justifyContent: "center", alignItems: "stretch"}}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
            <Card>
              <BackgroundImage style={{flex: 1}}>
                <CardItem style={{ backgroundColor: 'transparent', alignSelf: 'flex-start'}}>
                    <Body style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row'}}>
                       <Image source={require('../assets/img/coins.png')} />
                        <Text>{this.state.coins}</Text>
                    </Body>
                </CardItem>
                <CardItem style={{ flex: 1, backgroundColor:'transparent' }}>
                  <Body style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
                    {this.props.children}
                  </Body>
                </CardItem>
              </BackgroundImage>
            </Card>
          </View>
        </Container>
      </View>
    )
  }
}
