import firebase from 'firebase';
import {
  LOGIN_UPDATE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  RESET_LOGIN,
  SIGNOUT,
  SIGNOUT_SUCCESSFULL
} from './types';

export const loginUpdate = ({ prop, value }) => {
  return {
     type: LOGIN_UPDATE,
     payload: { prop, value }
   };
};

export const resetLogin = () => {
  return {
    type: RESET_LOGIN
  };
};

export const signOut = ({ navigation }) => {
  return async(dispatch) => {
      dispatch({ type: SIGNOUT, payload: 'Logging Out' });
      await firebase.auth().signOut();
      dispatch({ type: SIGNOUT_SUCCESSFULL });
      navigation.navigate('auth');
  };
};

export const loginOrganiser = (email, password, navigation) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: LOGIN_USER_SUCCESS });
      navigation.navigate('console');
      console.log('success');
    })
    .catch(() => {
      dispatch({ type: LOGIN_USER_FAILED, payload: 'AUTHENTICATION FAILED!' });
    });
  };
};
