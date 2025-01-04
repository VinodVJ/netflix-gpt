import { configureStore } from "@reduxjs/toolkit";
import gptSlice from "./gptSlice";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

const appStore = configureStore( {
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        gpt: gptSlice
    }
})

export default appStore;