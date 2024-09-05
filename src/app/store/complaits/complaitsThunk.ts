import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getComplaints = createAsyncThunk(
  "complaits/getComplaints",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "/api/complains/getAllComplainWishes"
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
