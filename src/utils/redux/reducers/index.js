import { combineReducers } from 'redux';

import PostReducer from './posts';

const rootReducer = combineReducers({
  PostReducer,
});

export default rootReducer;
