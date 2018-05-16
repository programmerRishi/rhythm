import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const events = [
  { key: '1', eventName: 'Saraswati Pooja' },
  { key: '2', eventName: 'Solo Singing' },
  { key: '3', eventName: 'Duet Singing' },
  { key: '4', eventName: 'Solo Dance' },
  { key: '5', eventName: 'Group Dance' },
  { key: '6', eventName: 'Skit' },
  { key: '7', eventName: 'Kavi Sammelan' },
];

class CulturalEvents extends Component {

  keyExtractor = (item) => item.key;

  renderEvent = ({ item }) => {
    return (
        <TouchableOpacity
          onPress={
            () => this.props.navigation.navigate('culturalDetails')
          }
        >
          <Card containerStyle={styles.containerStyle}>
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
export { CulturalEvents };
