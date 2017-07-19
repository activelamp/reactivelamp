import { combineReducers } from 'redux';
import backend from './backendReducer';
import blog from './blogReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  backend,
  blog,
  routing: routerReducer
});

export default rootReducer;
