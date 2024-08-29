import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { Newsletter } from "../../../shared/lib/types/newsLetters";

export const fetchNewLetters = createAsyncThunk<
  Newsletter[],
  void,
  { rejectValue: string }
>("newLetters/fetchNewLetters", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Newsletter[]>(
      "/api/mailingList/getAllMails"
    );
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const sendNewsletter = createAsyncThunk<
  void,
  FormData,
  { rejectValue: string }
>("newLetters/sendNewsletter", async (formData, { rejectWithValue }) => {
  try {
    await axiosInstance.post("/api/mailingList/sendMail", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Произошла ошибка");
  }
});
