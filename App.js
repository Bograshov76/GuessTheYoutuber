import React from 'react';
import { AppRegistr, Alert } from 'react-native';
import { Font, AppLoading } from 'expo';

import { Navigation } from 'react-native-navigation';
import Screens from './screens';

import {
  createStackNavigator,
} from 'react-navigation';


const App = createStackNavigator(Screens);

export default App;


