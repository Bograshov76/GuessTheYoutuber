import React from 'react';
import { AppRegistry } from 'react-native';
import { Font, AppLoading } from 'expo';
import Welcome from './app/welcome';
import LevelsList from './app/levels_list';
import Level from './app/level';
import Guess from './app/guess';
import BgCard from './app/bg_card';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  welcome: () => Welcome,
  levels_list: () => LevelsList,
  level: () => Level,
  guess: () => Guess
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
      KBSticktoIt: require('./assets/fonts/KBSticktoIt.ttf'),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
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
      <BgCard navigator={this.props.navigator}>
        <Welcome navigator={this.props.navigator} style={{ flex: 1, justifyContent: "center", alignItems: "stretch"}} />
      </BgCard>
    )
  }
}

AppRegistry.registerComponent('main', () => App);
