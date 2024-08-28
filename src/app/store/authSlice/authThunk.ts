import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import {
  TypeChangePassword,
  TypeEmail,
  TypeGoogleAuth,
  TypeNewDate,
} from "../../lib/type/TypeAuth";

export const authSignUp = createAsyncThunk(
  "auth/postAuthUp",
  async ({ newDate, navigate }: TypeNewDate, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/signUp`, newDate);
      navigate("/");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const googleAuthFirbase = createAsyncThunk(
  "auth/googleAuthFirbase",
  async ({ tokenId, navigate }: TypeGoogleAuth, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/auth/google?tokenId=${tokenId}`
      );

      navigate("/");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSingIn = createAsyncThunk(
  "authIn/postAuthIn",
  async ({ newDate, navigate }: TypeNewDate, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/signIn`, newDate);
      navigate("/");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authForgotPassword = createAsyncThunk(
  "authForgotPassword/postAuthForgotPassword",
  async ({ email }: TypeEmail, { rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/forgotPassword/sendResetEmail?email=${email}`
      );
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authChangePassword = createAsyncThunk(
  "authChangePassword/postauthChangePassword",
  async ({ newDate }: TypeChangePassword, { rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/forgotPassword/updateToNewPassword`,
        newDate
      );
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
