import {combineReducers} from 'redux';
import lolReducer from './lolReducer';
import matchesReducer from './matchesReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  user: lolReducer,
  matches: matchesReducer,
  form: formReducer
})