import { createSlice } from "@reduxjs/toolkit";
import { logoutHandler, signIn } from "./auth.thunk";

const getInitialState = () => {
  const data = localStorage.getItem("GIFTLIST");

  if (data) {
    const parsedData = JSON.parse(data);
    return {
      token: parsedData.token,
      role: parsedData.role,
      email: parsedData.email,
      isAuth: true,
      firstName: parsedData.firstName,
      lastName: parsedData.lastName,
      isLoading: false,
      error: "",
    };
  }

  return {
    token: "",
    role: "GUEST",
    email: "",
    isAuth: false,
    firstName: "",
    lastName: "",
    isLoading: false,
    error: "",
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutHandler.fulfilled, () => {
      return getInitialState();
    });
    builder.addCase(signIn.fulfilled, (state, aciton) => {
      state.email = aciton.payload.email;
      state.firstName = aciton.payload.firstName;
      state.lastName = aciton.payload.lastName;
      state.role = aciton.payload.role;
      state.token = aciton.payload.token;
      state.isAuth = true;
    });
  },
});
