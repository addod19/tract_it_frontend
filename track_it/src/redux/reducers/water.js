import { GET_WATER, GET_ALL_WATER, ADD_WATER, DELETE_WATER, UPDATE_WATER, PROGRESS_CALCULATON }
 from '../actions/types';

const initialState = {
  all_water: [],
  water: {},
  progress_calculations: {},
  loading: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_ALL_WATER:
      return {
        ...state,
        all_water: payload,
        loading: false,
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

    // case GET_WATER:
    //   return {
    //     ...state,
    //     water: payload,
    //     loading: false,
    //   };

    case DELETE_WATER:
      return {
        ...state,
        all_water: state.all_water.filter(water => water !== payload)
      };

    case UPDATE_WATER:
      return {
        ...state,
        all_water: state.all_water.map(water => (water.id == payload.id ? payload : water )),
        loading: false,
      };

    case PROGRESS_CALCULATON:
      return {
        ...state,
        progress_calculations: payload,
      };

    default:
      return state;
  }
}