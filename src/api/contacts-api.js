// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authInstance from './auth-api';

// const URL = 'https://65c550a4dae2304e92e430a3.mockapi.io/app/contacts';
// authInstance;

const fetchContactsApi = async (_, thunkAPI) => {
  try {
    const responce = await authInstance.get('/contacts');
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

const addContactApi = async (newContact, thunkAPI) => {
  try {
    const response = await authInstance.post('/contacts', newContact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const deleteContactApi = async (Id, thunkAPI) => {
  try {
    const response = await authInstance.delete(`/contacts/${Id}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  fetchContactsApi
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  addContactApi
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  deleteContactApi
);
