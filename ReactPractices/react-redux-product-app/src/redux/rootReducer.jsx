import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./store";


const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;
