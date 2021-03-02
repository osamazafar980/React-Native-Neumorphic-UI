import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import ObjectRecogScreen from './screens/ObjectRecogScreen'


const stackNavigator = createStackNavigator(
  {
    Home:ObjectRecogScreen
  },{
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitleStyle: { alignSelf: 'center' },
      title: "Blog Post App",
    },
    headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  }
  
);



export default createAppContainer(stackNavigator);