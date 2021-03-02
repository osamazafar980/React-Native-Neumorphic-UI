import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import NeumorphismScreen from './screens/Neumorphism'

const stackNavigator = createStackNavigator(
  {
    Home:NeumorphismScreen
  },{
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleStyle: { alignSelf: 'center' },
      title: "Neumorphism Example App",
    },
    headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  }
  
);



export default createAppContainer(stackNavigator);