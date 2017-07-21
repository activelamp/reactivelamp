
'use strict';
import { SET_BACKEND } from '../actions/backendActions';

// @todo: Get from NODE_ENV
const initialState = {
  path: typeof drupalSettings.backend !== 'undefined' ? drupalSettings.backend.path : 'http://activelamp.docker.localhost',
  port: typeof drupalSettings.backend !== 'undefined' ? drupalSettings.backend.port : '8000'
};

export default function (state = initialState, action) {
  if (action.type === SET_BACKEND) {
    return {
      ...state,
      path: action.path,
      port: action.port
    };
  }
  return state;
}

