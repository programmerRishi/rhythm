import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const events = [
  { key: '1', eventName: 'Football' },
  { key: '2', eventName: 'VolleyBall' },
  { key: '3', eventName: 'Cricket' },
  { key: '4', eventName: 'Kho-Kho' },
  { key: '5', eventName: 'Kabaddi' },
  { key: '6', eventName: 'Tug-Of-War' },
  { key: '7', eventName: '100m Race' },
  { key: '8', eventName: '200m Race' },
  { key: '9', eventName: '400m Race' },
  { key: '10', eventName: 'Chess' },
  { key: '11', eventName: 'Treasure Hunt' },
  { key: '12', eventName: 'Beg Borrow Steal' },
];

class SportsEvents extends Component {

  keyExtractor = (item) => item.key;

  renderEvent = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => console.log(item.key)}>
            <Card
              containerStyle={styles.containerStyle}
            >
              <Text style={styles.textStyle}>{item.eventName}</Text>
            </Card>
        </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        data={events}
        renderItem={this.renderEvent}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
const styles = {
  textStyle: {
    fontSize: 22,
    fontFamily: 'KalamRegular'
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  }
};
export { SportsEvents };
