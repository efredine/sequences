import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SequenceList from "../components/SequenceList";

class HomeScreen extends Component {
  render() {
    return (
      <SequenceList
        data={[
          {
            key: '1',
            name: 'Recipe'
          },
          {
            key: '2',
            name: 'Workout'
          },
          {
            key: '3',
            name: 'Lunch Medication'
          },
          {
            key: '4',
            name: 'Another sequnce'
          },
          {
            key: '5',
            name: 'Best sequence'
          },
          {
            key: '6',
            name: 'Musical'
          },
          {
            key: '7',
            name: 'Another Recipe'
          },
          {
            key: '8',
            name: 'Another Workout'
          },
        ]}
        navigation={this.props.navigation}
      />
    );
  }
}

HomeScreen.propTypes = {};

export default HomeScreen;
