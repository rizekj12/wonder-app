import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Splash from './src/pages/Splash';
import FacebookLogin from './src/pages/FacebookLogin';
import Registration from './src/pages/Registration';
import HomePage from './src/pages/HomePage';
import Signin from './src/pages/Signin';
import Profile from './src/pages/Profile';


const SplashStack = createSwitchNavigator (
  {
    Splash,
    FacebookLogin,
    Registration,
    Signin,
    Profile
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
    Signin,
    // Profile
  },
  {
    initialRouteName: "SplashStack"
  }
);

const App = createAppContainer(MainNavigator);

export default App