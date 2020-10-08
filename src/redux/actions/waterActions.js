/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_WATERS, GET_WATER, DELETE_WATER, ADD_WATERS, UPDATE_WATER,
  WATERS_ERRORS,
} from './types';

const defaultURL = 'http://localhost:3000';
// const defaultURL = 'https://mysterious-ravine-52687.herokuapp.com/'; //production

const addWaters = waterData => async dispatch => {
  console.log(waterData);
  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    // body: JSON.stringify(waterData),
  };
  try {
    const waters = await axios.post(`${defaultURL}/waters`, waterData, apiConfig);
    // console.log(waters);
    dispatch({
      type: ADD_WATERS,
      payload: waters.data,
    });
    return waters;

  } catch(error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error
    });
  }
};

const getWater = id => async dispatch => {
  const apiConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const water = await axios.get(`${defaultURL}/waters/:${id}`, apiConfig);
    dispatch({
      type: GET_WATER,
      payload: water.data,
    });
    return water;

  } catch(error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};

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
    const allData = await axios.get(`${defaultURL}/waters`, apiConfig);
    dispatch({
      type: GET_WATERS,
      payload: allData.data,
    });
    return allData;

  } catch(error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    })
  }
};

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
    return edit;

  } catch(error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};

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
    const remove = await axios.delete(`${defaultURL}/waters/:${id}`, apiConfig);
    dispatch({
      type: DELETE_WATER,
      payload: remove.data,
    });
    return remove;

  } catch(error) {
    dispatch({
      type: WATERS_ERRORS,
      payload: error,
    });
  }
};

export {
  addWaters, getWater, getWaters, updateWater, deleteWater
};
