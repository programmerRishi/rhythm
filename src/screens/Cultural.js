import React, { Component } from 'react';
import { View } from 'react-native';
import { CulturalEvents } from '../components';

class Cultural extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <CulturalEvents navigation={this.props.navigation} />
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

export { Cultural };
