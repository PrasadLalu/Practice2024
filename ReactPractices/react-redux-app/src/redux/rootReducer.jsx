import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./store";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default store;
