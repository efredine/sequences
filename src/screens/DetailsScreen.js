import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Text, View} from "react-native";

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { item } = navigation.state.params;

    return {
      title: item.name,
    }
  };

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{item.name}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

DetailsScreen.propTypes = {};

export default DetailsScreen;
