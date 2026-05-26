import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  contactSearchTerm: string;
};

const initialState: State = {
  contactSearchTerm: "",
};

const searchContactSlice = createSlice({
  name: "searchContact",
  initialState,
  reducers: {
    setContactSearchTerm(state, action: PayloadAction<string>) {
      state.contactSearchTerm = action.payload;
    },
    resetContactSearchTerm(state) {
      state.contactSearchTerm = "";
    },
  },
});

export const { setContactSearchTerm, resetContactSearchTerm } =
  searchContactSlice.actions;
export default searchContactSlice.reducer;
