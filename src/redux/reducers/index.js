import { combineReducers } from 'redux';
import water from './water';
import auth from './auth';

export default combineReducers({
  auth,
  water,
});
