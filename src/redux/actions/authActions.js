import axios from 'axios';
import setAuthToken from '../../helpers/setAuthToken';
import { AUTH_FAIL } from './types';

const defaultUrl = 'http://localhost:3000'; // dev
// const defaultUrl = 'https://fierce-garden-43632.herokuapp.com'; //production

const setUser = payload => ({ type: 'SET_USER', payload });
// eslint-disable-next-line no-unused-vars
const loadUser = () => async dispatch => {
  if (localStorage.auth_token) {
    setAuthToken(localStorage.auth_token);
  }
};
// eslint-disable-next-line consistent-return
export const signup = userDetails => async dispatch => {
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(userDetails),
  };
  console.log(apiConfig);
  try {
    const data = await axios.post(`${defaultUrl}/signup`, userDetails, apiConfig);
    console.log(data);
    localStorage.setItem('token', data.data.auth_token.result);
    dispatch(setUser({ loggedIn: true, user: data.data.user }));
    return data.data;
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error,
    });
  }
};
// eslint-disable-next-line consistent-return
export const signin = userDetails => async dispatch => {
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      // 'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(userDetails),
  };
  console.log(apiConfig);
  try {
    const data = await axios.post(`${defaultUrl}/auth/signin`, userDetails, apiConfig);
    console.log(data);
    localStorage.setItem('token', data.data.auth_token);
    dispatch(setUser({ loggedIn: true, user: data.data.user }));
    return data.data;
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error,
    });
  }
};

export const signout = () => ({ type: 'SIGN_OUT' });

export default loadUser;
