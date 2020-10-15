import axios from 'axios';
import { PROGRESS_CALCULATION, WATERS_ERRORS } from './types';

const defaultURL = 'http://localhost:3000';

// production
// const defaultURL = '';
const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

const progressCal = () => async dispatch => {
  try {
    const prog = await axios.get(`${defaultURL}/water_levels/progress`, apiConfig);
    console.log(prog);
    dispatch({
      type: PROGRESS_CALCULATION,
      payload: prog.data.progress,
    });
    return prog;

  } catch(error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};

export default progressCal;