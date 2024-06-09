import { combineReducers } from 'redux';
import profile from './profile';

const rootReducer = combineReducers({
  weather: profile,
});

export default rootReducer;
