import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
    resetCounter() {
      return initialState;
    },
  },
});

export const { setCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
