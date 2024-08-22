import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWishes,
  getAllHolidays,
  getAllCharities,
  getProfileById,
} from "./userThunk";
import {
  Gift,
  Holiday,
  Charity,
  UserProfile,
} from "../../../shared/lib/types/userProfile";

export interface UserState {
  wish: Gift[];
  holidays: Holiday[];
  charities: Charity[];
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  wish: [],
  holidays: [],
  charities: [],
  profile: null,
  isLoading: true,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllWishes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllWishes.fulfilled, (state, action) => {
        state.wish = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllWishes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      })

      .addCase(getAllHolidays.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllHolidays.fulfilled, (state, action) => {
        state.holidays = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllHolidays.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      })

      .addCase(getAllCharities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCharities.fulfilled, (state, action) => {
        state.charities = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCharities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      })
      //
      .addCase(getProfileById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProfileById.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isLoading = false;
      })
      .addCase(getProfileById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Что-то пошло не так";
      });
  },
});
