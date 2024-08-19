import { createSlice } from "@reduxjs/toolkit";
import { getUserAll } from "./userThunk";

interface User {
  giftTitle: string;
  image: string;
  description: string;
  giftLink: string;
  holidayTitle: string;
  dateHoliday: string;
  booked: boolean;
}

interface UserState {
  user: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: [],
  isLoading: true,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAll.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserAll.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : 'Something went wrong';
      });
  },
});
