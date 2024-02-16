import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './filter/filter-slice';
import contactsSlice from './contacts/contacts-slice';
import authSlice from './auth/auth-slice';

const rootReducer = combineReducers({
  phoneBook: contactsSlice,
  filter: filterSlice,
  auth: authSlice,
});

export default rootReducer;
