import { GET_POST_MESSAGE_SUCCESS } from './actions';

const initialState = {
  postMessage: {},
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case GET_POST_MESSAGE_SUCCESS:
      return {
        ...state,
        postMessage: payload.message,
      };
    default:
      return state
  }
}
