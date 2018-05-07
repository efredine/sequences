import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },

  },
  {
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: '#f7f7f7',
    },
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
