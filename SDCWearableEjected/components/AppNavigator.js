import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Setup from './Setup.js';
import  MainScreen from './MainScreen';
 const AppNavigator = createStackNavigator({
  Setup: {
    screen: Setup,
    navigationOptions: {
      header: null
     } 
  }, 
  MainScreen:{
    screen: MainScreen,
    navigationOptions: {
      header: null
     }
  }  
});

export default createAppContainer(AppNavigator);