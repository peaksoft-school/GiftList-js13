import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
