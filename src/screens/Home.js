import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import HomeContent from '../components/HomeContent';

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
           onPress={() => navigation.navigate(navigation.state.params.signInButtonNavigationTo)}
           name='perm-identity'
           size={20}
           />
        </View>
      ),
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,0.9)'
      }
    }
  );

  async componentWillMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      let signInButtonNavigationTo = 'logIn';
      signInButtonNavigationTo = user ? 'console' : 'logIn';
      this.props.navigation.setParams({ signInButtonNavigationTo });
    });
    const currentUser = firebase.auth().currentUser;
    /* the log below returns null; it is seen that if the above statement is called in
     a component mounted together with Home.js the log below return 'null'
     but if the same above statement is called in a component which is mounted after
     Home.js the log below return the currentUser object. eg. in Console.js it returns currentUser object */
    console.log(currentUser); // return null
  }
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
