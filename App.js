import React from 'react';
import { AppRegistr, Alert, View, Text } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Container, Footer } from 'native-base';
import BackgroundImage from './app/background_image';


import { Navigation } from 'react-native-navigation';
import Screens from './screens';
import BgCard from './app/bg_card';

import {
  createStackNavigator,
} from 'react-navigation';


const AppNavigation = createStackNavigator(Screens , {cardStyle: {backgroundColor: 'transparent'}});


export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1}}>
          <BackgroundImage style={{flex: 1}}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                <AppNavigation style={{ flex: 1, backgroundColor: 'transparent'}}/>
              </View>
          </BackgroundImage>
          <Footer>
            <BgCard/>
          </Footer>
        </View>
    );
  }
}

