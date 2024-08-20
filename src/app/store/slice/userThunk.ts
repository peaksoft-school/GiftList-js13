import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { Gift, Holiday, Charity } from "../../../shared/lib/types/userProfile";

export const getAllWishes = createAsyncThunk<
  Gift[],
  void,
  { rejectValue: { message: string; code?: string } }
>("user/getAllWishes", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Gift[]>("/api/wish/getAll");
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
