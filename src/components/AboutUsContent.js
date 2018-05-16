import React, { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

const cardTitle = [
  {
    key: '1',
    title: 'Our Story',
    iconSource: require('../../assets/story.png'),
    content: `Right now there is no Content.
      I will add it soon`
  },
  {
    key: '2',
    title: 'Contact Us',
    iconSource: require('../../assets/contacts.png'),
    content: `Right now there is no Content.
      I will add it soon`
  },
  {
    key: '3',
    title: 'App-Credits',
    iconSource: require('../../assets/credits.png'),
    content: `Right now there is no Content.
      I will add it soon`
  }
];

class AboutUsContent extends Component {
  keyExtractor = (item) => item.key;

  renderCard = ({ item }) => {
    return (
      <Card containerStyle={styles.cardContainerStyle}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={{ fontSize: 15, alignSelf: 'center' }}>{item.content}</Text>
            <Image
              source={item.iconSource}
              style={styles.iconStyle}
            />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={cardTitle}
          renderItem={this.renderCard}
          keyExtractor={this.keyExtractor}
        />
      </View>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#DEDEDE'
        },
        titleStyle: {
          fontSize: 22,
          fontFamily: 'KalamRegular',
          alignSelf: 'center',
          textDecorationLine: 'underline'
        },
        iconStyle: {
          position: 'absolute',
          marginTop: 0,
          height: 24,
          width: 20
        },
        cardContainerStyle: {
          borderRadius: 15,
          flex: 1
        }
      };
export { AboutUsContent };
