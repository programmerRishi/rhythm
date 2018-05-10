import React from 'react';
import { Image } from 'react-native';
import { Icon } from 'react-native-elements';

const iconType = {
  home: 'font-awesome',
  contact: 'material-icons',
  cultural: 'font-awesome',
  sports: 'font-awesome',
  funacts: 'material-community'
};
const iconName = {
  home: 'home',
  about: 'info',
  cultural: 'microphone.png',
  sports: 'cricket-player-with-bat.png',
  funacts: 'duck'
};
const tabBarLabel = {
  home: 'Home',
  about: 'About Us',
  cultural: 'Cultural',
  sports: 'Sports',
  funacts: 'FunActs'
};

const tabNavigationOptions = ({ navigation }) => {
  const routeName = navigation.state.routeName;
    return (
      {
          tabBarLabel: tabBarLabel[routeName],
          tabBarIcon: ({ tintColor }) => {
            if (routeName === 'sports') {
              return (
                <Image
                  tintColor={tintColor}
                  style={{ width: 20, height: 20 }}
                  source={require('../../assets/cricket-player-with-bat.png')}
                />
              );
            } else if (routeName === 'cultural') {
              return (
                <Image
                  tintColor={tintColor}
                  style={{ width: 20, height: 20 }}
                  source={require('../../assets/microphone.png')}
                />
              );
            }
            return (
              <Icon
                type={iconType[routeName]}
                name={iconName[routeName]}
                size={20}
                color={tintColor}
              />
            );
          },
      }
    );
};

export { tabNavigationOptions };
