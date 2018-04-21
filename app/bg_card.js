import React from 'react';
import { View } from 'react-native';
import { Container, Footer, FooterTab, Button, Text, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundImage from './background_image';
import { GetCoins } from '../lib/coins';
import { SubscribeToEvent, UnSubscribeFromEvent } from '../lib/events';

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
    SubscribeToEvent('change', 'BgCard', this.coinsChanged.bind(this));
  }

  componentWillUnmount() {
    UnSubscribeFromEvent('change', 'BgCard');
  }

  navigateTo(screen) {
    this.props.navigator.push(screen);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ flex: 1, justifyContent: "center", alignItems: "stretch"}}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
              <BackgroundImage style={{flex: 1}}>
                <View style={{ flex: 9, backgroundColor: 'transparent' }}>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', padding: 20 }}>
                    {this.props.children}
                  </View>
                </View>
                <Footer>
                  <FooterTab style={{ backgroundColor: '#fafafa' }}>
                    <Button vertical onPress={() => this.navigateTo('home')}>
                      <Icon name="home" size={30} />
                    </Button>
                    <Button vertical onPress={() => this.navigateTo('levels_list')}>
                      <Icon name="bars" size={30} color={this.props.navigator[0] === 'levels_list' ? '#e6172e' : undefined} />
                    </Button>
                    <Button badge vertical>
                      <Badge success style={{ top: 6, left: 13 }}><Text>{this.state.coins}</Text></Badge>
                      <Icon name="money" size={30} style={{ top: -7.7 }} />
                    </Button>
                  </FooterTab>
                </Footer>
              </BackgroundImage>
          </View>
        </Container>
      </View>
    )
  }
}
