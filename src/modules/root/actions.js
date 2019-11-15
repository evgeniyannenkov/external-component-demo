import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { sendMessage } from '../../utils';
import { OR_MESSAGE } from "../../constants";

export const EXTERNAL_STEP_ACTIVATE_SUCCESS = 'EXTERNAL_STEP_ACTIVATE_SUCCESS';
export const EXTERNAL_STEP_ACTIVATE = 'EXTERNAL_STEP_ACTIVATE';
export function sendActivationEvent() {
  return async (dispatch) => {
    sendMessage({
      id: OR_MESSAGE,
      type: EXTERNAL_STEP_ACTIVATE,
      payload: null,
    });
    return dispatch({
      type: EXTERNAL_STEP_ACTIVATE_SUCCESS,
    });
  }
}

export const GET_POST_MESSAGE_FAILED = 'GET_POST_MESSAGE_FAILED';
export function getPostMessage(event) {
  const data = get(event, 'data', {});
  const { id, type, payload } = data;
  return async (dispatch) => {
    if (id === OR_MESSAGE) {
      if (isEmpty(data)) {
        return dispatch({
          type: GET_POST_MESSAGE_FAILED,
        });
      }
      return dispatch({
        type,
        payload
      });
    }
  }
}
