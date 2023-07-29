import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './contactReduser';

export const store = configureStore({
  reducer: {
    contactsState: contactsReducer,
    filterState: filterReducer,
  },
});
