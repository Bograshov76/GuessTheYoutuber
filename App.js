import React from 'react';
import { View } from 'react-native';
import { Footer } from 'native-base';
import {
  createStackNavigator,
} from 'react-navigation';


import BackgroundImage from './app/background_image';
import Screens from './screens';
import FooterMenu from './app/footer_menu';



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
            <FooterMenu/>
          </Footer>
        </View>
    );
  }
}

