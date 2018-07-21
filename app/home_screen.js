import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import ChangingImage from './changing_image';
import { Font, AppLoading } from 'expo';
import BgCard from '../app/bg_card';
import Welcome from '../app/welcome';

export default class HomeScreen extends React.Component {
  async componentWillMount() {
    this.setState({allLoaded: false});
    await this._loadAssetsAsync();
    this.setState({allLoaded: true});
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      franklin_gothic_demi_cond_regular: require('../assets/fonts/Franklin-Gothic-Demi-Cond-Regular.ttf'),
      KBSticktoIt: require('../assets/fonts/KBSticktoIt.ttf'),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
  };

  render() {
    if (!this.state.allLoaded) {
      return <AppLoading />;
    }

    const { navigate } = this.props.navigation;

    return (
        <BgCard navigation={this.props.navigation}>
          <Welcome navigation={this.props.navigation} style={{ flex: 1, justifyContent: "center", alignItems: "stretch"}} />
        </BgCard>
      )
    
  }
}