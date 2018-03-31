import React from 'react';
import { View, } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import Welcome from './app/welcome';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      franklin_gothic_demi_cond_regular: require('./assets/fonts/Franklin-Gothic-Demi-Cond-Regular.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    };
    return (
      <View style={{ flex: 1, backgroundColor: '#ecb7b7' }}>
        <Container style={{padding: 20, flex: 1}}>
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Welcome style={{flex: 1}} />
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }
}
