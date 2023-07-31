const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filterState',
  initialState: initialFilterState,
  reducers: {
    fromfilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

//генеруємо екшени
export const { fromfilter } = filterSlice.actions;

// генеруємо "цех" - редьюсер
export const filterReducer = filterSlice.reducer;
