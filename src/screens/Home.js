import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { HomeContent } from '../components';

class Home extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      headerLeft: (
        <View style={{ paddingLeft: 10, flex: 1 }}>
          <Text style={styles.headerLeftStyle}>Rhythm</Text>
        </View>
      ),
      headerRight: (
        <View style={{ paddingLeft: 10 }}>
           <Icon
           raised
           reverse
           onPress={() => navigation.navigate('auth')}
           name='perm-identity'
           size={20}
           />
        </View>
      ),
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,0.9)'
      }
    }
  )
  render() {
    return (
        <HomeContent />
          );
        }
      }
const styles = {
        headerLeftStyle: {
          color: '#fff',
          fontSize: 30,
          fontFamily: 'ShadowsIntoLight'
        }
      };
export { Home };
