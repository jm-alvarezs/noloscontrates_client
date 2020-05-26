import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_RESPONSE,
  CLEAR,
  MODAL_COMPONENT,
  SHOW_ALERT
} from "./types";

export const confirm = (content, callback) => dispatch => {
  dispatch({ type: SHOW_MODAL, payload: { content, callback } });
};

export const alert = content => dispatch => {
  dispatch({ type: SHOW_ALERT, payload: content });
  window.setTimeout(() => dispatch({type: CLEAR}), 5000);
};

export const hideAlert = () => dispatch => {
  dispatch({ type: CLEAR });
};

export const modalComponent = (
  title,
  component,
  onClose,
  callback
) => dispatch => {
  dispatch({
    type: MODAL_COMPONENT,
    payload: { title, component, onClose, callback }
  });
};

export const setResponse = response => dispatch => {
  dispatch({ type: SET_RESPONSE, payload: response });
  dispatch({ type: HIDE_MODAL });
};

export const clear = txt => dispatch => {
  dispatch({ type: CLEAR });
};
