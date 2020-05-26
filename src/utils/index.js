import {
  SHOW_ALERT,
  CLEAR_ALERT,
  SHOW_SUCCESS,
  CLEAR_SUCCESS,
} from "../actions/types";

export function displayError(dispatch, error) {
  if (typeof error === "object") error = error.toString();
  dispatch({ type: SHOW_ALERT, payload: error });
  setTimeout(() => dispatch({ type: CLEAR_ALERT }), 5000);
}

export function displaySuccess(dispatch, message) {
  dispatch({ type: SHOW_SUCCESS, payload: message });
  setTimeout(() => dispatch({ type: CLEAR_SUCCESS }), 5000);
}

export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";
