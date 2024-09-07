import { createSlice } from "@reduxjs/toolkit";
import {
  getAllWishes,
  getAllHolidays,
  getAllCharities,
  getProfileById,
  getUsersAdmin,
  getAllMyFriends,
} from "./userThunk";
import {
  Wish,
  Holiday,
  Charity,
  UserProfile,
} from "../../../shared/lib/types/userProfile";
import { Users } from "../../../shared/lib/types/users";
import { Friend } from "../../../shared/lib/types/CardType";

export interface UserState {
  wish: Wish[];
  holidays: Holiday[];
  charities: Charity[];
  users: Users[];
  profile: UserProfile | null;
  friends: Friend[] | null;
  isLoading: boolean;
  isLoadingUsers: boolean;
  error: string | null;
}

const initialState: UserState = {
  wish: [],
  holidays: [],
  charities: [],
  profile: null,
  friends:[],
  users: [],
  isLoading: true,
  isLoadingUsers: false,
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
        state.error = action.payload ? action.payload : "Something went wrong";
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
        state.error = action.payload ? action.payload : "Something went wrong";
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
        state.error = action.payload ? action.payload : "Something went wrong";
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
        state.error = action.payload ? action.payload : "Something went wrong";
      })
      .addCase(getUsersAdmin.pending, (state) => {
        state.isLoadingUsers = true;
        state.error = null;
      })
      .addCase(getUsersAdmin.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoadingUsers = false;
      })
      .addCase(getUsersAdmin.rejected, (state, action) => {
        state.isLoadingUsers = false;
        state.error = action.payload ? action.payload : "Что-то пошло не так";
      })
      .addCase(getAllMyFriends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMyFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllMyFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : "Не удалось загрузить список друзей";
      });
  },
});
