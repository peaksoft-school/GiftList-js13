import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Wish,
  Holiday,
  Charity,
  UserProfile,
} from "../../../shared/lib/types/userProfile";
import { axiosInstance } from "../../config/axiosInstance";
import { Users } from "../../../shared/lib/types/users";

export const getAllWishes = createAsyncThunk<
  Wish[],
  void,
  { rejectValue: { message: string; code?: string } }
>("user/getAllWishes", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Wish[]>("/api/wish/getAll");
    console.log(response);
    return response.data;
  } catch (error: any) {
    const serializableError = {
      message: error.message,
      code: error.code,
    };
    console.error(serializableError);
    return rejectWithValue(serializableError);
  }
});

export const getAllHolidays = createAsyncThunk<
  Holiday[],
  void,
  { rejectValue: { message: string } }
>("user/getAllHolidays", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Holiday[]>("/api/holiday/getAll");
    console.log("Holiday API response:", response.data);
    return response.data;
  } catch (error: any) {
    const serializableError = {
      message: error.message,
    };
    console.error(serializableError);
    return rejectWithValue(serializableError);
  }
});

export const getAllCharities = createAsyncThunk<
  Charity[],
  void,
  { rejectValue: { message: string; code?: string } }
>("user/getAllCharities", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Charity[]>("/api/charity/getAll");
    // console.log(response);
    return response.data;
  } catch (error: any) {
    const serializableError = {
      message: error.message,
      code: error.code,
    };
    console.error(serializableError);
    return rejectWithValue(serializableError);
  }
});

export const getProfileById = createAsyncThunk<
  UserProfile,
  number,
  { rejectValue: { message: string; code?: string } }
>("user/getProfileById", async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<UserProfile>(
      `/api/friends/getFriendProfile/${id}`
    );
    return response.data;
    
  } catch (error: any) {
    const serializableError = {
      message: error.message,
      code: error.code,
    };
    console.error(serializableError);
    return rejectWithValue(serializableError);
  }
});


// userAdmin

export const getUsersAdmin = createAsyncThunk<
  Users[],
  void,
  { rejectValue: string }
>("users/getUsersAdmin", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Users[]>("/api/friends");
    return response.data;
  } catch (err) {
    const error = err as any;
    return rejectWithValue(error.response?.data || "errorr");
    
  }
});
