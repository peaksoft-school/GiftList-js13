import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
