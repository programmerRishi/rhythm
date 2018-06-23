import React, { Component } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const upcomingEvents = [
  {
    key: '1',
    eventName: 'Cricket Match',
  },
  {
    key: '2',
    eventName: 'Football Match',
  },
  {
    key: '3',
    eventName: 'VolleyBall Match',
  },
];

const sponsers = [
  {
    key: 'a',
    sponserName: 'Sponser 1'
  },
  {
    key: 'b',
    sponserName: 'Sponser 2'
  },
  {
    key: 'c',
    sponserName: 'Sponser 3'
  },
];

const { width } = Dimensions.get('window');

class HomeContent extends Component {

  keyExtractor = (item) => item.key

  renderRecentEvents = ({ item }) => {
    return (
      <Card
        containerStyle={styles.cardContainerStyle}
        title={item.eventName}
      />
    );
  }

  renderSponsers = ({ item }) => {
    return (
      <Card
        containerStyle={styles.cardContainerStyle}
        title={item.sponserName}
      />
    );
  }

  render() {
    console.log(this.props.data);
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <FlatList
            horizontal
            pagingEnabled
            data={upcomingEvents}
            renderItem={this.renderRecentEvents}
            keyExtractor={this.keyExtractor}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FlatList
            horizontal
            pagingEnabled
            data={sponsers}
            renderItem={this.renderSponsers}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
          );
        }
      }
const styles = {
        container: {
          backgroundColor: '#DEDEDE',
          flex: 1
        },
        cardContainerStyle: {
          width: (width - 20),
          marginLeft: 10,
          marginRight: 10
        }
      };

const mapStateToProps = ({ dataBase }) => {
  return { data: dataBase.data };
};
export default connect(mapStateToProps, actions)(HomeContent);
