import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import _ from 'lodash';
import { View, Text, FlatList } from 'react-native';
import { List, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { CustomModal } from './CustomModal';

class ConsoleScreen extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      title: 'Console',
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'KalamRegular',
        flex: 1,
        textAlign: 'center'
      },
      headerLeft: <View />,
      headerRight: (
        <Icon
          name='sign-out'
          type='font-awesome'
          raised
          size={20}
          onPress={() => navigation.state.params.signOut({ navigation })}
        />
      ),
      headerStyle: {
        backgroundColor: '#242424'
      },
    }
  );

state = { eventName: '', consoleData: [], showModal: true };

  async componentWillMount() {
    const uid = await firebase.auth().currentUser.uid;
    // for using fetch api you need to specify 'Content-Type': 'application/json'
    // in the headers object otherwise the body will be treated as string.
    // const response = await fetch('https://us-central1-rhythm-56cb4.cloudfunctions.net/findEvent',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({ uid }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );
    // const eventName = await response.json();
    // It is better to use fetch api. For more details -- "https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78"
    const response = await axios.post('https://us-central1-rhythm-56cb4.cloudfunctions.net/findEvent', { uid });
    this.state.eventName = response.data.eventName;
    this.props.navigation.setParams({ signOut: this.props.signOut });
    await this.setConsoleData(this.state.eventName);
    this.setState({ showModal: false });
  }

  setConsoleData = (eventName) => {
    // _.capitalize() makes the first letter of the string capital and rest small
    if (eventName !== 'dance' && eventName !== 'singing' && eventName !== 'badminton') {
      this.setState({ consoleData: [{ eventName: _.capitalize(eventName), key: eventName }] });
      return;
    }
    const consoleData = _.map(this.props.data[eventName], (value, subeventName) => {
        // returning from the _. forIn callback function
        return { eventName: _.capitalize(subeventName), key: subeventName };
    });

    this.setState({ consoleData });
  }

  keyExtractor = (item) => item.key

  renderItem = ({ item }) => {
    const { cardContainerStyle, wrapperStyle, textStyle } = styles;
    return (
        <Card
          containerStyle={cardContainerStyle}
          wrapperStyle={wrapperStyle}
        >
            <Icon
              name='keyboard-arrow-down'
              size={25}
              onPress={() => console.log(item.key)}
            />
            <Text style={textStyle}>{item.eventName}</Text>
            <Icon
              name='add-circle'
              size={25}
              onPress={() => console.log(item.key)}
            />
        </Card>
    );
  }
  render() {
    console.log(this.state.eventName);
    console.log(this.state.consoleData);
    return (
        <List containerStyle={styles.listContainerStyle}>
              <CustomModal
                modalMessage='Loading'
                showModal={this.state.showModal}
              />
              <CustomModal
                modalMessage='Logging Out'
                showModal={this.props.showModal}
              />
              <FlatList
              data={this.state.consoleData}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              />
        </List>
    );
  }
}
const styles = {
    textStyle: {
      fontSize: 22,
      fontFamily: 'KalamRegular'
    },
    listContainerStyle: {
      marginTop: 0,
      backgroundColor: '#DEDEDE',
      flex: 1,
    },
    cardContainerStyle: {
      borderRadius: 40
    },
    wrapperStyle: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
};

const mapStateToProps = ({ logIn, dataBase }) => {
  const { showModal } = logIn;
  const { data } = dataBase;
  return { showModal, data };
};

export default connect(mapStateToProps, actions)(ConsoleScreen);
