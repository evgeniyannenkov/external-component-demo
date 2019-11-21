import { getFormValues } from 'redux-form';
import { FORM_NAME } from './components/Form/config';
import { sendMessage } from '../../utils';
import { OR_MESSAGE } from '../../constants';

export const EXTERNAL_STEP_UPDATE_SUCCESS = 'EXTERNAL_STEP_UPDATE_SUCCESS';
export const EXTERNAL_STEP_UPDATE = 'EXTERNAL_STEP_UPDATE';

export function sendFormData() {
  return async (dispatch, getState) => {
    const formData = getFormValues(FORM_NAME)(getState());
    sendMessage({
      id: OR_MESSAGE,
      type: EXTERNAL_STEP_UPDATE,
      payload: { params: formData },
    });
    return dispatch({
      type: EXTERNAL_STEP_UPDATE_SUCCESS,
    });
  };
}
