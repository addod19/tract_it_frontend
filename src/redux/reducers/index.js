import { combineReducers } from 'redux';
import water from './water';
import auth from './auth';
import waters from './waters';
import progressCalculations from './progressCalculations';

export default combineReducers({
  auth,
  water,
  waters,
  progressCalculations,
});