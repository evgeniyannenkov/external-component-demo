import { EXTERNAL_STEP_INITIALIZE } from '../../constants';

const initialState = {
  stepData: {},
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case EXTERNAL_STEP_INITIALIZE:
      return {
        ...state,
        stepData: payload,
      };
    default:
      return state
  }
}
