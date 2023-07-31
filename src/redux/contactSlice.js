const { createSlice } = require('@reduxjs/toolkit');

const initialContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contactsState',
  initialState: initialContactsState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

//генеруємо екшени
export const { addContacts, deleteContacts } = contactsSlice.actions;

// генеруємо "цех" - редьюсер
export const contactsReducer = contactsSlice.reducer;
