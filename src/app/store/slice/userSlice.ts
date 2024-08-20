import { createSlice } from "@reduxjs/toolkit";
import { getAllWishes, getAllHolidays, getAllCharities } from "./userThunk";
import { Gift, Holiday, Charity } from "../../../shared/lib/types/userProfile";

export interface UserState {
  wishes: Gift[];
  holidays: Holiday[];
  charities: Charity[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  wishes: [],
  holidays: [],
  charities: [],
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
        state.wishes = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllWishes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : "Something went wrong";
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
        state.error = action.payload ? action.payload.message : "Something went wrong";
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
        state.error = action.payload ? action.payload.message : "Something went wrong";
      });
  },
});
