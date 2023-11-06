// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    language: 'jp'
};

// ==============================|| SLICE - MENU ||============================== //

const local = createSlice({
    name: 'local',
    initialState,
    reducers: {
        getLocal(state, action) {
            state.language = action.payload;
        },
        clearLocal(state) {
            state.language = null;
        }
    }
});

export default local.reducer;

export const { getLocal, clearLocal } = local.actions;
