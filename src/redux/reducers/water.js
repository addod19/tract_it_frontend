import { GET_WATER,  ADD_WATER } from '../actions/types';

const initialState = {
  water: [],
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_WATER':
      return {
        loggedIn: true,
        water: { ...payload },
      };
    case GET_WATER:
      return {
        ...state,
        water: payload,
        loading: false,
      };
    case ADD_WATER:
      return {
        ...state,
        water: [payload, ...state.water],
        loading: false,
      };
    default:
      return state;
  }
}
