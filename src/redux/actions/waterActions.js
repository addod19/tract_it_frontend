/* global id */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_WATERS, GET_WATER, DELETE_WATER, ADD_WATERS, UPDATE_WATER, 
  PROGRESS_CALCULATION, WATERS_ERRORS } from './types';

const defaultURL = 'http://localhost:3000';
const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};
const addWaters = waterData => async dispatch => {
  await axios.post(`${defaultURL}/all_water/create`, waterData, apiConfig)
  .then(response => dispatch({
    type: ADD_WATERS,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: WATERS_ERRORS,
      payload: error,
  }));
};

const getWater = id = async dispatch => {
  await axios.post(`${defaultURL}/show/${id}`, apiConfig)
  .then(response => dispatch({
    type: GET_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: WATERS_ERRORS,
      payload: error,
  }));
};

const getWaters = () => async dispatch => {
  await axios.post(`${defaultURL}/water/index`, apiConfig)
  .then(response => dispatch({
    type: GET_WATERS,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: WATERS_ERRORS,
      payload: error,
  }));
};

const updateWater = (id, water )= async dispatch => {
  await axios.put(`${defaultURL}/update/${id}`, water, apiConfig)
  .then(response => dispatch({
    type: UPDATE_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: WATERS_ERRORS,
      payload: error,
  }));
};

const deleteWater = id => async dispatch => {
  await axios.delete(`${defaultURL}/destroy/${id}`, apiConfig)
  .then(response => dispatch({
    type: DELETE_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: WATERS_ERRORS,
      payload: error,
  }));
};

const progressCal = () => async dispatch => {
  await axios.get(`${defaultURL}/water/progress`, apiConfig)
  .then(response => dispatch({
    type: PROGRESS_CALCULATION,
    payload: response.data.progress,
  }))
  .then(error => dispatch({
      type: WATERS_ERRORS,
      payload: error,
  }));
};

export default { addWaters, getWater, getWaters, updateWater, deleteWater, progressCal };