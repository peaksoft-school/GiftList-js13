import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://956e80c00395cec2.mokky.dev";

interface AuthPayload {
  newDate: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password: string;
    repeatPassword?: string;
  };
  // navigate: (path: string) => void;
}

export const authSignUp = createAsyncThunk(
  "auth/postAuth",
  async ({ newDate }: AuthPayload, { rejectWithValue }) => {
    console.log(newDate);
    try {
      await axios.post(`${BASE_URL}/users`, newDate);

      // navigate("/signIn");
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSingIn = createAsyncThunk(
  "authIn/postauthIn",
  async ({ newDate }: AuthPayload, { rejectWithValue }) => {
    try {
      await axios.post(`${BASE_URL}/auth`, newDate);
      // navigate("/homePage");
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authForgotPassword = createAsyncThunk(
  "authIn/postauthIn",
  async ({ newDate }: AuthPayload, { rejectWithValue }) => {
    try {
      console.log(newDate);

      // await axios.post(`${BASE_URL}/auth`, newDate);
      // navigate("/homePage");
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
