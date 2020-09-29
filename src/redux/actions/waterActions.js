/* global id */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_WATERS, GET_WATER, DELETE_WATER, ADD_WATERS, UPDATE_WATER,
  PROGRESS_CALCULATION, WATERS_ERRORS,
} from './types';

const defaultURL = 'http://localhost:3000';
const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};
const addWaters = waterData => async dispatch => {
  try {
    const waters = await axios.post(`${defaultURL}/all_water/create`, waterData, apiConfig);
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
  try {
    const water = await axios.post(`${defaultURL}/show/${id}`, apiConfig);
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
  try {
    const allData = await axios.post(`${defaultURL}/water/index`, apiConfig);
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
  try {
    const edit = await axios.put(`${defaultURL}/update/${id}`, water, apiConfig);
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
  try {
    const remove = await axios.delete(`${defaultURL}/destroy/${id}`, apiConfig);
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

const progressCal = () => async dispatch => {
  try {
    const prog = await axios.get(`${defaultURL}/water/progress`, apiConfig);
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

export {
  addWaters, getWater, getWaters, updateWater, deleteWater, progressCal
};
