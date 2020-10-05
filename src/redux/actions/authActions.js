import setAuthToken from '../../helpers/setAuthToken';
import { AUTH_FAIL } from './types';
import axios from 'axios';

const defaultUrl = 'http://localhost:3000';

const setUser = payload => ({ type: 'SET_USER', payload });

const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  // const apiConfig = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${localStorage.getItem('token')}`,
  //   },
  // };
  // try {
  //   const data = await axios.get(`${defaultUrl}/auto_login`, apiConfig);
  //   localStorage.setItem('token', data.token);
  //   dispatch(setUser(data.user));
  //   return data;

  // } catch(error) {
  //   dispatch({
  //     type: AUTH_FAIL,
  //     payload: error,
  //   });
  // }
  
};

export const signup = userDetails => async dispatch => {
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
  };
  try {
    const data = await axios.post(`${defaultUrl}/signup`, userDetails, apiConfig);
    // console.log(data);
    localStorage.setItem('token', data.token);
    dispatch(setUser(data.userDetails));
    return data;

  } catch(error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error,
    });
  }
  
};

export const signin = userDetails => async dispatch => {
  const apiConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
  };
  try {
    const data = await axios.get(`${defaultUrl}/auth/signin`, userDetails, apiConfig);
    console.log(data);
    localStorage.setItem('token', data.token);
    dispatch(setUser(data));
    return data;

  } catch(error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error,
    })
  }
  
};

export const signout = () => ({ type: 'SIGN_OUT' });

export default loadUser;
