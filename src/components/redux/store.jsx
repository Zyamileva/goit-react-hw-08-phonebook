import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    phoneBook: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
