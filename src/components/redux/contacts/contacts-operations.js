import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const signupApi = async (body, { rejectWithValue }) => {
  try {
    console.log('body', body);
    const { data } = await authInstance.post('/users/signup', body);
    console.log('responce', data);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const signup = createAsyncThunk('auth/signup', signupApi);
