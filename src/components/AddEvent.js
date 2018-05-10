import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions } from 'react-native';
import {
  Card,
  FormInput,
  FormLabel,
  Icon,
  FormValidationMessage,
  Button } from 'react-native-elements';

class AddEvent extends Component {
  render() {
    const { height, width } = Dimensions.get('window');
    const { viewContainerStyle, cardContainerStyle, wrapperStyle, labelStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
        style={{ width, height }}
        behavior='padding'
        >
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
            <View style={{ top: 20 }}>
                <Icon
                  name='arrow-back'
                  size={20}
                  raised
                  onPress={() => this.props.navigation.navigate('homeStack')}
                />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontSize: 18,
          color: '#000',
          fontFamily: 'KalamRegular'
        }
      };
export { AddEvent };
