import React, { Component } from 'react';
import { View } from 'react-native';
import { SportsEvents } from '../components';

class Sports extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <SportsEvents />
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

export { Sports };
