import { createSelector } from '@reduxjs/toolkit';

const selectContacts  = state => state.contactsState.contacts;
const selectFilter = state => state.contactsState.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
        return contacts; // Повернути всі контакти, якщо фільтр не визначений
      }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);