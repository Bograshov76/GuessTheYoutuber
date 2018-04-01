import React from 'react';
import { View, } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Container, Card, CardItem, Body } from 'native-base';
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
    asdsasdsasds
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    };
    return (
      <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
        <Container style={{ padding: 20, flex: 1, justifyContent: "center", alignItems: "stretch"}}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
            <Card style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
              <CardItem style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
                <Body style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
                  <Welcome style={{ flex: 1, justifyContent: "center", alignItems: "stretch"}} />
                </Body>
              </CardItem>
            </Card>
          </View>
        </Container>
      </View>
    );
  }
}
