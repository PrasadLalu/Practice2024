import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 100,
}
export const counterSlice = createSlice({
  name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.value += 1;
        },
        decrease: (state) => {
            state.value -= 1;
        }
  }
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
