import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, Card, Icon } from 'react-native-elements';

const data = [
  { key: '1', eventName: 'volleyball' },
  { key: '2', eventName: 'basketball' },
];

class ConsoleScreen extends Component {
  static navigationOptions = () => (
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
        />
      ),
      headerStyle: {
        backgroundColor: '#242424'
      },
    }
  );

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
    return (
        <List containerStyle={styles.listContainerStyle}>
              <FlatList
              data={data}
              renderItem={this.renderItem}
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
export { ConsoleScreen };
