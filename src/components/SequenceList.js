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
      <TouchableHighlight onPress={this._onPressButton} underlayColor="#CCC">
        <View style={styles.row}>
          <Text style={styles.item}>{this.props.item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class SequenceList extends Component {
  render() {
    return (
        <FlatList
          style={styles.container}
          data={ this.props.data }
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
            )}
          renderItem={({item}) => <SequenceSummary item={item} navigation={this.props.navigation}/>}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    borderTopWidth: 0,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    paddingBottom: 20,
    marginLeft: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

SequenceList.propTypes = {};

export default SequenceList;
