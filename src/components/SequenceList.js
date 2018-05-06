import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View, StyleSheet, TouchableHighlight} from "react-native";

class SequenceSummary extends Component {
  _onPressButton = () => {
    const {navigation, item} = this.props;
    navigation.navigate('Details', { item });
  };
  render() {
    return(
      <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.item}>{this.props.item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class SequenceList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={ this.props.data }
          renderItem={({item}) => <SequenceSummary item={item} navigation={this.props.navigation}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

SequenceList.propTypes = {};

export default SequenceList;
