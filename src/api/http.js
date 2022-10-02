import axios from 'axios';

axios.defaults.baseURL = 'https://teamweb2-1.herokuapp.com/api/v1/';

// Authentication

export const setHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const register = async (value) => {
  try {
    const response = await axios.post('auth/signup', value);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const login = async (value) => {
  try {
    const response = await axios.post('auth/login', value);
    localStorage.setItem('token', response.data.token);
    return response;
  } catch (err) {
    return err.response;
  }
};

// Objective

export const getAllObjectives = async () => {
  try {
    const response = await axios.get('objectives');
    return response;
  } catch (err) {
    return err.response;
  }
}

export const createObjectives = async (data) => {
  try {
    const response = await axios.post('objectives', data);
    return response;
  } catch (err) {
    return err.response;
  }
}

export const getObjective = async (id) => {
  try {
    const response = await axios.get(`objectives/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}