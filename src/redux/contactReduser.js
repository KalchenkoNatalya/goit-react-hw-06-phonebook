const { createSlice } = require('@reduxjs/toolkit');

const initialContactsState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contactsState',
  initialState: initialContactsState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
      // state.contacts = action.payload
    },
    onRemoveContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const filterSlice = createSlice({
  name: 'filterState',
  initialState: initialContactsState,
  reducers: {
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});
//генеруємо екшени
export const { addContacts, onRemoveContacts } = contactsSlice.actions;
export const { filterChange } = filterSlice.actions;
// генеруємо "цех" - редьюсер
export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
