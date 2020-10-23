import { GET_WATER, ADD_WATER } from '../actions/types';

const initialState = {
  water: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WATER:
      return {
        ...state,
        water: action.payload,
        loading: false,
      };
    case ADD_WATER:
      return {
        ...state,
        water: [action.payload, ...state.water || {}],
        loading: false,
      };
    default:
      return state;
  }
}
