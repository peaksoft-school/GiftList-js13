import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

// Define the User type
interface User {
  giftTitle: string;
  image: string;
  description: string;
  giftLink: string;
  holidayTitle: string;
  dateHoliday: string;
  booked: boolean;
}

export const getUserAll = createAsyncThunk<User[], void, { rejectValue: { message: string; code?: string } }>(
  "user/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<User[]>("/api/wish/getAll");
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
  }
);
