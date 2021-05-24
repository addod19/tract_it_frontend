import { PROGRESS_CALCULATION } from '../actions/types';

const initialState = {
  progress_calculations: {},
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROGRESS_CALCULATION:
      return {
        ...state,
        progress_calculations: payload,
        loading: false,
      };
    default:
      return state;
  }
}
