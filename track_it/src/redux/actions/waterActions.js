import axios from 'axios';
import { GET_ALL_WATER, GET_WATER, DELETE_WATER, ADD_ALL_WATER, UPDATE_WATER, 
  PROGRESS_CALCULATION, ALL_WATER_ERRORS } from './types';

const defaultURL = 'http://localhost:3000';
const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};
const addAllWater = waterData => async dispatch => {
  await axios.post(`${defaultURL}/all_water/create`, waterDate, apiConfig)
  .then(response => dispatch({
    type: ADD_ALL_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: ALL_WATER_ERRORS,
      payload: error,
  }));
};

const getWater = id = async dispatch => {
  await axios.post(`${defaultURL}/SHOW/${id}`, apiConfig)
  .then(response => dispatch({
    type: GET_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: ALL_WATER_ERRORS,
      payload: error,
  }));
};

const getAllWater = () => async dispatch => {
  await axios.post(`${defaultURL}/water/index`, apiConfig)
  .then(response => dispatch({
    type: GET_ALL_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: ALL_WATER_ERRORS,
      payload: error,
  }));
};

const updateWater = id = async dispatch => {
  await axios.put(`${defaultURL}/update/${id}`, apiConfig)
  .then(response => dispatch({
    type: UPDATE_WATER,
    payload: response.data,
  }))
  .then(error => dispatch({
      type: ALL_WATER_ERRORS,
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
      type: ALL_WATER_ERRORS,
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
      type: ALL_WATER_ERRORS,
      payload: error,
  }));
};

export default { addAllWater, getWater, getAllWater, updateWater, deleteWater, progressCal };