import {combineReducers} from 'redux';
import userReducer from './userReducer';
import matchesReducer from './matchesReducer';
import leagueReducer from './leagueReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  user: userReducer,
  matches: matchesReducer,
  league: leagueReducer,
  form: formReducer
})