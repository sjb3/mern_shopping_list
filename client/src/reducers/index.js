// This is Root reducer for a simple application
// Item reducer only helpersif we have many, complicate reducers this is the meeting place to aggregate them

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer,
  // if we have many others
  // auth: authReducer
});
