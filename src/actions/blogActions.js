import * as types from '../constants/actionTypes';

export function loadBlogSuccess(blogs) {
  return { type: types.GET_BLOG_SUCCESS, blogItems: blogs };
}

// example of a thunk using the redux-thunk middleware
export function getBlogItems(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return fetch(`${settings.path}:${settings.port}/api/blog?_format=hal_json`, {
      method: "GET"
    })
    .then(res => {
      return res.json().then(blogs => dispatch(loadBlogSuccess(blogs)));
    }).catch(error => {
      throw(error);
    });
  };
}