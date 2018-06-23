import React, { Component } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator } from 'react-native';
import { Card, Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const sponsers = [
  { key: '1', name: 'Sponser 1' },
  { key: '2', name: 'Sponser 2' },
  { key: '3', name: 'Sponser 3' },
];

const { height } = Dimensions.get('window');
class StartUpScreen extends Component {
  async componentWillMount() {
    const response = await fetch('https://us-central1-rhythm-56cb4.cloudfunctions.net/trimDatabase');
    const data = await response.json();
    this.props.saveData(data);
  }

  keyExtractor = (item) => item.key

  renderSponsersList = ({ item }) => {
    return (
      <Text style={styles.sponsersNameStyle}>{item.name}</Text>
    );
  }

  render() {
    const { container, labelStyle, batchNameStyle, contentStyle } = styles;
    setTimeout(() => this.props.navigation.navigate('main'), 10);
    return (
      <View style={container}>
          <Icon
            name='heartbeat'
            type='font-awesome'
            color='#fff'
            size={50}
            containerStyle={{ position: 'absolute', alignSelf: 'center', top: (0.1 * height) }}
          />
          <Text style={labelStyle}>Rhythm-2018</Text>
          <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ marginBottom: 15 }}>
                <Text style={contentStyle}>Organised By:-</Text>
                <Text style={batchNameStyle}>Batch 2015</Text>
              </View>
              <View>
                <Text style={contentStyle}>Sponsered By:-</Text>
                  <FlatList
                    data={sponsers}
                    renderItem={this.renderSponsersList}
                    keyExtractor={this.keyExtractor}
                  />
              </View>
          </Card>
          <ActivityIndicator
            style={{ marginTop: 10 }}
            animating
            color='#fff'
            size={40}
          />
      </View>
          );
        }
      }
const styles = {
        container: {
          backgroundColor: 'rgba(0,0,0,0.9)',
          flex: 1,
          justifyContent: 'center',
        },
        labelStyle: {
          color: '#fff',
          alignSelf: 'center',
          position: 'absolute',
          top: (0.1 * height) + 40,
          fontSize: 50,
          fontFamily: 'ShadowsIntoLight'
        },
        contentStyle: {
          fontSize: 18,
          alignSelf: 'center',
          color: '#636e72',
          fontFamily: 'JosefinSans-SemiBold'
        },
        listContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        sponsersNameStyle: {
          fontSize: 28,
          alignSelf: 'center',
          fontFamily: 'JosefinSans-SemiBold'
        },
        batchNameStyle: {
          fontSize: 28,
          alignSelf: 'center',
          fontFamily: 'JosefinSans-SemiBold'
        }
};

export default connect(null, actions)(StartUpScreen);
