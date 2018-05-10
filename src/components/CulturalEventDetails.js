import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CulturalEventDetails extends Component {

  static navigationOptions = () => {
    return (
        {
            title: 'Details',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              fontFamily: 'KalamRegular',
              flex: 1
            },
            headerRight: <View />,
            headerBackImage: require('../../assets/arrow_back_white.png'),
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.9)'
            }
        }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          CulturalEventDetail
        </Text>
      </View>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      };
export { CulturalEventDetails };
