import React from 'react';
import { View } from 'react-native';

const title = {
    culturalStack: 'Cultural Events',
    sportsStack: 'Sports Events',
    funActsStack: 'FunActs',
    aboutStack: 'About Us',
};

const stackNavigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state;
    return (
      {
          title: title[routeName],
          headerTitleStyle: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            fontFamily: 'KalamRegular',
            fontWeight: 'normal', // add this to support custom font
            flex: 1
          },
          headerRight: <View />,
          headerLeft: <View />,
          headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)'
          }
      }
    );
};

export { stackNavigationOptions };
