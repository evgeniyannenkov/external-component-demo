import { getFormValues } from 'redux-form';
import { FORM_NAME } from './components/Form/config';
import { sendMessage } from "./utils";
import { OR_MESSAGE_TYPE } from "../../constants";

export const SEND_FORM_DATA_SUCCESS = 'SEND_FORM_DATA_SUCCESS';
export const SEND_FORM_DATA = 'SEND_FORM_DATA';
export const SEND_FORM_DATA_FAILED = 'SEND_FORM_DATA_FAILED';

export function sendFormData() {
  return async (dispatch, getState) => {
    const formData = getFormValues(FORM_NAME)(getState());
    sendMessage({
      type: OR_MESSAGE_TYPE,
      id: SEND_FORM_DATA,
      data: formData,
    });
    return dispatch({
      type: SEND_FORM_DATA_SUCCESS,
    });
  }
}

export function sendActivationEvent() {
  return async (dispatch, getState) => {
    const formData = getFormValues(FORM_NAME)(getState());
    sendMessage({
      type: OR_MESSAGE_TYPE,
      id: SEND_FORM_DATA,
      data: formData,
    });
    return dispatch({
      type: SEND_FORM_DATA_SUCCESS,
    });
  }
}

export const GET_POST_MESSAGE_SUCCESS = 'GET_POST_MESSAGE_SUCCESS';
export const GET_POST_MESSAGE_FAILED = 'GET_POST_MESSAGE_FAILED';
export function getPostMessage(event) {
  return async (dispatch) => {
    console.log('hello', event);
    // Merge Field Logic
  }
}
