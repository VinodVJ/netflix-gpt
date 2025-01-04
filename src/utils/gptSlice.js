import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice( {
    name: 'gpt',
    initialState: {
        gptSearchEnabled: false,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptSearchEnabled = !state.gptSearchEnabled;
        }
    }
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;