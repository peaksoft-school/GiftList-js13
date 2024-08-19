import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { Gift, Holiday } from "../../../shared/lib/types/userProfile";

// Define the User type

export const getUserAll = createAsyncThunk<
  Gift[],
  void,
  { rejectValue: { message: string; code?: string } }
>("user/getAll", async (_, { rejectWithValue }) => {
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

export const getHoliday = createAsyncThunk<Holiday[]>(
  "user/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/adhiloy/getAll");
      console.log("holiday api");
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
