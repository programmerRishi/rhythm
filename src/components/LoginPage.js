import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator } from 'react-native';
import {
  FormLabel,
  FormValidationMessage,
  FormInput,
  Card,
  Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class LoginPage extends Component {
  static navigationOptions = () => (
    {
        title: 'Organiser Login',
        headerTitleStyle: {
          color: '#fff',
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'normal',
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

  onSignInButtonPress = () => {
    const { email, password, navigation } = this.props;
    this.props.loginOrganiser(email, password, navigation);
    Keyboard.dismiss(); // can also be used Keyboard.dismiss ie without curly braces
    // to use without the curly braces use it directly as a value for 'onPress' prop
  }

  onLoading = () => {
    const { loading } = this.props;
    if (loading) {
      return (
        <ActivityIndicator
         size='large'
         color='#000'
        />
      );
    }
    return (
      <Button
        title='SignIn'
        fontFamily='KalamRegular'
        large
        backgroundColor='#242424'
        onPress={this.onSignInButtonPress}
        rounded
      />
    );
  }
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
                  inputStyle={styles.inputStyle}
                  autoFocus
                  onChangeText={(text) => this.props.loginUpdate({ prop: 'email', value: text })}
                  onSubmitEditing={() => this.password.focus()}
                />
                <FormLabel labelStyle={labelStyle}>
                    Password
                </FormLabel>
                <FormInput
                  inputStyle={styles.inputStyle}
                  secureTextEntry
                  ref={(password) => (this.password = password)}
                  onChangeText={(text) => this.props.loginUpdate({ prop: 'password', value: text })}
                />
                <FormValidationMessage>{''}</FormValidationMessage>
                {this.onLoading()}
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
    inputStyle: {
      fontSize: 15,
      color: '#000'
    },
    viewContainerStyle: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
};

const mapStateToProps = ({ logIn }) => {
  const { email, password, loading, error } = logIn;
  return { email, password, loading, error };
};

export default connect(mapStateToProps, actions)(LoginPage);
