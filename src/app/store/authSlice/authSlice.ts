import { createSlice } from "@reduxjs/toolkit";
import {
  authChangePassword,
  authForgotPassword,
  authSignUp,
  authSingIn,
  googleAuthFirbase,
} from "./authThunk";
import { UserData } from "../../lib/type/TypePrivatRouter";

const initialState: UserData = {
  isAuth: false,
  token: "",
  email: "",
  role: "GUEST",
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isAuth = false;
      })
      .addCase(authSignUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.role = payload.role;
        state.email = payload.email;
      })
      .addCase(authSignUp.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(authSingIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authSingIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.role = payload.role;
        state.email = payload.email;
      })
      .addCase(authSingIn.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(googleAuthFirbase.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(googleAuthFirbase.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.role = payload.role;
        state.email = payload.email;
      })
      .addCase(googleAuthFirbase.rejected, (state) => {
        state.isLoading = false;
        // state.error = payload.message;
      });

    builder
      .addCase(authForgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authForgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(authForgotPassword.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(authChangePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authChangePassword.fulfilled, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authChangePassword.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
