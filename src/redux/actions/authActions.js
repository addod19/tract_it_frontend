import setAuthToken from '../../helpers/setAuthToken';
import { AUTH_FAIL } from './types';

const defaultUrl = 'http://localhost:3000';

const setUser = payload => ({ type: 'SET_USER', payload });

const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const apiConfig = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  await fetch(`${defaultUrl}/auto_login`, apiConfig)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    })
    .then(error => dispatch({
      type: AUTH_FAIL,
      payload: error,
    }));
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
  await fetch(`${defaultUrl}/signup`, userDetails, apiConfig)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    })
    .then(error => dispatch({
      type: AUTH_FAIL,
      payload: error,
    }));
};

export const signin = userDetails => async dispatch => {
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userDetails),
  };
  await fetch(`${defaultUrl}/signin`, userDetails, apiConfig)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    })
    .then(error => dispatch({
      type: AUTH_FAIL,
      payload: error,
    }));
};

export const signout = () => ({ type: 'SIGN_OUT' });

export default loadUser;
