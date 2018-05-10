import React, { Component } from 'react';
import { View } from 'react-native';
import { FunActsEvents } from '../components';

class FunActs extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <FunActsEvents />
      </View>
          );
        }
      }
const styles = {
  containerStyle: {
    backgroundColor: '#DEDEDE',
    flex: 1
  }
};

export { FunActs };
