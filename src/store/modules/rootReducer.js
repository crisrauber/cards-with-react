import { combineReducers } from 'redux';

import person from './person/reducer';
import user from './user/reducer';
import cards from './cards/reducer';

export default combineReducers({
  person,
  user,
  cards,
});
