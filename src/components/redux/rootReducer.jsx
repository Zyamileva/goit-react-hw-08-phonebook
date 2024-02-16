import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import contactsSlice from './contactsSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  phoneBook: contactsSlice,
  filter: filterSlice,
  auth: authSlice,
});

export default rootReducer;
