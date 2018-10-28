import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import placesReducer from './placesReducer';
export default combineReducers({
  simpleReducer,
  placesReducer
});