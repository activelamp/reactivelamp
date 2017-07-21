'use strict';
import * as types from '../constants/actionTypes';

const initialState = {
  blogItems: typeof drupalSettings.blogItems !== 'undefined' ? drupalSettings.blogItems : [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_BLOG_ITEMS:
      return {
        ...state,
        blogItems: action.blogItems
      };

    case types.GET_BLOG_SUCCESS:
      return {
        ...state,
        blogItems: action.blogItems
      };

    default:
      return state;
  }
}

