import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Splash from './src/pages/Splash';
import FacebookLogin from './src/pages/FacebookLogin';
import Registration from './src/pages/Registration';
import HomePage from './src/pages/HomePage';
import Signin from './src/pages/Signin';

// ** I'd like api calls to be at the highest possible component **
// import api from './src/services/ApiConfig';


const SplashStack = createSwitchNavigator (
  {
    Splash,
    FacebookLogin,
    Registration,
    Signin
  },
  {
    initialRouteName: 'Splash'
  }
)

SplashStack.navigationOptions = {
  headerShown: false,
};

const MainNavigator = createStackNavigator (
  {
    SplashStack,
    HomePage,
    Signin
  },
  {
    initialRouteName: "SplashStack"
  }
);

const App = createAppContainer(MainNavigator);

export default App