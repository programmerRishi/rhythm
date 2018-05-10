import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

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
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          backgroundColor: '#DEDEDE',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerLeftStyle: {
          color: '#fff',
          fontSize: 30,
          fontFamily: 'ShadowsIntoLight'
        }
      };
export { Home };
