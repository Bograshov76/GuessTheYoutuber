import React from 'react';
import { View, Alert } from 'react-native';
import { Container, Footer, FooterTab, Button, Text, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundImage from './background_image';
import { GetCoins } from '../lib/coins';
import { SubscribeToEvent, UnSubscribeFromEvent } from '../lib/events';
import { GetNavObject } from '../lib/navigation';

export default class FooterMenu extends React.Component {
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
    SubscribeToEvent('change', 'FooterMenu', this.coinsChanged.bind(this));
  }

  componentWillUnmount() {
    UnSubscribeFromEvent('change', 'FooterMenu');
  }

  navigateTo(screen) {
    const navObject = GetNavObject();
    const { navigate } = navObject;
    navigate(screen);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ flex: 1, justifyContent: "center", alignItems: "stretch"}}>
          <View style={{flex: 1, justifyContent: "flex-end", alignItems: "stretch"}}>
                <FooterTab style={{ backgroundColor: '#fafafa' }}>
                  <Button vertical onPress={this.navigateTo.bind(this, 'Home')}>
                    <Icon name="home" size={30} />
                  </Button>
                  <Button vertical onPress={this.navigateTo.bind(this, 'LevelsList')}>
                    <Icon name="bars" size={30} color={this.props[0] === 'levels_list' ? '#e6172e' : undefined} />
                  </Button>
                  <Button badge vertical>
                    <Badge success style={{ top: 6, left: 13 }}><Text>{this.state.coins}</Text></Badge>
                    <Icon name="money" size={30} style={{ top: -7.7 }} />
                  </Button>
                </FooterTab>
          </View>
        </Container>
      </View>
    )
  }
}
