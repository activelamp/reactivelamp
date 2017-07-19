'use strict';
export const SET_BACKEND = "SET_BACKEND";

/*
 * action creators
 */
export function setBackend(path) {
  return {
    type: SET_BACKEND,
    path
  };
}
