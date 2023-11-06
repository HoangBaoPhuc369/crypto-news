// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  user: null,
};

// ==============================|| SLICE - MENU ||============================== //

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export default login.reducer;

export const { getUser, clearUser } = login.actions;
