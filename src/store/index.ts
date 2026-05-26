import { configureStore } from "@reduxjs/toolkit";
import searchContactReducer from "../features/contact/presentation/state/searchContact.slices";

export const store = configureStore({
  reducer: {
    searchContact: searchContactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
