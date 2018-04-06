import React from 'react';
import { View, AppRegistry, Text} from 'react-native';
import { Font, AppLoading } from 'expo';
import { Container, Card, CardItem, Body } from 'native-base';
import Welcome from './app/welcome';
import LevelsList from './app/levels_list';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  welcome: () => Welcome,
  levels_list: () => LevelsList
}));

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
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

class HomeScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  // static route = {
  //   navigationBar: {
  //     title: 'Home',
  //   }
  // }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
        <Container style={{ padding: 20, flex: 1, justifyContent: "center", alignItems: "stretch"}}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
            <Card style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
              <CardItem style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
                <Body style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
                  <Welcome navigator={this.props.navigator} style={{ flex: 1, justifyContent: "center", alignItems: "stretch"}} />
                </Body>
              </CardItem>
            </Card>
          </View>
        </Container>
      </View>
    )
  }
}

AppRegistry.registerComponent('main', () => App);
