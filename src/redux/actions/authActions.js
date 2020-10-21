import setAuthToken from '../../helpers/setAuthToken';
import { AUTH_FAIL } from './types';
import axios from 'axios';

const defaultUrl = 'http://localhost:3000'; //dev
// const defaultUrl = 'https://mysterious-ravine-52687.herokuapp.com'; //production

const setUser = payload => ({ type: 'SET_USER', payload });

const loadUser = () => async dispatch => {
  if (localStorage.auth_token) {
    setAuthToken(localStorage.auth_token);
  }
};

export const signup = userDetails => async dispatch => {
  console.log(userDetails);
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
    body: JSON.stringify(userDetails),
  };
  try {
    const data = await axios.post(`${defaultUrl}/signup`, userDetails, apiConfig);
    console.log(data);
    localStorage.setItem('token', data.data.auth_token.result);
    dispatch(setUser({ loggedIn: true, user: data.data.user }));
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  try {
    const data = await axios.post(`${defaultUrl}/auth/signin`, userDetails, apiConfig);
    localStorage.setItem('token', data.data.auth_token.result);
    dispatch(setUser({ loggedIn: true, user: data.data.user }));
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
