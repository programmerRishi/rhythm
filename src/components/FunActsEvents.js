import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const events = [
  { key: '1', eventName: 'Spoon Race' },
  { key: '2', eventName: 'Golgappa Eating' },
  { key: '3', eventName: 'Banana Eating' },
  { key: '4', eventName: 'Antakshari' },
  { key: '5', eventName: 'Musical Chair' },
  { key: '6', eventName: 'Sack Race' },
];

class FunActsEvents extends Component {

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

export { FunActsEvents };
