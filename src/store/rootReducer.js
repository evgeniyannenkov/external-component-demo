import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { reducer as generateRandomCode } from '../modules/generateRandomCode';

export default combineReducers({
  form,
  generateRandomCode
});
