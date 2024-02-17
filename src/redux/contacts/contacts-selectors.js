import { createSelector } from '@reduxjs/toolkit';

export const selectPhoneBookValue = state => state.phoneBook.items;
export const selectIsLoading = state => state.phoneBook.isLoading;
export const selectError = state => state.phoneBook.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectPhoneBookValue, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
