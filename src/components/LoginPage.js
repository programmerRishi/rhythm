import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import {
  FormLabel,
  FormValidationMessage,
  FormInput,
  Card,
  Button } from 'react-native-elements';

class LoginPage extends Component {
  static navigationOptions = () => (
    {
        title: 'Organiser Login',
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
          fontFamily: 'KalamRegular',
          flex: 1
        },
        headerBackImage: require('../../assets/arrow_back_white.png'),
        headerRight: <View />,
        headerStyle: {
          backgroundColor: '#242424'
        },
    }
  );
  render() {
    const { viewContainerStyle, cardContainerStyle, wrapperStyle, labelStyle } = styles;
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={viewContainerStyle}>
            <Card containerStyle={cardContainerStyle} wrapperStyle={wrapperStyle}>
                <FormLabel labelStyle={labelStyle}>
                    Email
                </FormLabel>
                <FormInput
                  autoFocus
                  onSubmitEditing={() => this.password.focus()}
                />
                <FormLabel labelStyle={labelStyle}>
                    Password
                </FormLabel>
                <FormInput
                  ref={(password) => (this.password = password)}
                />
                <FormValidationMessage>{''}</FormValidationMessage>
                <Button
                  title='SignIn'
                  fontFamily='KalamRegular'
                  large
                  backgroundColor='#242424'
                  onPress={() => this.props.navigation.navigate('console')}
                />
            </Card>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}
const styles = {
    cardContainerStyle: {
      borderWidth: 2,
    },
    labelStyle: {
      fontSize: 18,
      color: '#000',
      fontFamily: 'KalamRegular'
    },
    viewContainerStyle: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
};
export { LoginPage };
