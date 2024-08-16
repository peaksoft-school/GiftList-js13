import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
