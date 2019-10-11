import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { reducer as login } from '../modules/generateRandomCode';

export default combineReducers({
  form,
  login
});
