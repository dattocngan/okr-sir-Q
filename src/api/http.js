import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1/';

// Authentication

export const setHeader = (token) => {
  axios.defaults.headers.common['userId'] = token;
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
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('name', response.data.fullName);
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
};

export const createObjectives = async (data) => {
  try {
    const response = await axios.post('objectives', data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getObjective = async (id) => {
  try {
    const response = await axios.get(`objectives/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateObjective = async (id, data) => {
  try {
    const response = await axios.put(`objectives/${id}`, data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteObjective = async (id) => {
  try {
    const response = await axios.delete(`objectives/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

// Edit profile

export const getProfile = async () => {
  try {
    const response = await axios.get('/auth/user');
    return response;
  } catch (err) {
    return err.response;
  }
};

export const editProfile = async (data) => {
  try {
    const response = await axios.put('/auth/user', data);
    return response;
  } catch (err) {
    return err.response;
  }
};
