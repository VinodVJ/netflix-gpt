import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

const appStore = configureStore( {
    reducer: {
        user: userSlice,
        movies: moviesSlice
    }
})

export default appStore;