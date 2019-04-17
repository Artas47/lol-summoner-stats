import {combineReducers} from 'redux';
import lolReducer from './lolReducer';

export default combineReducers({
  user: lolReducer
})