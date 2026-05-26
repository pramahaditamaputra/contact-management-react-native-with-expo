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
  },
});

export const { setContactSearchTerm } = searchContactSlice.actions;
export default searchContactSlice.reducer;
