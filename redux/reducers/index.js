import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DataBaseReducer from './DataBaseReducer';

export default combineReducers({
  logIn: LoginReducer,
  dataBase: DataBaseReducer
});
