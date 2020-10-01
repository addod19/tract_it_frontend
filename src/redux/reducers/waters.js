import { GET_WATERS, DELETE_WATER, UPDATE_WATER } from '../actions/types';
  
const initialState = {
  waters: [],
  loading: false,
};
  
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WATERS:
      return {
        ...state,
        waters: payload,
        loading: false,
      };
    case DELETE_WATER:
      return {
        ...state,
        waters: state.waters.filter(water => water !== payload),
      };
    case UPDATE_WATER:
      return {
        ...state,
        waters: state.waters.map(water => (water.id === payload.id ? payload : water)),
        loading: false,
      };
    default:
      return state;
  }
}
  