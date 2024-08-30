import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../lib/type/TypePrivatRouter";
import { getComplaints } from "./authThunk";

const initialState: UserData = {
  isAuth: false,
  token: "",
  email: "",
  role: "GUEST",
  error: null,
  isLoading: false,
  loading: false,
  complaints: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.role = "GUEST";
      state.token = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComplaints.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getComplaints.fulfilled, (state, action) => {
        state.complaints = action.payload;
        state.loading = false;
      })
      .addCase(getComplaints.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        console.log("error");
      });
  },
});

export const { logout } = authSlice.actions;
