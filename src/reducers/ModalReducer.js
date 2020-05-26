import {
  SHOW_MODAL,
  SET_RESPONSE,
  HIDE_MODAL,
  CLEAR,
  MODAL_COMPONENT,
  SHOW_ALERT,
  SHOW_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  response: "",
  show: false,
  content: "",
  callback: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        content: action.payload.content,
        callback: action.payload.callback
      };
    case HIDE_MODAL:
      return { ...state, show: false };
    case SET_RESPONSE:
      return { ...state, response: action.payload };
    case MODAL_COMPONENT:
      return {
        ...state,
        show: true,
        component: action.payload.component,
        title: action.payload.title,
        onClose: action.payload.onClose,
        callback: action.payload.callback
      };
    case SHOW_ALERT:
      return { ...state, showAlert: true, content: action.payload };
    case SHOW_SUCCESS:
      return { ...state, showSuccess: true, content: action.payload };
    case CLEAR:
      return { INITIAL_STATE };
    default:
      return { ...state };
  }
};
