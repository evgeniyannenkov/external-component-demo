import { getFormValues } from 'redux-form';
import { FORM_NAME } from './components/Form/config';
import { sendMessage } from "./utils";

export const SEND_POST_MESSAGE_SUCCESS = 'LOGIN/SEND_POST_MESSAGE_SUCCESS';
export const SEND_POST_MESSAGE_FAILED = 'LOGIN/SEND_POST_MESSAGE_FAILED';
export function sendPostMessage() {
  return async (dispatch, getState) => {
    const formData = getFormValues(FORM_NAME)(getState());
    sendMessage({
      id: 'or-message',
      data: formData,
    });
    return dispatch({
      type: SEND_POST_MESSAGE_SUCCESS,
    });
  }
}

export const GET_POST_MESSAGE_SUCCESS = 'LOGIN/GET_POST_MESSAGE_SUCCESS';
export const GET_POST_MESSAGE_FAILED = 'LOGIN/GET_POST_MESSAGE_FAILED';
export function getPostMessage(event) {
  return async (dispatch) => {
    console.log('hello', event);
    // Merge Field Logic
  }
}
