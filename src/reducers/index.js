import { combineReducers } from 'redux';

import { authentication } from './authReducer';
import { response } from './responseReducer';

const rootReducer = combineReducers({
  authentication,
  response
});

export default rootReducer;