import React, { Component } from 'react';
import { View } from 'react-native';
import { AboutUsContent } from '../components';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AboutUsContent />
      </View>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          backgroundColor: '#DEDEDE',
          justifyContent: 'center',
        },
      };
export { About };
