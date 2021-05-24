// eslint-disable import/prefer-default-export no-unused-vars
import axios from 'axios';
import {
  GET_WATERS, GET_WATER, DELETE_WATER, ADD_WATER, UPDATE_WATER,
  WATERS_ERRORS,
} from './types';

const defaultURL = 'http://localhost:3000'; // dev
// const defaultURL = 'https://fierce-garden-43632.herokuapp.com'; //production

const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
// eslint-disable-next-line consistent-return
const addWaters = waterData => async dispatch => {
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      // 'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const water = await axios.post(`${defaultURL}/waters`, waterData, apiConfig);

    myLibrary.push(water.data);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    dispatch({
      type: ADD_WATER,
      payload: water.data,
    });
    return water.data;
  } catch (error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};
// eslint-disable-next-line consistent-return
const getWater = id => async dispatch => { // index page
  const apiConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const water = await axios.get(`${defaultURL}/waters/${id}`, apiConfig);
    dispatch({
      type: GET_WATER,
      payload: water.data,
    });
    return water.data;
  } catch (error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};
// eslint-disable-next-line consistent-return
const getWaters = () => async dispatch => {
  const apiConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const allData = await axios.get(`${defaultURL}/allData`, apiConfig);

    dispatch({
      type: GET_WATERS,
      payload: allData.data,
    });
    return allData.data;
  } catch (error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};
// eslint-disable-next-line consistent-return
const updateWater = (id, water) => async dispatch => {
  const apiConfig = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(water),
  };
  try {
    const edit = await axios.put(`${defaultURL}/waters/${id}`, water, apiConfig);
    dispatch({
      type: UPDATE_WATER,
      payload: edit.data,
    });
    return edit.data;
  } catch (error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};
// eslint-disable-next-line consistent-return
const deleteWater = id => async dispatch => {
  const apiConfig = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const remove = await axios.delete(`${defaultURL}/waters/${id}`, apiConfig);
    myLibrary.splice(remove, 1);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    dispatch({
      type: DELETE_WATER,
      payload: remove.data,
    });
    return remove.data;
  } catch (error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};

export {
  addWaters, getWater, getWaters, updateWater, deleteWater,
};
